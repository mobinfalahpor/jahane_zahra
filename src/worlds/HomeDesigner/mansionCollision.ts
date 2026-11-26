import * as THREE from 'three';
import type { PlacedFurniture } from '../../core/types';
import {
  COURTYARD_GARDEN_BEDS,
  detectMansionZone,
  getCatalogMeta,
} from './mansionCatalog';

export interface BoxCollider3D {
  id: string;
  minX: number;
  maxX: number;
  minY: number;
  maxY: number;
  minZ: number;
  maxZ: number;
  isRoof?: boolean;
  blocksPlayer?: boolean;
  blocksCamera?: boolean;
}

// =====================================================================
// Exact Solid Wall, Column, Pool, Garden & Roof Colliders matching
// MansionArchitecture.tsx geometry — Doorways intentionally left open!
// =====================================================================
export const MANSION_STATIC_COLLIDERS: BoxCollider3D[] = [
  // --- South Courtyard Entrance Perimeter Wall (Open central portal X ∈ [-1.05, 1.05]) ---
  { id: 'south-wall-w', minX: -7.6, maxX: -1.06, minY: 0, maxY: 4.1, minZ: 6.45, maxZ: 7.05, blocksPlayer: true, blocksCamera: true },
  { id: 'south-wall-e', minX: 1.06, maxX: 7.6, minY: 0, maxY: 4.1, minZ: 6.45, maxZ: 7.05, blocksPlayer: true, blocksCamera: true },
  { id: 'south-portal-lintel', minX: -2.65, maxX: 2.65, minY: 3.05, maxY: 4.15, minZ: 6.42, maxZ: 7.08, blocksPlayer: true, blocksCamera: true },

  // --- North Main Hall Wall (Z = -16.15) ---
  { id: 'hall-north', minX: -7.65, maxX: 7.65, minY: 0.24, maxY: 4.7, minZ: -16.34, maxZ: -15.96, blocksPlayer: true, blocksCamera: true },

  // --- Eyvan Side Wing Flanking Walls ---
  { id: 'eyvan-side-w', minX: -7.45, maxX: -6.0, minY: 0.24, maxY: 4.5, minZ: -9.72, maxZ: -6.5, blocksPlayer: true, blocksCamera: true },
  { id: 'eyvan-side-e', minX: 6.0, maxX: 7.45, minY: 0.24, maxY: 4.5, minZ: -9.72, maxZ: -6.5, blocksPlayer: true, blocksCamera: true },

  // --- 4 Carved Walnut Eyvan Columns (z = -6.72, x = ±4.8, ±1.75) ---
  { id: 'eyvan-col-1', minX: -5.06, maxX: -4.54, minY: 0.24, maxY: 4.2, minZ: -6.98, maxZ: -6.46, blocksPlayer: true, blocksCamera: false },
  { id: 'eyvan-col-2', minX: -2.01, maxX: -1.49, minY: 0.24, maxY: 4.2, minZ: -6.98, maxZ: -6.46, blocksPlayer: true, blocksCamera: false },
  { id: 'eyvan-col-3', minX: 1.49, maxX: 2.01, minY: 0.24, maxY: 4.2, minZ: -6.98, maxZ: -6.46, blocksPlayer: true, blocksCamera: false },
  { id: 'eyvan-col-4', minX: 4.54, maxX: 5.06, minY: 0.24, maxY: 4.2, minZ: -6.98, maxZ: -6.46, blocksPlayer: true, blocksCamera: false },

  // --- Orosi Facade between Eyvan & Main Hall (Z = -9.65, Central Archway OPEN at X ∈ [-1.4, 1.4]) ---
  { id: 'orosi-w', minX: -6.1, maxX: -1.41, minY: 0.24, maxY: 4.4, minZ: -9.82, maxZ: -9.48, blocksPlayer: true, blocksCamera: true },
  { id: 'orosi-e', minX: 1.41, maxX: 6.1, minY: 0.24, maxY: 4.4, minZ: -9.82, maxZ: -9.48, blocksPlayer: true, blocksCamera: true },
  { id: 'orosi-lintel', minX: -1.65, maxX: 1.65, minY: 3.15, maxY: 4.45, minZ: -9.82, maxZ: -9.48, blocksPlayer: true, blocksCamera: true },

  // --- Hall <-> Kitchen Wall (X = -7.5, Open Archway Z ∈ [-13.45, -11.4]) ---
  { id: 'hall-west-n', minX: -7.68, maxX: -7.32, minY: 0.24, maxY: 4.65, minZ: -16.0, maxZ: -13.45, blocksPlayer: true, blocksCamera: true },
  { id: 'hall-west-s', minX: -7.68, maxX: -7.32, minY: 0.24, maxY: 4.65, minZ: -11.4, maxZ: -9.6, blocksPlayer: true, blocksCamera: true },
  { id: 'hall-west-lintel', minX: -7.68, maxX: -7.32, minY: 3.1, maxY: 4.65, minZ: -13.45, maxZ: -11.4, blocksPlayer: true, blocksCamera: true },

  // --- Hall <-> Living Room Wall (X = +7.5, Open Archway Z ∈ [-13.45, -11.4]) ---
  { id: 'hall-east-n', minX: 7.32, maxX: 7.68, minY: 0.24, maxY: 4.65, minZ: -16.0, maxZ: -13.45, blocksPlayer: true, blocksCamera: true },
  { id: 'hall-east-s', minX: 7.32, maxX: 7.68, minY: 0.24, maxY: 4.65, minZ: -11.4, maxZ: -9.6, blocksPlayer: true, blocksCamera: true },
  { id: 'hall-east-lintel', minX: 7.32, maxX: 7.68, minY: 3.1, maxY: 4.65, minZ: -13.45, maxZ: -11.4, blocksPlayer: true, blocksCamera: true },

  // --- East Wing Facade (X = +7.5) & Outer Walls ---
  { id: 'east-facade', minX: 7.32, maxX: 7.68, minY: 0.24, maxY: 4.35, minZ: -8.15, maxZ: 6.55, blocksPlayer: true, blocksCamera: true },
  { id: 'east-outer', minX: 13.26, maxX: 13.66, minY: 0.24, maxY: 4.35, minZ: -13.62, maxZ: 6.68, blocksPlayer: true, blocksCamera: true },
  { id: 'east-north-end', minX: 7.45, maxX: 13.55, minY: 0.24, maxY: 4.35, minZ: -13.63, maxZ: -13.27, blocksPlayer: true, blocksCamera: true },
  { id: 'east-south-end', minX: 7.45, maxX: 13.55, minY: 0.24, maxY: 4.35, minZ: 6.32, maxZ: 6.68, blocksPlayer: true, blocksCamera: true },

  // --- East Wing Interior Dividers (Open Doorways at X ∈ [7.68, 9.74]) ---
  { id: 'east-div-living-lib', minX: 9.74, maxX: 13.38, minY: 0.24, maxY: 4.35, minZ: -6.64, maxZ: -6.36, blocksPlayer: true, blocksCamera: true },
  { id: 'east-div-living-lib-lintel', minX: 7.66, maxX: 9.76, minY: 3.05, maxY: 4.35, minZ: -6.64, maxZ: -6.36, blocksPlayer: true, blocksCamera: true },
  { id: 'east-div-lib-bed', minX: 9.74, maxX: 13.38, minY: 0.24, maxY: 4.35, minZ: -0.14, maxZ: 0.14, blocksPlayer: true, blocksCamera: true },
  { id: 'east-div-lib-bed-lintel', minX: 7.66, maxX: 9.76, minY: 3.05, maxY: 4.35, minZ: -0.14, maxZ: 0.14, blocksPlayer: true, blocksCamera: true },

  // --- West Wing Facade (X = -7.5) & Outer Walls ---
  { id: 'west-facade', minX: -7.68, maxX: -7.32, minY: 0.24, maxY: 4.35, minZ: -8.5, maxZ: 6.8, blocksPlayer: true, blocksCamera: true },
  { id: 'west-outer', minX: -13.66, maxX: -13.26, minY: 0.24, maxY: 4.35, minZ: -13.62, maxZ: 2.08, blocksPlayer: true, blocksCamera: true },
  { id: 'west-north-end', minX: -13.55, maxX: -7.45, minY: 0.24, maxY: 4.35, minZ: -13.63, maxZ: -13.27, blocksPlayer: true, blocksCamera: true },
  { id: 'west-south-end', minX: -13.55, maxX: -7.45, minY: 0.24, maxY: 4.35, minZ: 1.72, maxZ: 2.08, blocksPlayer: true, blocksCamera: true },

  // --- West Wing Interior Divider (Kitchen <-> Cat Room Open Doorway X ∈ [-9.74, -7.68]) ---
  { id: 'west-div-kit-cat', minX: -13.38, maxX: -9.74, minY: 0.24, maxY: 4.35, minZ: -5.64, maxZ: -5.36, blocksPlayer: true, blocksCamera: true },
  { id: 'west-div-kit-cat-lintel', minX: -9.76, maxX: -7.66, minY: 3.05, maxY: 4.35, minZ: -5.64, maxZ: -5.36, blocksPlayer: true, blocksCamera: true },

  // --- Courtyard Central Turquoise Pool & Garden Beds (Player obstacles only) ---
  { id: 'courtyard-pool', minX: -2.08, maxX: 2.08, minY: 0, maxY: 0.48, minZ: -1.56, maxZ: 1.56, blocksPlayer: true, blocksCamera: false },
  ...COURTYARD_GARDEN_BEDS.map((bed) => ({
    id: `garden-${bed.id}`,
    minX: bed.minX - 0.14,
    maxX: bed.maxX + 0.14,
    minY: 0,
    maxY: 0.55,
    minZ: bed.minZ - 0.14,
    maxZ: bed.maxZ + 0.14,
    blocksPlayer: true,
    blocksCamera: false,
  })),

  // --- Roofs & Ceilings (Active camera blockers when !cutawayMode) ---
  { id: 'roof-eyvan', minX: -6.2, maxX: 6.2, minY: 4.3, maxY: 4.6, minZ: -9.78, maxZ: -6.42, isRoof: true, blocksPlayer: false, blocksCamera: true },
  { id: 'roof-hall', minX: -7.8, maxX: 7.8, minY: 4.42, maxY: 5.25, minZ: -16.45, maxZ: -9.45, isRoof: true, blocksPlayer: false, blocksCamera: true },
  { id: 'roof-east', minX: 7.35, maxX: 13.65, minY: 4.14, maxY: 4.5, minZ: -13.7, maxZ: 6.7, isRoof: true, blocksPlayer: false, blocksCamera: true },
  { id: 'roof-west', minX: -13.65, maxX: -7.35, minY: 4.14, maxY: 4.5, minZ: -13.7, maxZ: 2.1, isRoof: true, blocksPlayer: false, blocksCamera: true },
];

export function getMansionFloorHeight(x: number, z: number): number {
  if (Math.abs(x) >= 7.34) return 0.24;
  if (z <= -6.56) return 0.24;
  // Eyvan stone steps ramp around Z ∈ [-6.56, -6.20]
  if (z < -6.2 && Math.abs(x) <= 5.95) {
    const t = (-6.2 - z) / (6.56 - 6.2);
    return 0.24 * Math.max(0, Math.min(1, t));
  }
  return 0;
}

export function isPointInsideAnyRoofedRoom(x: number, z: number): boolean {
  if (x >= -7.45 && x <= 7.45 && z >= -16.1 && z <= -9.65) return true; // Main Hall
  if (x >= -6.0 && x <= 6.0 && z >= -9.65 && z <= -6.5) return true; // Eyvan
  if (x >= 7.5 && x <= 13.45 && z >= -13.45 && z <= 6.5) return true; // East Wing
  if (x >= -13.45 && x <= -7.5 && z >= -13.45 && z <= 1.9) return true; // West Wing
  return false;
}

/**
 * Slides a circular player body cleanly along mansion walls, columns, pool, garden beds,
 * and placed floor furniture in First-Person Mode.
 */
export function resolvePlayerCollision(
  rawX: number,
  rawZ: number,
  footY: number,
  playerRadius: number,
  items: PlacedFurniture[]
): { x: number; z: number; floorY: number } {
  let x = THREE.MathUtils.clamp(rawX, -12.9, 12.9);
  let z = THREE.MathUtils.clamp(rawZ, -15.6, 8.2);

  const playerTop = footY + 1.65;
  const stepFootThreshold = footY + 0.28; // allows stepping up onto 0.24m mansion slab cleanly

  for (let pass = 0; pass < 3; pass++) {
    for (const box of MANSION_STATIC_COLLIDERS) {
      if (!box.blocksPlayer) continue;
      if (box.maxY <= stepFootThreshold || box.minY >= playerTop) continue;

      const closestX = Math.max(box.minX, Math.min(x, box.maxX));
      const closestZ = Math.max(box.minZ, Math.min(z, box.maxZ));
      const dx = x - closestX;
      const dz = z - closestZ;
      const distSq = dx * dx + dz * dz;

      if (distSq < playerRadius * playerRadius) {
        if (distSq > 1e-6) {
          const dist = Math.sqrt(distSq);
          const push = playerRadius - dist + 0.002;
          x += (dx / dist) * push;
          z += (dz / dist) * push;
        } else {
          // Deep overlap fallback: push out via nearest horizontal edge
          const penLeft = Math.abs(x - box.minX);
          const penRight = Math.abs(box.maxX - x);
          const penFront = Math.abs(z - box.minZ);
          const penBack = Math.abs(box.maxZ - z);
          const minPen = Math.min(penLeft, penRight, penFront, penBack);
          if (minPen === penLeft) x = box.minX - playerRadius - 0.002;
          else if (minPen === penRight) x = box.maxX + playerRadius + 0.002;
          else if (minPen === penFront) z = box.minZ - playerRadius - 0.002;
          else z = box.maxZ + playerRadius + 0.002;
        }
      }
    }

    // Collide smoothly with solid placed floor furniture (skip rugs, walls, tabletop props)
    for (const item of items) {
      const meta = getCatalogMeta(item.kind);
      const surface = item.surface ?? meta.surface;
      if (surface === 'rug' || surface === 'wall' || surface === 'table') continue;

      const scale = item.scale ?? meta.defaultScale;
      const itemRadius = Math.max(0.22, meta.radius * scale * 0.68);
      if (Math.abs(item.position[1] - footY) > 0.45) continue;

      const minDist = playerRadius + itemRadius;
      const dx = x - item.position[0];
      const dz = z - item.position[2];
      const distSq = dx * dx + dz * dz;
      if (distSq < minDist * minDist) {
        const dist = Math.sqrt(Math.max(1e-6, distSq));
        const nx = dist > 1e-3 ? dx / dist : 1;
        const nz = dist > 1e-3 ? dz / dist : 0;
        const push = minDist - dist + 0.002;
        x += nx * push;
        z += nz * push;
      }
    }

    x = THREE.MathUtils.clamp(x, -12.9, 12.9);
    z = THREE.MathUtils.clamp(z, -15.6, 8.2);
  }

  return { x, z, floorY: getMansionFloorHeight(x, z) };
}

/**
 * Finds a guaranteed collision-free standing point for First-Person spawn near (targetX, targetZ).
 */
export function findSafeFirstPersonSpawn(
  targetX: number,
  targetZ: number,
  items: PlacedFurniture[]
): { x: number; z: number; floorY: number } {
  const floorY = getMansionFloorHeight(targetX, targetZ);
  const firstTry = resolvePlayerCollision(targetX, targetZ, floorY, 0.34, items);
  if (Math.hypot(firstTry.x - targetX, firstTry.z - targetZ) < 1.2) {
    return firstTry;
  }

  // Fallback spiral offsets around target
  const offsets: [number, number][] = [
    [0, 0.8],
    [0, -0.8],
    [0.8, 0],
    [-0.8, 0],
    [0, 1.8],
    [1.4, 1.4],
    [-1.4, 1.4],
  ];
  for (const [ox, oz] of offsets) {
    const cx = targetX + ox;
    const cz = targetZ + oz;
    const fy = getMansionFloorHeight(cx, cz);
    const res = resolvePlayerCollision(cx, cz, fy, 0.34, items);
    if (Math.hypot(res.x - cx, res.z - cz) < 0.75) {
      return res;
    }
  }

  // Ultimate safe spot on Courtyard South Walkway
  return resolvePlayerCollision(0, 3.6, 0, 0.34, items);
}

// Segment vs Axis-Aligned Bounding Box (Slab method) returning nearest t in [0, 1] or null
function intersectSegmentAABB(
  ax: number,
  ay: number,
  az: number,
  bx: number,
  by: number,
  bz: number,
  box: BoxCollider3D,
  expand: number
): number | null {
  const dx = bx - ax;
  const dy = by - ay;
  const dz = bz - az;

  let tMin = 0;
  let tMax = 1;

  const minX = box.minX - expand;
  const maxX = box.maxX + expand;
  if (Math.abs(dx) < 1e-8) {
    if (ax < minX || ax > maxX) return null;
  } else {
    const inv = 1 / dx;
    let t1 = (minX - ax) * inv;
    let t2 = (maxX - ax) * inv;
    if (t1 > t2) {
      const tmp = t1;
      t1 = t2;
      t2 = tmp;
    }
    tMin = Math.max(tMin, t1);
    tMax = Math.min(tMax, t2);
    if (tMin > tMax) return null;
  }

  const minY = box.minY - expand;
  const maxY = box.maxY + expand;
  if (Math.abs(dy) < 1e-8) {
    if (ay < minY || ay > maxY) return null;
  } else {
    const inv = 1 / dy;
    let t1 = (minY - ay) * inv;
    let t2 = (maxY - ay) * inv;
    if (t1 > t2) {
      const tmp = t1;
      t1 = t2;
      t2 = tmp;
    }
    tMin = Math.max(tMin, t1);
    tMax = Math.min(tMax, t2);
    if (tMin > tMax) return null;
  }

  const minZ = box.minZ - expand;
  const maxZ = box.maxZ + expand;
  if (Math.abs(dz) < 1e-8) {
    if (az < minZ || az > maxZ) return null;
  } else {
    const inv = 1 / dz;
    let t1 = (minZ - az) * inv;
    let t2 = (maxZ - az) * inv;
    if (t1 > t2) {
      const tmp = t1;
      t1 = t2;
      t2 = tmp;
    }
    tMin = Math.max(tMin, t1);
    tMax = Math.min(tMax, t2);
    if (tMin > tMax) return null;
  }

  return tMin;
}

/**
 * Prevents the God Mode camera from slipping inside walls/ceilings or behind opaque room walls
 * relative to OrbitControls.target, eliminating near-plane clipping and visual corruption.
 */
export function constrainGodCamera(
  camPos: THREE.Vector3,
  targetPos: THREE.Vector3,
  cutawayMode: boolean,
  minWallClearance = 0.36
): void {
  // 1. Keep camera strictly above ground/slab floors
  const camFloor = getMansionFloorHeight(camPos.x, camPos.z);
  const minY = camFloor + 0.42;
  if (camPos.y < minY) camPos.y = minY;
  if (camPos.y > 28) camPos.y = 28;

  // 2. If target is inside an interior room and roof is closed, clamp camera ray against room walls & roofs
  const targetZone = detectMansionZone(targetPos.x, targetPos.z);
  const enforceLineOfSightWalls = !cutawayMode && targetZone.isInterior;

  if (enforceLineOfSightWalls) {
    let bestT = 1.0;
    for (const box of MANSION_STATIC_COLLIDERS) {
      if (!box.blocksCamera) continue;
      if (cutawayMode && box.isRoof) continue;

      const tHit = intersectSegmentAABB(
        targetPos.x,
        targetPos.y,
        targetPos.z,
        camPos.x,
        camPos.y,
        camPos.z,
        box,
        minWallClearance
      );
      // Only pull camera back if hit occurred along segment strictly after target (t > 0.02)
      if (tHit !== null && tHit > 0.02 && tHit < bestT) {
        bestT = tHit;
      }
    }

    if (bestT < 1.0) {
      const dist = camPos.distanceTo(targetPos);
      const minDist = 0.95;
      const safeT = dist > 0.001 ? Math.max(minDist / dist, bestT - 0.01) : bestT;
      const clampedT = Math.min(1.0, Math.max(0.05, safeT));
      camPos.lerpVectors(targetPos, camPos, clampedT);
    }
  }

  // 3. Push camera out of any wall/ceiling box volume so the camera center never embeds inside a mesh
  for (let pass = 0; pass < 2; pass++) {
    for (const box of MANSION_STATIC_COLLIDERS) {
      if (!box.blocksCamera) continue;
      if (cutawayMode && box.isRoof) continue;

      const exMinX = box.minX - minWallClearance;
      const exMaxX = box.maxX + minWallClearance;
      const exMinY = box.minY - minWallClearance;
      const exMaxY = box.maxY + minWallClearance;
      const exMinZ = box.minZ - minWallClearance;
      const exMaxZ = box.maxZ + minWallClearance;

      if (
        camPos.x > exMinX &&
        camPos.x < exMaxX &&
        camPos.y > exMinY &&
        camPos.y < exMaxY &&
        camPos.z > exMinZ &&
        camPos.z < exMaxZ
      ) {
        const dLeft = camPos.x - exMinX;
        const dRight = exMaxX - camPos.x;
        const dDown = camPos.y - exMinY;
        const dUp = exMaxY - camPos.y;
        const dFront = camPos.z - exMinZ;
        const dBack = exMaxZ - camPos.z;
        const m = Math.min(dLeft, dRight, dDown, dUp, dFront, dBack);
        if (m === dLeft) camPos.x = exMinX;
        else if (m === dRight) camPos.x = exMaxX;
        else if (m === dDown) camPos.y = exMinY;
        else if (m === dUp) camPos.y = exMaxY;
        else if (m === dFront) camPos.z = exMinZ;
        else camPos.z = exMaxZ;
      }
    }
  }

  // Re-ensure floor safety after push-out
  const finalFloor = getMansionFloorHeight(camPos.x, camPos.z);
  if (camPos.y < finalFloor + 0.42) {
    camPos.y = finalFloor + 0.42;
  }
}
