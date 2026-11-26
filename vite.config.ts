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

function copyUnbundledSrcAssetsPlugin(): Plugin {
  let rootDir = __dirname;
  let outDir = path.resolve(__dirname, 'dist');

  return {
    name: 'copy-unbundled-src-assets',
    apply: 'build',
    configResolved(config) {
      rootDir = config.root;
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle(error?: Error): void {
      if (error || !fs.existsSync(outDir)) {
        return;
      }
      const srcAssets = path.resolve(rootDir, 'src/assets');
      const distSrcAssets = path.resolve(outDir, 'src/assets');
      if (fs.existsSync(srcAssets)) {
        fs.cpSync(srcAssets, distSrcAssets, {recursive: true, force: true});
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
      copyUnbundledSrcAssetsPlugin(),
    ],
    build: {
      rollupOptions: {
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
      allowedHosts: true,
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
