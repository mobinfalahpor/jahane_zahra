import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';

const PHOTO_EXT_RE = /\.(jpe?g|png|webp|avif)$/i;

function scanMuseumPhotos(rootDir: string): string[] {
  const photosDir = path.resolve(rootDir, 'public/museum');
  if (!fs.existsSync(photosDir)) return [];
  const seen = new Set<string>();
  const entries = fs.readdirSync(photosDir, {withFileTypes: true});
  for (const entry of entries) {
    if (!entry.isFile()) continue;
    if (!PHOTO_EXT_RE.test(entry.name)) continue;
    seen.add(entry.name);
  }
  return Array.from(seen).sort((a, b) =>
    a.localeCompare(b, 'en', {numeric: true, sensitivity: 'base'}),
  );
}

function museumManifestPlugin(): Plugin {
  const virtualId = 'virtual:museum-photos';
  const resolvedId = '\0' + virtualId;
  let rootDir = __dirname;

  const writeManifest = () => {
    const photos = scanMuseumPhotos(rootDir);
    const outPath = path.resolve(rootDir, 'public/museum/photos-manifest.json');
    fs.mkdirSync(path.dirname(outPath), {recursive: true});
    const nextJson = JSON.stringify({photos}, null, 2);
    const prevJson = fs.existsSync(outPath) ? fs.readFileSync(outPath, 'utf8') : '';
    if (prevJson !== nextJson) {
      fs.writeFileSync(outPath, nextJson);
    }
    return photos;
  };

  return {
    name: 'museum-photos-manifest',
    configResolved(config) {
      rootDir = config.root;
    },
    buildStart() {
      writeManifest();
    },
    configureServer(server) {
      const photosDir = path.resolve(rootDir, 'public/museum');
      if (fs.existsSync(photosDir)) {
        server.watcher.add(photosDir);
      }
      const refreshIfPhoto = (filePath: string) => {
        const normalized = path.resolve(filePath);
        if (path.dirname(normalized) !== photosDir) return;
        if (!PHOTO_EXT_RE.test(path.basename(normalized))) return;
        writeManifest();
        const mod = server.moduleGraph.getModuleById(resolvedId);
        if (mod) {
          server.moduleGraph.invalidateModule(mod);
        }
      };
      server.watcher.on('add', refreshIfPhoto);
      server.watcher.on('unlink', refreshIfPhoto);
    },
    resolveId(id) {
      if (id === virtualId) return resolvedId;
    },
    load(id) {
      if (id === resolvedId) {
        const photos = writeManifest();
        return `export default ${JSON.stringify(photos)};`;
      }
    },
  };
}

function devEntryHtmlPlugin(): Plugin {
  let rootDir = __dirname;
  return {
    name: 'dev-entry-html',
    apply: 'serve',
    configResolved(config) {
      rootDir = config.root;
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const rawUrl = req.url || '/';
        const pathname = rawUrl.split('?')[0];
        if (req.method === 'GET' && (pathname === '/' || pathname === '/index.html')) {
          try {
            const entryPath = path.resolve(rootDir, 'entry.html');
            if (fs.existsSync(entryPath)) {
              const rawHtml = fs.readFileSync(entryPath, 'utf8');
              const transformed = await server.transformIndexHtml(rawUrl, rawHtml);
              res.statusCode = 200;
              res.setHeader('Content-Type', 'text/html; charset=utf-8');
              res.end(transformed);
              return;
            }
          } catch (err) {
            return next(err as Error);
          }
        }
        next();
      });
    },
  };
}

function githubPagesOutputPlugin(): Plugin {
  let rootDir = __dirname;
  let outDir = path.resolve(__dirname, 'dist');

  return {
    name: 'github-pages-output',
    apply: 'build',
    configResolved(config) {
      rootDir = config.root;
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle(error?: Error): void {
      if (error || !fs.existsSync(outDir)) {
        return;
      }

      const builtEntry = path.resolve(outDir, 'entry.html');
      const distIndex = path.resolve(outDir, 'index.html');
      if (fs.existsSync(builtEntry)) {
        fs.copyFileSync(builtEntry, distIndex);
        fs.unlinkSync(builtEntry);
      }

      const srcAssets = path.resolve(rootDir, 'src/assets');
      const distSrcAssets = path.resolve(outDir, 'src/assets');
      if (fs.existsSync(srcAssets)) {
        fs.cpSync(srcAssets, distSrcAssets, {recursive: true, force: true});
      }

      if (outDir === path.resolve(rootDir, 'dist')) {
        const filesToMirror = ['index.html', '404.html', '.nojekyll'];
        for (const fileName of filesToMirror) {
          const fromFile = path.resolve(outDir, fileName);
          const toFile = path.resolve(rootDir, fileName);
          if (fs.existsSync(fromFile)) {
            fs.copyFileSync(fromFile, toFile);
          }
        }

        const dirsToMirror = ['assets', 'audio', 'museum'];
        for (const dirName of dirsToMirror) {
          const fromDir = path.resolve(outDir, dirName);
          const toDir = path.resolve(rootDir, dirName);
          if (fs.existsSync(fromDir)) {
            fs.rmSync(toDir, {recursive: true, force: true});
            fs.cpSync(fromDir, toDir, {recursive: true, force: true});
          }
        }
      }
    },
  };
}

export default defineConfig(({command}) => {
  return {
    base: process.env.VITE_BASE_PATH || (command === 'build' ? './' : '/'),
    plugins: [
      react(),
      tailwindcss(),
      museumManifestPlugin(),
      devEntryHtmlPlugin(),
      githubPagesOutputPlugin(),
    ],
    build: {
      rollupOptions: {
        input: path.resolve(__dirname, 'entry.html'),
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/three')) return 'three-core';
            if (id.includes('node_modules/@react-three')) return 'r3f-core';
          },
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch:
        process.env.DISABLE_HMR === 'true'
          ? null
          : {
              ignored: [
                path.resolve(__dirname, 'dist'),
                path.resolve(__dirname, 'assets'),
                path.resolve(__dirname, 'audio'),
                path.resolve(__dirname, 'museum'),
              ],
            },
    },
  };
});
