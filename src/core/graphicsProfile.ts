import type { GraphicsQuality } from './types';

export type GraphicsLodLevel = 'low' | 'balanced' | 'high' | 'ultra';

export interface GraphicsProfile {
  quality: GraphicsQuality;
  lodLevel: GraphicsLodLevel;
  isSoftwareGl: boolean;
  isMobile: boolean;
  isIOS: boolean;
  systemReducedMotion: boolean;
  maxDpr: number;
  shadowsEnabled: boolean;
  shadowMapSize: number;
  antialias: boolean;
  particleScale: number;
  enablePhysicalSheen: boolean;
  enableTransmission: boolean;
  maxAnisotropy: number;
  performanceWarning: string | null;
}

let cachedSoftwareGl: boolean | null = null;

export function normalizeGraphicsQuality(raw?: string | null): GraphicsQuality {
  if (raw === 'low' || raw === 'balanced' || raw === 'high' || raw === 'ultra') {
    return raw;
  }
  // Migrate legacy 'auto' and 'medium' profiles cleanly to 'balanced'
  return 'balanced';
}

export function detectIOSDevice(): boolean {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent || '';
  return (
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === 'MacIntel' && (navigator.maxTouchPoints ?? 0) > 1)
  );
}

export function detectMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768 || detectIOSDevice();
}

export function detectSoftwareWebGL(): boolean {
  if (cachedSoftwareGl !== null) return cachedSoftwareGl;
  if (typeof document === 'undefined') {
    cachedSoftwareGl = false;
    return false;
  }
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) {
      cachedSoftwareGl = true;
      return true;
    }
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
    const gpu = String(gl.getParameter(param) || '');
    gl.getExtension('WEBGL_lose_context')?.loseContext();
    cachedSoftwareGl = /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    return cachedSoftwareGl;
  } catch {
    cachedSoftwareGl = false;
    return false;
  }
}

/**
 * Strictly honors the user's manually chosen profile (low | balanced | high | ultra)
 * with zero automatic switching. Emits an advisory warning if a demanding profile
 * is selected on mobile / iPhone Safari / software WebGL.
 */
export function getGraphicsProfile(quality: GraphicsQuality, userReducedMotion: boolean): GraphicsProfile {
  const normalized = normalizeGraphicsQuality(quality);
  const isSoftwareGl = detectSoftwareWebGL();
  const isIOS = detectIOSDevice();
  const isMobile = detectMobileDevice();
  const systemReducedMotion =
    typeof window !== 'undefined' &&
    Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches);
  const reducedMotion = systemReducedMotion || userReducedMotion;
  const deviceDpr = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;

  let performanceWarning: string | null = null;
  if ((normalized === 'high' || normalized === 'ultra') && isSoftwareGl) {
    performanceWarning = 'مرورگر در حالت رندر نرم‌افزاری است؛ حالت «متعادل» یا «سبک» روان‌تر اجرا می‌شود.';
  } else if (normalized === 'ultra' && (isIOS || isMobile)) {
    performanceWarning = 'کیفیت «فوق‌العاده» روی گوشی ممکن است مصرف باتری و گرمای دستگاه را افزایش دهد.';
  }

  switch (normalized) {
    case 'low':
      return {
        quality: normalized,
        lodLevel: 'low',
        isSoftwareGl,
        isMobile,
        isIOS,
        systemReducedMotion: reducedMotion,
        maxDpr: 1,
        shadowsEnabled: false,
        shadowMapSize: 512,
        antialias: false,
        particleScale: 0.45,
        enablePhysicalSheen: false,
        enableTransmission: false,
        maxAnisotropy: 2,
        performanceWarning,
      };
    case 'balanced':
      return {
        quality: normalized,
        lodLevel: 'balanced',
        isSoftwareGl,
        isMobile,
        isIOS,
        systemReducedMotion: reducedMotion,
        maxDpr: Math.min(deviceDpr, isMobile ? 1.35 : 1.5),
        shadowsEnabled: !isSoftwareGl,
        shadowMapSize: 1024,
        antialias: !isSoftwareGl,
        particleScale: 0.75,
        enablePhysicalSheen: false,
        enableTransmission: false,
        maxAnisotropy: 4,
        performanceWarning,
      };
    case 'high':
      return {
        quality: normalized,
        lodLevel: 'high',
        isSoftwareGl,
        isMobile,
        isIOS,
        systemReducedMotion: reducedMotion,
        maxDpr: Math.min(deviceDpr, 2),
        shadowsEnabled: true,
        shadowMapSize: isMobile ? 1024 : 1536,
        antialias: !isSoftwareGl,
        particleScale: 1,
        enablePhysicalSheen: true,
        enableTransmission: !isMobile && !isSoftwareGl,
        maxAnisotropy: 8,
        performanceWarning,
      };
    case 'ultra':
      return {
        quality: normalized,
        lodLevel: 'ultra',
        isSoftwareGl,
        isMobile,
        isIOS,
        systemReducedMotion: reducedMotion,
        maxDpr: Math.min(deviceDpr, 2.5),
        shadowsEnabled: true,
        shadowMapSize: 2048,
        antialias: true,
        particleScale: 1.25,
        enablePhysicalSheen: true,
        enableTransmission: true,
        maxAnisotropy: 16,
        performanceWarning,
      };
  }
}
