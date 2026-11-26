/// <reference types="vite/client" />

declare module 'virtual:museum-photos' {
  const photos: string[];
  export default photos;
}

declare module 'virtual:audio-tracks' {
  export interface DiscoveredAudioManifestTrack {
    id: string;
    filename: string;
    url?: string;
    title: string;
    artist: string;
    cover: string;
    format: string;
  }

  const tracks: DiscoveredAudioManifestTrack[];
  export default tracks;
}
