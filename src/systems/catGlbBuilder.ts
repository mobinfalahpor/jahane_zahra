import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import { GLTFLoader, type GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { GraphicsLodLevel } from '../core/graphicsProfile';
import type { CatBreed } from '../core/types';
import {
  createCatPawGroup,
  createDishedIrisGeometry,
  createFurTuftInstancedMesh,
  createSculptedCatEarGeometry,
  createSculptedCatHeadGeometry,
  createSculptedCatNoseGeometry,
  createSkinnedCatTail,
  createSkinnedCatTorso,
  createTaperedWhiskerGeometry,
  getLowerEyelidGeometry,
  getUpperEyelidGeometry,
  type FurTuftSpec,
} from './catGeometry';
import {
  BREED_PALETTES,
  DEFAULT_ORANGE_CAT_COLOR,
  getOrCreateCatTextureBundle,
  resolveCatPalette,
  type BreedPalette,
} from './catTextures';

export { BREED_PALETTES, DEFAULT_ORANGE_CAT_COLOR, type BreedPalette };

function quatTrack(nodeName: string, times: number[], eulerPoints: [number, number, number][]) {
  const values: number[] = [];
  const q = new THREE.Quaternion();
  const e = new THREE.Euler();
  for (const [x, y, z] of eulerPoints) {
    e.set(x, y, z, 'XYZ');
    q.setFromEuler(e);
    values.push(q.x, q.y, q.z, q.w);
  }
  return new THREE.QuaternionKeyframeTrack(`${nodeName}.quaternion`, times, values);
}

function posTrack(nodeName: string, times: number[], points: [number, number, number][]) {
  return new THREE.VectorKeyframeTrack(`${nodeName}.position`, times, points.flat());
}

function scaleTrack(nodeName: string, times: number[], scales: [number, number, number][]) {
  return new THREE.VectorKeyframeTrack(`${nodeName}.scale`, times, scales.flat());
}

let cachedCatClips: THREE.AnimationClip[] | null = null;

function buildCatAnimationClips(): THREE.AnimationClip[] {
  if (cachedCatClips) return cachedCatClips;

  const zeroQuat = (n: string, dur: number) => quatTrack(n, [0, dur], [[0, 0, 0], [0, 0, 0]]);
  const resetJoints = (dur: number) => [
    zeroQuat('SpinePelvis', dur),
    zeroQuat('SpineMid', dur),
    zeroQuat('SpineChest', dur),
    zeroQuat('ElbowFL', dur),
    zeroQuat('ElbowFR', dur),
    zeroQuat('PawFL', dur),
    zeroQuat('PawFR', dur),
    zeroQuat('KneeBL', dur),
    zeroQuat('KneeBR', dur),
    zeroQuat('HockBL', dur),
    zeroQuat('HockBR', dur),
    zeroQuat('PawBL', dur),
    zeroQuat('PawBR', dur),
  ];

  // 1. Idle (calm weight-shift + gentle breathing spine + flowing S-curve tail)
  const idleClip = new THREE.AnimationClip('Idle', 3.6, [
    posTrack('BodyPivot', [0, 1.8, 3.6], [[0, 0.365, 0], [0, 0.373, 0], [0, 0.365, 0]]),
    quatTrack('BodyPivot', [0, 1.8, 3.6], [[0, 0, 0.01], [0, 0, -0.01], [0, 0, 0.01]]),
    quatTrack('SpineMid', [0, 1.8, 3.6], [[0.015, 0, 0], [-0.012, 0, 0], [0.015, 0, 0]]),
    quatTrack('SpineChest', [0, 1.8, 3.6], [[-0.02, 0.02, 0], [0.015, -0.02, 0], [-0.02, 0.02, 0]]),
    quatTrack('HeadPivot', [0, 1.2, 2.4, 3.6], [
      [0.02, 0, 0],
      [-0.03, 0.08, 0.035],
      [0.015, -0.07, -0.03],
      [0.02, 0, 0],
    ]),
    zeroQuat('JawPivot', 3.6),
    zeroQuat('LegFL', 3.6),
    zeroQuat('LegFR', 3.6),
    zeroQuat('LegBL', 3.6),
    zeroQuat('LegBR', 3.6),
    zeroQuat('ElbowFL', 3.6),
    zeroQuat('ElbowFR', 3.6),
    zeroQuat('KneeBL', 3.6),
    zeroQuat('KneeBR', 3.6),
    zeroQuat('HockBL', 3.6),
    zeroQuat('HockBR', 3.6),
    zeroQuat('PawFL', 3.6),
    zeroQuat('PawFR', 3.6),
    zeroQuat('PawBL', 3.6),
    zeroQuat('PawBR', 3.6),
    quatTrack('TailBone0', [0, 0.9, 1.8, 2.7, 3.6], [
      [-0.86, 0, 0],
      [-0.82, 0, 0.14],
      [-0.86, 0, 0],
      [-0.82, 0, -0.14],
      [-0.86, 0, 0],
    ]),
    quatTrack('TailBone1', [0, 0.9, 1.8, 2.7, 3.6], [
      [0.16, 0, 0],
      [0.18, 0, 0.16],
      [0.16, 0, 0],
      [0.18, 0, -0.16],
      [0.16, 0, 0],
    ]),
    quatTrack('TailBone2', [0, 0.9, 1.8, 2.7, 3.6], [
      [0.18, 0, 0],
      [0.2, 0, 0.18],
      [0.18, 0, 0],
      [0.2, 0, -0.18],
      [0.18, 0, 0],
    ]),
    quatTrack('TailBone3', [0, 0.9, 1.8, 2.7, 3.6], [
      [0.14, 0, 0],
      [0.16, 0, 0.14],
      [0.14, 0, 0],
      [0.16, 0, -0.14],
      [0.14, 0, 0],
    ]),
  ]);

  // 2. Walk (true articulated 4-legged stride: elbow/knee bend + ground-flat planted paws)
  const walkClip = new THREE.AnimationClip('Walk', 0.88, [
    posTrack('BodyPivot', [0, 0.22, 0.44, 0.66, 0.88], [
      [0, 0.362, 0],
      [0, 0.382, 0],
      [0, 0.362, 0],
      [0, 0.382, 0],
      [0, 0.362, 0],
    ]),
    quatTrack('BodyPivot', [0, 0.44, 0.88], [[0, 0, 0.025], [0, 0, -0.025], [0, 0, 0.025]]),
    quatTrack('SpinePelvis', [0, 0.44, 0.88], [[0, 0.05, 0], [0, -0.05, 0], [0, 0.05, 0]]),
    quatTrack('SpineMid', [0, 0.44, 0.88], [[0, -0.04, 0], [0, 0.04, 0], [0, -0.04, 0]]),
    quatTrack('SpineChest', [0, 0.44, 0.88], [[0, -0.04, 0], [0, 0.04, 0], [0, -0.04, 0]]),
    // Diagonal pair FL + BR
    quatTrack('LegFL', [0, 0.22, 0.44, 0.66, 0.88], [
      [0.36, 0, 0],
      [-0.08, 0, 0],
      [-0.42, 0, 0],
      [0.02, 0, 0],
      [0.36, 0, 0],
    ]),
    quatTrack('ElbowFL', [0, 0.22, 0.44, 0.66, 0.88], [
      [0.06, 0, 0],
      [0.52, 0, 0],
      [0.12, 0, 0],
      [0.04, 0, 0],
      [0.06, 0, 0],
    ]),
    quatTrack('PawFL', [0, 0.22, 0.44, 0.66, 0.88], [
      [-0.38, 0, 0],
      [0.15, 0, 0],
      [0.24, 0, 0],
      [-0.06, 0, 0],
      [-0.38, 0, 0],
    ]),
    quatTrack('LegBR', [0, 0.22, 0.44, 0.66, 0.88], [
      [0.36, 0, 0],
      [-0.04, 0, 0],
      [-0.42, 0, 0],
      [0.04, 0, 0],
      [0.36, 0, 0],
    ]),
    quatTrack('KneeBR', [0, 0.22, 0.44, 0.66, 0.88], [
      [-0.14, 0, 0],
      [-0.44, 0, 0],
      [0.08, 0, 0],
      [-0.04, 0, 0],
      [-0.14, 0, 0],
    ]),
    quatTrack('HockBR', [0, 0.22, 0.44, 0.66, 0.88], [
      [0.08, 0, 0],
      [0.48, 0, 0],
      [0.12, 0, 0],
      [0.02, 0, 0],
      [0.08, 0, 0],
    ]),
    // Diagonal pair FR + BL (half-cycle offset)
    quatTrack('LegFR', [0, 0.22, 0.44, 0.66, 0.88], [
      [-0.42, 0, 0],
      [0.02, 0, 0],
      [0.36, 0, 0],
      [-0.08, 0, 0],
      [-0.42, 0, 0],
    ]),
    quatTrack('ElbowFR', [0, 0.22, 0.44, 0.66, 0.88], [
      [0.12, 0, 0],
      [0.04, 0, 0],
      [0.06, 0, 0],
      [0.52, 0, 0],
      [0.12, 0, 0],
    ]),
    quatTrack('PawFR', [0, 0.22, 0.44, 0.66, 0.88], [
      [0.24, 0, 0],
      [-0.06, 0, 0],
      [-0.38, 0, 0],
      [0.15, 0, 0],
      [0.24, 0, 0],
    ]),
    quatTrack('LegBL', [0, 0.22, 0.44, 0.66, 0.88], [
      [-0.42, 0, 0],
      [0.04, 0, 0],
      [0.36, 0, 0],
      [-0.04, 0, 0],
      [-0.42, 0, 0],
    ]),
    quatTrack('KneeBL', [0, 0.22, 0.44, 0.66, 0.88], [
      [0.08, 0, 0],
      [-0.04, 0, 0],
      [-0.14, 0, 0],
      [-0.44, 0, 0],
      [0.08, 0, 0],
    ]),
    quatTrack('HockBL', [0, 0.22, 0.44, 0.66, 0.88], [
      [0.12, 0, 0],
      [0.02, 0, 0],
      [0.08, 0, 0],
      [0.48, 0, 0],
      [0.12, 0, 0],
    ]),
    quatTrack('HeadPivot', [0, 0.44, 0.88], [[-0.03, 0.04, 0], [-0.03, -0.04, 0], [-0.03, 0.04, 0]]),
    zeroQuat('JawPivot', 0.88),
    quatTrack('TailBone0', [0, 0.44, 0.88], [[-0.82, 0.14, 0], [-0.82, -0.14, 0], [-0.82, 0.14, 0]]),
    quatTrack('TailBone1', [0, 0.44, 0.88], [[0.22, 0.18, 0], [0.22, -0.18, 0], [0.22, 0.18, 0]]),
    quatTrack('TailBone2', [0, 0.44, 0.88], [[0.18, 0.16, 0], [0.18, -0.16, 0], [0.18, 0.16, 0]]),
  ]);

  // 3. Run (galloping spine flexion/extension)
  const runClip = new THREE.AnimationClip('Run', 0.56, [
    posTrack('BodyPivot', [0, 0.14, 0.28, 0.42, 0.56], [
      [0, 0.365, 0],
      [0, 0.47, 0.035],
      [0, 0.35, 0],
      [0, 0.44, -0.02],
      [0, 0.365, 0],
    ]),
    quatTrack('BodyPivot', [0, 0.14, 0.28, 0.42, 0.56], [
      [0.1, 0, 0],
      [-0.14, 0, 0],
      [0.09, 0, 0],
      [-0.06, 0, 0],
      [0.1, 0, 0],
    ]),
    quatTrack('SpineMid', [0, 0.14, 0.28, 0.42, 0.56], [
      [0.14, 0, 0],
      [-0.16, 0, 0],
      [0.18, 0, 0],
      [-0.12, 0, 0],
      [0.14, 0, 0],
    ]),
    quatTrack('SpineChest', [0, 0.14, 0.28, 0.42, 0.56], [
      [-0.08, 0, 0],
      [0.12, 0, 0],
      [-0.1, 0, 0],
      [0.1, 0, 0],
      [-0.08, 0, 0],
    ]),
    quatTrack('LegFL', [0, 0.14, 0.28, 0.42, 0.56], [[-0.72, 0, 0], [-0.1, 0, 0], [0.66, 0, 0], [-0.2, 0, 0], [-0.72, 0, 0]]),
    quatTrack('LegFR', [0, 0.14, 0.28, 0.42, 0.56], [[-0.56, 0, 0], [-0.2, 0, 0], [0.7, 0, 0], [-0.1, 0, 0], [-0.56, 0, 0]]),
    quatTrack('ElbowFL', [0, 0.14, 0.28, 0.42, 0.56], [[0.18, 0, 0], [0.55, 0, 0], [0.1, 0, 0], [0.42, 0, 0], [0.18, 0, 0]]),
    quatTrack('ElbowFR', [0, 0.14, 0.28, 0.42, 0.56], [[0.18, 0, 0], [0.45, 0, 0], [0.1, 0, 0], [0.55, 0, 0], [0.18, 0, 0]]),
    quatTrack('LegBL', [0, 0.14, 0.28, 0.42, 0.56], [[0.7, 0, 0], [0.1, 0, 0], [-0.66, 0, 0], [0.15, 0, 0], [0.7, 0, 0]]),
    quatTrack('LegBR', [0, 0.14, 0.28, 0.42, 0.56], [[0.56, 0, 0], [0.15, 0, 0], [-0.7, 0, 0], [0.1, 0, 0], [0.56, 0, 0]]),
    quatTrack('HeadPivot', [0, 0.28, 0.56], [[-0.08, 0, 0], [0.06, 0, 0], [-0.08, 0, 0]]),
    zeroQuat('JawPivot', 0.56),
    quatTrack('TailBone0', [0, 0.28, 0.56], [[-1.08, 0.14, 0], [-1.08, -0.14, 0], [-1.08, 0.14, 0]]),
    quatTrack('TailBone1', [0, 0.28, 0.56], [[0.14, 0.14, 0], [0.14, -0.14, 0], [0.14, 0.14, 0]]),
  ]);

  // 4. Sit (graceful seated posture with folded hindlegs & curled tail beside hip)
  const sitClip = new THREE.AnimationClip('Sit', 2.8, [
    posTrack('BodyPivot', [0, 1.4, 2.8], [[0, 0.285, -0.02], [0, 0.292, -0.02], [0, 0.285, -0.02]]),
    quatTrack('BodyPivot', [0, 2.8], [[-0.32, 0, 0], [-0.32, 0, 0]]),
    quatTrack('SpineMid', [0, 2.8], [[-0.08, 0, 0], [-0.08, 0, 0]]),
    quatTrack('SpineChest', [0, 2.8], [[0.06, 0, 0], [0.06, 0, 0]]),
    quatTrack('HeadPivot', [0, 1.4, 2.8], [[0.24, 0.05, 0.02], [0.26, -0.05, -0.02], [0.24, 0.05, 0.02]]),
    zeroQuat('JawPivot', 2.8),
    quatTrack('LegBL', [0, 2.8], [[1.22, 0, 0.08], [1.22, 0, 0.08]]),
    quatTrack('LegBR', [0, 2.8], [[1.22, 0, -0.08], [1.22, 0, -0.08]]),
    quatTrack('KneeBL', [0, 2.8], [[-1.02, 0, 0], [-1.02, 0, 0]]),
    quatTrack('KneeBR', [0, 2.8], [[-1.02, 0, 0], [-1.02, 0, 0]]),
    quatTrack('HockBL', [0, 2.8], [[0.22, 0, 0], [0.22, 0, 0]]),
    quatTrack('HockBR', [0, 2.8], [[0.22, 0, 0], [0.22, 0, 0]]),
    quatTrack('LegFL', [0, 2.8], [[0.32, 0, 0.03], [0.32, 0, 0.03]]),
    quatTrack('LegFR', [0, 2.8], [[0.32, 0, -0.03], [0.32, 0, -0.03]]),
    zeroQuat('ElbowFL', 2.8),
    zeroQuat('ElbowFR', 2.8),
    quatTrack('PawFL', [0, 2.8], [[0.04, 0, 0], [0.04, 0, 0]]),
    quatTrack('PawFR', [0, 2.8], [[0.04, 0, 0], [0.04, 0, 0]]),
    quatTrack('TailBone0', [0, 1.4, 2.8], [[-1.26, 0, -0.36], [-1.26, 0, -0.44], [-1.26, 0, -0.36]]),
    quatTrack('TailBone1', [0, 1.4, 2.8], [[0.16, 0, -0.42], [0.16, 0, -0.48], [0.16, 0, -0.42]]),
    quatTrack('TailBone2', [0, 1.4, 2.8], [[0.12, 0, -0.44], [0.12, 0, -0.5], [0.12, 0, -0.44]]),
    quatTrack('TailBone3', [0, 1.4, 2.8], [[0.08, 0, -0.38], [0.08, 0, -0.44], [0.08, 0, -0.38]]),
  ]);

  // 5. Sleep (cozy curled loaf/crescent resting flush on rug with gentle breathing)
  const sleepClip = new THREE.AnimationClip('Sleep', 3.6, [
    posTrack('BodyPivot', [0, 1.8, 3.6], [[0, 0.145, 0], [0, 0.155, 0], [0, 0.145, 0]]),
    quatTrack('BodyPivot', [0, 3.6], [[0.02, 0, 0.08], [0.02, 0, 0.08]]),
    quatTrack('SpineMid', [0, 1.8, 3.6], [[0.06, 0.22, 0], [0.08, 0.22, 0], [0.06, 0.22, 0]]),
    quatTrack('SpineChest', [0, 1.8, 3.6], [[0.06, 0.28, 0], [0.08, 0.28, 0], [0.06, 0.28, 0]]),
    quatTrack('HeadPivot', [0, 1.8, 3.6], [[0.22, 0.36, 0.16], [0.25, 0.36, 0.16], [0.22, 0.36, 0.16]]),
    zeroQuat('JawPivot', 3.6),
    quatTrack('LegFL', [0, 3.6], [[-1.22, 0, 0.12], [-1.22, 0, 0.12]]),
    quatTrack('LegFR', [0, 3.6], [[-1.22, 0, -0.12], [-1.22, 0, -0.12]]),
    quatTrack('ElbowFL', [0, 3.6], [[1.75, 0, 0], [1.75, 0, 0]]),
    quatTrack('ElbowFR', [0, 3.6], [[1.75, 0, 0], [1.75, 0, 0]]),
    quatTrack('LegBL', [0, 3.6], [[1.25, 0, 0.08], [1.25, 0, 0.08]]),
    quatTrack('LegBR', [0, 3.6], [[1.25, 0, -0.08], [1.25, 0, -0.08]]),
    quatTrack('KneeBL', [0, 3.6], [[-1.22, 0, 0], [-1.22, 0, 0]]),
    quatTrack('KneeBR', [0, 3.6], [[-1.22, 0, 0], [-1.22, 0, 0]]),
    quatTrack('HockBL', [0, 3.6], [[0.32, 0, 0], [0.32, 0, 0]]),
    quatTrack('HockBR', [0, 3.6], [[0.32, 0, 0], [0.32, 0, 0]]),
    quatTrack('TailBone0', [0, 1.8, 3.6], [[-1.36, 0, -0.44], [-1.36, 0, -0.4], [-1.36, 0, -0.44]]),
    quatTrack('TailBone1', [0, 1.8, 3.6], [[0.1, 0, -0.5], [0.1, 0, -0.46], [0.1, 0, -0.5]]),
    quatTrack('TailBone2', [0, 1.8, 3.6], [[0.06, 0, -0.5], [0.06, 0, -0.46], [0.06, 0, -0.5]]),
    quatTrack('TailBone3', [0, 1.8, 3.6], [[0.04, 0, -0.44], [0.04, 0, -0.4], [0.04, 0, -0.44]]),
  ]);

  // 6. Stretch (deep feline anterior bow with arched spine & high hooked tail)
  const stretchClip = new THREE.AnimationClip('Stretch', 2.4, [
    posTrack('BodyPivot', [0, 0.6, 1.6, 2.4], [
      [0, 0.365, 0],
      [0, 0.275, 0.07],
      [0, 0.275, 0.07],
      [0, 0.365, 0],
    ]),
    quatTrack('BodyPivot', [0, 0.6, 1.6, 2.4], [[0, 0, 0], [0.32, 0, 0], [0.32, 0, 0], [0, 0, 0]]),
    quatTrack('SpineMid', [0, 0.6, 1.6, 2.4], [[0, 0, 0], [0.2, 0, 0], [0.2, 0, 0], [0, 0, 0]]),
    quatTrack('SpineChest', [0, 0.6, 1.6, 2.4], [[0, 0, 0], [0.16, 0, 0], [0.16, 0, 0], [0, 0, 0]]),
    quatTrack('LegFL', [0, 0.6, 1.6, 2.4], [[0, 0, 0], [-1.06, 0, 0.08], [-1.06, 0, 0.08], [0, 0, 0]]),
    quatTrack('LegFR', [0, 0.6, 1.6, 2.4], [[0, 0, 0], [-1.06, 0, -0.08], [-1.06, 0, -0.08], [0, 0, 0]]),
    zeroQuat('ElbowFL', 2.4),
    zeroQuat('ElbowFR', 2.4),
    zeroQuat('LegBL', 2.4),
    zeroQuat('LegBR', 2.4),
    quatTrack('HeadPivot', [0, 0.6, 1.6, 2.4], [[0, 0, 0], [-0.34, 0, 0], [-0.34, 0, 0], [0, 0, 0]]),
    quatTrack('JawPivot', [0, 0.8, 1.5, 2.4], [[0, 0, 0], [0.16, 0, 0], [0.16, 0, 0], [0, 0, 0]]),
    quatTrack('TailBone0', [0, 0.6, 1.6, 2.4], [[-0.65, 0, 0], [-0.32, 0, 0], [-0.32, 0, 0], [-0.65, 0, 0]]),
    quatTrack('TailBone1', [0, 0.6, 1.6, 2.4], [[0.22, 0, 0], [0.26, 0, 0], [0.26, 0, 0], [0.22, 0, 0]]),
    quatTrack('TailBone2', [0, 0.6, 1.6, 2.4], [[0.22, 0, 0], [0.3, 0, 0], [0.3, 0, 0], [0.22, 0, 0]]),
  ]);

  // 7. Yawn (wide expressive jaw showing pink tongue & tiny fangs + soft gentle eye squint)
  const yawnClip = new THREE.AnimationClip('Yawn', 2.2, [
    posTrack('BodyPivot', [0, 0.9, 1.6, 2.2], [
      [0, 0.29, -0.02],
      [0, 0.305, -0.02],
      [0, 0.3, -0.02],
      [0, 0.29, -0.02],
    ]),
    quatTrack('BodyPivot', [0, 2.2], [[-0.28, 0, 0], [-0.28, 0, 0]]),
    quatTrack('LegBL', [0, 2.2], [[1.15, 0, 0], [1.15, 0, 0]]),
    quatTrack('LegBR', [0, 2.2], [[1.15, 0, 0], [1.15, 0, 0]]),
    quatTrack('KneeBL', [0, 2.2], [[-0.95, 0, 0], [-0.95, 0, 0]]),
    quatTrack('KneeBR', [0, 2.2], [[-0.95, 0, 0], [-0.95, 0, 0]]),
    quatTrack('LegFL', [0, 2.2], [[0.28, 0, 0], [0.28, 0, 0]]),
    quatTrack('LegFR', [0, 2.2], [[0.28, 0, 0], [0.28, 0, 0]]),
    quatTrack('HeadPivot', [0, 0.55, 1.45, 2.2], [[0.2, 0, 0], [-0.18, 0.04, 0], [-0.16, -0.04, 0], [0.2, 0, 0]]),
    quatTrack('JawPivot', [0, 0.4, 1.05, 1.65, 2.2], [[0, 0, 0], [0.68, 0, 0], [0.74, 0, 0], [0.16, 0, 0], [0, 0, 0]]),
    quatTrack('EarL', [0, 0.55, 1.45, 2.2], [[0, 0, -0.22], [0.16, 0, -0.45], [0.16, 0, -0.45], [0, 0, -0.22]]),
    quatTrack('EarR', [0, 0.55, 1.45, 2.2], [[0, 0, 0.22], [0.16, 0, 0.45], [0.16, 0, 0.45], [0, 0, 0.22]]),
  ]);

  // 8. LickPaw
  const lickPawClip = new THREE.AnimationClip('LickPaw', 2.4, [
    posTrack('BodyPivot', [0, 2.4], [[0, 0.295, -0.03], [0, 0.295, -0.03]]),
    quatTrack('BodyPivot', [0, 2.4], [[-0.3, 0, 0], [-0.3, 0, 0]]),
    quatTrack('LegBL', [0, 2.4], [[1.1, 0, 0], [1.1, 0, 0]]),
    quatTrack('LegBR', [0, 2.4], [[1.1, 0, 0], [1.1, 0, 0]]),
    quatTrack('KneeBL', [0, 2.4], [[-0.78, 0, 0], [-0.78, 0, 0]]),
    quatTrack('KneeBR', [0, 2.4], [[-0.78, 0, 0], [-0.78, 0, 0]]),
    quatTrack('LegFR', [0, 2.4], [[0.24, 0, 0], [0.24, 0, 0]]),
    quatTrack('LegFL', [0, 0.35, 1.9, 2.4], [[0.24, 0, 0], [-1.05, -0.18, -0.26], [-1.05, -0.18, -0.26], [0.24, 0, 0]]),
    quatTrack('ElbowFL', [0, 0.35, 1.9, 2.4], [[0, 0, 0], [0.58, 0, 0], [0.58, 0, 0], [0, 0, 0]]),
    quatTrack('HeadPivot', [0, 0.4, 0.75, 1.1, 1.45, 1.85, 2.4], [
      [0.2, 0, 0],
      [0.44, 0.16, 0.12],
      [0.26, 0.12, 0.08],
      [0.44, 0.18, 0.14],
      [0.26, 0.12, 0.08],
      [0.36, 0.24, 0.2],
      [0.2, 0, 0],
    ]),
    quatTrack('JawPivot', [0, 0.5, 0.75, 1.1, 1.45, 2.4], [[0, 0, 0], [0.24, 0, 0], [0, 0, 0], [0.24, 0, 0], [0, 0, 0], [0, 0, 0]]),
  ]);

  // 9. Groom
  const groomClip = new THREE.AnimationClip('Groom', 2.6, [
    posTrack('BodyPivot', [0, 2.6], [[0, 0.285, -0.02], [0, 0.285, -0.02]]),
    quatTrack('BodyPivot', [0, 1.3, 2.6], [[-0.22, 0, 0], [-0.24, 0.08, 0], [-0.22, 0, 0]]),
    quatTrack('SpineMid', [0, 1.3, 2.6], [[0.06, 0, 0], [0.06, -0.1, 0], [0.06, 0, 0]]),
    quatTrack('LegBL', [0, 2.6], [[1.0, 0, 0], [1.0, 0, 0]]),
    quatTrack('LegBR', [0, 2.6], [[1.0, 0, 0], [1.0, 0, 0]]),
    quatTrack('KneeBL', [0, 2.6], [[-0.72, 0, 0], [-0.72, 0, 0]]),
    quatTrack('KneeBR', [0, 2.6], [[-0.72, 0, 0], [-0.72, 0, 0]]),
    quatTrack('LegFL', [0, 2.6], [[0.18, 0, 0.1], [0.18, 0, 0.1]]),
    quatTrack('LegFR', [0, 2.6], [[0.18, 0, -0.1], [0.18, 0, -0.1]]),
    quatTrack('HeadPivot', [0, 0.45, 0.9, 1.35, 1.8, 2.2, 2.6], [
      [0.22, 0.1, 0],
      [0.52, -0.45, -0.22],
      [0.34, -0.35, -0.15],
      [0.54, -0.45, -0.22],
      [0.36, 0.35, 0.18],
      [0.52, 0.42, 0.2],
      [0.22, 0.1, 0],
    ]),
    quatTrack('JawPivot', [0, 0.5, 1.0, 1.5, 2.0, 2.6], [[0, 0, 0], [0.22, 0, 0], [0, 0, 0], [0.22, 0, 0], [0, 0, 0], [0, 0, 0]]),
  ]);

  // 10. Play
  const playClip = new THREE.AnimationClip('Play', 0.96, [
    posTrack('BodyPivot', [0, 0.24, 0.48, 0.72, 0.96], [
      [0, 0.365, 0],
      [0, 0.58, 0.08],
      [0, 0.355, 0],
      [0, 0.52, -0.04],
      [0, 0.365, 0],
    ]),
    quatTrack('BodyPivot', [0, 0.24, 0.48, 0.72, 0.96], [[0, 0, 0], [-0.22, 0.1, 0], [0, 0, 0], [-0.14, -0.1, 0], [0, 0, 0]]),
    quatTrack('LegFL', [0, 0.24, 0.48, 0.96], [[0, 0, 0], [-0.95, 0, 0.22], [0, 0, 0], [0, 0, 0]]),
    quatTrack('LegFR', [0, 0.24, 0.48, 0.96], [[0, 0, 0], [-0.65, 0, -0.22], [0, 0, 0], [0, 0, 0]]),
    quatTrack('ElbowFL', [0, 0.24, 0.48, 0.96], [[0, 0, 0], [0.45, 0, 0], [0, 0, 0], [0, 0, 0]]),
    zeroQuat('LegBL', 0.96),
    zeroQuat('LegBR', 0.96),
    zeroQuat('JawPivot', 0.96),
    quatTrack('TailBone0', [0, 0.24, 0.48, 0.72, 0.96], [[-0.55, 0, 0], [-0.42, 0.28, 0], [-0.55, 0, 0], [-0.42, -0.28, 0], [-0.55, 0, 0]]),
  ]);

  // 11. Eat
  const eatClip = new THREE.AnimationClip('Eat', 1.0, [
    posTrack('BodyPivot', [0, 0.5, 1.0], [[0, 0.325, 0], [0, 0.315, 0], [0, 0.325, 0]]),
    quatTrack('BodyPivot', [0, 1.0], [[0.08, 0, 0], [0.08, 0, 0]]),
    ...resetJoints(1.0),
    zeroQuat('LegFL', 1.0),
    zeroQuat('LegFR', 1.0),
    zeroQuat('LegBL', 1.0),
    zeroQuat('LegBR', 1.0),
    quatTrack('HeadPivot', [0, 0.25, 0.5, 0.75, 1.0], [[0.48, 0, 0], [0.64, 0, 0], [0.46, 0, 0], [0.64, 0, 0], [0.48, 0, 0]]),
    quatTrack('JawPivot', [0, 0.25, 0.5, 0.75, 1.0], [[0, 0, 0], [0.25, 0, 0], [0.02, 0, 0], [0.25, 0, 0], [0, 0, 0]]),
    quatTrack('TailBone0', [0, 0.5, 1.0], [[-0.72, 0.2, 0], [-0.72, -0.2, 0], [-0.72, 0.2, 0]]),
  ]);

  // 12. Drink
  const drinkClip = new THREE.AnimationClip('Drink', 1.2, [
    posTrack('BodyPivot', [0, 0.6, 1.2], [[0, 0.315, 0], [0, 0.31, 0], [0, 0.315, 0]]),
    quatTrack('BodyPivot', [0, 1.2], [[0.08, 0, 0], [0.08, 0, 0]]),
    ...resetJoints(1.2),
    zeroQuat('LegFL', 1.2),
    zeroQuat('LegFR', 1.2),
    zeroQuat('LegBL', 1.2),
    zeroQuat('LegBR', 1.2),
    quatTrack('HeadPivot', [0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2], [
      [0.52, 0, 0],
      [0.62, 0, 0],
      [0.5, 0, 0],
      [0.62, 0, 0],
      [0.5, 0, 0],
      [0.62, 0, 0],
      [0.52, 0, 0],
    ]),
    quatTrack('JawPivot', [0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2], [
      [0, 0, 0],
      [0.22, 0, 0],
      [0, 0, 0],
      [0.22, 0, 0],
      [0, 0, 0],
      [0.22, 0, 0],
      [0, 0, 0],
    ]),
    quatTrack('TailBone0', [0, 0.6, 1.2], [[-0.78, 0.14, 0], [-0.78, -0.14, 0], [-0.78, 0.14, 0]]),
  ]);

  // 13. Bath
  const bathClip = new THREE.AnimationClip('Bath', 1.4, [
    posTrack('BodyPivot', [0, 0.7, 1.4], [[0, 0.335, 0], [0, 0.345, 0], [0, 0.335, 0]]),
    zeroQuat('BodyPivot', 1.4),
    quatTrack('HeadPivot', [0, 0.35, 0.7, 1.05, 1.4], [
      [0.1, 0, 0.2],
      [0.2, 0.25, 0.1],
      [0.1, 0, -0.2],
      [0.2, -0.25, -0.1],
      [0.1, 0, 0.2],
    ]),
    zeroQuat('JawPivot', 1.4),
    quatTrack('LegFL', [0, 0.35, 0.7, 1.05, 1.4], [[0, 0, 0], [-0.85, 0, 0.15], [-0.6, 0, 0.1], [-0.85, 0, 0.15], [0, 0, 0]]),
    quatTrack('ElbowFL', [0, 0.35, 0.7, 1.05, 1.4], [[0, 0, 0], [0.45, 0, 0], [0.3, 0, 0], [0.45, 0, 0], [0, 0, 0]]),
    zeroQuat('LegFR', 1.4),
    zeroQuat('LegBL', 1.4),
    zeroQuat('LegBR', 1.4),
  ]);

  // 14. Happy (joyful head nuzzle + proud high questioning tail)
  const happyClip = new THREE.AnimationClip('Happy', 1.4, [
    posTrack('BodyPivot', [0, 0.35, 0.7, 1.05, 1.4], [
      [0, 0.365, 0],
      [0, 0.398, 0],
      [0, 0.365, 0],
      [0, 0.398, 0],
      [0, 0.365, 0],
    ]),
    zeroQuat('BodyPivot', 1.4),
    ...resetJoints(1.4),
    quatTrack('HeadPivot', [0, 0.35, 0.7, 1.05, 1.4], [
      [0, 0, 0.16],
      [-0.08, 0.14, -0.14],
      [0, 0, 0.16],
      [-0.08, -0.14, -0.14],
      [0, 0, 0.16],
    ]),
    zeroQuat('JawPivot', 1.4),
    zeroQuat('LegFL', 1.4),
    zeroQuat('LegFR', 1.4),
    zeroQuat('LegBL', 1.4),
    zeroQuat('LegBR', 1.4),
    quatTrack('TailBone0', [0, 0.35, 0.7, 1.05, 1.4], [[-0.45, 0.18, 0], [-0.45, -0.18, 0], [-0.45, 0.18, 0], [-0.45, -0.18, 0], [-0.45, 0.18, 0]]),
    quatTrack('TailBone1', [0, 0.7, 1.4], [[0.28, 0.14, 0], [0.28, -0.14, 0], [0.28, 0.14, 0]]),
    quatTrack('TailBone2', [0, 0.7, 1.4], [[0.24, 0, 0], [0.24, 0, 0], [0.24, 0, 0]]),
  ]);

  cachedCatClips = [
    idleClip,
    walkClip,
    runClip,
    sitClip,
    sleepClip,
    stretchClip,
    yawnClip,
    lickPawClip,
    groomClip,
    playClip,
    eatClip,
    drinkClip,
    bathClip,
    happyClip,
  ];
  return cachedCatClips;
}

function buildSilhouetteFurSpecs(lodLevel: GraphicsLodLevel) {
  const density =
    lodLevel === 'low' ? 0.32 : lodLevel === 'balanced' ? 0.65 : lodLevel === 'high' ? 1.0 : 1.38;
  const pick = (base: number) => Math.max(2, Math.round(base * density));

  const chestSpecs: FurTuftSpec[] = [];
  const chestCount = pick(12);
  for (let i = 0; i < chestCount; i++) {
    const ring = i % 2;
    const t = chestCount <= 2 ? 0 : (i / (chestCount - 1)) * 2 - 1;
    const x = Math.sin(t * 0.9) * (0.056 + ring * 0.018);
    const y = -0.01 - ring * 0.035 + Math.abs(t) * 0.015;
    const z = 0.072 + (1 - Math.abs(t)) * 0.025;
    chestSpecs.push({
      position: [x, y, z],
      normal: [x * 1.1, -0.92, 0.36],
      scale: [0.68, 0.58 + ring * 0.1, 0.68],
      roll: t * 0.2,
    });
  }

  const tailSpecs: FurTuftSpec[] = [];
  const tailCount = pick(8);
  for (let i = 0; i < tailCount; i++) {
    const a = (i / tailCount) * Math.PI * 2;
    const y = 0.02 + ((i * 3) % 7) * 0.01;
    tailSpecs.push({
      position: [Math.cos(a) * 0.032, y, Math.sin(a) * 0.032],
      normal: [Math.cos(a) * 0.35, 0.94, Math.sin(a) * 0.35],
      scale: [0.58, 0.52, 0.58],
    });
  }

  return { chestSpecs, tailSpecs };
}

function buildArticulatedCatGroup(
  breed: CatBreed,
  customFurColor?: string,
  lodLevel: GraphicsLodLevel = 'balanced'
): THREE.Group {
  const palette = resolveCatPalette(breed, customFurColor);
  const bundle = getOrCreateCatTextureBundle(breed, customFurColor);

  const furMat = new THREE.MeshStandardMaterial({
    name: 'CatFurMat',
    color: '#ffffff',
    map: bundle.bodyAlbedo,
    normalMap: bundle.furNormal,
    normalScale: new THREE.Vector2(0.32, 0.32),
    roughnessMap: bundle.furRoughness,
    roughness: 0.84,
    metalness: 0.01,
  });

  const furSolidMat = new THREE.MeshStandardMaterial({
    name: 'CatFurSolidMat',
    color: palette.fur,
    normalMap: bundle.furNormal,
    normalScale: new THREE.Vector2(0.24, 0.24),
    roughnessMap: bundle.furRoughness,
    roughness: 0.82,
    metalness: 0.01,
  });

  const headMat = new THREE.MeshStandardMaterial({
    name: 'CatHeadMat',
    color: '#ffffff',
    map: bundle.headAlbedo,
    normalMap: bundle.furNormal,
    normalScale: new THREE.Vector2(0.2, 0.2),
    roughnessMap: bundle.furRoughness,
    roughness: 0.78,
    metalness: 0.01,
  });

  const tailMat = new THREE.MeshStandardMaterial({
    name: 'CatTailMat',
    color: '#ffffff',
    map: bundle.tailAlbedo,
    normalMap: bundle.furNormal,
    normalScale: new THREE.Vector2(0.28, 0.28),
    roughnessMap: bundle.furRoughness,
    roughness: 0.82,
    metalness: 0.01,
  });

  const bellyMat = new THREE.MeshStandardMaterial({
    name: 'CatBellyMat',
    color: palette.belly,
    normalMap: bundle.furNormal,
    normalScale: new THREE.Vector2(0.18, 0.18),
    roughness: 0.86,
    metalness: 0.0,
  });

  const creamWarmMat = new THREE.MeshStandardMaterial({
    name: 'CatBellyMat',
    color: palette.creamWarm,
    normalMap: bundle.furNormal,
    normalScale: new THREE.Vector2(0.16, 0.16),
    roughness: 0.84,
    metalness: 0.0,
  });

  const earInnerMat = new THREE.MeshStandardMaterial({
    name: 'CatEarInnerMat',
    color: palette.earInner,
    roughness: 0.66,
    metalness: 0.0,
  });

  const noseMat = new THREE.MeshStandardMaterial({
    name: 'CatNoseMat',
    color: '#ffffff',
    map: bundle.noseAlbedo,
    roughness: 0.34,
    metalness: 0.02,
  });

  const mouthInnerMat = new THREE.MeshStandardMaterial({
    name: 'CatMouthInnerMat',
    color: '#d45f76',
    roughness: 0.42,
  });

  const mouthDarkMat = new THREE.MeshStandardMaterial({
    color: '#4e1522',
    roughness: 0.72,
  });

  const eyelinerMat = new THREE.MeshStandardMaterial({
    name: 'CatEyelinerMat',
    color: palette.eyeliner,
    roughness: 0.36,
    metalness: 0.05,
  });

  const scleraMat = new THREE.MeshStandardMaterial({
    name: 'CatScleraMat',
    color: '#e8e0d5',
    roughness: 0.18,
    metalness: 0.02,
  });

  const irisMat = new THREE.MeshStandardMaterial({
    name: 'CatIrisMat',
    map: bundle.iris,
    emissive: new THREE.Color('#ffffff'),
    emissiveMap: bundle.iris,
    emissiveIntensity: 0.06,
    roughness: 0.14,
    metalness: 0.04,
  });

  const pupilMat = new THREE.MeshStandardMaterial({
    name: 'CatPupilMat',
    color: '#040508',
    roughness: 0.04,
    metalness: 0.1,
  });

  const corneaMat = new THREE.MeshStandardMaterial({
    name: 'CatCorneaMat',
    color: '#ffffff',
    roughness: 0.02,
    metalness: 0.04,
    transparent: true,
    opacity: 0.18,
    depthWrite: false,
  });

  const whiskerMat = new THREE.MeshStandardMaterial({
    name: 'CatWhiskerMat',
    color: '#fff9f2',
    roughness: 0.28,
    transparent: true,
    opacity: 0.92,
  });

  const highlightMat = new THREE.MeshBasicMaterial({
    color: '#ffffff',
    depthWrite: false,
  });

  const padPinkMat = new THREE.MeshStandardMaterial({
    color: palette.earInner,
    roughness: 0.64,
  });

  const clawMat = new THREE.MeshStandardMaterial({
    color: '#f7efe2',
    roughness: 0.25,
    metalness: 0.05,
  });

  const root = new THREE.Group();
  root.name = 'CatRoot';

  const bodyPivot = new THREE.Group();
  bodyPivot.name = 'BodyPivot';
  bodyPivot.position.set(0, 0.365, 0);
  root.add(bodyPivot);

  // ============================================================================
  // 1. 3-Bone Skinned Continuous Organic Feline Torso
  // ============================================================================
  const spinePelvis = new THREE.Bone();
  spinePelvis.name = 'SpinePelvis';
  spinePelvis.position.set(0, 0, -0.175);

  const spineMid = new THREE.Bone();
  spineMid.name = 'SpineMid';
  spineMid.position.set(0, 0, 0.175); // world-in-BodyPivot: z = 0

  const spineChest = new THREE.Bone();
  spineChest.name = 'SpineChest';
  spineChest.position.set(0, 0, 0.16); // world-in-BodyPivot: z = +0.16

  bodyPivot.add(spinePelvis);
  spinePelvis.add(spineMid);
  spineMid.add(spineChest);

  const { mesh: torsoMesh, skeleton: torsoSkeleton } = createSkinnedCatTorso(
    furMat,
    spinePelvis,
    spineMid,
    spineChest
  );
  bodyPivot.add(torsoMesh);
  bodyPivot.updateMatrixWorld(true);
  torsoMesh.bind(torsoSkeleton);

  // Soft cream chest bib blended gently into chest contour
  const chestBib = new THREE.Mesh(new THREE.SphereGeometry(0.095, 20, 16), bellyMat);
  chestBib.scale.set(0.84, 0.96, 0.66);
  chestBib.position.set(0, -0.012, 0.048);
  chestBib.castShadow = true;
  spineChest.add(chestBib);

  // Subtle silhouette fur tufts on chest
  const furSpecs = buildSilhouetteFurSpecs(lodLevel);
  const chestTufts = createFurTuftInstancedMesh('ChestFurTufts', furSpecs.chestSpecs, bellyMat);
  spineChest.add(chestTufts);

  // ============================================================================
  // 2. Sculpted Expressive Head + Recessed Orbital 3D Eyes + Whiskers + Ears
  // ============================================================================
  const headPivot = new THREE.Group();
  headPivot.name = 'HeadPivot';
  headPivot.position.set(0, 0.145, 0.085); // world-in-BodyPivot: [0, 0.145, 0.245]
  spineChest.add(headPivot);

  const headLookPivot = new THREE.Group();
  headLookPivot.name = 'HeadLookPivot';
  headPivot.add(headLookPivot);

  const headMesh = new THREE.Mesh(createSculptedCatHeadGeometry(), headMat);
  headMesh.name = 'HeadMesh';
  headMesh.position.set(0, 0.1, 0.035);
  headMesh.castShadow = true;
  headMesh.receiveShadow = true;
  headLookPivot.add(headMesh);

  // Soft Warm-Cream Whisker Pads seated cleanly on the sculpted muzzle surface (z ≈ 0.273)
  const padGeo = new THREE.SphereGeometry(0.041, 18, 14);
  for (const xSign of [1, -1]) {
    const pad = new THREE.Mesh(padGeo, creamWarmMat);
    pad.scale.set(1.04, 0.78, 0.72);
    pad.position.set(xSign * 0.036, 0.043, 0.242);
    headLookPivot.add(pad);
  }

  // Deep Dark Oral Cavity inside carved mouth pocket (visible when JawPivot opens!)
  const mouthCavity = new THREE.Mesh(new THREE.SphereGeometry(0.032, 12, 10), mouthDarkMat);
  mouthCavity.scale.set(1.22, 0.76, 0.48);
  mouthCavity.position.set(0, 0.025, 0.242);
  headLookPivot.add(mouthCavity);

  // Articulated Lower Jaw + Chin + Little Pink Tongue + Tiny Fangs
  const jawPivot = new THREE.Group();
  jawPivot.name = 'JawPivot';
  jawPivot.position.set(0, 0.026, 0.205);
  headLookPivot.add(jawPivot);

  const chin = new THREE.Mesh(new THREE.SphereGeometry(0.042, 16, 12), creamWarmMat);
  chin.scale.set(0.95, 0.68, 0.86);
  chin.position.set(0, -0.015, 0.034);
  const tongue = new THREE.Mesh(new THREE.SphereGeometry(0.025, 14, 10), mouthInnerMat);
  tongue.scale.set(0.96, 0.34, 1.32);
  tongue.position.set(0, 0.002, 0.048);
  jawPivot.add(chin, tongue);

  for (const xSign of [1, -1]) {
    const lowerTooth = new THREE.Mesh(new THREE.ConeGeometry(0.004, 0.013, 6), clawMat);
    lowerTooth.position.set(xSign * 0.015, 0.007, 0.061);
    jawPivot.add(lowerTooth);
  }

  // Sculpted Pebbled Rose-Pink Nose (seated proudly ON muzzle front plane z = 0.274!)
  const nose = new THREE.Mesh(createSculptedCatNoseGeometry(), noseMat);
  nose.name = 'CatNose';
  nose.scale.set(1.14, 1.14, 1.14);
  nose.position.set(0, 0.07, 0.274);
  headLookPivot.add(nose);

  // Delicate Philtrum + ":3" Feline Smile
  const mouthStem = new THREE.Mesh(new THREE.CylinderGeometry(0.0028, 0.0028, 0.018, 6), eyelinerMat);
  mouthStem.position.set(0, 0.052, 0.275);
  headLookPivot.add(mouthStem);

  for (const xSign of [1, -1]) {
    const lipArc = new THREE.Mesh(new THREE.TorusGeometry(0.016, 0.003, 8, 16, Math.PI * 0.88), eyelinerMat);
    lipArc.position.set(xSign * 0.0155, 0.045, 0.272);
    lipArc.rotation.z = Math.PI + xSign * 0.18;
    lipArc.rotation.y = xSign * 0.26;
    headLookPivot.add(lipArc);
  }

  // Tapered Multi-Length Curved 3D Whiskers + Follicle Dots + Superciliary Whiskers
  const whiskerRows: [number, number, number, number, number][] = [
    [0.052, 0.262, 0.036, -0.025, 0.175],
    [0.044, 0.266, 0.012, -0.045, 0.205],
    [0.036, 0.264, -0.016, -0.065, 0.19],
    [0.028, 0.258, -0.04, -0.085, 0.155],
  ];
  for (const xSign of [1, -1]) {
    whiskerRows.forEach(([wy, wz, tipDy, tipDz, span]) => {
      const baseX = xSign * 0.046;
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.0028, 6, 6), eyelinerMat);
      dot.position.set(baseX, wy, wz + 0.007);
      headLookPivot.add(dot);

      const wGeo = createTaperedWhiskerGeometry([
        new THREE.Vector3(baseX, wy, wz),
        new THREE.Vector3(baseX + xSign * span * 0.45, wy + tipDy * 0.38, wz - 0.018 + tipDz * 0.4),
        new THREE.Vector3(baseX + xSign * span, wy + tipDy - 0.014, wz - 0.055 + tipDz),
      ]);
      headLookPivot.add(new THREE.Mesh(wGeo, whiskerMat));
    });

    // Two delicate brow whiskers above each eye
    const brow1 = createTaperedWhiskerGeometry(
      [
        new THREE.Vector3(xSign * 0.064, 0.172, 0.19),
        new THREE.Vector3(xSign * 0.095, 0.214, 0.17),
        new THREE.Vector3(xSign * 0.128, 0.242, 0.136),
      ],
      0.0018,
      0.00035
    );
    const brow2 = createTaperedWhiskerGeometry(
      [
        new THREE.Vector3(xSign * 0.082, 0.168, 0.184),
        new THREE.Vector3(xSign * 0.114, 0.202, 0.16),
        new THREE.Vector3(xSign * 0.145, 0.224, 0.125),
      ],
      0.0016,
      0.00035
    );
    headLookPivot.add(new THREE.Mesh(brow1, whiskerMat), new THREE.Mesh(brow2, whiskerMat));
  }

  // Anatomical Cupped Ears with Inner Conch Folds & Cream Ear Furnishings
  const makeEar = (name: string, xSign: number) => {
    const earGroup = new THREE.Group();
    earGroup.name = name;
    earGroup.position.set(xSign * 0.132, 0.224, 0.028);
    earGroup.rotation.z = -xSign * 0.22;

    const outer = new THREE.Mesh(createSculptedCatEarGeometry(0.086, 0.174, 0.056, false), furSolidMat);
    outer.position.set(0, 0.062, 0);
    outer.castShadow = true;

    const inner = new THREE.Mesh(createSculptedCatEarGeometry(0.052, 0.118, 0.024, true), earInnerMat);
    inner.position.set(0, 0.052, 0.017);

    // Delicate cream ear-furnishing fur tufts at base of inner conch
    for (let k = 0; k < 2; k++) {
      const tuft = new THREE.Mesh(new THREE.SphereGeometry(0.022 - k * 0.004, 10, 10), bellyMat);
      tuft.scale.set(0.68, 1.45, 0.58);
      tuft.position.set(-xSign * (0.018 + k * 0.009), 0.02 + k * 0.02, 0.025);
      tuft.rotation.z = xSign * (0.48 - k * 0.12);
      earGroup.add(tuft);
    }

    earGroup.add(outer, inner);
    return earGroup;
  };
  headLookPivot.add(makeEar('EarL', 1), makeEar('EarR', -1));

  // ============================================================================
  // 3. ULTRA-CLEAR LUMINOUS 3D EYES (Seated Cleanly in Orbital Recess)
  // ============================================================================
  const makeEye = (side: 'L' | 'R', xSign: number) => {
    const eyeGroup = new THREE.Group();
    eyeGroup.name = `Eye${side}`;
    // Seated cleanly in the orbital socket (socket wall sits at z~0.198 in HeadLookPivot)
    // Eyeball center at z=0.201 reaches z=0.2415 -> 100% visible, zero skull clipping!
    eyeGroup.position.set(xSign * 0.082, 0.122, 0.201);
    eyeGroup.rotation.y = xSign * 0.14;

    // 1. Sclera / Eyeball Globe (recessed strictly BEHIND iris z=0.0305!)
    const sclera = new THREE.Mesh(new THREE.SphereGeometry(0.047, 24, 18), scleraMat);
    sclera.name = `EyeSclera${side}`;
    sclera.scale.set(1.02, 1.06, 0.52); // max z = 0.0244

    // 2. Concave 3D Iris Cup seated cleanly in front of sclera (0.025..0.0305)
    const iris = new THREE.Mesh(createDishedIrisGeometry(0.0445), irisMat);
    iris.name = `Iris${side}`;
    iris.position.set(0, 0, 0.0305);
    iris.scale.set(1.0, 1.05, 1.0);
    iris.renderOrder = 1;

    // 3. Dynamic Vertical Slit-to-Round Pupil seated proudly in front of iris center
    const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.023, 18, 16), pupilMat);
    pupil.name = `Pupil${side}`;
    pupil.scale.set(0.68, 1.22, 0.28);
    pupil.position.set(0, 0, 0.0355); // max z = 0.0419
    pupil.renderOrder = 2;

    // 4. Sculpted Dark Feline Eyeliner Rim framing upper/outer/inner eye perimeter
    const eyelinerUpper = new THREE.Mesh(
      new THREE.TorusGeometry(0.0455, 0.0044, 8, 28, Math.PI * 1.12),
      eyelinerMat
    );
    eyelinerUpper.scale.set(1.02, 1.06, 0.72);
    eyelinerUpper.position.set(0, 0.001, 0.029);
    eyelinerUpper.rotation.z = -0.06 * xSign;
    eyelinerUpper.renderOrder = 3;

    const eyelinerLower = new THREE.Mesh(
      new THREE.TorusGeometry(0.045, 0.0029, 8, 24, Math.PI * 0.88),
      eyelinerMat
    );
    eyelinerLower.scale.set(1.02, 1.06, 0.68);
    eyelinerLower.position.set(0, -0.001, 0.028);
    eyelinerLower.rotation.z = Math.PI + 0.06 * xSign;
    eyelinerLower.renderOrder = 3;

    // 5. Glossy Transparent Cornea Dome
    const cornea = new THREE.Mesh(
      new THREE.SphereGeometry(0.049, 24, 18, 0, Math.PI, 0, Math.PI),
      corneaMat
    );
    cornea.name = `EyeCornea${side}`;
    cornea.scale.set(1.02, 1.06, 0.86);
    cornea.renderOrder = 4;

    // 6. Crisp Dual Specular Catchlights
    const glintMain = new THREE.Mesh(new THREE.SphereGeometry(0.0084, 10, 10), highlightMat);
    glintMain.name = `EyeGlintMain${side}`;
    glintMain.position.set(0.015, 0.015, 0.0428);
    glintMain.renderOrder = 5;

    const glintSoft = new THREE.Mesh(new THREE.SphereGeometry(0.0042, 8, 8), highlightMat);
    glintSoft.name = `EyeGlintSoft${side}`;
    glintSoft.position.set(-0.013, -0.012, 0.041);
    glintSoft.renderOrder = 5;

    // 7. Thick Beveled Upper & Lower Eyelids (solid anatomical rims cleanly outside cornea/glints)
    const upperLidPivot = new THREE.Group();
    upperLidPivot.name = `UpperLid${side}`;
    upperLidPivot.rotation.x = -0.94;
    const upperLidMesh = new THREE.Mesh(getUpperEyelidGeometry(), furSolidMat);
    upperLidMesh.scale.set(1.06, 1.09, 0.98);
    upperLidPivot.add(upperLidMesh);

    const lowerLidPivot = new THREE.Group();
    lowerLidPivot.name = `LowerLid${side}`;
    lowerLidPivot.rotation.x = 0.92;
    const lowerLidMesh = new THREE.Mesh(getLowerEyelidGeometry(), furSolidMat);
    lowerLidMesh.scale.set(1.05, 1.08, 0.96);
    lowerLidPivot.add(lowerLidMesh);

    eyeGroup.add(
      sclera,
      iris,
      pupil,
      eyelinerUpper,
      eyelinerLower,
      cornea,
      glintMain,
      glintSoft,
      upperLidPivot,
      lowerLidPivot
    );
    return eyeGroup;
  };
  headLookPivot.add(makeEye('L', 1), makeEye('R', -1));

  const accMount = new THREE.Group();
  accMount.name = 'AccessoryMount';
  accMount.position.set(0, 0.1, 0.035);
  headLookPivot.add(accMount);

  // ============================================================================
  // 4. Four Articulated Digitigrade Legs + 4-Toe Feline Paws + Pads + Claws
  // ============================================================================
  const makeFrontLeg = (side: 'L' | 'R', x: number, z: number) => {
    const legPivot = new THREE.Group();
    legPivot.name = `LegF${side}`;
    legPivot.position.set(x, -0.025, z);

    const upperLeg = new THREE.Mesh(new THREE.CapsuleGeometry(0.056, 0.125, 8, 16), furSolidMat);
    upperLeg.position.set(0, -0.068, -0.01);
    upperLeg.rotation.x = -0.14;
    upperLeg.castShadow = true;

    const elbowPivot = new THREE.Group();
    elbowPivot.name = `ElbowF${side}`;
    elbowPivot.position.set(0, -0.145, -0.018);

    const lowerLeg = new THREE.Mesh(new THREE.CapsuleGeometry(0.044, 0.13, 8, 14), furSolidMat);
    lowerLeg.position.set(0, -0.075, 0.014);
    lowerLeg.rotation.x = 0.1;
    lowerLeg.castShadow = true;

    const pawPivot = new THREE.Group();
    pawPivot.name = `PawF${side}`;
    pawPivot.position.set(0, -0.165, 0.026); // Total Y drop = -0.335 -> pad bottom y = 0.000
    pawPivot.add(createCatPawGroup(furSolidMat, bellyMat, padPinkMat, clawMat, false));

    elbowPivot.add(lowerLeg, pawPivot);
    legPivot.add(upperLeg, elbowPivot);
    return legPivot;
  };

  const makeBackLeg = (side: 'L' | 'R', x: number, z: number) => {
    const legPivot = new THREE.Group();
    legPivot.name = `LegB${side}`;
    legPivot.position.set(x, -0.025, z);

    const thigh = new THREE.Mesh(new THREE.CapsuleGeometry(0.068, 0.12, 8, 16), furSolidMat);
    thigh.position.set(0, -0.065, 0.022);
    thigh.rotation.x = 0.26;
    thigh.castShadow = true;

    const kneePivot = new THREE.Group();
    kneePivot.name = `KneeB${side}`;
    kneePivot.position.set(0, -0.125, 0.038);

    const crus = new THREE.Mesh(new THREE.CapsuleGeometry(0.048, 0.115, 8, 14), furSolidMat);
    crus.position.set(0, -0.052, -0.028);
    crus.rotation.x = -0.52;
    crus.castShadow = true;

    const hockPivot = new THREE.Group();
    hockPivot.name = `HockB${side}`;
    hockPivot.position.set(0, -0.095, -0.052);

    const metatarsal = new THREE.Mesh(new THREE.CapsuleGeometry(0.036, 0.082, 8, 12), furSolidMat);
    metatarsal.position.set(0, -0.044, 0.012);
    metatarsal.rotation.x = 0.24;
    metatarsal.castShadow = true;

    const pawPivot = new THREE.Group();
    pawPivot.name = `PawB${side}`;
    pawPivot.position.set(0, -0.09, 0.022); // Total Y drop = -0.335 -> pad bottom y = 0.000
    pawPivot.add(createCatPawGroup(furSolidMat, bellyMat, padPinkMat, clawMat, true));

    hockPivot.add(metatarsal, pawPivot);
    kneePivot.add(crus, hockPivot);
    legPivot.add(thigh, kneePivot);
    return legPivot;
  };

  bodyPivot.add(
    makeFrontLeg('L', 0.098, 0.148),
    makeFrontLeg('R', -0.098, 0.148),
    makeBackLeg('L', 0.104, -0.172),
    makeBackLeg('R', -0.104, -0.172)
  );

  // ============================================================================
  // 5. Continuous 6-Bone Skinned Flexible Fluffy Tail
  // ============================================================================
  const tailPivotRoot = new THREE.Group();
  tailPivotRoot.name = 'TailPivotRoot';
  tailPivotRoot.position.set(0, 0.052, -0.105); // relative to SpinePelvis (-0.175) -> world z = -0.28
  spinePelvis.add(tailPivotRoot);

  const tailBones: THREE.Bone[] = [];
  let prevBone: THREE.Object3D = tailPivotRoot;
  for (let b = 0; b < 6; b++) {
    const bone = new THREE.Bone();
    bone.name = `TailBone${b}`;
    bone.position.set(0, b === 0 ? 0 : 0.11, 0);
    prevBone.add(bone);
    tailBones.push(bone);
    prevBone = bone;
  }

  // Parent SkinnedMesh in zero-pose BEFORE updateMatrixWorld + bind(), then pose TailBone0 backward (-Z)
  const { mesh: tailMesh, skeleton: tailSkeleton } = createSkinnedCatTail(tailMat, tailBones);
  tailPivotRoot.add(tailMesh);
  tailPivotRoot.updateMatrixWorld(true);
  tailMesh.bind(tailSkeleton);

  tailBones[0].rotation.x = -0.68;

  // Plush tail-plume tufts along mid tail & tip
  const tailTuftMid = createFurTuftInstancedMesh('TailMidFurTufts', furSpecs.tailSpecs, furSolidMat);
  tailBones[2].add(tailTuftMid);
  const tailTuftTip = createFurTuftInstancedMesh('TailTipFurTufts', furSpecs.tailSpecs, bellyMat);
  tailBones[4].add(tailTuftTip);

  return root;
}

const glbCache = new Map<string, ArrayBuffer>();

export async function exportCatGlbBuffer(breed: CatBreed, customFurColor?: string): Promise<ArrayBuffer> {
  const cacheKey = `${breed}:${customFurColor ?? ''}`;
  const cached = glbCache.get(cacheKey);
  if (cached) return cached;

  const group = buildArticulatedCatGroup(breed, customFurColor, 'balanced');
  const animations = buildCatAnimationClips();
  const exporter = new GLTFExporter();

  const buffer = await new Promise<ArrayBuffer>((resolve, reject) => {
    exporter.parse(
      group,
      (result) => {
        if (result instanceof ArrayBuffer) {
          resolve(result);
        } else {
          const json = JSON.stringify(result);
          resolve(new TextEncoder().encode(json).buffer);
        }
      },
      (err) => reject(err),
      { binary: true, animations }
    );
  });

  glbCache.set(cacheKey, buffer);
  return buffer;
}

export async function loadCatGltf(
  breed: CatBreed,
  customBuffer?: ArrayBuffer,
  customFurColor?: string,
  lodLevel: GraphicsLodLevel = 'balanced'
): Promise<Pick<GLTF, 'scene' | 'animations'>> {
  if (customBuffer) {
    const loader = new GLTFLoader();
    return new Promise<GLTF>((resolve, reject) => {
      loader.parse(customBuffer, '', resolve, reject);
    });
  }

  // Native Three.js SkinnedMesh + InstancedMesh + AnimationClips preserves crisp 1024px CanvasTextures
  return {
    scene: buildArticulatedCatGroup(breed, customFurColor, lodLevel),
    animations: buildCatAnimationClips(),
  };
}
