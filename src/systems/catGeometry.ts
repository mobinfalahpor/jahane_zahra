import * as THREE from 'three';

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = THREE.MathUtils.clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

// ============================================================================
// 1. Sculpted Feline Head Geometry with Recessed Orbital Eye Sockets
// ============================================================================
let cachedHeadGeo: THREE.BufferGeometry | null = null;

export function createSculptedCatHeadGeometry(): THREE.BufferGeometry {
  if (cachedHeadGeo) return cachedHeadGeo;

  // phiStart = -PI/2 puts u=0.5 dead-center (+Z front face) and UV seam on the back (-Z)
  const geo = new THREE.SphereGeometry(0.205, 48, 36, -Math.PI / 2, Math.PI * 2);
  const pos = geo.attributes.position as THREE.BufferAttribute;

  for (let i = 0; i < pos.count; i++) {
    let x = pos.getX(i);
    let y = pos.getY(i);
    let z = pos.getZ(i);

    // 1. Classic appealing domestic cat skull proportions: plush soft cheeks, rounded dome
    const cheekBand = Math.exp(-Math.pow((y + 0.028) / 0.095, 2));
    x *= 1.08 + 0.205 * cheekBand;

    // Gentle cranial dome taper above eyes & soft jaw taper below
    if (y > 0.04) {
      y *= 0.915;
    } else {
      x *= 0.965;
      y *= 0.975;
    }

    // Subtle back-of-skull elongation for realistic occipital balance
    if (z < -0.02) {
      z *= 1.04;
    }

    // 2. Sculpted anterior facial anatomy (+Z hemisphere)
    if (z > 0.01) {
      // Raised superciliary brow ridges right above each eye socket
      const browArchL = Math.exp(-Math.pow((x - 0.072) / 0.056, 2)) * Math.exp(-Math.pow((y - 0.068) / 0.044, 2));
      const browArchR = Math.exp(-Math.pow((x + 0.072) / 0.056, 2)) * Math.exp(-Math.pow((y - 0.068) / 0.044, 2));
      const browCenter = Math.exp(-Math.pow(x / 0.085, 2)) * Math.exp(-Math.pow((y - 0.068) / 0.048, 2));

      // Refined feline nose bridge running cleanly between the eyes down to the muzzle
      const bridge =
        Math.exp(-Math.pow(x / 0.042, 2)) *
        Math.exp(-Math.pow((y + 0.008) / 0.068, 2));

      // Proportional lower muzzle / snout fullness
      const muzzle =
        Math.exp(-Math.pow((y + 0.048) / 0.056, 2)) *
        Math.exp(-Math.pow(x / 0.092, 2));

      // Recessed oral pocket below upper lip so articulated lower jaw opens cleanly in Yawn/Eat
      const mouthPocket =
        Math.exp(-Math.pow(x / 0.056, 2)) *
        Math.exp(-Math.pow((y + 0.098) / 0.036, 2));

      // Zygomatic cheekbone ridge framing the outer-lower eye contour
      const malarL = Math.exp(-Math.pow((x - 0.128) / 0.055, 2)) * Math.exp(-Math.pow((y + 0.018) / 0.048, 2));
      const malarR = Math.exp(-Math.pow((x + 0.128) / 0.055, 2)) * Math.exp(-Math.pow((y + 0.018) / 0.048, 2));

      // TRUE 3D ORBITAL EYE SOCKETS: indented cleanly around (±0.082, +0.022)
      const distEyeL = Math.hypot((x - 0.082) / 0.056, (y - 0.022) / 0.052);
      const distEyeR = Math.hypot((x + 0.082) / 0.056, (y - 0.022) / 0.052);
      const socketL = Math.exp(-distEyeL * distEyeL * 1.45);
      const socketR = Math.exp(-distEyeR * distEyeR * 1.45);

      z +=
        0.014 * browCenter +
        0.011 * (browArchL + browArchR) +
        0.02 * bridge +
        0.022 * muzzle +
        0.012 * (malarL + malarR) -
        0.036 * (socketL + socketR) -
        0.03 * mouthPocket;
    }

    pos.setXYZ(i, x, y, z);
  }

  geo.computeVertexNormals();
  geo.userData.shared = true;
  cachedHeadGeo = geo;
  return geo;
}

// ============================================================================
// 2. Sculpted 3D Eye Geometries (Concave Iris Cup + Thick Beveled Eyelids)
// ============================================================================
let cachedIrisCupGeo: THREE.BufferGeometry | null = null;

export function createDishedIrisGeometry(radius = 0.045): THREE.BufferGeometry {
  if (cachedIrisCupGeo) return cachedIrisCupGeo;

  const radialSegs = 32;
  const ringSegs = 12;
  const positions: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  for (let r = 0; r <= ringSegs; r++) {
    const t = r / ringSegs; // 0 = center, 1 = outer limbal edge
    const rad = t * radius;
    // Slight inward optical dish toward pupil, subtle convex rim near limbal edge
    const z = -0.0055 * (1 - t * t) + 0.002 * Math.sin(t * Math.PI);

    for (let s = 0; s <= radialSegs; s++) {
      const a = (s / radialSegs) * Math.PI * 2;
      const x = Math.cos(a) * rad;
      const y = Math.sin(a) * rad;
      positions.push(x, y, z);
      // Planar XY UV mapping: zero polar pinch, razor-sharp radial stroma fibers
      uvs.push(0.5 + (x / radius) * 0.46, 0.5 + (y / radius) * 0.46);
    }
  }

  const stride = radialSegs + 1;
  for (let r = 0; r < ringSegs; r++) {
    for (let s = 0; s < radialSegs; s++) {
      const a = r * stride + s;
      const b = (r + 1) * stride + s;
      const c = (r + 1) * stride + s + 1;
      const d = r * stride + s + 1;
      indices.push(a, b, d);
      indices.push(b, c, d);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  geo.userData.shared = true;
  cachedIrisCupGeo = geo;
  return geo;
}

/**
 * Thick double-walled spherical cap eyelid so eyelids have genuine 3D rim thickness
 * (never look like paper-thin flat shells) and frame the cornea cleanly.
 */
function buildThickEyelidGeometry(
  outerR: number,
  innerR: number,
  thetaStart: number,
  thetaLength: number
): THREE.BufferGeometry {
  const phiSegs = 24;
  const thetaSegs = 12;
  const positions: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  // Two concentric wrap-around spherical shells covering outer corners seamlessly
  const addShell = (rad: number) => {
    for (let it = 0; it <= thetaSegs; it++) {
      const v = it / thetaSegs;
      const theta = thetaStart + v * thetaLength;
      const sinT = Math.sin(theta);
      const cosT = Math.cos(theta);
      for (let ip = 0; ip <= phiSegs; ip++) {
        const u = ip / phiSegs;
        const phi = -0.16 + u * (Math.PI + 0.32); // slight wrap past eye corners
        const x = -rad * Math.cos(phi) * sinT;
        const y = rad * cosT;
        const z = rad * Math.sin(phi) * sinT;
        positions.push(x, y, z);
        uvs.push(u, 1 - v);
      }
    }
  };

  addShell(outerR);
  const innerOffset = (thetaSegs + 1) * (phiSegs + 1);
  addShell(innerR);

  const stride = phiSegs + 1;
  // Outer shell faces outward
  for (let it = 0; it < thetaSegs; it++) {
    for (let ip = 0; ip < phiSegs; ip++) {
      const a = it * stride + ip;
      const b = (it + 1) * stride + ip;
      const c = (it + 1) * stride + ip + 1;
      const d = it * stride + ip + 1;
      indices.push(a, b, d, b, c, d);
    }
  }
  // Inner shell faces inward
  for (let it = 0; it < thetaSegs; it++) {
    for (let ip = 0; ip < phiSegs; ip++) {
      const a = innerOffset + it * stride + ip;
      const b = innerOffset + (it + 1) * stride + ip;
      const c = innerOffset + (it + 1) * stride + ip + 1;
      const d = innerOffset + it * stride + ip + 1;
      indices.push(a, d, b, b, d, c);
    }
  }
  // Stitch leading/trailing eyelid rims cleanly for visible anatomical eyelid edge thickness
  for (const row of [0, thetaSegs]) {
    for (let ip = 0; ip < phiSegs; ip++) {
      const o0 = row * stride + ip;
      const o1 = row * stride + ip + 1;
      const i0 = innerOffset + o0;
      const i1 = innerOffset + o1;
      if (row === thetaSegs) {
        indices.push(o0, i0, o1, i0, i1, o1);
      } else {
        indices.push(o0, o1, i0, i0, o1, i1);
      }
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  geo.userData.shared = true;
  return geo;
}

let cachedUpperLidGeo: THREE.BufferGeometry | null = null;
let cachedLowerLidGeo: THREE.BufferGeometry | null = null;

export function getUpperEyelidGeometry(): THREE.BufferGeometry {
  if (!cachedUpperLidGeo) {
    cachedUpperLidGeo = buildThickEyelidGeometry(0.0545, 0.0495, 0, Math.PI * 0.58);
  }
  return cachedUpperLidGeo;
}

export function getLowerEyelidGeometry(): THREE.BufferGeometry {
  if (!cachedLowerLidGeo) {
    cachedLowerLidGeo = buildThickEyelidGeometry(0.0535, 0.049, Math.PI * 0.42, Math.PI * 0.58);
  }
  return cachedLowerLidGeo;
}

// ============================================================================
// 3. Sculpted Nose, Anatomical Cupped Ears & Tapered Curved 3D Whiskers
// ============================================================================
let cachedNoseGeo: THREE.BufferGeometry | null = null;

export function createSculptedCatNoseGeometry(): THREE.BufferGeometry {
  if (cachedNoseGeo) return cachedNoseGeo;

  const shape = new THREE.Shape();
  shape.moveTo(0, -0.016);
  shape.bezierCurveTo(0.014, -0.008, 0.026, 0.004, 0.025, 0.015);
  shape.bezierCurveTo(0.014, 0.021, -0.014, 0.021, -0.025, 0.015);
  shape.bezierCurveTo(-0.026, 0.004, -0.014, -0.008, 0, -0.016);

  const geo = new THREE.ExtrudeGeometry(shape, {
    depth: 0.016,
    bevelEnabled: true,
    bevelSegments: 5,
    steps: 2,
    bevelSize: 0.0065,
    bevelThickness: 0.007,
  });
  geo.center();

  // Gently curve nose wings back & sculpt subtle philtrum groove + nostril dimples
  const pos = geo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const y = pos.getY(i);
    let z = pos.getZ(i);
    if (z > 0) {
      z -= Math.abs(x) * 0.22;
      // Vertical philtrum indent along lower midline
      const philtrum = Math.exp(-Math.pow(x / 0.005, 2)) * smoothstep(0.006, -0.014, y);
      z -= philtrum * 0.003;
      // Subtle nostril hollows on left/right lower wings
      const nL = Math.exp(-Math.pow((x - 0.011) / 0.0048, 2) - Math.pow((y + 0.002) / 0.0045, 2));
      const nR = Math.exp(-Math.pow((x + 0.011) / 0.0048, 2) - Math.pow((y + 0.002) / 0.0045, 2));
      z -= (nL + nR) * 0.0045;
    }
    pos.setXYZ(i, x, y, z);
  }
  geo.computeVertexNormals();
  geo.userData.shared = true;
  cachedNoseGeo = geo;
  return geo;
}

export function createSculptedCatEarGeometry(
  width: number,
  height: number,
  depth: number,
  isInner = false
): THREE.BufferGeometry {
  const pts = [
    new THREE.Vector2(0.0, -height * 0.5),
    new THREE.Vector2(width * 0.99, -height * 0.44),
    new THREE.Vector2(width * 0.87, -height * 0.14),
    new THREE.Vector2(width * 0.63, height * 0.16),
    new THREE.Vector2(width * 0.35, height * 0.39),
    new THREE.Vector2(width * 0.14, height * 0.475),
    new THREE.Vector2(0.0, height * 0.5),
  ];
  const geo = new THREE.LatheGeometry(pts, 24);
  const pos = geo.attributes.position as THREE.BufferAttribute;

  for (let i = 0; i < pos.count; i++) {
    let x = pos.getX(i);
    const y = pos.getY(i);
    let z = pos.getZ(i);

    const hNorm = THREE.MathUtils.clamp((y + height * 0.5) / height, 0, 1);
    z *= depth / width;

    if (z > 0) {
      // Cupped hollow concave front auricle
      z *= isInner ? 0.55 : 0.34;
      const hollow = Math.exp(-Math.pow(x / (width * 0.62), 2)) * Math.sin(hNorm * Math.PI);
      z -= hollow * (isInner ? 0.006 : 0.014);
    } else {
      // Gently convex sculpted dorsal pinna
      z -= Math.sin(hNorm * Math.PI) * (isInner ? 0.004 : 0.015);
    }

    // Subtle feline Henry's pocket lateral notch lower outer margin
    if (!isInner && hNorm > 0.12 && hNorm < 0.42 && x > width * 0.5) {
      x *= 0.95;
    } else {
      x *= 1 + Math.sin(hNorm * Math.PI) * 0.06;
    }

    pos.setXYZ(i, x, y, z);
  }

  geo.computeVertexNormals();
  return geo;
}

export function createTaperedWhiskerGeometry(
  points: THREE.Vector3[],
  baseRadius = 0.0023,
  tipRadius = 0.00045
): THREE.BufferGeometry {
  const curve = new THREE.CatmullRomCurve3(points);
  const tubularSegs = 12;
  const radialSegs = 6;
  const frames = curve.computeFrenetFrames(tubularSegs, false);

  const positions: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];
  const P = new THREE.Vector3();
  const vertex = new THREE.Vector3();

  for (let i = 0; i <= tubularSegs; i++) {
    const t = i / tubularSegs;
    curve.getPointAt(t, P);
    const N = frames.normals[i];
    const B = frames.binormals[i];
    const radius = THREE.MathUtils.lerp(baseRadius, tipRadius, Math.pow(t, 0.72));

    for (let j = 0; j <= radialSegs; j++) {
      const v = (j / radialSegs) * Math.PI * 2;
      const sin = Math.sin(v);
      const cos = -Math.cos(v);
      vertex.x = P.x + radius * (cos * N.x + sin * B.x);
      vertex.y = P.y + radius * (cos * N.y + sin * B.y);
      vertex.z = P.z + radius * (cos * N.z + sin * B.z);
      positions.push(vertex.x, vertex.y, vertex.z);
      uvs.push(t, j / radialSegs);
    }
  }

  const stride = radialSegs + 1;
  for (let i = 0; i < tubularSegs; i++) {
    for (let j = 0; j < radialSegs; j++) {
      const a = i * stride + j;
      const b = (i + 1) * stride + j;
      const c = (i + 1) * stride + j + 1;
      const d = i * stride + j + 1;
      indices.push(a, b, d, b, c, d);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

// ============================================================================
// 4. Skinned Organic Feline Torso (Pelvis -> Waist -> Ribcage -> Neck)
// ============================================================================
interface TorsoSlice {
  z: number;
  rx: number;
  ryTop: number;
  ryBot: number;
  yOffset: number;
}

const TORSO_SLICES: TorsoSlice[] = [
  { z: -0.285, rx: 0.016, ryTop: 0.016, ryBot: 0.016, yOffset: 0.014 },
  { z: -0.255, rx: 0.096, ryTop: 0.098, ryBot: 0.09, yOffset: 0.012 },
  { z: -0.205, rx: 0.136, ryTop: 0.132, ryBot: 0.12, yOffset: 0.008 }, // muscular hips
  { z: -0.145, rx: 0.14, ryTop: 0.134, ryBot: 0.122, yOffset: 0.002 },
  { z: -0.055, rx: 0.122, ryTop: 0.122, ryBot: 0.112, yOffset: -0.004 }, // graceful feline waist
  { z: 0.04, rx: 0.128, ryTop: 0.128, ryBot: 0.122, yOffset: 0.002 },
  { z: 0.135, rx: 0.136, ryTop: 0.136, ryBot: 0.13, yOffset: 0.016 }, // lithe ribcage/shoulders
  { z: 0.21, rx: 0.118, ryTop: 0.122, ryBot: 0.114, yOffset: 0.052 }, // rising chest & neck
  { z: 0.248, rx: 0.092, ryTop: 0.096, ryBot: 0.09, yOffset: 0.118 }, // seamless neck collar
  { z: 0.268, rx: 0.032, ryTop: 0.032, ryBot: 0.032, yOffset: 0.146 },
];

export function createSkinnedCatTorso(
  material: THREE.Material,
  spinePelvis: THREE.Bone,
  spineMid: THREE.Bone,
  spineChest: THREE.Bone
): { mesh: THREE.SkinnedMesh; skeleton: THREE.Skeleton } {
  const axialSteps = 26;
  const radialSegs = 36;

  // Catmull-Rom smooth interpolation across profile parameters
  const zCurve = new THREE.CatmullRomCurve3(
    TORSO_SLICES.map((s) => new THREE.Vector3(s.rx, s.ryTop, s.z))
  );
  const botCurve = new THREE.CatmullRomCurve3(
    TORSO_SLICES.map((s) => new THREE.Vector3(s.ryBot, s.yOffset, s.z))
  );

  const positions: number[] = [];
  const uvs: number[] = [];
  const skinIndices: number[] = [];
  const skinWeights: number[] = [];
  const indices: number[] = [];

  for (let i = 0; i <= axialSteps; i++) {
    const v = i / axialSteps; // 0 = rump, 1 = chest/neck
    const p1 = zCurve.getPointAt(v);
    const p2 = botCurve.getPointAt(v);
    const rx = p1.x;
    const ryTop = p1.y;
    const z = p1.z;
    const ryBot = p2.x;
    const yOffset = p2.y;

    // Smooth bone weights across 3 spine bones: 0=Pelvis, 1=Mid, 2=Chest
    const w0 = Math.exp(-Math.pow((v - 0.15) / 0.3, 2));
    const w1 = Math.exp(-Math.pow((v - 0.5) / 0.28, 2));
    const w2 = Math.exp(-Math.pow((v - 0.85) / 0.3, 2));
    const wSum = w0 + w1 + w2;

    for (let j = 0; j <= radialSegs; j++) {
      const u = j / radialSegs; // 0 & 1 = belly (-Y), 0.5 = dorsal spine (+Y)
      const theta = u * Math.PI * 2;
      const sinT = Math.sin(theta);
      const cosT = Math.cos(theta);

      const x = -sinT * rx;
      const isTop = -cosT > 0;
      const ry = isTop ? ryTop : ryBot;
      // Subtle dorsal spine crown roundness
      const spineBump = isTop ? Math.pow(-cosT, 3) * 0.008 : 0;
      const y = yOffset + (-cosT) * ry + spineBump;

      positions.push(x, y, z);
      uvs.push(u, v);
      skinIndices.push(0, 1, 2, 0);
      skinWeights.push(w0 / wSum, w1 / wSum, w2 / wSum, 0);
    }
  }

  const stride = radialSegs + 1;
  for (let i = 0; i < axialSteps; i++) {
    for (let j = 0; j < radialSegs; j++) {
      const a = i * stride + j;
      const b = (i + 1) * stride + j;
      const c = (i + 1) * stride + j + 1;
      const d = i * stride + j + 1;
      // Winding (a, b, d), (b, c, d) yields outward normals
      indices.push(a, b, d, b, c, d);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
  geo.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));
  geo.setIndex(indices);
  geo.computeVertexNormals();

  const mesh = new THREE.SkinnedMesh(geo, material);
  mesh.name = 'TorsoMesh';
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.frustumCulled = false;

  const skeleton = new THREE.Skeleton([spinePelvis, spineMid, spineChest]);
  return { mesh, skeleton };
}

// ============================================================================
// 5. Continuous 6-Bone Skinned Tapered Plush Tail
// ============================================================================
export function createSkinnedCatTail(
  material: THREE.Material,
  tailBones: THREE.Bone[]
): { mesh: THREE.SkinnedMesh; skeleton: THREE.Skeleton } {
  // Tail builds upward along +Y in rest bind-pose relative to tailBones[0] root
  const boneCount = tailBones.length; // 6 bones spaced evenly by 0.11m -> total length ~0.55m
  const segLen = 0.11;
  const totalLen = (boneCount - 1) * segLen;
  const axialSteps = 30;
  const radialSegs = 16;

  const positions: number[] = [];
  const uvs: number[] = [];
  const skinIndices: number[] = [];
  const skinWeights: number[] = [];
  const indices: number[] = [];

  for (let i = 0; i <= axialSteps; i++) {
    const v = i / axialSteps; // 0 = tail root, 1 = plush tip
    const y = v * totalLen;

    // Thick cozy root tapering softly, with a plush rounded spherical dome at tip
    let radius = THREE.MathUtils.lerp(0.052, 0.035, Math.pow(v, 0.78));
    if (v > 0.9) {
      const tipT = (v - 0.9) / 0.1;
      radius *= Math.sqrt(Math.max(0.005, 1 - tipT * tipT));
    }

    // Smooth 2-bone linear blend with gentle overlap
    const bonePos = v * (boneCount - 1);
    const b0 = Math.min(boneCount - 2, Math.floor(bonePos));
    const b1 = b0 + 1;
    const frac = smoothstep(0.1, 0.9, bonePos - b0);

    for (let j = 0; j <= radialSegs; j++) {
      const u = j / radialSegs;
      const a = u * Math.PI * 2;
      const x = Math.cos(a) * radius;
      const z = Math.sin(a) * radius;
      positions.push(x, y, z);
      // v=0 at base -> v=1 at tip matches tailAlbedo rings -> cream tip
      uvs.push(u, v);
      skinIndices.push(b0, b1, 0, 0);
      skinWeights.push(1 - frac, frac, 0, 0);
    }
  }

  const stride = radialSegs + 1;
  for (let i = 0; i < axialSteps; i++) {
    for (let j = 0; j < radialSegs; j++) {
      const a = i * stride + j;
      const b = (i + 1) * stride + j;
      const c = (i + 1) * stride + j + 1;
      const d = i * stride + j + 1;
      // Outward winding around +Y cylinder
      indices.push(a, b, d, b, c, d);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(skinIndices, 4));
  geo.setAttribute('skinWeight', new THREE.Float32BufferAttribute(skinWeights, 4));
  geo.setIndex(indices);
  geo.computeVertexNormals();

  const mesh = new THREE.SkinnedMesh(geo, material);
  mesh.name = 'TailSkinnedMesh';
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.frustumCulled = false;

  const skeleton = new THREE.Skeleton(tailBones);
  return { mesh, skeleton };
}

// ============================================================================
// 6. Sculpted 4-Toe Feline Paw + Pads + Subtle Claws
// ============================================================================
let cachedPawBaseGeo: THREE.BufferGeometry | null = null;
let cachedToeGeo: THREE.BufferGeometry | null = null;
let cachedClawGeo: THREE.BufferGeometry | null = null;

export function createCatPawGroup(
  furMat: THREE.Material,
  creamMat: THREE.Material,
  padMat: THREE.Material,
  clawMat: THREE.Material,
  isBack: boolean
): THREE.Group {
  if (!cachedPawBaseGeo) {
    cachedPawBaseGeo = new THREE.SphereGeometry(0.052, 16, 12);
    cachedPawBaseGeo.scale(1.06, 0.56, 1.18);
    cachedPawBaseGeo.userData.shared = true;
  }
  if (!cachedToeGeo) {
    cachedToeGeo = new THREE.SphereGeometry(0.0175, 10, 10);
    cachedToeGeo.scale(0.88, 0.72, 1.25);
    cachedToeGeo.userData.shared = true;
  }
  if (!cachedClawGeo) {
    cachedClawGeo = new THREE.ConeGeometry(0.0038, 0.014, 6);
    cachedClawGeo.rotateX(Math.PI * 0.56);
    cachedClawGeo.userData.shared = true;
  }

  const pawGroup = new THREE.Group();
  pawGroup.name = 'PawGroup';

  // Soft fur bridge over wrist/ankle + cream socked paw
  const ankleMuff = new THREE.Mesh(cachedPawBaseGeo, furMat);
  ankleMuff.scale.set(0.82, 0.72, 0.72);
  ankleMuff.position.set(0, 0.012, -0.008);
  ankleMuff.castShadow = true;
  pawGroup.add(ankleMuff);

  const pawBase = new THREE.Mesh(cachedPawBaseGeo, creamMat);
  pawBase.scale.set(isBack ? 0.96 : 1.04, 1, isBack ? 1.12 : 1.0);
  pawBase.castShadow = true;
  pawBase.receiveShadow = true;
  pawGroup.add(pawBase);

  // 4 distinct anatomically fanned feline toes + toe beans + retracted ivory claws
  const toePositions: [number, number, number][] = [
    [-0.029, -0.009, 0.041],
    [-0.01, -0.009, 0.052],
    [0.01, -0.009, 0.052],
    [0.029, -0.009, 0.041],
  ];
  for (const [tx, ty, tz] of toePositions) {
    const toe = new THREE.Mesh(cachedToeGeo, creamMat);
    toe.position.set(tx, ty, tz);
    toe.rotation.y = tx * 5.2;
    toe.castShadow = true;
    pawGroup.add(toe);

    const toeBean = new THREE.Mesh(cachedToeGeo, padMat);
    toeBean.scale.set(0.55, 0.25, 0.52);
    toeBean.position.set(tx, -0.024, tz * 0.96);
    pawGroup.add(toeBean);

    const claw = new THREE.Mesh(cachedClawGeo, clawMat);
    claw.position.set(tx, -0.013, tz + 0.017);
    claw.rotation.y = tx * 5.2;
    pawGroup.add(claw);
  }

  // Central heart-shaped pink metacarpal pad
  const mainPad = new THREE.Mesh(cachedToeGeo, padMat);
  mainPad.scale.set(1.45, 0.24, 1.15);
  mainPad.position.set(0, -0.026, 0.006);
  pawGroup.add(mainPad);

  return pawGroup;
}

// ============================================================================
// 7. Layered Silhouette Fur-Tuft Blade Geometry + Instancer Helper
// ============================================================================
let cachedFurTuftGeo: THREE.BufferGeometry | null = null;

export function getFurTuftGeometry(): THREE.BufferGeometry {
  if (cachedFurTuftGeo) return cachedFurTuftGeo;

  // Curved multi-segment softly tapered fur plume blade (velvety swept outline)
  const segsY = 4;
  const widthBase = 0.02;
  const height = 0.036;
  const positions: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  for (let iy = 0; iy <= segsY; iy++) {
    const t = iy / segsY;
    const y = t * height;
    // Soft bell-to-taper width curve so tip points delicately without harsh razor edges
    const halfW = widthBase * 0.5 * Math.sin(Math.pow(1 - t, 0.72) * Math.PI * 0.5) * (1 - t * 0.65 + 0.15);
    const zCurve = Math.pow(t, 1.7) * 0.014;
    const zCrown = 0.004 * (1 - t);

    positions.push(-halfW, y, zCurve);
    positions.push(0, y, zCurve + zCrown);
    positions.push(halfW, y, zCurve);

    uvs.push(0, t, 0.5, t, 1, t);
  }

  for (let iy = 0; iy < segsY; iy++) {
    const r0 = iy * 3;
    const r1 = (iy + 1) * 3;
    indices.push(r0, r0 + 1, r1, r0 + 1, r1 + 1, r1);
    indices.push(r0 + 1, r0 + 2, r1 + 1, r0 + 2, r1 + 2, r1 + 1);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  geo.userData.shared = true;
  cachedFurTuftGeo = geo;
  return geo;
}

export interface FurTuftSpec {
  position: [number, number, number];
  normal: [number, number, number];
  scale: [number, number, number];
  roll?: number;
}

export function createFurTuftInstancedMesh(
  name: string,
  specs: FurTuftSpec[],
  material: THREE.Material
): THREE.InstancedMesh {
  const geo = getFurTuftGeometry();
  const inst = new THREE.InstancedMesh(geo, material, specs.length);
  inst.name = name;
  inst.castShadow = false;
  inst.receiveShadow = true;

  const dummy = new THREE.Object3D();
  const upVec = new THREE.Vector3(0, 1, 0);
  const dirVec = new THREE.Vector3();
  const quat = new THREE.Quaternion();
  const rollQuat = new THREE.Quaternion();

  specs.forEach((s, idx) => {
    dirVec.set(s.normal[0], s.normal[1], s.normal[2]).normalize();
    quat.setFromUnitVectors(upVec, dirVec);
    if (s.roll) {
      rollQuat.setFromAxisAngle(dirVec, s.roll);
      quat.premultiply(rollQuat);
    }
    dummy.position.set(s.position[0], s.position[1], s.position[2]);
    dummy.quaternion.copy(quat);
    dummy.scale.set(s.scale[0], s.scale[1], s.scale[2]);
    dummy.updateMatrix();
    inst.setMatrixAt(idx, dummy.matrix);
  });

  inst.instanceMatrix.needsUpdate = true;
  inst.computeBoundingSphere();
  return inst;
}
