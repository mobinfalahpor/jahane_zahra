import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';

const PHOTO_EXT_RE = /\.(jpe?g|png|webp|avif)$/i;
const AUDIO_EXT_RE = /\.(mp3|wav|ogg|m4a|aac|flac|opus|webm)$/i;
const TEMP_FILE_RE = /\.(tmp|temp|part|crdownload|swp|bak)$/i;

interface DiscoveredAudioManifestEntry {
  id: string;
  filename: string;
  url: string;
  title: string;
  artist: string;
  cover: string;
  format: string;
}

function encodeRelativePath(relPath: string): string {
  return relPath
    .split('/')
    .filter(Boolean)
    .map((segment) => encodeURIComponent(segment))
    .join('/');
}

function cleanTagText(raw: string): string {
  return raw
    .replace(/\u0000/g, '')
    .replace(/^\uFEFF/, '')
    .replace(/\s*[؛;]+\s*$/g, '')
    .trim();
}

function decodeId3Text(enc: number, raw: Buffer): string {
  if (raw.length === 0) return '';
  let text = '';
  if (enc === 0) {
    text = raw.toString('latin1');
  } else if (enc === 1) {
    if (raw.length >= 2 && raw[0] === 0xfe && raw[1] === 0xff) {
      const swapped = Buffer.from(raw.subarray(2));
      for (let i = 0; i + 1 < swapped.length; i += 2) {
        const tmp = swapped[i];
        swapped[i] = swapped[i + 1];
        swapped[i + 1] = tmp;
      }
      text = swapped.toString('utf16le');
    } else if (raw.length >= 2 && raw[0] === 0xff && raw[1] === 0xfe) {
      text = raw.subarray(2).toString('utf16le');
    } else {
      text = raw.toString('utf16le');
    }
  } else if (enc === 2) {
    const swapped = Buffer.from(raw);
    for (let i = 0; i + 1 < swapped.length; i += 2) {
      const tmp = swapped[i];
      swapped[i] = swapped[i + 1];
      swapped[i + 1] = tmp;
    }
    text = swapped.toString('utf16le');
  } else {
    text = raw.toString('utf8');
  }
  return cleanTagText(text);
}

function readSynchsafe(buf: Buffer, offset: number): number {
  return (
    ((buf[offset] & 0x7f) << 21) |
    ((buf[offset + 1] & 0x7f) << 14) |
    ((buf[offset + 2] & 0x7f) << 7) |
    (buf[offset + 3] & 0x7f)
  );
}

function extractMp3Id3Metadata(filePath: string): {title?: string; artist?: string} {
  let fd: number | null = null;
  try {
    const stat = fs.statSync(filePath);
    if (stat.size < 10) return {};
    fd = fs.openSync(filePath, 'r');
    const head = Buffer.alloc(10);
    fs.readSync(fd, head, 0, 10, 0);

    let title = '';
    let artist = '';
    let band = '';

    if (head.toString('ascii', 0, 3) === 'ID3') {
      const ver = head[3];
      const flags = head[5];
      const tagSize = readSynchsafe(head, 6);
      const readLen = Math.min(stat.size - 10, tagSize, 2 * 1024 * 1024);
      if (readLen > 0) {
        const body = Buffer.alloc(readLen);
        fs.readSync(fd, body, 0, readLen, 10);
        let pos = 0;
        if ((ver === 3 || ver === 4) && (flags & 0x40) !== 0 && readLen >= 4) {
          const extSize = ver === 4 ? readSynchsafe(body, 0) : body.readUInt32BE(0) + 4;
          if (extSize > 0 && extSize < readLen) pos = extSize;
        }
        if (ver === 2) {
          while (pos + 6 <= readLen) {
            const fid = body.toString('ascii', pos, pos + 3);
            if (!/^[A-Z0-9]{3}$/.test(fid)) break;
            const fsize = (body[pos + 3] << 16) | (body[pos + 4] << 8) | body[pos + 5];
            if (fsize <= 0 || pos + 6 + fsize > readLen) break;
            if (fid === 'TT2' || fid === 'TP1' || fid === 'TP2') {
              const val = decodeId3Text(body[pos + 6], body.subarray(pos + 7, pos + 6 + fsize));
              if (fid === 'TT2' && val) title = val;
              if (fid === 'TP1' && val) artist = val;
              if (fid === 'TP2' && val) band = val;
            }
            pos += 6 + fsize;
          }
        } else if (ver === 3 || ver === 4) {
          while (pos + 10 <= readLen) {
            const fid = body.toString('ascii', pos, pos + 4);
            if (!/^[A-Z0-9]{4}$/.test(fid)) break;
            const fsize = ver === 4 ? readSynchsafe(body, pos + 4) : body.readUInt32BE(pos + 4);
            if (fsize <= 0 || pos + 10 + fsize > readLen) break;
            if (fid === 'TIT2' || fid === 'TPE1' || fid === 'TPE2') {
              const val = decodeId3Text(body[pos + 10], body.subarray(pos + 11, pos + 10 + fsize));
              if (fid === 'TIT2' && val) title = val;
              if (fid === 'TPE1' && val) artist = val;
              if (fid === 'TPE2' && val) band = val;
            }
            pos += 10 + fsize;
          }
        }
      }
    }

    if ((!title || !artist) && stat.size >= 128) {
      const v1 = Buffer.alloc(128);
      fs.readSync(fd, v1, 0, 128, stat.size - 128);
      if (v1.toString('ascii', 0, 3) === 'TAG') {
        const v1Title = cleanTagText(v1.toString('latin1', 3, 33));
        const v1Artist = cleanTagText(v1.toString('latin1', 33, 63));
        if (!title && v1Title && !/\?{2,}/.test(v1Title)) title = v1Title;
        if (!artist && v1Artist && !/\?{2,}/.test(v1Artist)) artist = v1Artist;
      }
    }

    return {
      title: title || undefined,
      artist: artist || band || undefined,
    };
  } catch {
    return {};
  } finally {
    if (fd !== null) {
      try {
        fs.closeSync(fd);
      } catch {
        // Ignore
      }
    }
  }
}

function makeTrackId(filename: string, usedIds: Set<string>): string {
  const stem = filename.replace(/\.[^/.]+$/, '');
  let base = stem
    .toLowerCase()
    .replace(/[^a-z0-9\u0600-\u06FF]+/gi, '-')
    .replace(/^-+|-+$/g, '');
  if (!base) {
    base = 'track';
  }
  let candidate = base;
  let counter = 2;
  while (usedIds.has(candidate)) {
    candidate = `${base}-${counter++}`;
  }
  usedIds.add(candidate);
  return candidate;
}

function isReadableHumanStem(stem: string): boolean {
  const cleaned = stem.replace(/[_\-\s.]+/g, ' ').trim();
  if (!cleaned) return false;
  // Reject purely numeric / timestamp / Telegram-like numeric IDs (e.g. "4 5985478187621023846")
  if (/^[\d\s]+$/.test(cleaned)) return false;
  // Reject strings dominated by long numeric/hex tokens
  const tokens = cleaned.split(/\s+/);
  const meaningfulWords = tokens.filter((t) => /[a-zA-Z\u0600-\u06FF]{2,}/.test(t));
  if (meaningfulWords.length === 0) return false;
  return true;
}

function humanizeFilename(stem: string, fallbackIndex: number): string {
  const cleaned = stem
    .replace(/^\d{1,3}[\s._-]+(?=[a-zA-Z\u0600-\u06FF])/, '')
    .replace(/[_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (isReadableHumanStem(cleaned)) {
    return cleaned;
  }
  return `قطعه موسیقی ${fallbackIndex}`;
}

function scanAudioTracks(rootDir: string): DiscoveredAudioManifestEntry[] {
  const audioDir = path.resolve(rootDir, 'public/audio');
  if (!fs.existsSync(audioDir)) return [];

  const coversDir = path.resolve(audioDir, 'covers');
  const coverFiles: string[] = [];
  if (fs.existsSync(coversDir)) {
    for (const entry of fs.readdirSync(coversDir, {withFileTypes: true})) {
      if (!entry.isFile()) continue;
      if (entry.name.startsWith('.') || entry.name.startsWith('~') || TEMP_FILE_RE.test(entry.name)) {
        continue;
      }
      if (!PHOTO_EXT_RE.test(entry.name)) continue;
      coverFiles.push(entry.name);
    }
    coverFiles.sort((a, b) => a.localeCompare(b, 'en', {numeric: true, sensitivity: 'base'}));
  }

  const defaultCover =
    coverFiles.includes('rainy-night.jpg')
      ? 'audio/covers/rainy-night.jpg'
      : coverFiles[0]
        ? `audio/covers/${coverFiles[0]}`
        : '';

  const coverByNormStem = new Map<string, string>();
  for (const cov of coverFiles) {
    const norm = cov
      .replace(/\.[^/.]+$/, '')
      .toLowerCase()
      .replace(/[^a-z0-9\u0600-\u06FF]+/gi, '');
    if (norm) coverByNormStem.set(norm, `audio/covers/${cov}`);
  }

  const seenNames = new Set<string>();
  const entries = fs.readdirSync(audioDir, {withFileTypes: true});
  const filenames: string[] = [];
  for (const entry of entries) {
    if (!entry.isFile()) continue;
    if (entry.name.startsWith('.') || entry.name.startsWith('~') || TEMP_FILE_RE.test(entry.name)) {
      continue;
    }
    if (!AUDIO_EXT_RE.test(entry.name)) continue;
    if (seenNames.has(entry.name)) continue;
    seenNames.add(entry.name);
    filenames.push(entry.name);
  }

  filenames.sort((a, b) => a.localeCompare(b, 'en', {numeric: true, sensitivity: 'base'}));

  const usedIds = new Set<string>();
  return filenames.map((filename, idx) => {
    const fullPath = path.resolve(audioDir, filename);
    const ext = path.extname(filename).slice(1).toLowerCase();
    const stem = filename.replace(/\.[^/.]+$/, '');
    const normStem = stem.toLowerCase().replace(/[^a-z0-9\u0600-\u06FF]+/gi, '');
    const meta = ext === 'mp3' ? extractMp3Id3Metadata(fullPath) : {};

    const matchedCover = coverByNormStem.get(normStem) || defaultCover;
    const title = meta.title || humanizeFilename(stem, idx + 1);
    const artist = meta.artist || '';

    return {
      id: makeTrackId(filename, usedIds),
      filename,
      url: encodeRelativePath(`audio/${filename}`),
      title,
      artist,
      cover: matchedCover ? encodeRelativePath(matchedCover) : '',
      format: ext,
    };
  });
}

function audioManifestPlugin(): Plugin {
  const virtualId = 'virtual:audio-tracks';
  const resolvedId = '\0' + virtualId;
  let rootDir = __dirname;

  const writeManifest = () => {
    const tracks = scanAudioTracks(rootDir);
    const outPath = path.resolve(rootDir, 'public/audio/audio-manifest.json');
    fs.mkdirSync(path.dirname(outPath), {recursive: true});
    const nextJson = JSON.stringify({tracks}, null, 2);
    const prevJson = fs.existsSync(outPath) ? fs.readFileSync(outPath, 'utf8') : '';
    if (prevJson !== nextJson) {
      fs.writeFileSync(outPath, nextJson);
    }
    return tracks;
  };

  return {
    name: 'audio-tracks-manifest',
    configResolved(config) {
      rootDir = config.root;
    },
    buildStart() {
      writeManifest();
    },
    configureServer(server) {
      const audioDir = path.resolve(rootDir, 'public/audio');
      if (fs.existsSync(audioDir)) {
        server.watcher.add(audioDir);
      }
      const refreshIfAudio = (filePath: string) => {
        const normalized = path.resolve(filePath);
        if (path.dirname(normalized) !== audioDir) return;
        const baseName = path.basename(normalized);
        if (baseName.startsWith('.') || baseName.startsWith('~') || TEMP_FILE_RE.test(baseName)) {
          return;
        }
        if (!AUDIO_EXT_RE.test(baseName)) return;
        writeManifest();
        const mod = server.moduleGraph.getModuleById(resolvedId);
        if (mod) {
          server.moduleGraph.invalidateModule(mod);
        }
      };
      server.watcher.on('add', refreshIfAudio);
      server.watcher.on('unlink', refreshIfAudio);
      server.watcher.on('change', refreshIfAudio);
    },
    resolveId(id) {
      if (id === virtualId) return resolvedId;
    },
    load(id) {
      if (id === resolvedId) {
        const tracks = writeManifest();
        return `export default ${JSON.stringify(tracks)};`;
      }
    },
  };
}

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
      audioManifestPlugin(),
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
