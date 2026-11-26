import discoveredAudioTracks, {
  type DiscoveredAudioManifestTrack,
} from 'virtual:audio-tracks';

export type { DiscoveredAudioManifestTrack };

export interface MusicTrackConfig {
  id: string;
  /** نام دقیق فایل صوتی در پوشه public/audio/ */
  filename: string;
  /** عنوان نمایشی آهنگ */
  title: string;
  /** نام خواننده یا نوازنده (در صورت موجود بودن در متادیتای معتبر) */
  artist: string;
  /** مسیر تصویر کاور نسبت به پوشه public (مثلاً audio/covers/rainy-night.jpg) */
  cover: string;
  /** فرمت فایل صوتی (مثلاً mp3 یا wav) */
  format?: string;
  /** توضیح کوتاه اختیاری */
  description?: string;
  /** رنگ تم صفحه وینیل */
  accentColor?: string;
}

const CURATED_TRACK_METADATA: Record<string, Partial<MusicTrackConfig>> = {
  'rainy-night-dream.wav': {
    id: 'rainy-night-dream',
    title: 'شب بارانی کنار تو',
    artist: 'نوای جهان کوچولوی ما',
    cover: 'audio/covers/rainy-night.jpg',
    description: 'ملودی آرام و بارانی برای لحظه‌های دنج شبانه',
    accentColor: '#7771A8',
  },
  'moonlight-waltz.wav': {
    id: 'moonlight-waltz',
    title: 'رقص زیر نور ماه',
    artist: 'ارکستر رؤیا',
    cover: 'audio/covers/moon-waltz.jpg',
    description: 'والس ملایم زیر آسمان پرستاره',
    accentColor: '#D9A9C5',
  },
};

export function buildMusicTracksFromManifest(
  discovered: typeof discoveredAudioTracks,
): MusicTrackConfig[] {
  const seenFilenames = new Set<string>();
  const usedIds = new Set<string>();
  const result: MusicTrackConfig[] = [];

  for (const item of discovered) {
    if (!item?.filename || seenFilenames.has(item.filename)) continue;
    seenFilenames.add(item.filename);

    const curated = CURATED_TRACK_METADATA[item.filename];
    let id = curated?.id || item.id;
    let suffix = 2;
    while (usedIds.has(id)) {
      id = `${curated?.id || item.id}-${suffix++}`;
    }
    usedIds.add(id);

    result.push({
      id,
      filename: item.filename,
      title: curated?.title || item.title,
      artist: curated?.artist !== undefined ? curated.artist : item.artist,
      cover: curated?.cover || item.cover || 'audio/covers/rainy-night.jpg',
      format: item.format,
      description: curated?.description,
      accentColor: curated?.accentColor || '#D9A9C5',
    });
  }

  return result;
}

/**
 * فهرست رسمی آهنگ‌های اتاق موسیقی که به‌صورت خودکار از پوشه public/audio/ ساخته می‌شود.
 */
export const MUSIC_TRACKS_CONFIG: MusicTrackConfig[] =
  buildMusicTracksFromManifest(discoveredAudioTracks);
