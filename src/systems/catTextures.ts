import * as THREE from 'three';
import type { CatBreed } from '../core/types';

export interface BreedPalette {
  fur: string;
  furHighlight: string;
  furMid: string;
  furShadow: string;
  belly: string;
  creamWarm: string;
  earInner: string;
  nose: string;
  irisOuter: string;
  irisMid: string;
  irisInner: string;
  stripe: string;
  eyeliner: string;
}

/**
 * رنگ اصلی خز گربه نارنجی — برای تغییر دستی رنگ خز، این کد رنگ را تغییر دهید
 */
export const DEFAULT_ORANGE_CAT_COLOR = '#f47b16';

export const BREED_PALETTES: Record<CatBreed, BreedPalette> = {
  honey: {
    fur: DEFAULT_ORANGE_CAT_COLOR,
    furHighlight: '#ffb35c',
    furMid: '#e86e10',
    furShadow: '#b94506',
    belly: '#fff5e6',
    creamWarm: '#fde3bf',
    earInner: '#f3a1b2',
    nose: '#e8788c',
    irisOuter: '#4f7f38',
    irisMid: '#b59c36',
    irisInner: '#f4d35e',
    stripe: '#922e03',
    eyeliner: '#24140d',
  },
  calico: {
    fur: '#f6ede3',
    furHighlight: '#ffffff',
    furMid: '#e99652',
    furShadow: '#c7611d',
    belly: '#ffffff',
    creamWarm: '#fbf2e7',
    earInner: '#f4adc0',
    nose: '#e68c9d',
    irisOuter: '#498258',
    irisMid: '#9fae48',
    irisInner: '#f0cf65',
    stripe: '#cf5d17',
    eyeliner: '#2a1810',
  },
  snow: {
    fur: '#f7f1eb',
    furHighlight: '#ffffff',
    furMid: '#eee4da',
    furShadow: '#cfc2b6',
    belly: '#ffffff',
    creamWarm: '#faf5ef',
    earInner: '#f2b7c8',
    nose: '#ea9cb0',
    irisOuter: '#3b79ab',
    irisMid: '#68aad2',
    irisInner: '#b9e3f7',
    stripe: '#dfd2c6',
    eyeliner: '#332b2d',
  },
  mist: {
    fur: '#8c92a8',
    furHighlight: '#b7bdd4',
    furMid: '#767c94',
    furShadow: '#555b70',
    belly: '#eaeaf4',
    creamWarm: '#d5d8e6',
    earInner: '#e2b0be',
    nose: '#cc8899',
    irisOuter: '#8f6c22',
    irisMid: '#c69f3b',
    irisInner: '#f6dc7a',
    stripe: '#4b5066',
    eyeliner: '#1c1d28',
  },
  midnight: {
    fur: '#2a2c48',
    furHighlight: '#454870',
    furMid: '#21233a',
    furShadow: '#141526',
    belly: '#565982',
    creamWarm: '#3d4066',
    earInner: '#b9859e',
    nose: '#c88fa5',
    irisOuter: '#9b741e',
    irisMid: '#d4ab3e',
    irisInner: '#fce586',
    stripe: '#121324',
    eyeliner: '#0c0d18',
  },
};

export function resolveCatPalette(breed: CatBreed, customFurColor?: string): BreedPalette {
  const base = BREED_PALETTES[breed] ?? BREED_PALETTES.honey;
  if (!customFurColor) return base;

  const main = new THREE.Color(customFurColor);
  const highlight = main.clone().lerp(new THREE.Color('#ffdfc0'), 0.4);
  const mid = main.clone().lerp(new THREE.Color('#8c380c'), 0.14);
  const shadow = main.clone().lerp(new THREE.Color('#3a1503'), 0.36);
  const stripe = main.clone().lerp(new THREE.Color('#240a01'), 0.5);
  const creamWarm = main.clone().lerp(new THREE.Color('#fff5e6'), 0.65);

  return {
    ...base,
    fur: `#${main.getHexString()}`,
    furHighlight: `#${highlight.getHexString()}`,
    furMid: `#${mid.getHexString()}`,
    furShadow: `#${shadow.getHexString()}`,
    creamWarm: `#${creamWarm.getHexString()}`,
    stripe: `#${stripe.getHexString()}`,
  };
}

export interface CatTextureBundle {
  bodyAlbedo: THREE.CanvasTexture;
  headAlbedo: THREE.CanvasTexture;
  tailAlbedo: THREE.CanvasTexture;
  furNormal: THREE.CanvasTexture;
  furRoughness: THREE.CanvasTexture;
  iris: THREE.CanvasTexture;
  noseAlbedo: THREE.CanvasTexture;
}

const catTextureCache = new Map<string, CatTextureBundle>();

// Deterministic pseudo-random helper so procedural fur looks rich and organic without flicker
function hash01(i: number, seed = 13): number {
  const x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

function paintDirectionalFurStrands(
  ctx: CanvasRenderingContext2D,
  size: number,
  highlight: string,
  shadow: string,
  count: number,
  alphaScale: number,
  flowFn: (x: number, y: number, size: number) => { angle: number; len: number }
) {
  ctx.lineCap = 'round';
  for (let i = 0; i < count; i++) {
    const x = hash01(i, 1) * size;
    const y = hash01(i, 2) * size;
    const { angle, len } = flowFn(x, y, size);
    const isHi = i % 3 === 0;
    ctx.globalAlpha = (isHi ? 0.22 : 0.14) * alphaScale;
    ctx.strokeStyle = isHi ? highlight : shadow;
    ctx.lineWidth = 0.8 + hash01(i, 3) * 0.9;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
}

function buildHeadFurTexture(p: BreedPalette): THREE.CanvasTexture {
  const size = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  // Head Sphere uses phiStart = -PI/2 -> center front (+Z) is strictly at u=0.5 (x=512), equator y=512.
  const cx = 512;
  const cy = 500;

  // Base warm ginger-to-shadow spherical coat gradient
  const baseGrad = ctx.createRadialGradient(cx, cy - 20, 40, cx, cy + 20, 520);
  baseGrad.addColorStop(0, p.furHighlight);
  baseGrad.addColorStop(0.45, p.fur);
  baseGrad.addColorStop(0.82, p.furMid);
  baseGrad.addColorStop(1, p.furShadow);
  ctx.fillStyle = baseGrad;
  ctx.fillRect(0, 0, size, size);

  // Darker crown & back-of-head saddle gradient
  const crownGrad = ctx.createLinearGradient(0, 0, 0, size * 0.42);
  crownGrad.addColorStop(0, p.furShadow);
  crownGrad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.globalAlpha = 0.48;
  ctx.fillStyle = crownGrad;
  ctx.fillRect(0, 0, size, size * 0.42);
  ctx.globalAlpha = 1;

  // Classic Tabby "M" on the forehead (centered neatly above eye line y ~ 365..435)
  ctx.strokeStyle = p.stripe;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.globalAlpha = 0.56;
  ctx.lineWidth = 12;
  ctx.beginPath();
  ctx.moveTo(cx - 72, 412);
  ctx.quadraticCurveTo(cx - 58, 344, cx - 36, 336);
  ctx.quadraticCurveTo(cx - 16, 366, cx, 402);
  ctx.quadraticCurveTo(cx + 16, 366, cx + 36, 336);
  ctx.quadraticCurveTo(cx + 58, 344, cx + 72, 412);
  ctx.stroke();

  // Inner fine companion forehead lines + crown dorsal stripes
  ctx.globalAlpha = 0.4;
  ctx.lineWidth = 8;
  for (let i = -2; i <= 2; i++) {
    ctx.beginPath();
    ctx.moveTo(cx + i * 24, 326);
    ctx.quadraticCurveTo(cx + i * 38, 220, cx + i * 50, 95);
    ctx.stroke();
  }

  // Soft cream/warm-apricot eye rings & delicate brow highlights ("teardrop" light fur around eyes)
  for (const dir of [-1, 1]) {
    const ex = cx + dir * 82;
    const ey = 468;
    const eyeRing = ctx.createRadialGradient(ex, ey, 16, ex, ey, 60);
    eyeRing.addColorStop(0, p.belly);
    eyeRing.addColorStop(0.55, p.creamWarm);
    eyeRing.addColorStop(1, 'rgba(255,245,230,0)');
    ctx.globalAlpha = 0.52;
    ctx.fillStyle = eyeRing;
    ctx.beginPath();
    ctx.arc(ex, ey, 60, 0, Math.PI * 2);
    ctx.fill();

    // Subtle dark tear-duct & outer corner eyeliner shading inside orbital recess
    ctx.globalAlpha = 0.34;
    ctx.fillStyle = p.eyeliner;
    ctx.beginPath();
    ctx.ellipse(ex, ey, 30, 26, 0, 0, Math.PI * 2);
    ctx.fill();

    // Sweeping tabby cheek stripes ("mascara lines") flowing from outer eyes to cheeks
    ctx.strokeStyle = p.stripe;
    ctx.globalAlpha = 0.45;
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(cx + dir * 116, 488);
    ctx.quadraticCurveTo(cx + dir * 185, 496, cx + dir * 255, 524);
    ctx.stroke();

    ctx.lineWidth = 7.5;
    ctx.globalAlpha = 0.36;
    ctx.beginPath();
    ctx.moveTo(cx + dir * 118, 522);
    ctx.quadraticCurveTo(cx + dir * 182, 540, cx + dir * 244, 574);
    ctx.stroke();
  }

  // Soft warm-cream muzzle blend (gentle, never washes out pink nose)
  const muzzleGrad = ctx.createRadialGradient(cx, 636, 10, cx, 636, 84);
  muzzleGrad.addColorStop(0, p.belly);
  muzzleGrad.addColorStop(0.52, p.creamWarm);
  muzzleGrad.addColorStop(1, 'rgba(255,245,230,0)');
  ctx.globalAlpha = 0.34;
  ctx.fillStyle = muzzleGrad;
  ctx.beginPath();
  ctx.arc(cx, 636, 84, 0, Math.PI * 2);
  ctx.fill();

  // Warm orange-apricot nose bridge stripe
  const bridgeGrad = ctx.createLinearGradient(cx, 445, cx, 560);
  bridgeGrad.addColorStop(0, p.furHighlight);
  bridgeGrad.addColorStop(1, p.creamWarm);
  ctx.globalAlpha = 0.65;
  ctx.fillStyle = bridgeGrad;
  ctx.beginPath();
  ctx.ellipse(cx, 504, 24, 58, 0, 0, Math.PI * 2);
  ctx.fill();

  // Fine anatomical facial fur strokes radiating naturally from nose/brow outward & down
  paintDirectionalFurStrands(ctx, size, p.furHighlight, p.furShadow, 7200, 0.72, (x, y) => {
    const dx = x - cx;
    const dy = y - 515;
    let angle = Math.atan2(dy, dx);
    if (y > 560) {
      angle = Math.PI * 0.5 + dx * 0.0012;
    } else if (y < 430) {
      angle = -Math.PI * 0.5 + dx * 0.0018;
    }
    return { angle, len: 8 + (x % 9) };
  });

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.needsUpdate = true;
  return tex;
}

function buildBodyFurTexture(p: BreedPalette): THREE.CanvasTexture {
  const size = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  // UV convention on sculpted cat torso: u = circumferential around body (0.5 = top spine, 0/1 = belly), v = back-to-chest
  const grad = ctx.createLinearGradient(0, 0, size, 0);
  grad.addColorStop(0, p.creamWarm);
  grad.addColorStop(0.18, p.furHighlight);
  grad.addColorStop(0.36, p.fur);
  grad.addColorStop(0.5, p.furMid);
  grad.addColorStop(0.64, p.fur);
  grad.addColorStop(0.82, p.furHighlight);
  grad.addColorStop(1, p.creamWarm);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  // Soft dorsal spine darkening
  const spine = ctx.createLinearGradient(size * 0.34, 0, size * 0.66, 0);
  spine.addColorStop(0, 'rgba(0,0,0,0)');
  spine.addColorStop(0.5, p.furShadow);
  spine.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.globalAlpha = 0.42;
  ctx.fillStyle = spine;
  ctx.fillRect(size * 0.32, 0, size * 0.36, size);

  // Mackerel tabby rib stripes wrapping smoothly around upper back & flanks
  ctx.strokeStyle = p.stripe;
  ctx.lineCap = 'round';
  for (let row = 0; row < 10; row++) {
    const y = 75 + row * 90;
    ctx.globalAlpha = 0.42;
    ctx.lineWidth = 20 + (row % 3) * 5;
    ctx.beginPath();
    ctx.moveTo(size * 0.16, y + 18);
    ctx.bezierCurveTo(size * 0.35, y - 14, size * 0.65, y - 14, size * 0.84, y + 18);
    ctx.stroke();

    // Fine intermediate tabby swirl
    ctx.globalAlpha = 0.24;
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(size * 0.22, y + 46);
    ctx.bezierCurveTo(size * 0.4, y + 28, size * 0.6, y + 28, size * 0.78, y + 46);
    ctx.stroke();
  }

  // Dense directional fur grain running head-to-tail
  paintDirectionalFurStrands(ctx, size, p.furHighlight, p.furShadow, 9500, 0.85, (x) => {
    const flankTilt = (x / size - 0.5) * 0.36;
    return { angle: Math.PI * 0.5 + flankTilt, len: 10 + (x % 10) };
  });

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.needsUpdate = true;
  return tex;
}

function buildTailFurTexture(p: BreedPalette): THREE.CanvasTexture {
  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  const grad = ctx.createLinearGradient(0, 0, 0, size);
  grad.addColorStop(0, p.furMid);
  grad.addColorStop(0.75, p.fur);
  grad.addColorStop(0.9, p.creamWarm);
  grad.addColorStop(1, p.belly);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  // Classic ringed tabby tail bands fading toward a soft cream tip
  for (let i = 0; i < 6; i++) {
    const y = 36 + i * 68;
    ctx.globalAlpha = 0.5 - i * 0.04;
    ctx.fillStyle = p.stripe;
    ctx.fillRect(0, y, size, 24);
  }
  ctx.globalAlpha = 1;

  paintDirectionalFurStrands(ctx, size, p.furHighlight, p.furShadow, 3600, 0.85, () => ({
    angle: Math.PI * 0.5,
    len: 11,
  }));

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.needsUpdate = true;
  return tex;
}

function buildLuminousIrisTexture(p: BreedPalette): THREE.CanvasTexture {
  const size = 1024;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const cx = size / 2;
  const cy = size / 2;

  // Deep pigmented dark limbal ring perimeter
  ctx.fillStyle = '#0e1710';
  ctx.fillRect(0, 0, size, size);

  // Dark pigmented limbal border cleanly tucked under eyeliner
  const scleraRim = ctx.createRadialGradient(cx, cy, 420, cx, cy, 508);
  scleraRim.addColorStop(0, '#162819');
  scleraRim.addColorStop(0.6, '#121d14');
  scleraRim.addColorStop(1, '#0c120d');
  ctx.fillStyle = scleraRim;
  ctx.beginPath();
  ctx.arc(cx, cy, 508, 0, Math.PI * 2);
  ctx.fill();

  // Rich multi-zone feline iris gradient (warm inner amber starburst -> golden-olive mid -> deep limbal ring)
  const rad = ctx.createRadialGradient(cx, cy, 44, cx, cy, 456);
  rad.addColorStop(0.0, p.irisInner);
  rad.addColorStop(0.32, p.irisInner);
  rad.addColorStop(0.62, p.irisMid);
  rad.addColorStop(0.86, p.irisOuter);
  rad.addColorStop(0.96, '#182b18');
  rad.addColorStop(1.0, '#0c160e');
  ctx.fillStyle = rad;
  ctx.beginPath();
  ctx.arc(cx, cy, 460, 0, Math.PI * 2);
  ctx.fill();

  // Delicate radial iris stroma fibers (260 layered filaments)
  ctx.lineCap = 'round';
  for (let i = 0; i < 260; i++) {
    const ang = (i / 260) * Math.PI * 2 + (hash01(i, 7) - 0.5) * 0.025;
    const r0 = 76 + hash01(i, 8) * 35;
    const r1 = 365 + hash01(i, 9) * 72;
    const isBright = i % 3 !== 0;
    ctx.strokeStyle = isBright ? 'rgba(255, 244, 185, 0.34)' : 'rgba(18, 34, 16, 0.36)';
    ctx.lineWidth = isBright ? 2.4 + hash01(i, 10) * 1.8 : 2.0;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(ang) * r0, cy + Math.sin(ang) * r0);
    ctx.quadraticCurveTo(
      cx + Math.cos(ang + 0.02) * ((r0 + r1) * 0.52),
      cy + Math.sin(ang + 0.02) * ((r0 + r1) * 0.52),
      cx + Math.cos(ang) * r1,
      cy + Math.sin(ang) * r1
    );
    ctx.stroke();
  }

  // Subtle iris freckles & golden inner collarette ring
  ctx.strokeStyle = 'rgba(255, 236, 150, 0.42)';
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(cx, cy, 175, 0, Math.PI * 2);
  ctx.stroke();

  // Soft upper-eyelid ambient shadow crescent so eyes look deeply set and soulful (never flat decals)
  const lidShadow = ctx.createLinearGradient(0, 40, 0, 480);
  lidShadow.addColorStop(0, 'rgba(6, 10, 8, 0.56)');
  lidShadow.addColorStop(0.45, 'rgba(6, 10, 8, 0.16)');
  lidShadow.addColorStop(1, 'rgba(6, 10, 8, 0)');
  ctx.fillStyle = lidShadow;
  ctx.beginPath();
  ctx.arc(cx, cy, 460, 0, Math.PI * 2);
  ctx.fill();

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.needsUpdate = true;
  return tex;
}

function buildNoseTexture(p: BreedPalette): THREE.CanvasTexture {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  const g = ctx.createRadialGradient(128, 114, 12, 128, 128, 128);
  g.addColorStop(0, '#f07c92');
  g.addColorStop(0.52, p.nose);
  g.addColorStop(1, '#84283b');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);

  // Crisp dark nostril shading on lower wings
  ctx.fillStyle = 'rgba(54, 10, 20, 0.62)';
  ctx.beginPath();
  ctx.ellipse(82, 142, 17, 11, -0.35, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(174, 142, 17, 11, 0.35, 0, Math.PI * 2);
  ctx.fill();

  // Micro pebbled nose-leather texture
  for (let i = 0; i < 650; i++) {
    const x = hash01(i, 31) * size;
    const y = hash01(i, 32) * size;
    ctx.fillStyle = i % 2 === 0 ? 'rgba(255,220,226,0.16)' : 'rgba(120,30,48,0.15)';
    ctx.beginPath();
    ctx.arc(x, y, 1.5 + hash01(i, 33) * 1.4, 0, Math.PI * 2);
    ctx.fill();
  }

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}

let sharedFurNormal: THREE.CanvasTexture | null = null;
let sharedFurRoughness: THREE.CanvasTexture | null = null;

function getSharedFurDataMaps() {
  if (!sharedFurNormal) {
    const size = 512;
    const nCanvas = document.createElement('canvas');
    nCanvas.width = size;
    nCanvas.height = size;
    const nctx = nCanvas.getContext('2d')!;
    nctx.fillStyle = 'rgb(128,128,255)';
    nctx.fillRect(0, 0, size, size);
    nctx.lineCap = 'round';
    for (let i = 0; i < 4200; i++) {
      const x = hash01(i, 41) * size;
      const y = hash01(i, 42) * size;
      const nx = 108 + Math.floor(hash01(i, 43) * 40);
      const ny = 120 + Math.floor(hash01(i, 44) * 16);
      nctx.strokeStyle = `rgb(${nx},${ny},244)`;
      nctx.lineWidth = 1.25;
      nctx.beginPath();
      nctx.moveTo(x, y);
      nctx.lineTo(x + (hash01(i, 45) - 0.5) * 3, y + 10);
      nctx.stroke();
    }
    sharedFurNormal = new THREE.CanvasTexture(nCanvas);
    sharedFurNormal.wrapS = THREE.RepeatWrapping;
    sharedFurNormal.wrapT = THREE.RepeatWrapping;
    sharedFurNormal.userData.shared = true;
    sharedFurNormal.needsUpdate = true;
  }

  if (!sharedFurRoughness) {
    const size = 512;
    const rCanvas = document.createElement('canvas');
    rCanvas.width = size;
    rCanvas.height = size;
    const rctx = rCanvas.getContext('2d')!;
    rctx.fillStyle = '#cfcfcf';
    rctx.fillRect(0, 0, size, size);
    rctx.lineCap = 'round';
    for (let i = 0; i < 3400; i++) {
      const x = hash01(i, 51) * size;
      const y = hash01(i, 52) * size;
      const v = 182 + Math.floor(hash01(i, 53) * 52);
      rctx.strokeStyle = `rgb(${v},${v},${v})`;
      rctx.lineWidth = 1.3;
      rctx.beginPath();
      rctx.moveTo(x, y);
      rctx.lineTo(x + (hash01(i, 54) - 0.5) * 2.5, y + 9);
      rctx.stroke();
    }
    sharedFurRoughness = new THREE.CanvasTexture(rCanvas);
    sharedFurRoughness.wrapS = THREE.RepeatWrapping;
    sharedFurRoughness.wrapT = THREE.RepeatWrapping;
    sharedFurRoughness.userData.shared = true;
    sharedFurRoughness.needsUpdate = true;
  }

  return { furNormal: sharedFurNormal, furRoughness: sharedFurRoughness };
}

export function getOrCreateCatTextureBundle(
  breed: CatBreed,
  customFurColor?: string
): CatTextureBundle {
  const key = `${breed}:${customFurColor ?? ''}`;
  const cached = catTextureCache.get(key);
  if (cached) return cached;

  const p = resolveCatPalette(breed, customFurColor);
  const { furNormal, furRoughness } = getSharedFurDataMaps();
  const bundle: CatTextureBundle = {
    bodyAlbedo: buildBodyFurTexture(p),
    headAlbedo: buildHeadFurTexture(p),
    tailAlbedo: buildTailFurTexture(p),
    furNormal,
    furRoughness,
    iris: buildLuminousIrisTexture(p),
    noseAlbedo: buildNoseTexture(p),
  };

  Object.values(bundle).forEach((tex) => {
    tex.userData.shared = true;
  });

  catTextureCache.set(key, bundle);
  return bundle;
}
