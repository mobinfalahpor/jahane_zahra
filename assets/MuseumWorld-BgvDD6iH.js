import { a as __toESM } from "./rolldown-runtime-DQp2zzRu.js";
import { At as SphereGeometry, Ct as RepeatWrapping, E as CylinderGeometry, H as LatheGeometry, It as Vector2, J as LinearMipmapLinearFilter, Mt as Texture, Pt as TorusGeometry, Vt as require_react, c as useThree, et as MathUtils, h as BoxGeometry, l as require_jsx_runtime, ot as MeshStandardMaterial, q as LinearFilter, s as useFrame, t as Sparkles, v as CanvasTexture, wt as SRGBColorSpace } from "./r3f-core-XgHUAlSk.js";
import { a as Compass, f as useUniverseStore, i as RotateCcw, l as toPersianDigits, o as createLucideIcon, s as audioEngine, t as X, u as SceneCanvas, w as getGraphicsProfile } from "./entry-Br_QEXnh.js";
import { t as Sun } from "./sun-ByRizIWH.js";
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronLeft = createLucideIcon("chevron-left", [["path", {
	d: "m15 18-6-6 6-6",
	key: "1wnfg3"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronRight = createLucideIcon("chevron-right", [["path", {
	d: "m9 18 6-6-6-6",
	key: "mthhwq"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Crosshair = createLucideIcon("crosshair", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "22",
		x2: "18",
		y1: "12",
		y2: "12",
		key: "l9bcsi"
	}],
	["line", {
		x1: "6",
		x2: "2",
		y1: "12",
		y2: "12",
		key: "13hhkx"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "6",
		y2: "2",
		key: "10w3f3"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "22",
		y2: "18",
		key: "15g9kq"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var SlidersHorizontal = createLucideIcon("sliders-horizontal", [
	["path", {
		d: "M10 5H3",
		key: "1qgfaw"
	}],
	["path", {
		d: "M12 19H3",
		key: "yhmn1j"
	}],
	["path", {
		d: "M14 3v4",
		key: "1sua03"
	}],
	["path", {
		d: "M16 17v4",
		key: "1q0r14"
	}],
	["path", {
		d: "M21 12h-9",
		key: "1o4lsq"
	}],
	["path", {
		d: "M21 19h-5",
		key: "1rlt1p"
	}],
	["path", {
		d: "M21 5h-7",
		key: "1oszz2"
	}],
	["path", {
		d: "M8 10v4",
		key: "tgpxqk"
	}],
	["path", {
		d: "M8 12H3",
		key: "a7s4jb"
	}]
]);
// \0virtual:museum-photos
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var _virtual_museum_photos_default = [
	"IMG_20261126_003700_814.jpg",
	"IMG_20261126_003700_901.jpg",
	"IMG_20261126_003701_135.jpg",
	"IMG_20261126_003701_343.jpg",
	"IMG_20261126_003701_350.jpg",
	"IMG_20261126_003707_599.jpg",
	"IMG_20261126_003707_717.jpg",
	"IMG_20261126_003707_730.jpg",
	"IMG_20261126_003707_745.jpg",
	"IMG_20261126_003707_773.jpg",
	"IMG_20261126_003708_121.jpg",
	"IMG_20261126_003708_284.jpg",
	"IMG_20261126_003708_288.jpg",
	"IMG_20261126_003708_303.jpg",
	"IMG_20261126_003708_360.jpg",
	"IMG_20261126_003715_198.jpg",
	"IMG_20261126_003715_338.jpg",
	"IMG_20261126_003715_475.jpg",
	"IMG_20261126_003715_590.jpg",
	"IMG_20261126_003715_764.jpg",
	"IMG_20261126_003715_867.jpg",
	"IMG_20261126_003715_878.jpg",
	"IMG_20261126_003715_981.jpg",
	"IMG_20261126_003715_990.jpg",
	"IMG_20261126_003716_017.jpg",
	"IMG_20261126_003724_367.jpg",
	"IMG_20261126_003724_466.jpg",
	"IMG_20261126_003724_638.jpg",
	"IMG_20261126_003724_761.jpg",
	"IMG_20261126_003724_987.jpg",
	"IMG_20261126_003725_003.jpg",
	"IMG_20261126_003725_128.jpg",
	"IMG_20261126_003725_835.jpg",
	"IMG_20261126_003725_868.jpg",
	"IMG_20261126_003726_093.jpg",
	"IMG_20261126_003726_439.jpg",
	"IMG_20261126_003726_498.jpg",
	"IMG_20261126_003726_546.jpg",
	"IMG_20261126_003726_616.jpg",
	"IMG_20261126_003730_657.jpg",
	"IMG_20261126_003730_904.jpg",
	"IMG_20261126_003736_721.jpg",
	"IMG_20261126_003736_773.jpg",
	"IMG_20261126_003736_775.jpg",
	"IMG_20261126_003736_787.jpg",
	"IMG_20261126_003736_852.jpg",
	"IMG_20261126_003740_569.jpg",
	"IMG_20261126_003741_105.jpg",
	"IMG_20261126_003744_721.jpg",
	"IMG_20261126_003744_835.jpg",
	"IMG_20261126_003747_815.jpg",
	"IMG_20261126_003748_708.jpg",
	"IMG_20261126_003752_650.jpg",
	"IMG_20261126_003759_425.jpg",
	"IMG_20261126_003759_426.jpg",
	"IMG_20261126_003759_726.jpg",
	"IMG_20261126_003759_853.jpg",
	"IMG_20261126_003759_903.jpg",
	"IMG_20261126_003759_949.jpg",
	"IMG_20261126_003803_695.jpg",
	"IMG_20261126_003804_951.jpg",
	"IMG_20261126_003805_026.jpg",
	"IMG_20261126_003805_115.jpg",
	"IMG_20261126_003812_477.jpg"
];
// src/worlds/Museum/museumPhysics.ts
var PLAYER_CAPSULE_RADIUS = .42;
var PLAYER_EYE_HEIGHT = 1.72;
function getHall4Bounds(hall2DepthExtra) {
	const hall2NorthZ = -41 - hall2DepthExtra;
	const hall4SouthZ = hall2NorthZ;
	return {
		hall2NorthZ,
		hall4SouthZ,
		hall4NorthZ: hall4SouthZ - 16
	};
}
function getMuseumHallSpawns(hall2DepthExtra = 0) {
	const { hall4SouthZ } = getHall4Bounds(hall2DepthExtra);
	return {
		hall1: {
			x: 0,
			y: PLAYER_EYE_HEIGHT,
			z: 4.35,
			yaw: 0,
			pitch: .04,
			label: "تالار بزرگ فرانسوی"
		},
		hall2: {
			x: 0,
			y: PLAYER_EYE_HEIGHT,
			z: -10.8,
			yaw: 0,
			pitch: .03,
			label: "تالار نقاشی"
		},
		hall3: {
			x: 10.8,
			y: PLAYER_EYE_HEIGHT,
			z: -1.5,
			yaw: -Math.PI / 2,
			pitch: .04,
			label: "تالار مجسمه"
		},
		hall4: {
			x: 0,
			y: PLAYER_EYE_HEIGHT,
			z: hall4SouthZ - 2.6,
			yaw: 0,
			pitch: .04,
			label: "گالری نورگیر"
		},
		hall5: {
			x: -10.8,
			y: PLAYER_EYE_HEIGHT,
			z: -1.5,
			yaw: Math.PI / 2,
			pitch: .03,
			label: "تالار منتخب"
		}
	};
}
var MUSEUM_START_POS = getMuseumHallSpawns(0).hall1;
function getHallAtPosition(x, z, hall2DepthExtra) {
	const { hall2NorthZ } = getHall4Bounds(hall2DepthExtra);
	if (z < hall2NorthZ) return "hall4";
	if (x > 8.5) return "hall3";
	if (x < -8.5) return "hall5";
	if (z < -8.5) return "hall2";
	return "hall1";
}
/**
* ساخت کلایدرهای دقیق ۵ تالار توسعه‌یافته موزه پاریسی، درگاه‌های اتصال، ستون‌های کرنتین، مجسمه‌ها، نیم‌تنه‌ها، نیمکت‌ها و میزهای دکوراتیو
*/
function buildMuseumCollisionWorld(hall2DepthExtra, hasHall4Cimaises = false) {
	const r = PLAYER_CAPSULE_RADIUS;
	const { hall2NorthZ, hall4SouthZ, hall4NorthZ } = getHall4Bounds(hall2DepthExtra);
	const hall4CenterZ = (hall4SouthZ + hall4NorthZ) / 2;
	const safeRects = [
		{
			id: "safe-hall1",
			minX: -8.08,
			maxX: 8.08,
			minZ: -8.08,
			maxZ: 6.08
		},
		{
			id: "safe-hall2",
			minX: -8.08,
			maxX: 8.08,
			minZ: hall2NorthZ + r,
			maxZ: -8.92
		},
		{
			id: "safe-hall3",
			minX: 9.32,
			maxX: 28.08,
			minZ: -8.08,
			maxZ: 5.08
		},
		{
			id: "safe-hall4",
			minX: -24.08,
			maxX: 24.08,
			minZ: hall4NorthZ + r,
			maxZ: hall4SouthZ - .25 - r
		},
		{
			id: "safe-hall5",
			minX: -28.08,
			maxX: -9.32,
			minZ: -7.08,
			maxZ: 3.08
		},
		{
			id: "door-h1-h2",
			minX: -1.98,
			maxX: 1.98,
			minZ: -9.57,
			maxZ: -7.43
		},
		{
			id: "door-h2-h4",
			minX: -1.98,
			maxX: 1.98,
			minZ: hall2NorthZ - .25 - r - .65,
			maxZ: hall2NorthZ + r + .65
		},
		{
			id: "door-h1-h3",
			minX: 7.43,
			maxX: 9.97,
			minZ: -3.38,
			maxZ: .38000000000000006
		},
		{
			id: "door-h1-h5",
			minX: -9.97,
			maxX: -7.43,
			minZ: -3.08,
			maxZ: .08000000000000002
		}
	];
	const boxes = [
		{
			id: "bench-h1-w",
			minX: -4.45,
			maxX: -3.45,
			minZ: -2.25,
			maxZ: .25
		},
		{
			id: "bench-h1-e",
			minX: 3.45,
			maxX: 4.45,
			minZ: -2.25,
			maxZ: .25
		},
		{
			id: "bench-h2-south",
			minX: -.68,
			maxX: .68,
			minZ: -18.85,
			maxZ: -16.15
		},
		{
			id: "bench-h2-north",
			minX: -.68,
			maxX: .68,
			minZ: -31.35,
			maxZ: -28.65
		},
		{
			id: "console-h2-w",
			minX: -6.15,
			maxX: -4.45,
			minZ: -9.65,
			maxZ: -8.85
		},
		{
			id: "console-h2-e",
			minX: 4.45,
			maxX: 6.15,
			minZ: -9.65,
			maxZ: -8.85
		},
		{
			id: "bench-h3-n",
			minX: 17.3,
			maxX: 19.7,
			minZ: -5.65,
			maxZ: -4.75
		},
		{
			id: "bench-h3-s",
			minX: 17.3,
			maxX: 19.7,
			minZ: 1.75,
			maxZ: 2.65
		},
		{
			id: "bench-h4-center",
			minX: -1.35,
			maxX: 1.35,
			minZ: hall4CenterZ - .45,
			maxZ: hall4CenterZ + .45
		},
		{
			id: "bench-h5-e",
			minX: -15,
			maxX: -14,
			minZ: -3.15,
			maxZ: -.85
		},
		{
			id: "bench-h5-w",
			minX: -23,
			maxX: -22,
			minZ: -3.15,
			maxZ: -.85
		},
		{
			id: "console-h5-n",
			minX: -19.4,
			maxX: -17.6,
			minZ: -7.25,
			maxZ: -6.45
		}
	];
	if (hasHall4Cimaises) boxes.push({
		id: "cimaise-h4-w",
		minX: -19.2,
		maxX: -11.2,
		minZ: hall4CenterZ - .28,
		maxZ: hall4CenterZ + .28
	}, {
		id: "cimaise-h4-e",
		minX: 11.2,
		maxX: 19.2,
		minZ: hall4CenterZ - .28,
		maxZ: hall4CenterZ + .28
	});
	else boxes.push({
		id: "bench-h4-w",
		minX: -16.25,
		maxX: -13.75,
		minZ: hall4CenterZ - .45,
		maxZ: hall4CenterZ + .45
	}, {
		id: "bench-h4-e",
		minX: 13.75,
		maxX: 16.25,
		minZ: hall4CenterZ - .45,
		maxZ: hall4CenterZ + .45
	});
	const circles = [
		...[
			-7.2,
			-4.4,
			1.4,
			4.2
		].flatMap((z, i) => [{
			id: `col-h1-w-${i}`,
			x: -7.55,
			z,
			radius: .42
		}, {
			id: `col-h1-e-${i}`,
			x: 7.55,
			z,
			radius: .42
		}]),
		{
			id: "urn-h1-sw",
			x: -4.4,
			z: 4.6,
			radius: .56
		},
		{
			id: "urn-h1-se",
			x: 4.4,
			z: 4.6,
			radius: .56
		},
		...[
			-10,
			-15,
			-20,
			-25,
			-30,
			-35,
			-39.5
		].flatMap((z, i) => [{
			id: `col-h2-w-${i}`,
			x: -7.55,
			z,
			radius: .42
		}, {
			id: `col-h2-e-${i}`,
			x: 7.55,
			z,
			radius: .42
		}])
	];
	for (let z = -44.5; z > hall2NorthZ + 1.2; z -= 5) {
		circles.push({
			id: `col-h2-ext-w-${z}`,
			x: -7.55,
			z,
			radius: .42
		});
		circles.push({
			id: `col-h2-ext-e-${z}`,
			x: 7.55,
			z,
			radius: .42
		});
	}
	circles.push({
		id: "bust-h2-w1",
		x: -6.75,
		z: -20,
		radius: .48
	});
	circles.push({
		id: "bust-h2-e1",
		x: 6.75,
		z: -20,
		radius: .48
	});
	circles.push({
		id: "bust-h2-w2",
		x: -6.75,
		z: -30,
		radius: .48
	});
	circles.push({
		id: "bust-h2-e2",
		x: 6.75,
		z: -30,
		radius: .48
	});
	circles.push({
		id: "statue-h3-hero",
		x: 18.5,
		z: -1.5,
		radius: 1.12
	});
	circles.push({
		id: "bust-h3-nw",
		x: 14,
		z: -5,
		radius: .58
	});
	circles.push({
		id: "bust-h3-ne",
		x: 23,
		z: -5,
		radius: .58
	});
	circles.push({
		id: "bust-h3-sw",
		x: 14,
		z: 2,
		radius: .58
	});
	circles.push({
		id: "bust-h3-se",
		x: 23,
		z: 2,
		radius: .58
	});
	for (const cx of [10.1, 26.9]) for (const cz of [-7.3, 4.3]) circles.push({
		id: `col-h3-${cx}-${cz}`,
		x: cx,
		z: cz,
		radius: .42
	});
	for (const cz of [hall4SouthZ - 2.6, hall4NorthZ + 2.6]) {
		circles.push({
			id: `col-h4-w-${cz}`,
			x: -7.4,
			z: cz,
			radius: .42
		});
		circles.push({
			id: `col-h4-e-${cz}`,
			x: 7.4,
			z: cz,
			radius: .42
		});
	}
	circles.push({
		id: "urn-h4-nw",
		x: -3.2,
		z: hall4NorthZ + 1.2,
		radius: .58
	});
	circles.push({
		id: "urn-h4-ne",
		x: 3.2,
		z: hall4NorthZ + 1.2,
		radius: .58
	});
	circles.push({
		id: "bust-h4-w",
		x: -3.4,
		z: hall4CenterZ,
		radius: .52
	});
	circles.push({
		id: "bust-h4-e",
		x: 3.4,
		z: hall4CenterZ,
		radius: .52
	});
	circles.push({
		id: "urn-h5-sw",
		x: -22.25,
		z: 2.75,
		radius: .5
	});
	circles.push({
		id: "urn-h5-se",
		x: -14.75,
		z: 2.75,
		radius: .5
	});
	return {
		safeRects,
		boxes,
		circles,
		hall2NorthZ,
		hall4SouthZ,
		hall4NorthZ
	};
}
function clampPointToSafeRectUnion(x, z, safeRects) {
	for (const rect of safeRects) if (x >= rect.minX && x <= rect.maxX && z >= rect.minZ && z <= rect.maxZ) return {
		x,
		z,
		clamped: false
	};
	let bestX = x;
	let bestZ = z;
	let bestDistSq = Infinity;
	for (const rect of safeRects) {
		const cx = Math.max(rect.minX, Math.min(x, rect.maxX));
		const cz = Math.max(rect.minZ, Math.min(z, rect.maxZ));
		const dx = x - cx;
		const dz = z - cz;
		const distSq = dx * dx + dz * dz;
		if (distSq < bestDistSq) {
			bestDistSq = distSq;
			bestX = cx;
			bestZ = cz;
		}
	}
	return {
		x: bestX,
		z: bestZ,
		clamped: true
	};
}
/**
* حل برخورد کپسول بازیکن با اتحاد نواحی مجاز تالارها و تمام اشیاء داخلی با لغزش روان
*/
function resolveCapsulePosition2D(x, z, world, radius = PLAYER_CAPSULE_RADIUS) {
	let px = x;
	let pz = z;
	let collided = false;
	for (let pass = 0; pass < 6; pass++) {
		const u1 = clampPointToSafeRectUnion(px, pz, world.safeRects);
		px = u1.x;
		pz = u1.z;
		if (u1.clamped) collided = true;
		for (const box of world.boxes) {
			const closestX = Math.max(box.minX, Math.min(px, box.maxX));
			const closestZ = Math.max(box.minZ, Math.min(pz, box.maxZ));
			const dx = px - closestX;
			const dz = pz - closestZ;
			const distSq = dx * dx + dz * dz;
			if (distSq < radius * radius) {
				collided = true;
				if (distSq > 1e-8) {
					const dist = Math.sqrt(distSq);
					const overlap = radius - dist;
					px += dx / dist * overlap;
					pz += dz / dist * overlap;
				} else {
					const dLeft = Math.abs(px - box.minX);
					const dRight = Math.abs(box.maxX - px);
					const dTop = Math.abs(pz - box.minZ);
					const dBottom = Math.abs(box.maxZ - pz);
					const m = Math.min(dLeft, dRight, dTop, dBottom);
					if (m === dLeft) px = box.minX - radius;
					else if (m === dRight) px = box.maxX + radius;
					else if (m === dTop) pz = box.minZ - radius;
					else pz = box.maxZ + radius;
				}
			}
		}
		for (const cir of world.circles) {
			const dx = px - cir.x;
			const dz = pz - cir.z;
			const minDist = radius + cir.radius;
			const distSq = dx * dx + dz * dz;
			if (distSq < minDist * minDist) {
				collided = true;
				const dist = Math.sqrt(distSq);
				if (dist > 1e-6) {
					const overlap = minDist - dist;
					px += dx / dist * overlap;
					pz += dz / dist * overlap;
				} else px += cir.x <= 0 ? minDist : -minDist;
			}
		}
		const u2 = clampPointToSafeRectUnion(px, pz, world.safeRects);
		px = u2.x;
		pz = u2.z;
		if (u2.clamped) collided = true;
	}
	return {
		x: px,
		z: pz,
		collided
	};
}
/**
* حرکت پیوسته با زیرگام‌بندی ضدعبور (Anti-Tunneling Swept Sub-stepping)
*/
function movePlayerWithCollision(startX, startZ, deltaX, deltaZ, world, radius = PLAYER_CAPSULE_RADIUS) {
	const dist = Math.hypot(deltaX, deltaZ);
	if (dist < 1e-6) return resolveCapsulePosition2D(startX, startZ, world, radius);
	const maxStep = Math.max(.08, radius * .28);
	const steps = Math.max(1, Math.ceil(dist / maxStep));
	const stepX = deltaX / steps;
	const stepZ = deltaZ / steps;
	let cx = startX;
	let cz = startZ;
	let anyCollision = false;
	for (let i = 0; i < steps; i++) {
		const res = resolveCapsulePosition2D(cx + stepX, cz + stepZ, world, radius);
		cx = res.x;
		cz = res.z;
		if (res.collided) anyCollision = true;
	}
	return {
		x: cx,
		z: cz,
		collided: anyCollision
	};
}
// src/worlds/Museum/museumTextures.ts
function makeCanvas(w, h) {
	const canvas = document.createElement("canvas");
	canvas.width = w;
	canvas.height = h;
	return [canvas, canvas.getContext("2d")];
}
function finalizeColorTex(canvas, repeatX = 1, repeatY = 1, anisotropy = 8) {
	const tex = new CanvasTexture(canvas);
	tex.colorSpace = SRGBColorSpace;
	tex.wrapS = RepeatWrapping;
	tex.wrapT = RepeatWrapping;
	tex.repeat.set(repeatX, repeatY);
	tex.anisotropy = anisotropy;
	return tex;
}
function finalizeDataTex(canvas, repeatX = 1, repeatY = 1, anisotropy = 8) {
	const tex = new CanvasTexture(canvas);
	tex.wrapS = RepeatWrapping;
	tex.wrapT = RepeatWrapping;
	tex.repeat.set(repeatX, repeatY);
	tex.anisotropy = anisotropy;
	return tex;
}
/**
* پارکت چوبی هفت‌وهشتی اصیل پاریسی (Point de Hongrie / Chevron Oak)
*/
function createHerringboneParquetTextures(repeatX = 6, repeatY = 6, anisotropy = 8) {
	const S = 512;
	const [canvas, ctx] = makeCanvas(S, S);
	const [rCanvas, rCtx] = makeCanvas(S, S);
	ctx.fillStyle = "#7d5333";
	ctx.fillRect(0, 0, S, S);
	rCtx.fillStyle = "#686868";
	rCtx.fillRect(0, 0, S, S);
	const cols = 4;
	const rows = 8;
	const colW = S / cols;
	const rowH = S / rows;
	const tones = [
		"#8b5d3b",
		"#7b4f30",
		"#966642",
		"#6f4629",
		"#a0704b"
	];
	for (let row = -2; row < 10; row++) for (let col = 0; col < cols; col++) {
		const dir = col % 2 === 0 ? -1 : 1;
		const x0 = col * colW;
		const x1 = x0 + colW;
		const y0 = row * rowH;
		const shift = dir === -1 ? -41.6 : rowH * .65;
		const seed = row * 17 + col * 31 & 1023;
		const tone = tones[seed % tones.length];
		ctx.beginPath();
		ctx.moveTo(x0, y0);
		ctx.lineTo(x1, y0 + shift);
		ctx.lineTo(x1, y0 + shift + rowH);
		ctx.lineTo(x0, y0 + rowH);
		ctx.closePath();
		ctx.fillStyle = tone;
		ctx.fill();
		ctx.save();
		ctx.clip();
		ctx.strokeStyle = "rgba(42, 24, 12, 0.22)";
		ctx.lineWidth = 1.2;
		for (let g = 1; g < 6; g++) {
			const gy = y0 + g / 6 * rowH;
			ctx.beginPath();
			ctx.moveTo(x0, gy);
			ctx.lineTo(x1, gy + shift);
			ctx.stroke();
		}
		ctx.restore();
		ctx.strokeStyle = "rgba(34, 20, 10, 0.45)";
		ctx.lineWidth = 2;
		ctx.stroke();
		const rVal = 82 + seed % 38;
		rCtx.beginPath();
		rCtx.moveTo(x0, y0);
		rCtx.lineTo(x1, y0 + shift);
		rCtx.lineTo(x1, y0 + shift + rowH);
		rCtx.lineTo(x0, y0 + rowH);
		rCtx.closePath();
		rCtx.fillStyle = `rgb(${rVal},${rVal},${rVal})`;
		rCtx.fill();
		rCtx.strokeStyle = "rgb(165,165,165)";
		rCtx.lineWidth = 2;
		rCtx.stroke();
	}
	return {
		map: finalizeColorTex(canvas, repeatX, repeatY, anisotropy),
		roughnessMap: finalizeDataTex(rCanvas, repeatX, repeatY, anisotropy)
	};
}
/**
* سنگ مرمر کلاسیک کارارا و کرم پاریسی با لوزی‌های مرمر تیره
*/
function createBeauxArtsMarbleTextures(repeatX = 5, repeatY = 5, anisotropy = 8) {
	const S = 512;
	const [canvas, ctx] = makeCanvas(S, S);
	const [rCanvas, rCtx] = makeCanvas(S, S);
	ctx.fillStyle = "#ebe3d5";
	ctx.fillRect(0, 0, S, S);
	rCtx.fillStyle = "#383838";
	rCtx.fillRect(0, 0, S, S);
	const tiles = 4;
	const tile = S / tiles;
	for (let ty = 0; ty < tiles; ty++) for (let tx = 0; tx < tiles; tx++) {
		const isAlt = (tx + ty) % 2 === 1;
		const x = tx * tile;
		const y = ty * tile;
		ctx.fillStyle = isAlt ? "#dfd4c1" : "#f1ebe0";
		ctx.fillRect(x, y, tile, tile);
		ctx.save();
		ctx.beginPath();
		ctx.rect(x, y, tile, tile);
		ctx.clip();
		ctx.strokeStyle = isAlt ? "rgba(136, 122, 104, 0.25)" : "rgba(155, 148, 138, 0.22)";
		for (let v = 0; v < 5; v++) {
			ctx.beginPath();
			let vx = x + (v * 37 + tx * 29) % tile;
			let vy = y;
			ctx.moveTo(vx, vy);
			for (let s = 1; s <= 4; s++) {
				vx += Math.sin(v * 2.1 + s + ty) * 22;
				vy = y + s / 4 * tile;
				ctx.lineTo(vx, vy);
			}
			ctx.lineWidth = 1.1 + v % 2 * .7;
			ctx.stroke();
		}
		ctx.restore();
	}
	ctx.strokeStyle = "rgba(128, 114, 98, 0.38)";
	ctx.lineWidth = 3;
	rCtx.strokeStyle = "rgb(145, 145, 145)";
	rCtx.lineWidth = 3;
	for (let i = 0; i <= tiles; i++) {
		const p = i * tile;
		ctx.beginPath();
		ctx.moveTo(p, 0);
		ctx.lineTo(p, S);
		ctx.stroke();
		ctx.beginPath();
		ctx.moveTo(0, p);
		ctx.lineTo(S, p);
		ctx.stroke();
		rCtx.beginPath();
		rCtx.moveTo(p, 0);
		rCtx.lineTo(p, S);
		rCtx.stroke();
		rCtx.beginPath();
		rCtx.moveTo(0, p);
		rCtx.lineTo(S, p);
		rCtx.stroke();
	}
	for (let ty = 0; ty <= tiles; ty++) for (let tx = 0; tx <= tiles; tx++) {
		const cx = tx * tile;
		const cy = ty * tile;
		const d = 14;
		ctx.beginPath();
		ctx.moveTo(cx, cy - d);
		ctx.lineTo(cx + d, cy);
		ctx.lineTo(cx, cy + d);
		ctx.lineTo(cx - d, cy);
		ctx.closePath();
		ctx.fillStyle = "#3c3b38";
		ctx.fill();
		ctx.strokeStyle = "#c8a962";
		ctx.lineWidth = 1.2;
		ctx.stroke();
	}
	return {
		map: finalizeColorTex(canvas, repeatX, repeatY, anisotropy),
		roughnessMap: finalizeDataTex(rCanvas, repeatX, repeatY, anisotropy)
	};
}
/**
* دیوار سنگی کرم و عاجی بوزآر با قاب‌بندی گچ‌بری و نوار طلایی
*/
function createBoiserieWallTexture(baseColor = "#ece2cf", panelColor = "#e2d4bc", goldColor = "#c9a65b", repeatX = 4, repeatY = 1, anisotropy = 8) {
	const W = 512;
	const H = 512;
	const [canvas, ctx] = makeCanvas(W, H);
	const [bCanvas, bCtx] = makeCanvas(W, H);
	ctx.fillStyle = baseColor;
	ctx.fillRect(0, 0, W, H);
	bCtx.fillStyle = "#808080";
	bCtx.fillRect(0, 0, W, H);
	for (let i = 0; i < 650; i++) {
		const x = i * 197 % W;
		const y = i * 313 % H;
		ctx.fillStyle = i % 2 === 0 ? "rgba(255,255,255,0.08)" : "rgba(90,75,55,0.04)";
		ctx.fillRect(x, y, 4, 2);
	}
	const dadoTop = 376;
	ctx.fillStyle = panelColor;
	ctx.fillRect(0, dadoTop, W, 136);
	ctx.fillStyle = "#d4c3a4";
	ctx.fillRect(0, 362, W, 16);
	ctx.fillStyle = goldColor;
	ctx.fillRect(0, 372, W, 4);
	bCtx.fillStyle = "#c8c8c8";
	bCtx.fillRect(0, 362, W, 16);
	ctx.strokeStyle = "#bfa986";
	ctx.lineWidth = 4;
	ctx.strokeRect(38, 396, 436, 94);
	bCtx.strokeStyle = "#d4d4d4";
	bCtx.lineWidth = 6;
	bCtx.strokeRect(38, 396, 436, 94);
	ctx.fillStyle = panelColor;
	ctx.fillRect(42, 46, 428, 290);
	ctx.strokeStyle = "#cab794";
	ctx.lineWidth = 8;
	ctx.strokeRect(42, 46, 428, 290);
	ctx.strokeStyle = goldColor;
	ctx.lineWidth = 3;
	ctx.strokeRect(56, 60, 400, 262);
	bCtx.strokeStyle = "#ededed";
	bCtx.lineWidth = 10;
	bCtx.strokeRect(42, 46, 428, 290);
	ctx.fillStyle = "#ded0b6";
	ctx.fillRect(0, 0, W, 24);
	ctx.fillStyle = goldColor;
	ctx.fillRect(0, 22, W, 4);
	bCtx.fillStyle = "#dedede";
	bCtx.fillRect(0, 0, W, 24);
	return {
		map: finalizeColorTex(canvas, repeatX, repeatY, anisotropy),
		bumpMap: finalizeDataTex(bCanvas, repeatX, repeatY, anisotropy)
	};
}
/**
* کاغذ دیواری پارچه‌ای داماسک کلاسیک (برای تالار نقاشی سالن کاره و تالار صمیمی)
*/
function createDamaskWallTexture(bgHex = "#5d2129", motifHex = "#48161d", dadoHex = "#d9cbb3", repeatX = 5, repeatY = 1, anisotropy = 8) {
	const W = 512;
	const H = 512;
	const [canvas, ctx] = makeCanvas(W, H);
	ctx.fillStyle = bgHex;
	ctx.fillRect(0, 0, W, H);
	const step = 128;
	for (let y = 32; y < 350; y += step) for (let x = 32; x < W; x += step) {
		const cx = x + 32;
		const cy = y + 32;
		ctx.save();
		ctx.translate(cx, cy);
		ctx.fillStyle = motifHex;
		for (let p = 0; p < 8; p++) {
			ctx.save();
			ctx.rotate(p / 8 * Math.PI * 2);
			ctx.beginPath();
			ctx.ellipse(0, -18, 7, 15, 0, 0, Math.PI * 2);
			ctx.fill();
			ctx.restore();
		}
		ctx.beginPath();
		ctx.arc(0, 0, 8, 0, Math.PI * 2);
		ctx.fill();
		ctx.restore();
	}
	ctx.fillStyle = "rgba(255,245,230,0.03)";
	for (let x = 0; x < W; x += 4) ctx.fillRect(x, 0, 1, 376);
	ctx.fillStyle = dadoHex;
	ctx.fillRect(0, 376, W, 136);
	ctx.fillStyle = "#c9a65b";
	ctx.fillRect(0, 370, W, 7);
	ctx.fillRect(0, 22, W, 5);
	ctx.strokeStyle = "#b4a285";
	ctx.lineWidth = 4;
	ctx.strokeRect(36, 396, 440, 94);
	return finalizeColorTex(canvas, repeatX, repeatY, anisotropy);
}
/**
* نقاشی سقفی کلاسیک پاریسی (Fresco Celestial Ceiling Medallion)
*/
function createCeilingFrescoTexture(anisotropy = 8) {
	const S = 1024;
	const [canvas, ctx] = makeCanvas(S, S);
	ctx.fillStyle = "#e7dcc8";
	ctx.fillRect(0, 0, S, S);
	ctx.strokeStyle = "#c8a355";
	ctx.lineWidth = 22;
	ctx.strokeRect(28, 28, 968, 968);
	ctx.strokeStyle = "#9a8668";
	ctx.lineWidth = 8;
	ctx.strokeRect(52, 52, 920, 920);
	const cx = S / 2;
	const cy = S / 2;
	const rad = S * .41;
	const sky = ctx.createRadialGradient(cx, cy, 40, cx, cy, rad);
	sky.addColorStop(0, "#f8edd2");
	sky.addColorStop(.38, "#d9e3ea");
	sky.addColorStop(.75, "#9cb6c9");
	sky.addColorStop(1, "#687e99");
	ctx.save();
	ctx.beginPath();
	ctx.arc(cx, cy, rad, 0, Math.PI * 2);
	ctx.fillStyle = sky;
	ctx.fill();
	ctx.lineWidth = 18;
	ctx.strokeStyle = "#c9a456";
	ctx.stroke();
	ctx.clip();
	const cloudCenters = [
		[
			342,
			392,
			120,
			62
		],
		[
			662,
			362,
			130,
			68
		],
		[
			302,
			642,
			140,
			74
		],
		[
			697,
			622,
			125,
			65
		],
		[
			cx,
			292,
			110,
			52
		],
		[
			cx,
			737,
			115,
			58
		]
	];
	for (const [x, y, rx, ry] of cloudCenters) {
		const cg = ctx.createRadialGradient(x, y, 8, x, y, rx);
		cg.addColorStop(0, "rgba(255, 246, 232, 0.72)");
		cg.addColorStop(.6, "rgba(241, 224, 200, 0.35)");
		cg.addColorStop(1, "rgba(241, 224, 200, 0)");
		ctx.fillStyle = cg;
		ctx.beginPath();
		ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
		ctx.fill();
	}
	ctx.strokeStyle = "rgba(255, 228, 165, 0.35)";
	for (let i = 0; i < 24; i++) {
		const a = i / 24 * Math.PI * 2;
		ctx.lineWidth = i % 2 === 0 ? 5 : 2;
		ctx.beginPath();
		ctx.moveTo(cx + Math.cos(a) * 32, cy + Math.sin(a) * 32);
		ctx.lineTo(cx + Math.cos(a) * 260, cy + Math.sin(a) * 260);
		ctx.stroke();
	}
	for (let i = 0; i < 24; i++) {
		const a = i / 24 * Math.PI * 2;
		ctx.save();
		ctx.translate(cx + Math.cos(a) * 340, cy + Math.sin(a) * 340);
		ctx.rotate(a + Math.PI / 2);
		ctx.fillStyle = "rgba(210, 174, 96, 0.72)";
		ctx.beginPath();
		ctx.ellipse(0, 0, 16, 6, 0, 0, Math.PI * 2);
		ctx.fill();
		ctx.restore();
	}
	ctx.restore();
	for (const [rx, ry] of [
		[115, 115],
		[909, 115],
		[115, 909],
		[909, 909]
	]) {
		ctx.beginPath();
		ctx.arc(rx, ry, 42, 0, Math.PI * 2);
		ctx.fillStyle = "#d2b26a";
		ctx.fill();
		ctx.beginPath();
		ctx.arc(rx, ry, 24, 0, Math.PI * 2);
		ctx.fillStyle = "#efe5d2";
		ctx.fill();
	}
	return finalizeColorTex(canvas, 1, 1, anisotropy);
}
/**
* صفحه ساعت تزئینی تالار نورگیر اورسی (بدون نوشته و متن، فقط خطوط شعاعی و طلایی)
*/
function createPalaceClockTexture(anisotropy = 8) {
	const S = 512;
	const [canvas, ctx] = makeCanvas(S, S);
	const cx = S / 2;
	const cy = S / 2;
	ctx.fillStyle = "#f5eedc";
	ctx.fillRect(0, 0, S, S);
	ctx.beginPath();
	ctx.arc(cx, cy, 242, 0, Math.PI * 2);
	ctx.fillStyle = "#f8f2e4";
	ctx.fill();
	ctx.lineWidth = 18;
	ctx.strokeStyle = "#c59f4b";
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(cx, cy, 198, 0, Math.PI * 2);
	ctx.lineWidth = 4;
	ctx.strokeStyle = "#332c24";
	ctx.stroke();
	for (let i = 0; i < 12; i++) {
		const a = i / 12 * Math.PI * 2;
		ctx.save();
		ctx.translate(cx, cy);
		ctx.rotate(a);
		ctx.fillStyle = "#241e18";
		ctx.fillRect(-5, -225, 10, 26);
		ctx.restore();
	}
	for (let i = 0; i < 60; i++) {
		if (i % 5 === 0) continue;
		const a = i / 60 * Math.PI * 2;
		ctx.save();
		ctx.translate(cx, cy);
		ctx.rotate(a);
		ctx.fillStyle = "rgba(36,30,24,0.55)";
		ctx.fillRect(-1.5, -220, 3, 10);
		ctx.restore();
	}
	ctx.save();
	ctx.translate(cx, cy);
	ctx.rotate(-.85);
	ctx.fillStyle = "#1d1814";
	ctx.fillRect(-6, -125, 12, 135);
	ctx.restore();
	ctx.save();
	ctx.translate(cx, cy);
	ctx.rotate(1.1);
	ctx.fillStyle = "#1d1814";
	ctx.fillRect(-4, -172, 8, 182);
	ctx.restore();
	ctx.beginPath();
	ctx.arc(cx, cy, 14, 0, Math.PI * 2);
	ctx.fillStyle = "#c59f4b";
	ctx.fill();
	return finalizeColorTex(canvas, 1, 1, anisotropy);
}
/**
* بافت نرم سایه تماس زیر مجسمه‌ها و مبلمان
*/
function createContactShadowTexture() {
	const S = 128;
	const [canvas, ctx] = makeCanvas(S, S);
	const grad = ctx.createRadialGradient(64, 64, 8, 64, 64, 62);
	grad.addColorStop(0, "rgba(12, 10, 16, 0.52)");
	grad.addColorStop(.55, "rgba(12, 10, 16, 0.22)");
	grad.addColorStop(1, "rgba(12, 10, 16, 0)");
	ctx.fillStyle = grad;
	ctx.fillRect(0, 0, S, S);
	const tex = new CanvasTexture(canvas);
	tex.colorSpace = SRGBColorSpace;
	return tex;
}
// src/worlds/Museum/museumModels.tsx
var import_jsx_runtime = require_jsx_runtime();
var sharedPhotoTexturePromises = /* @__PURE__ */ new Map();
var sharedPhotoTextures = /* @__PURE__ */ new Map();
var photoLoadQueue = [];
var activePhotoLoads = 0;
var photoCacheEpoch = 0;
function getMaxConcurrentPhotoLoads() {
	if (typeof navigator !== "undefined" && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) return 2;
	return 4;
}
function createCrispPhotoTexture(img, anisotropy, maxTextureDim) {
	const natW = img.naturalWidth || img.width || 4;
	const natH = img.naturalHeight || img.height || 3;
	const aspect = natW / natH;
	let source = img;
	const maxSide = Math.max(natW, natH);
	if (maxTextureDim > 0 && maxSide > maxTextureDim) {
		const scale = maxTextureDim / maxSide;
		const targetW = Math.max(2, Math.round(natW * scale));
		const targetH = Math.max(2, Math.round(natH * scale));
		const canvas = document.createElement("canvas");
		canvas.width = targetW;
		canvas.height = targetH;
		const ctx = canvas.getContext("2d");
		if (ctx) {
			ctx.imageSmoothingEnabled = true;
			ctx.imageSmoothingQuality = "high";
			ctx.drawImage(img, 0, 0, targetW, targetH);
			source = canvas;
		}
	}
	const tex = new Texture(source);
	tex.colorSpace = SRGBColorSpace;
	tex.minFilter = LinearMipmapLinearFilter;
	tex.magFilter = LinearFilter;
	tex.generateMipmaps = true;
	tex.anisotropy = anisotropy;
	tex.userData.shared = true;
	tex.needsUpdate = true;
	return {
		tex,
		aspect
	};
}
function pumpPhotoLoadQueue() {
	const maxConcurrent = getMaxConcurrentPhotoLoads();
	while (activePhotoLoads < maxConcurrent && photoLoadQueue.length > 0) {
		let bestIdx = 0;
		for (let i = 1; i < photoLoadQueue.length; i++) if (photoLoadQueue[i].priority < photoLoadQueue[bestIdx].priority) bestIdx = i;
		const job = photoLoadQueue.splice(bestIdx, 1)[0];
		if (job.epoch !== photoCacheEpoch) {
			job.reject(/* @__PURE__ */ new Error("Museum photo cache disposed"));
			continue;
		}
		activePhotoLoads++;
		const img = new Image();
		img.decoding = "async";
		img.crossOrigin = "anonymous";
		const finishSuccess = () => {
			activePhotoLoads = Math.max(0, activePhotoLoads - 1);
			if (job.epoch !== photoCacheEpoch) {
				pumpPhotoLoadQueue();
				return;
			}
			try {
				const result = createCrispPhotoTexture(img, job.anisotropy, job.maxTextureDim);
				sharedPhotoTextures.set(job.src, result);
				job.resolve(result);
			} catch (err) {
				sharedPhotoTexturePromises.delete(job.src);
				job.reject(err);
			}
			pumpPhotoLoadQueue();
		};
		const finishError = (err) => {
			activePhotoLoads = Math.max(0, activePhotoLoads - 1);
			if (job.epoch === photoCacheEpoch) sharedPhotoTexturePromises.delete(job.src);
			job.reject(err);
			pumpPhotoLoadQueue();
		};
		img.onload = () => {
			if (typeof img.decode === "function") img.decode().then(finishSuccess, finishSuccess);
			else finishSuccess();
		};
		img.onerror = (err) => finishError(err);
		img.src = job.src;
	}
}
function bumpQueuedPhotoPriority(src, priority) {
	for (const job of photoLoadQueue) if (job.src === src && priority < job.priority) job.priority = priority;
}
function disposeMuseumPhotoCache() {
	photoCacheEpoch++;
	while (photoLoadQueue.length > 0) photoLoadQueue.pop()?.reject(/* @__PURE__ */ new Error("Museum photo cache disposed"));
	sharedPhotoTextures.forEach(({ tex }) => {
		tex.dispose();
	});
	sharedPhotoTextures.clear();
	sharedPhotoTexturePromises.clear();
}
function loadCachedMuseumPhoto(src, anisotropy, maxTextureDim, priority) {
	const cached = sharedPhotoTextures.get(src);
	if (cached) {
		if (cached.tex.anisotropy !== anisotropy) {
			cached.tex.anisotropy = anisotropy;
			cached.tex.needsUpdate = true;
		}
		return Promise.resolve(cached);
	}
	const existing = sharedPhotoTexturePromises.get(src);
	if (existing) {
		bumpQueuedPhotoPriority(src, priority);
		return existing.then((res) => {
			if (res.tex.anisotropy !== anisotropy) {
				res.tex.anisotropy = anisotropy;
				res.tex.needsUpdate = true;
			}
			return res;
		});
	}
	const epoch = photoCacheEpoch;
	const promise = new Promise((resolve, reject) => {
		photoLoadQueue.push({
			src,
			anisotropy,
			maxTextureDim,
			priority,
			epoch,
			resolve,
			reject
		});
		pumpPhotoLoadQueue();
	});
	sharedPhotoTexturePromises.set(src, promise);
	return promise;
}
var cachedColumnShared = null;
function getColumnShared() {
	if (!cachedColumnShared) {
		const plinthBox = new BoxGeometry(.92, .28, .92);
		const baseCyl = new CylinderGeometry(.39, .44, .14, 18);
		const baseTorus = new TorusGeometry(.36, .045, 8, 20);
		const collarTorus = new TorusGeometry(.295, .032, 8, 20);
		const lowerBell = new CylinderGeometry(.37, .29, .3, 14);
		const upperBell = new CylinderGeometry(.42, .35, .2, 12);
		const volute = new SphereGeometry(.095, 10, 10);
		const plinthMat = new MeshStandardMaterial({
			color: "#d8cbb5",
			roughness: .62
		});
		const abacusMat = new MeshStandardMaterial({
			color: "#dfd3be",
			roughness: .56
		});
		[
			plinthBox,
			baseCyl,
			baseTorus,
			collarTorus,
			lowerBell,
			upperBell,
			volute,
			plinthMat,
			abacusMat
		].forEach((r) => {
			r.userData.shared = true;
		});
		cachedColumnShared = {
			plinthBox,
			baseCyl,
			baseTorus,
			collarTorus,
			lowerBell,
			upperBell,
			volute,
			plinthMat,
			abacusMat
		};
	}
	return cachedColumnShared;
}
var cachedCloakLathe = null;
function getCloakLatheGeometry() {
	if (!cachedCloakLathe) {
		const cloakProfile = [
			new Vector2(0, 0),
			new Vector2(.46, .02),
			new Vector2(.42, .35),
			new Vector2(.32, .85),
			new Vector2(.24, 1.25),
			new Vector2(.26, 1.55),
			new Vector2(.18, 1.75),
			new Vector2(0, 1.76)
		];
		cachedCloakLathe = new LatheGeometry(cloakProfile, 22);
		cachedCloakLathe.userData.shared = true;
	}
	return cachedCloakLathe;
}
var cachedUrnLathe = null;
function getUrnLatheGeometry() {
	if (!cachedUrnLathe) {
		const urnProfile = [
			new Vector2(0, 0),
			new Vector2(.22, .04),
			new Vector2(.14, .18),
			new Vector2(.34, .56),
			new Vector2(.32, .78),
			new Vector2(.16, 1.02),
			new Vector2(.24, 1.18),
			new Vector2(.18, 1.22),
			new Vector2(0, 1.22)
		];
		cachedUrnLathe = new LatheGeometry(urnProfile, 20);
		cachedUrnLathe.userData.shared = true;
	}
	return cachedUrnLathe;
}
/**
* ستون کلاسیک با پایه، تنه شیاردار و سرستون کورنتین (Corinthian)
*/
var CorinthianColumn = import_react.memo(({ position, height = 7.6, stoneColor = "#e9decb", goldColor = "#cfa95b" }) => {
	const shaftH = Math.max(3, height - 1.15);
	const shared = getColumnShared();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				geometry: shared.plinthBox,
				material: shared.plinthMat,
				position: [
					0,
					.14,
					0
				],
				receiveShadow: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				geometry: shared.baseCyl,
				position: [
					0,
					.34,
					0
				],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: stoneColor,
					roughness: .55
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				geometry: shared.baseTorus,
				position: [
					0,
					.45,
					0
				],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: stoneColor,
					roughness: .5
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.48 + shaftH / 2,
					0
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.28,
					.33,
					shaftH,
					16
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: stoneColor,
					roughness: .58,
					metalness: .04
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				geometry: shared.collarTorus,
				position: [
					0,
					.48 + shaftH + .04,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: goldColor,
					metalness: .85,
					roughness: .26
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				geometry: shared.lowerBell,
				position: [
					0,
					.48 + shaftH + .22,
					0
				],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: stoneColor,
					roughness: .52
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				geometry: shared.upperBell,
				position: [
					0,
					.48 + shaftH + .36,
					0
				],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: goldColor,
					metalness: .72,
					roughness: .32
				})
			}),
			[
				[-.36, -.36],
				[.36, -.36],
				[-.36, .36],
				[.36, .36]
			].map(([vx, vz], idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				geometry: shared.volute,
				position: [
					vx,
					.48 + shaftH + .46,
					vz
				],
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: goldColor,
					metalness: .82,
					roughness: .26
				})
			}, idx)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					0,
					.48 + shaftH + .58,
					0
				],
				material: shared.abacusMat,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.92,
					.16,
					.92
				] })
			})
		]
	});
});
/**
* لوستر کریستالی باشکوه فرانسوی (Gilt-Bronze & Crystal Chandelier)
*/
var CrystalChandelier = ({ position, scale = 1, lightIntensity = 2.6, lightColor = "#ffe4b8", withRealLight = true }) => {
	const outerArms = (0, import_react.useMemo)(() => Array.from({ length: 8 }, (_, i) => i / 8 * Math.PI * 2), []);
	const innerDrops = (0, import_react.useMemo)(() => Array.from({ length: 10 }, (_, i) => i / 10 * Math.PI * 2), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		scale,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					1.35,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.32,
					.18,
					.14,
					16
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#cfa95b",
					metalness: .88,
					roughness: .22
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.72,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.032,
					.032,
					1.28,
					10
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#cfa95b",
					metalness: .88,
					roughness: .22
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.02,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.12,
					.19,
					.62,
					14
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#d4af61",
					metalness: .88,
					roughness: .2
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					-.34,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.16,
					14,
					14
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
					color: "#f5f8ff",
					roughness: .05,
					metalness: .08,
					clearcoat: 1
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.12,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					.78,
					.038,
					10,
					28
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#cfa95b",
					metalness: .88,
					roughness: .2
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					-.18,
					0
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					.48,
					.026,
					8,
					24
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#cfa95b",
					metalness: .88,
					roughness: .2
				})]
			}),
			outerArms.map((angle, i) => {
				const ax = Math.cos(angle) * .88;
				const az = Math.sin(angle) * .88;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							ax * .52,
							-.02,
							az * .52
						],
						rotation: [
							0,
							-angle,
							Math.PI / 2.4
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
							.018,
							.022,
							.86,
							8
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#cfa95b",
							metalness: .86,
							roughness: .24
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							ax,
							.14,
							az
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
							.03,
							.03,
							.16,
							8
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#f6efe2",
							roughness: .65
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							ax,
							.25,
							az
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
							.048,
							10,
							10
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#fff3d1",
							emissive: "#ffd685",
							emissiveIntensity: 2.2,
							roughness: .2
						})]
					})
				] }, i);
			}),
			innerDrops.map((angle, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					Math.cos(angle) * .58,
					-.06,
					Math.sin(angle) * .58
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("octahedronGeometry", { args: [.068, 0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
					color: "#eef5ff",
					roughness: .04,
					metalness: .1,
					clearcoat: 1
				})]
			}, `drop-${i}`)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					-.58,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("octahedronGeometry", { args: [.13, 0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
					color: "#eef5ff",
					roughness: .04,
					metalness: .1,
					clearcoat: 1
				})]
			}),
			withRealLight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
				position: [
					0,
					-.25,
					0
				],
				color: lightColor,
				intensity: lightIntensity,
				distance: 22,
				decay: 1.4
			})
		]
	});
};
/**
* شمعدان دیواری برنجی و کلاسیک
*/
var BrassWallSconce = import_react.memo(({ position, rotationY = 0 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
	position,
	rotation: [
		0,
		rotationY,
		0
	],
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		position: [
			0,
			0,
			.02
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
			.11,
			.14,
			.04,
			14
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			color: "#c9a353",
			metalness: .88,
			roughness: .24
		})]
	}), [-.12, .12].map((ox, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			ox,
			.04,
			.14
		],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					-.06,
					-.06
				],
				rotation: [
					Math.PI / 3,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.014,
					.016,
					.16,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#c9a353",
					metalness: .86,
					roughness: .25
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.05,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.022,
					.022,
					.14,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#f5ecdc",
					roughness: .65
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.15,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.042,
					8,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#fff1cc",
					emissive: "#ffd582",
					emissiveIntensity: 2
				})]
			})
		]
	}, i))]
}));
/**
* پنجره بلند قوسی پاریسی با نور طبیعی ملایم
*/
var ArchedBeauxArtsWindow = ({ position, rotationY = 0, width = 2.6, height = 4.6, skyColor = "#f4f7ff", withLightBeam = true }) => {
	const archR = width / 2;
	const rectH = height - archR;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		rotation: [
			0,
			rotationY,
			0
		],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-archR - .12,
					rectH / 2,
					.06
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.24,
					rectH,
					.14
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#d8cbb4",
					roughness: .6
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					archR + .12,
					rectH / 2,
					.06
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.24,
					rectH,
					.14
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#d8cbb4",
					roughness: .6
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					rectH,
					.06
				],
				rotation: [
					0,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					archR + .12,
					.12,
					10,
					22,
					Math.PI
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#d8cbb4",
					roughness: .6
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					-.08,
					.12
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					width + .52,
					.16,
					.26
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#cfc0a5",
					roughness: .55
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					rectH / 2,
					.03
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [width, rectH] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: skyColor,
					emissive: skyColor,
					emissiveIntensity: .95,
					roughness: .2
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					rectH,
					.03
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [
					archR,
					22,
					0,
					Math.PI
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: skyColor,
					emissive: skyColor,
					emissiveIntensity: .95,
					roughness: .2
				})]
			}),
			[
				-width * .25,
				0,
				width * .25
			].map((mx, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					mx,
					rectH / 2 + archR * .25,
					.05
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.045,
					rectH + archR * .5,
					.05
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#2c2a29",
					metalness: .65,
					roughness: .35
				})]
			}, `v-${i}`)),
			[
				.28,
				.56,
				.84
			].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					rectH * t,
					.05
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					width,
					.045,
					.05
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#2c2a29",
					metalness: .65,
					roughness: .35
				})]
			}, `h-${i}`)),
			withLightBeam && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					rectH * .45,
					2.1
				],
				rotation: [
					-Math.PI / 3.4,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [width * .86, 5.2] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: skyColor,
					transparent: true,
					opacity: .055,
					depthWrite: false,
					side: 2
				})]
			})
		]
	});
};
/**
* درهای چوبی بلند و باشکوه ورودی کاخ (Monumental Double Oak Palace Doors)
*/
var MonumentalOakDoors = ({ position, rotationY = 0 }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
	position,
	rotation: [
		0,
		rotationY,
		0
	],
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				-1.95,
				2.35,
				.08
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.42,
				4.7,
				.22
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#d9ccb6",
				roughness: .58
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				1.95,
				2.35,
				.08
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.42,
				4.7,
				.22
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#d9ccb6",
				roughness: .58
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				4.82,
				.12
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				4.45,
				.34,
				.28
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#cfc0a4",
				roughness: .55
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				5.15,
				.16
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				4.7,
				.18,
				.34
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#cfa857",
				metalness: .82,
				roughness: .25
			})]
		}),
		[-.86, .86].map((dx, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				dx,
				2.32,
				.05
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.66,
						4.62,
						.12
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#4a2e1d",
						roughness: .52,
						metalness: .06
					})]
				}),
				[
					1.35,
					-.15,
					-1.5
				].map((py, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						py,
						.068
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.18,
						1.05,
						.035
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#5b3924",
						roughness: .46
					})]
				}, j)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						i === 0 ? .56 : -.56,
						-.25,
						.09
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.1,
						.32,
						.03
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#d2ab58",
						metalness: .88,
						roughness: .2
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						i === 0 ? .56 : -.56,
						-.25,
						.13
					],
					rotation: [
						Math.PI / 2,
						0,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
						.075,
						.018,
						8,
						16
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#d2ab58",
						metalness: .88,
						roughness: .2
					})]
				})
			]
		}, i))
	]
});
/**
* مجسمه تمام‌قد کلاسیک مرمرین روی پایه حکاکی‌شده (مرکز تالار مجسمه پتی پاله)
*/
var ClassicalSculptureFull = import_react.memo(({ position, contactTex }) => {
	const cloakGeo = getCloakLatheGeometry();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				position: [
					0,
					.014,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [2.9, 2.9] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					map: contactTex,
					transparent: true,
					depthWrite: false
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.14,
					0
				],
				receiveShadow: true,
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					2.05,
					.28,
					2.05
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#ded6c9",
					roughness: .38
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.82,
					0
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.72,
					.8,
					1.12,
					24
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#ebe4d8",
					roughness: .32
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					1.44,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.84,
					.78,
					.14,
					24
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#d2b068",
					metalness: .8,
					roughness: .24
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					1.58,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.25,
					.14,
					1.25
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#f2ece2",
					roughness: .28
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: [
					0,
					1.65,
					0
				],
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
						geometry: cloakGeo,
						castShadow: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
							color: "#f5f1ea",
							roughness: .26,
							clearcoat: .25,
							clearcoatRoughness: .4
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							1.52,
							0
						],
						castShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
							.24,
							.34,
							8,
							14
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
							color: "#f5f1ea",
							roughness: .26,
							clearcoat: .25
						})]
					}),
					[-1, 1].map((side) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
						position: [
							side * .22,
							1.56,
							-.14
						],
						rotation: [
							.22,
							side * .42,
							side * -.45
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							castShadow: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
								.72,
								1.08,
								.1
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
								color: "#f2ede4",
								roughness: .28,
								clearcoat: .2
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								side * .22,
								.36,
								-.02
							],
							rotation: [
								0,
								0,
								side * -.25
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
								.45,
								.56,
								.08
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
								color: "#f7f3ec",
								roughness: .25
							})]
						})]
					}, side)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							-.28,
							1.72,
							.16
						],
						rotation: [
							.45,
							0,
							.45
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
							.072,
							.42,
							6,
							10
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
							color: "#f5f1ea",
							roughness: .26
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							.28,
							1.78,
							.18
						],
						rotation: [
							.55,
							0,
							-.38
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
							.072,
							.44,
							6,
							10
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
							color: "#f5f1ea",
							roughness: .26
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							2.02,
							.32
						],
						rotation: [
							Math.PI / 3,
							0,
							0
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
							.16,
							.025,
							8,
							22
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#d4af5e",
							metalness: .88,
							roughness: .2
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							1.84,
							.02
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
							.085,
							.1,
							.18,
							12
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
							color: "#f5f1ea",
							roughness: .25
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							2.03,
							.04
						],
						castShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
							.17,
							16,
							16
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
							color: "#f7f3ec",
							roughness: .24,
							clearcoat: .28
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							2.09,
							-.1
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
							.11,
							12,
							12
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
							color: "#ede6da",
							roughness: .32
						})]
					})
				]
			})
		]
	});
});
/**
* نیم‌تنه سنگی مرمرین روی پایه تزئینی حکاکی‌شده
*/
var MarbleBustExhibit = ({ position, rotationY = 0, contactTex }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
	position,
	rotation: [
		0,
		rotationY,
		0
	],
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				0,
				.014,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [1.45, 1.45] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				map: contactTex,
				transparent: true,
				depthWrite: false
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.09,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.88,
				.18,
				.88
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#d7cbb8",
				roughness: .48
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.68,
				0
			],
			castShadow: true,
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.66,
				1.02,
				.66
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#e7dfd0",
				roughness: .42
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.68,
				.335
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.44,
				.72,
				.03
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#d4c7b0",
				roughness: .5
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.24,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.8,
				.12,
				.8
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#efe8dc",
				roughness: .36
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.38,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.12,
				.18,
				.16,
				14
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#cfc3b0",
				roughness: .35
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.62,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.52,
				.34,
				.28
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: "#f5f1ea",
				roughness: .26,
				clearcoat: .22
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.84,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.075,
				.09,
				.18,
				12
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: "#f5f1ea",
				roughness: .25
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				2.02,
				.02
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.155,
				16,
				16
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: "#f7f3ec",
				roughness: .24,
				clearcoat: .25
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				2.1,
				-.02
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
				.135,
				.042,
				8,
				16
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: "#ece5d8",
				roughness: .34
			})]
		})
	]
});
/**
* گلدان بزرگ کلاسیک موزه‌ای (Amphora Urn on Plinth)
*/
var ClassicalAmphoraUrn = import_react.memo(({ position, contactTex, bodyColor = "#28405a" }) => {
	const urnGeo = getUrnLatheGeometry();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				position: [
					0,
					.014,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [1.3, 1.3] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					map: contactTex,
					transparent: true,
					depthWrite: false
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.45,
					0
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.74,
					.9,
					.74
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#e5dccb",
					roughness: .44
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.94,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.84,
					.09,
					.84
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#cfa857",
					metalness: .82,
					roughness: .24
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: [
					0,
					.99,
					0
				],
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
						geometry: urnGeo,
						castShadow: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
							color: bodyColor,
							roughness: .18,
							clearcoat: .85,
							clearcoatRoughness: .15
						})
					}),
					[-1, 1].map((side) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							side * .34,
							.74,
							0
						],
						rotation: [
							0,
							0,
							side * -.22
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
							.14,
							.022,
							8,
							16,
							Math.PI * 1.1
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#d2ab58",
							metalness: .88,
							roughness: .2
						})]
					}, side)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							1.28,
							0
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
							.07,
							10,
							10
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#d2ab58",
							metalness: .88,
							roughness: .2
						})]
					})
				]
			})
		]
	});
});
/**
* نیمکت چوبی آنتیک با نشیمن مخمل
*/
var AntiqueMuseumBench = ({ position, rotationY = 0, length = 2.4, velvetColor = "#6f1f2a", contactTex }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
	position,
	rotation: [
		0,
		rotationY,
		0
	],
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				0,
				.014,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [length + .5, 1.35] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				map: contactTex,
				transparent: true,
				depthWrite: false
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.46,
				0
			],
			castShadow: true,
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				length,
				.14,
				.84
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: velvetColor,
				roughness: .86,
				sheen: .85,
				sheenColor: "#d9b2b8"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.36,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				length - .06,
				.09,
				.78
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#4e301e",
				roughness: .45
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.39,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				length + .01,
				.02,
				.85
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#c9a252",
				metalness: .85,
				roughness: .25
			})]
		}),
		[
			[-length / 2 + .16, -.3],
			[length / 2 - .16, -.3],
			[-length / 2 + .16, .3],
			[length / 2 - .16, .3]
		].map(([lx, lz], idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				lx,
				0,
				lz
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.19,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.048,
					.03,
					.36,
					10
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#4a2c1b",
					roughness: .48
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.03,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.032,
					.028,
					.06,
					10
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#cfa857",
					metalness: .88,
					roughness: .22
				})]
			})]
		}, idx))
	]
});
/**
* میز دکوراتیو فرانسوی با رویه سنگ مرمر و گلدان تزئینی
*/
var DecorativeConsoleTable = ({ position, rotationY = 0, contactTex }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
	position,
	rotation: [
		0,
		rotationY,
		0
	],
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				0,
				.014,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [1.95, 1.1] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				map: contactTex,
				transparent: true,
				depthWrite: false
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.86,
				0
			],
			castShadow: true,
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				1.55,
				.07,
				.62
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: "#f2ece1",
				roughness: .2,
				clearcoat: .5
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.78,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				1.44,
				.11,
				.54
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#c8a14f",
				metalness: .84,
				roughness: .26
			})]
		}),
		[
			[-.64, -.22],
			[.64, -.22],
			[-.64, .22],
			[.64, .22]
		].map(([lx, lz], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				lx,
				.38,
				lz
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.042,
				.026,
				.76,
				10
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#c59d4b",
				metalness: .82,
				roughness: .28
			})]
		}, i)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.07,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.11,
				.08,
				.34,
				14
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: "#274764",
				roughness: .14,
				clearcoat: .9
			})]
		}),
		[-.45, .45].map((cx, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				cx,
				.9,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.1,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.025,
					.055,
					.2,
					10
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#d2ac59",
					metalness: .88,
					roughness: .2
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.24,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.015,
					.015,
					.1,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#f8f0df",
					roughness: .7
				})]
			})]
		}, i))
	]
});
/**
* بازدیدکننده ظریف و آرام موزه در فاصله دور برای زنده کردن فضا بدون ایجاد شلوغی
*/
var AmbientVisitorNPC = ({ waypoints, coatColor, speed = .65, phaseOffset = 0 }) => {
	const groupRef = (0, import_react.useRef)(null);
	const leftLegRef = (0, import_react.useRef)(null);
	const rightLegRef = (0, import_react.useRef)(null);
	const segmentLengths = (0, import_react.useMemo)(() => {
		const lens = [];
		for (let i = 0; i < waypoints.length; i++) {
			const a = waypoints[i];
			const b = waypoints[(i + 1) % waypoints.length];
			lens.push(Math.hypot(b[0] - a[0], b[2] - a[2]));
		}
		return lens;
	}, [waypoints]);
	const totalLen = (0, import_react.useMemo)(() => segmentLengths.reduce((acc, v) => acc + v, 0), [segmentLengths]);
	useFrame(({ clock }) => {
		if (!groupRef.current || waypoints.length < 2 || totalLen < .1) return;
		const t = clock.getElapsedTime();
		const cycle = (t * speed + phaseOffset) % totalLen;
		let accum = 0;
		let segIdx = 0;
		let localDist = cycle;
		for (let i = 0; i < segmentLengths.length; i++) {
			if (accum + segmentLengths[i] >= cycle) {
				segIdx = i;
				localDist = cycle - accum;
				break;
			}
			accum += segmentLengths[i];
		}
		const a = waypoints[segIdx];
		const b = waypoints[(segIdx + 1) % waypoints.length];
		const segLen = Math.max(.01, segmentLengths[segIdx]);
		const rawU = localDist / segLen;
		const u = MathUtils.smoothstep(rawU, .08, .92);
		const px = MathUtils.lerp(a[0], b[0], u);
		const pz = MathUtils.lerp(a[2], b[2], u);
		const isMoving = rawU > .08 && rawU < .92;
		groupRef.current.position.set(px, 0, pz);
		const dirX = b[0] - a[0];
		const dirZ = b[2] - a[2];
		if (Math.hypot(dirX, dirZ) > .01) groupRef.current.rotation.y = Math.atan2(dirX, dirZ);
		const stride = isMoving ? Math.sin(t * 4.2 + phaseOffset) * .22 : 0;
		if (leftLegRef.current) leftLegRef.current.rotation.x = stride;
		if (rightLegRef.current) rightLegRef.current.rotation.x = -stride;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: groupRef,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				ref: leftLegRef,
				position: [
					-.085,
					.42,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
					.055,
					.62,
					6,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#24232c",
					roughness: .78
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				ref: rightLegRef,
				position: [
					.085,
					.42,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
					.055,
					.62,
					6,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#24232c",
					roughness: .78
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					1.06,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.16,
					.23,
					.84,
					12
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: coatColor,
					roughness: .82
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					1.48,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.16,
					10,
					10
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: coatColor,
					roughness: .82
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					1.69,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.105,
					12,
					12
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#e7cbb7",
					roughness: .62
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					1.74,
					-.02
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.108,
					10,
					10
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#362821",
					roughness: .85
				})]
			})
		]
	});
};
/**
* قاب سهبعدی کلاسیک موزه پاریسی با عمق واقعی، حکاکی گوشه، پاسپارتو و چراغ برنجی (کاملاً بدون متن)
*/
var OrnatePhotoFrame3D = import_react.memo(({ slot, active, maxAnisotropy = 4, maxTextureDim = 1600, priority = 2, onSelect, suppressClickUntilRef }) => {
	const { gl } = useThree();
	const [texture, setTexture] = (0, import_react.useState)(null);
	const [aspect, setAspect] = (0, import_react.useState)(4 / 3);
	const [hovered, setHovered] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		bumpQueuedPhotoPriority(slot.src, priority);
	}, [slot.src, priority]);
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		const targetAniso = Math.min(maxAnisotropy, gl.capabilities.getMaxAnisotropy());
		loadCachedMuseumPhoto(slot.src, targetAniso, maxTextureDim, priority).then(({ tex, aspect: imgAspect }) => {
			if (cancelled) return;
			setAspect(imgAspect);
			setTexture(tex);
		}).catch(() => {});
		return () => {
			cancelled = true;
		};
	}, [
		slot.src,
		gl,
		maxAnisotropy,
		maxTextureDim
	]);
	const maxSpan = slot.baseSize;
	const artW = aspect >= 1 ? maxSpan : maxSpan * aspect;
	const artH = aspect >= 1 ? maxSpan / aspect : maxSpan;
	const matPad = slot.style === "empire_ebony" ? .12 : .18;
	const borderW = slot.style === "ornate_salon" ? .17 : slot.style === "classic_gold" ? .14 : .11;
	const totalW = artW + matPad * 2 + borderW * 2;
	const totalH = artH + matPad * 2 + borderW * 2;
	const frameColor = slot.style === "classic_gold" ? "#cfa753" : slot.style === "ornate_salon" ? "#d9b563" : slot.style === "walnut_gilt" ? "#523421" : "#25211f";
	const frameMetal = slot.style === "classic_gold" || slot.style === "ornate_salon" ? .86 : .18;
	const frameRough = slot.style === "classic_gold" || slot.style === "ornate_salon" ? .24 : .46;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: slot.position,
		rotation: [
			0,
			slot.rotationY,
			0
		],
		onClick: (e) => {
			e.stopPropagation();
			if (performance.now() < suppressClickUntilRef.current) return;
			audioEngine.playSfx("sparkle");
			onSelect(slot);
		},
		onPointerOver: (e) => {
			e.stopPropagation();
			setHovered(true);
			if (!document.pointerLockElement) document.body.style.cursor = "pointer";
		},
		onPointerOut: () => {
			setHovered(false);
			document.body.style.cursor = "default";
		},
		children: [
			(active || hovered) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
				position: [
					0,
					totalH * .65,
					1.05
				],
				color: "#ffe6ba",
				intensity: active ? 2.8 : 1.9,
				distance: 6
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					-.04,
					.006
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [totalW + .14, totalH + .14] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: "#0b0807",
					transparent: true,
					opacity: .28,
					depthWrite: false
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: [
					0,
					totalH * .5 + .24,
					.2
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						0,
						-.11
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.09,
						.07,
						.26
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#cfa753",
						metalness: .86,
						roughness: .22
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					rotation: [
						0,
						0,
						Math.PI / 2
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.04,
						.04,
						Math.min(1.05, totalW * .52),
						12
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#cfa753",
						emissive: "#ffe29a",
						emissiveIntensity: active || hovered ? 1.1 : .55,
						metalness: .84,
						roughness: .22
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					0,
					.055
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					totalW,
					totalH,
					.11
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: frameColor,
					metalness: frameMetal,
					roughness: frameRough
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					0,
					.105
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					totalW - borderW * .72,
					totalH - borderW * .72,
					.04
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#cfa753",
					metalness: .88,
					roughness: .2
				})]
			}),
			(slot.style === "ornate_salon" || slot.style === "classic_gold") && [
				[-totalW * .455, totalH * .455],
				[totalW * .455, totalH * .455],
				[-totalW * .455, -totalH * .455],
				[totalW * .455, -totalH * .455]
			].map(([cx, cy], idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					cx,
					cy,
					.118
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.075,
					10,
					10
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#e0bf6f",
					metalness: .9,
					roughness: .18
				})]
			}, idx)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					0,
					.118
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					artW + matPad * 2 + .05,
					artH + matPad * 2 + .05,
					.018
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#d4af5e",
					metalness: .88,
					roughness: .22
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					0,
					.128
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					artW + matPad * 2,
					artH + matPad * 2,
					.016
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#f5ede1",
					roughness: .86
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					0,
					.141
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [artW, artH] }), texture ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					map: texture,
					toneMapped: false
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#382d2a",
					roughness: .7
				})]
			})
		]
	});
});
// src/worlds/Museum/museumAcoustics.ts
var MuseumAcousticsEngine = class {
	constructor() {
		this.ctx = null;
		this.masterGain = null;
		this.roomToneSrc = null;
		this.roomToneGain = null;
		this.stepNoiseBuffer = null;
	}
	ensureContext() {
		if (typeof window === "undefined") return null;
		if (!this.ctx) {
			const AudioCtx = window.AudioContext || window.webkitAudioContext;
			if (!AudioCtx) return null;
			this.ctx = new AudioCtx();
			this.masterGain = this.ctx.createGain();
			this.masterGain.connect(this.ctx.destination);
			const sr = this.ctx.sampleRate;
			const len = Math.floor(sr * .14);
			const buf = this.ctx.createBuffer(1, len, sr);
			const ch = buf.getChannelData(0);
			for (let i = 0; i < len; i++) {
				const env = Math.exp(-i / (sr * .022));
				ch[i] = (Math.random() * 2 - 1) * env;
			}
			this.stepNoiseBuffer = buf;
		}
		if (this.ctx.state === "suspended") this.ctx.resume().catch(() => {});
		this.syncGlobalVolume();
		return this.ctx;
	}
	syncGlobalVolume() {
		if (!this.ctx || !this.masterGain) return;
		const { volume, muted } = useUniverseStore.getState().audio;
		const target = muted ? 0 : Math.max(0, Math.min(1, volume));
		this.masterGain.gain.setTargetAtTime(target, this.ctx.currentTime, .05);
	}
	startAmbientHallTone() {
		const ctx = this.ensureContext();
		if (!ctx || !this.masterGain || this.roomToneSrc) return;
		const sr = ctx.sampleRate;
		const len = sr * 4;
		const buf = ctx.createBuffer(1, len, sr);
		const data = buf.getChannelData(0);
		let b0 = 0;
		let b1 = 0;
		for (let i = 0; i < len; i++) {
			const w = Math.random() * 2 - 1;
			b0 = .996 * b0 + w * .018;
			b1 = .985 * b1 + w * .022;
			data[i] = (b0 + b1) * .22;
		}
		const src = ctx.createBufferSource();
		src.buffer = buf;
		src.loop = true;
		const filter = ctx.createBiquadFilter();
		filter.type = "lowpass";
		filter.frequency.value = 340;
		filter.Q.value = .7;
		const gain = ctx.createGain();
		gain.gain.setValueAtTime(.001, ctx.currentTime);
		gain.gain.linearRampToValueAtTime(.055, ctx.currentTime + 1.2);
		src.connect(filter);
		filter.connect(gain);
		gain.connect(this.masterGain);
		src.start();
		this.roomToneSrc = src;
		this.roomToneGain = gain;
	}
	stopAmbientHallTone() {
		if (this.roomToneSrc) {
			try {
				this.roomToneSrc.stop();
				this.roomToneSrc.disconnect();
			} catch {}
			this.roomToneSrc = null;
		}
		if (this.roomToneGain) {
			try {
				this.roomToneGain.disconnect();
			} catch {}
			this.roomToneGain = null;
		}
	}
	/**
	* صدای قدم طبیعی متناسب با جنس کف (پارکت چوبی یا سنگ مرمر) همراه با انعکاس ملایم تالار
	*/
	playFootstep(surface) {
		const { muted } = useUniverseStore.getState().audio;
		if (muted) return;
		const ctx = this.ensureContext();
		if (!ctx || !this.masterGain || !this.stepNoiseBuffer) return;
		const now = ctx.currentTime;
		const pitchJitter = .92 + Math.random() * .16;
		const osc = ctx.createOscillator();
		const oscGain = ctx.createGain();
		osc.type = surface === "parquet" ? "triangle" : "sine";
		if (surface === "parquet") {
			osc.frequency.setValueAtTime(128 * pitchJitter, now);
			osc.frequency.exponentialRampToValueAtTime(52 * pitchJitter, now + .075);
			oscGain.gain.setValueAtTime(.055, now);
			oscGain.gain.exponentialRampToValueAtTime(.001, now + .085);
		} else {
			osc.frequency.setValueAtTime(460 * pitchJitter, now);
			osc.frequency.exponentialRampToValueAtTime(165 * pitchJitter, now + .055);
			oscGain.gain.setValueAtTime(.042, now);
			oscGain.gain.exponentialRampToValueAtTime(.001, now + .065);
		}
		osc.connect(oscGain);
		oscGain.connect(this.masterGain);
		osc.start(now);
		osc.stop(now + .1);
		const noise = ctx.createBufferSource();
		noise.buffer = this.stepNoiseBuffer;
		const band = ctx.createBiquadFilter();
		band.type = "bandpass";
		band.frequency.value = (surface === "parquet" ? 680 : 1450) * pitchJitter;
		band.Q.value = surface === "parquet" ? 1.8 : 2.6;
		const nGain = ctx.createGain();
		nGain.gain.setValueAtTime(surface === "parquet" ? .028 : .036, now);
		nGain.gain.exponentialRampToValueAtTime(.001, now + (surface === "parquet" ? .09 : .13));
		noise.connect(band);
		band.connect(nGain);
		nGain.connect(this.masterGain);
		noise.start(now);
		const echoDelay = surface === "marble" ? .095 : .075;
		const echoGain = ctx.createGain();
		echoGain.gain.setValueAtTime(surface === "marble" ? .015 : .009, now + echoDelay);
		echoGain.gain.exponentialRampToValueAtTime(8e-4, now + echoDelay + .14);
		const echoFilter = ctx.createBiquadFilter();
		echoFilter.type = "lowpass";
		echoFilter.frequency.value = surface === "marble" ? 980 : 520;
		const echoNoise = ctx.createBufferSource();
		echoNoise.buffer = this.stepNoiseBuffer;
		echoNoise.connect(echoFilter);
		echoFilter.connect(echoGain);
		echoGain.connect(this.masterGain);
		echoNoise.start(now + echoDelay);
	}
};
var museumAcoustics = new MuseumAcousticsEngine();
// src/worlds/Museum/MuseumWorld.tsx
var HALL_TABS = [
	{
		id: "hall1",
		label: "تالار بزرگ"
	},
	{
		id: "hall2",
		label: "تالار نقاشی"
	},
	{
		id: "hall3",
		label: "تالار مجسمه"
	},
	{
		id: "hall4",
		label: "گالری نورگیر"
	},
	{
		id: "hall5",
		label: "تالار منتخب"
	}
];
function getPhotoUrl(filename) {
	const base = "/jahane_zahra/";
	const cleanBase = base.endsWith("/") ? base : `${base}/`;
	const cleanName = filename.replace(/^\/+/, "");
	return `${cleanBase}museum/${encodeURIComponent(cleanName)}`;
}
function buildGalleryLayout(files) {
	const styles = [
		"ornate_salon",
		"classic_gold",
		"walnut_gilt",
		"empire_ebony"
	];
	const hasHall4Cimaises = files.length > 64;
	const hall2DepthExtra = (files.length > 72 ? Math.ceil((files.length - 72) / 2) : 0) * 5;
	const { hall4SouthZ, hall4NorthZ } = getHall4Bounds(hall2DepthExtra);
	const hall4CenterZ = (hall4SouthZ + hall4NorthZ) / 2;
	const presets = [
		{
			hall: "hall1",
			position: [
				-5.15,
				2.85,
				-8.23
			],
			rotationY: 0,
			normal: [
				0,
				0,
				1
			],
			style: "ornate_salon",
			baseSize: 2.1
		},
		{
			hall: "hall1",
			position: [
				5.15,
				2.85,
				-8.23
			],
			rotationY: 0,
			normal: [
				0,
				0,
				1
			],
			style: "classic_gold",
			baseSize: 2.1
		},
		...[
			-12.5,
			-17.5,
			-22.5,
			-27.5,
			-32.5,
			-37.25
		].flatMap((bz, bayIdx) => [{
			hall: "hall2",
			position: [
				-8.48,
				2.8,
				bz
			],
			rotationY: Math.PI / 2,
			normal: [
				1,
				0,
				0
			],
			style: styles[bayIdx * 2 % styles.length],
			baseSize: bayIdx === 5 ? 2.15 : 2.35
		}, {
			hall: "hall2",
			position: [
				8.48,
				2.8,
				bz
			],
			rotationY: -Math.PI / 2,
			normal: [
				-1,
				0,
				0
			],
			style: styles[(bayIdx * 2 + 1) % styles.length],
			baseSize: bayIdx === 5 ? 2.15 : 2.35
		}]),
		{
			hall: "hall2",
			position: [
				-5.3,
				2.85,
				-8.76
			],
			rotationY: Math.PI,
			normal: [
				0,
				0,
				-1
			],
			style: "classic_gold",
			baseSize: 2.05
		},
		{
			hall: "hall2",
			position: [
				5.3,
				2.85,
				-8.76
			],
			rotationY: Math.PI,
			normal: [
				0,
				0,
				-1
			],
			style: "ornate_salon",
			baseSize: 2.05
		},
		{
			hall: "hall2",
			position: [
				-5.3,
				2.85,
				hall4SouthZ + .27
			],
			rotationY: 0,
			normal: [
				0,
				0,
				1
			],
			style: "walnut_gilt",
			baseSize: 2.05
		},
		{
			hall: "hall2",
			position: [
				5.3,
				2.85,
				hall4SouthZ + .27
			],
			rotationY: 0,
			normal: [
				0,
				0,
				1
			],
			style: "classic_gold",
			baseSize: 2.05
		},
		...[
			12.6,
			16.5,
			20.4,
			24.3
		].flatMap((wx, idx) => [{
			hall: "hall3",
			position: [
				wx,
				2.85,
				-8.48
			],
			rotationY: 0,
			normal: [
				0,
				0,
				1
			],
			style: styles[idx % styles.length],
			baseSize: 2.15
		}, {
			hall: "hall3",
			position: [
				wx,
				2.85,
				5.48
			],
			rotationY: Math.PI,
			normal: [
				0,
				0,
				-1
			],
			style: styles[(idx + 1) % styles.length],
			baseSize: 2.15
		}]),
		{
			hall: "hall3",
			position: [
				28.48,
				2.9,
				-1.5
			],
			rotationY: -Math.PI / 2,
			normal: [
				-1,
				0,
				0
			],
			style: "ornate_salon",
			baseSize: 2.35
		},
		{
			hall: "hall3",
			position: [
				8.92,
				2.75,
				-5.3
			],
			rotationY: Math.PI / 2,
			normal: [
				1,
				0,
				0
			],
			style: "classic_gold",
			baseSize: 1.65
		},
		{
			hall: "hall3",
			position: [
				8.92,
				2.75,
				2.3
			],
			rotationY: Math.PI / 2,
			normal: [
				1,
				0,
				0
			],
			style: "walnut_gilt",
			baseSize: 1.65
		},
		...[
			-26,
			-22.25,
			-18.5,
			-14.75,
			-11
		].map((wx, idx) => ({
			hall: "hall5",
			position: [
				wx,
				2.6,
				-7.48
			],
			rotationY: 0,
			normal: [
				0,
				0,
				1
			],
			style: styles[idx % styles.length],
			baseSize: 2
		})),
		...[
			-26,
			-18.5,
			-11
		].map((wx, idx) => ({
			hall: "hall5",
			position: [
				wx,
				2.6,
				3.48
			],
			rotationY: Math.PI,
			normal: [
				0,
				0,
				-1
			],
			style: styles[(idx + 1) % styles.length],
			baseSize: 2
		})),
		{
			hall: "hall5",
			position: [
				-28.48,
				2.65,
				-2
			],
			rotationY: Math.PI / 2,
			normal: [
				1,
				0,
				0
			],
			style: "ornate_salon",
			baseSize: 2.2
		},
		{
			hall: "hall5",
			position: [
				-28.48,
				2.55,
				-5.2
			],
			rotationY: Math.PI / 2,
			normal: [
				1,
				0,
				0
			],
			style: "empire_ebony",
			baseSize: 1.65
		},
		{
			hall: "hall5",
			position: [
				-28.48,
				2.55,
				1.2
			],
			rotationY: Math.PI / 2,
			normal: [
				1,
				0,
				0
			],
			style: "empire_ebony",
			baseSize: 1.65
		},
		{
			hall: "hall5",
			position: [
				-8.92,
				2.55,
				-5.5
			],
			rotationY: -Math.PI / 2,
			normal: [
				-1,
				0,
				0
			],
			style: "classic_gold",
			baseSize: 1.75
		},
		{
			hall: "hall5",
			position: [
				-8.92,
				2.55,
				2
			],
			rotationY: -Math.PI / 2,
			normal: [
				-1,
				0,
				0
			],
			style: "walnut_gilt",
			baseSize: 1.55
		},
		...[
			-9.6,
			9.6,
			-13.6,
			13.6,
			-17.6,
			17.6,
			-21.6,
			21.6
		].map((wx, idx) => ({
			hall: "hall4",
			position: [
				wx,
				2.75,
				hall4NorthZ + .02
			],
			rotationY: 0,
			normal: [
				0,
				0,
				1
			],
			style: styles[idx % styles.length],
			baseSize: 2.15
		})),
		...[
			-5.2,
			5.2,
			-9.8,
			9.8,
			-14.4,
			14.4,
			-19,
			19
		].map((wx, idx) => ({
			hall: "hall4",
			position: [
				wx,
				2.75,
				hall4SouthZ - .27
			],
			rotationY: Math.PI,
			normal: [
				0,
				0,
				-1
			],
			style: styles[(idx + 2) % styles.length],
			baseSize: 2.15
		})),
		...[
			hall4CenterZ,
			hall4SouthZ - 3.6,
			hall4NorthZ + 3.6
		].flatMap((wz, idx) => [{
			hall: "hall4",
			position: [
				-24.48,
				2.75,
				wz
			],
			rotationY: Math.PI / 2,
			normal: [
				1,
				0,
				0
			],
			style: styles[idx % styles.length],
			baseSize: 2.15
		}, {
			hall: "hall4",
			position: [
				24.48,
				2.75,
				wz
			],
			rotationY: -Math.PI / 2,
			normal: [
				-1,
				0,
				0
			],
			style: styles[(idx + 1) % styles.length],
			baseSize: 2.15
		}]),
		...[
			-17.1,
			-13.3,
			13.3,
			17.1
		].flatMap((cx, idx) => [{
			hall: "hall4",
			position: [
				cx,
				2.45,
				hall4CenterZ + .29
			],
			rotationY: 0,
			normal: [
				0,
				0,
				1
			],
			style: styles[idx % styles.length],
			baseSize: 1.95
		}, {
			hall: "hall4",
			position: [
				cx,
				2.45,
				hall4CenterZ - .29
			],
			rotationY: Math.PI,
			normal: [
				0,
				0,
				-1
			],
			style: styles[(idx + 2) % styles.length],
			baseSize: 1.95
		}])
	];
	const slots = [];
	const fixedCount = Math.min(files.length, presets.length);
	for (let i = 0; i < fixedCount; i++) slots.push({
		...presets[i],
		index: i,
		src: getPhotoUrl(files[i])
	});
	let cursor = fixedCount;
	let bayZ = -42;
	while (cursor < files.length) {
		slots.push({
			index: cursor,
			src: getPhotoUrl(files[cursor]),
			hall: "hall2",
			position: [
				-8.48,
				2.8,
				bayZ
			],
			rotationY: Math.PI / 2,
			normal: [
				1,
				0,
				0
			],
			style: styles[cursor % styles.length],
			baseSize: 2.35
		});
		cursor++;
		if (cursor < files.length) {
			slots.push({
				index: cursor,
				src: getPhotoUrl(files[cursor]),
				hall: "hall2",
				position: [
					8.48,
					2.8,
					bayZ
				],
				rotationY: -Math.PI / 2,
				normal: [
					-1,
					0,
					0
				],
				style: styles[cursor % styles.length],
				baseSize: 2.35
			});
			cursor++;
		}
		bayZ -= 5;
	}
	return {
		slots,
		hall2DepthExtra,
		hasHall4Cimaises
	};
}
function wrapAngleDelta(current, target) {
	let diff = (target - current) % (Math.PI * 2);
	if (diff > Math.PI) diff -= Math.PI * 2;
	if (diff < -Math.PI) diff += Math.PI * 2;
	return diff;
}
function detectTouchCapable() {
	if (typeof window === "undefined") return false;
	return window.matchMedia?.("(pointer: coarse)").matches || "ontouchstart" in window || window.innerWidth < 768;
}
/**
* کنترلر اول‌شخص موزه با برخوردسنجی دقیق ۵ تالار، حرکت آرام دوربین هنگام قدم زدن و صدای قدم متناسب با جنس کف
*/
function FirstPersonMuseumController({ collisionWorld, hall2DepthExtra, activeSlot, teleportRequest, settings, reducedMotion, joystickRef, suppressClickUntilRef, onPointerLockChange, onHallChange, onCanvasElement }) {
	const { camera, gl } = useThree();
	const physicsRef = (0, import_react.useRef)({
		x: MUSEUM_START_POS.x,
		z: MUSEUM_START_POS.z,
		yaw: MUSEUM_START_POS.yaw,
		pitch: MUSEUM_START_POS.pitch
	});
	const renderRef = (0, import_react.useRef)({
		x: MUSEUM_START_POS.x,
		z: MUSEUM_START_POS.z,
		yaw: MUSEUM_START_POS.yaw,
		pitch: MUSEUM_START_POS.pitch
	});
	const savedBeforeInspectRef = (0, import_react.useRef)({
		x: MUSEUM_START_POS.x,
		z: MUSEUM_START_POS.z,
		yaw: MUSEUM_START_POS.yaw,
		pitch: MUSEUM_START_POS.pitch
	});
	const isReturningRef = (0, import_react.useRef)(false);
	const prevSlotRef = (0, import_react.useRef)(null);
	const keysRef = (0, import_react.useRef)({});
	const settingsRef = (0, import_react.useRef)(settings);
	const activeSlotRef = (0, import_react.useRef)(activeSlot);
	const currentHallRef = (0, import_react.useRef)("hall1");
	const strideDistRef = (0, import_react.useRef)(0);
	const bobPhaseRef = (0, import_react.useRef)(0);
	const bobOffsetRef = (0, import_react.useRef)(0);
	settingsRef.current = settings;
	activeSlotRef.current = activeSlot;
	(0, import_react.useEffect)(() => {
		const dom = gl.domElement;
		onCanvasElement(dom);
		return () => {
			onCanvasElement(null);
			if (document.pointerLockElement === dom) try {
				document.exitPointerLock?.();
			} catch {}
			document.body.style.cursor = "default";
		};
	}, [gl, onCanvasElement]);
	(0, import_react.useEffect)(() => {
		camera.rotation.order = "YXZ";
		camera.position.set(MUSEUM_START_POS.x, PLAYER_EYE_HEIGHT, MUSEUM_START_POS.z);
		camera.rotation.set(MUSEUM_START_POS.pitch, MUSEUM_START_POS.yaw, 0);
	}, [camera]);
	(0, import_react.useEffect)(() => {
		if (teleportRequest.seq === 0) return;
		const spawn = getMuseumHallSpawns(hall2DepthExtra)[teleportRequest.target] || MUSEUM_START_POS;
		const safe = resolveCapsulePosition2D(spawn.x, spawn.z, collisionWorld);
		physicsRef.current = {
			x: safe.x,
			z: safe.z,
			yaw: spawn.yaw,
			pitch: spawn.pitch
		};
		renderRef.current = { ...physicsRef.current };
		isReturningRef.current = false;
		bobOffsetRef.current = 0;
	}, [
		teleportRequest,
		collisionWorld,
		hall2DepthExtra
	]);
	(0, import_react.useEffect)(() => {
		if (activeSlot && !prevSlotRef.current) {
			savedBeforeInspectRef.current = { ...physicsRef.current };
			isReturningRef.current = false;
			keysRef.current = {};
			if (document.pointerLockElement) try {
				document.exitPointerLock?.();
			} catch {}
			document.body.style.cursor = "default";
		} else if (activeSlot && prevSlotRef.current && activeSlot.index !== prevSlotRef.current.index) {
			const [px, py, pz] = activeSlot.position;
			const [nx, , nz] = activeSlot.normal;
			const safeGoal = resolveCapsulePosition2D(px + nx * 2.55, pz + nz * 2.55, collisionWorld);
			const dist = Math.max(.8, Math.hypot(px - safeGoal.x, pz - safeGoal.z));
			renderRef.current = {
				x: safeGoal.x,
				z: safeGoal.z,
				yaw: Math.atan2(nx, nz),
				pitch: MathUtils.clamp(Math.atan2(py - PLAYER_EYE_HEIGHT, dist), -.75, .75)
			};
		} else if (!activeSlot && prevSlotRef.current) {
			const safeRestore = resolveCapsulePosition2D(savedBeforeInspectRef.current.x, savedBeforeInspectRef.current.z, collisionWorld);
			const jumpDist = Math.hypot(renderRef.current.x - safeRestore.x, renderRef.current.z - safeRestore.z);
			physicsRef.current = {
				...savedBeforeInspectRef.current,
				x: safeRestore.x,
				z: safeRestore.z
			};
			if (jumpDist > 12) {
				renderRef.current = { ...physicsRef.current };
				isReturningRef.current = false;
			} else isReturningRef.current = true;
		}
		prevSlotRef.current = activeSlot;
	}, [activeSlot, collisionWorld]);
	(0, import_react.useEffect)(() => {
		const onKeyDown = (e) => {
			if (activeSlotRef.current) return;
			const target = e.target;
			if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
			keysRef.current[e.code] = true;
			if ([
				"ArrowUp",
				"ArrowDown",
				"ArrowLeft",
				"ArrowRight",
				"Space"
			].includes(e.code)) e.preventDefault();
		};
		const onKeyUp = (e) => {
			keysRef.current[e.code] = false;
		};
		const onBlur = () => {
			keysRef.current = {};
		};
		window.addEventListener("keydown", onKeyDown);
		window.addEventListener("keyup", onKeyUp);
		window.addEventListener("blur", onBlur);
		return () => {
			window.removeEventListener("keydown", onKeyDown);
			window.removeEventListener("keyup", onKeyUp);
			window.removeEventListener("blur", onBlur);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const dom = gl.domElement;
		let dragPointerId = null;
		let lastX = 0;
		let lastY = 0;
		let dragTravel = 0;
		const applyLookDelta = (dx, dy, scale) => {
			const sens = settingsRef.current.lookSensitivity * scale;
			physicsRef.current.yaw -= dx * sens;
			physicsRef.current.pitch = MathUtils.clamp(physicsRef.current.pitch - dy * sens * .9, -1.2, 1.2);
			isReturningRef.current = false;
		};
		const onLockChange = () => {
			onPointerLockChange(document.pointerLockElement === dom);
		};
		const onLockError = () => {
			onPointerLockChange(false);
		};
		const onMouseMove = (e) => {
			if (document.pointerLockElement !== dom || activeSlotRef.current) return;
			applyLookDelta(e.movementX, e.movementY, .0022);
		};
		const onPointerDown = (e) => {
			if (activeSlotRef.current || document.pointerLockElement === dom) return;
			if (e.pointerType === "touch") {
				if (!settingsRef.current.touchControls) return;
				if (e.clientX < window.innerWidth * .34) return;
			}
			dragPointerId = e.pointerId;
			lastX = e.clientX;
			lastY = e.clientY;
			dragTravel = 0;
		};
		const onPointerMove = (e) => {
			if (dragPointerId !== e.pointerId || activeSlotRef.current) return;
			const dx = e.clientX - lastX;
			const dy = e.clientY - lastY;
			lastX = e.clientX;
			lastY = e.clientY;
			dragTravel += Math.hypot(dx, dy);
			if (dragTravel > 6) suppressClickUntilRef.current = performance.now() + 200;
			const scale = e.pointerType === "touch" ? .0044 : .0034;
			applyLookDelta(dx, dy, scale);
		};
		const endDrag = (e) => {
			if (dragPointerId === e.pointerId) dragPointerId = null;
		};
		document.addEventListener("pointerlockchange", onLockChange);
		document.addEventListener("pointerlockerror", onLockError);
		document.addEventListener("mousemove", onMouseMove);
		dom.addEventListener("pointerdown", onPointerDown);
		window.addEventListener("pointermove", onPointerMove);
		window.addEventListener("pointerup", endDrag);
		window.addEventListener("pointercancel", endDrag);
		return () => {
			document.removeEventListener("pointerlockchange", onLockChange);
			document.removeEventListener("pointerlockerror", onLockError);
			document.removeEventListener("mousemove", onMouseMove);
			dom.removeEventListener("pointerdown", onPointerDown);
			window.removeEventListener("pointermove", onPointerMove);
			window.removeEventListener("pointerup", endDrag);
			window.removeEventListener("pointercancel", endDrag);
		};
	}, [
		gl,
		onPointerLockChange,
		suppressClickUntilRef
	]);
	useFrame((_, rawDelta) => {
		const dt = Math.min(rawDelta, .05);
		const curSettings = settingsRef.current;
		if (activeSlot) {
			const [px, py, pz] = activeSlot.position;
			const [nx, , nz] = activeSlot.normal;
			const safeGoal = resolveCapsulePosition2D(px + nx * 2.55, pz + nz * 2.55, collisionWorld);
			const distToFrame = Math.max(.8, Math.hypot(px - safeGoal.x, pz - safeGoal.z));
			const targetYaw = Math.atan2(nx, nz);
			const targetPitch = MathUtils.clamp(Math.atan2(py - PLAYER_EYE_HEIGHT, distToFrame), -.75, .75);
			if (Math.hypot(renderRef.current.x - safeGoal.x, renderRef.current.z - safeGoal.z) > 12) {
				renderRef.current.x = safeGoal.x;
				renderRef.current.z = safeGoal.z;
				renderRef.current.yaw = targetYaw;
				renderRef.current.pitch = targetPitch;
			} else {
				renderRef.current.x = MathUtils.damp(renderRef.current.x, safeGoal.x, 7.5, dt);
				renderRef.current.z = MathUtils.damp(renderRef.current.z, safeGoal.z, 7.5, dt);
				renderRef.current.yaw += wrapAngleDelta(renderRef.current.yaw, targetYaw) * (1 - Math.exp(-7.5 * dt));
				renderRef.current.pitch = MathUtils.damp(renderRef.current.pitch, targetPitch, 7.5, dt);
			}
			bobOffsetRef.current = MathUtils.damp(bobOffsetRef.current, 0, 12, dt);
		} else {
			const k = keysRef.current;
			const joy = curSettings.touchControls ? joystickRef.current : {
				x: 0,
				y: 0
			};
			const arrowTurn = (k.ArrowLeft ? 1 : 0) - (k.ArrowRight ? 1 : 0);
			if (arrowTurn !== 0) {
				physicsRef.current.yaw += arrowTurn * 1.75 * curSettings.lookSensitivity * dt;
				isReturningRef.current = false;
			}
			const keyForward = (k.KeyW || k.ArrowUp ? 1 : 0) - (k.KeyS || k.ArrowDown ? 1 : 0);
			const keyStrafe = (k.KeyD ? 1 : 0) - (k.KeyA ? 1 : 0);
			let localFwd = keyForward + joy.y;
			let localStrafe = keyStrafe + joy.x;
			const mag = Math.hypot(localFwd, localStrafe);
			if (mag > 1) {
				localFwd /= mag;
				localStrafe /= mag;
			}
			let movedStep = 0;
			if (mag > .001) {
				isReturningRef.current = false;
				const sprintMul = k.ShiftLeft || k.ShiftRight ? 1.56 : 1;
				const speed = curSettings.walkSpeed * curSettings.moveSensitivity * sprintMul;
				const yaw = physicsRef.current.yaw;
				const fx = -Math.sin(yaw);
				const fz = -Math.cos(yaw);
				const rx = Math.cos(yaw);
				const rz = -Math.sin(yaw);
				const deltaX = (fx * localFwd + rx * localStrafe) * speed * dt;
				const deltaZ = (fz * localFwd + rz * localStrafe) * speed * dt;
				const prevX = physicsRef.current.x;
				const prevZ = physicsRef.current.z;
				const moved = movePlayerWithCollision(prevX, prevZ, deltaX, deltaZ, collisionWorld);
				physicsRef.current.x = moved.x;
				physicsRef.current.z = moved.z;
				movedStep = Math.hypot(moved.x - prevX, moved.z - prevZ);
			} else {
				const safeStand = resolveCapsulePosition2D(physicsRef.current.x, physicsRef.current.z, collisionWorld);
				physicsRef.current.x = safeStand.x;
				physicsRef.current.z = safeStand.z;
			}
			const hallNow = getHallAtPosition(physicsRef.current.x, physicsRef.current.z, hall2DepthExtra);
			if (hallNow !== currentHallRef.current) {
				currentHallRef.current = hallNow;
				onHallChange(hallNow);
			}
			if (movedStep > .002) {
				strideDistRef.current += movedStep;
				bobPhaseRef.current += movedStep * 3.1;
				if (!reducedMotion) bobOffsetRef.current = MathUtils.damp(bobOffsetRef.current, Math.sin(bobPhaseRef.current) * .017, 16, dt);
				else bobOffsetRef.current = 0;
				if (strideDistRef.current >= .88) {
					strideDistRef.current = 0;
					const floorKind = hallNow === "hall3" || hallNow === "hall4" ? "marble" : "parquet";
					museumAcoustics.playFootstep(floorKind);
				}
			} else bobOffsetRef.current = MathUtils.damp(bobOffsetRef.current, 0, 10, dt);
			const posDamp = isReturningRef.current ? 8 : 22;
			const rotDamp = isReturningRef.current ? 8 : 26;
			const clampedRender = resolveCapsulePosition2D(MathUtils.damp(renderRef.current.x, physicsRef.current.x, posDamp, dt), MathUtils.damp(renderRef.current.z, physicsRef.current.z, posDamp, dt), collisionWorld);
			renderRef.current.x = clampedRender.x;
			renderRef.current.z = clampedRender.z;
			renderRef.current.yaw += wrapAngleDelta(renderRef.current.yaw, physicsRef.current.yaw) * (1 - Math.exp(-rotDamp * dt));
			renderRef.current.pitch = MathUtils.damp(renderRef.current.pitch, physicsRef.current.pitch, rotDamp, dt);
			if (isReturningRef.current && Math.hypot(renderRef.current.x - physicsRef.current.x, renderRef.current.z - physicsRef.current.z) < .05) isReturningRef.current = false;
		}
		camera.rotation.order = "YXZ";
		camera.position.set(renderRef.current.x, PLAYER_EYE_HEIGHT + bobOffsetRef.current, renderRef.current.z);
		camera.rotation.set(renderRef.current.pitch, renderRef.current.yaw, 0);
	});
	return null;
}
/**
* صحنه سه‌بعدی موزه خیال با ۵ تالار مجزای بوزآر پاریسی، نور طبیعی، لوستر کریستالی و مجسمه‌ها
*/
function MuseumSceneContent({ slots, hall2DepthExtra, hasHall4Cimaises, collisionWorld, currentHall, activeSlot, teleportRequest, settings, reducedMotion, particleScale, shadowsEnabled, shadowMapSize, maxAnisotropy, maxTextureDim, joystickRef, suppressClickUntilRef, onSelectSlot, onPointerLockChange, onHallChange, onCanvasElement, mood }) {
	const { gl } = useThree();
	const maxAniso = (0, import_react.useMemo)(() => Math.min(maxAnisotropy, gl.capabilities.getMaxAnisotropy()), [gl, maxAnisotropy]);
	const textures = (0, import_react.useMemo)(() => {
		return {
			parquetH1: createHerringboneParquetTextures(6, 5.5, maxAniso),
			parquetH2: createHerringboneParquetTextures(6, 11 + Math.round(hall2DepthExtra / 3), maxAniso),
			parquetH5: createHerringboneParquetTextures(7, 4.2, maxAniso),
			marbleH3: createBeauxArtsMarbleTextures(7, 5, maxAniso),
			marbleH4: createBeauxArtsMarbleTextures(15, 5.5, maxAniso),
			boiserie: createBoiserieWallTexture("#ede3d0", "#e3d5bd", "#c8a355", 6, 1, maxAniso),
			claretDamask: createDamaskWallTexture("#5d2028", "#46141b", "#dfd1b9", 9, 1, maxAniso),
			emeraldDamask: createDamaskWallTexture("#1e443d", "#15312c", "#dfd1b9", 7, 1, maxAniso),
			fresco: createCeilingFrescoTexture(maxAniso),
			clockTex: createPalaceClockTexture(maxAniso),
			contactTex: createContactShadowTexture()
		};
	}, [maxAniso, hall2DepthExtra]);
	(0, import_react.useEffect)(() => {
		return () => {
			textures.parquetH1.map.dispose();
			textures.parquetH1.roughnessMap.dispose();
			textures.parquetH2.map.dispose();
			textures.parquetH2.roughnessMap.dispose();
			textures.parquetH5.map.dispose();
			textures.parquetH5.roughnessMap.dispose();
			textures.marbleH3.map.dispose();
			textures.marbleH3.roughnessMap.dispose();
			textures.marbleH4.map.dispose();
			textures.marbleH4.roughnessMap.dispose();
			textures.boiserie.map.dispose();
			textures.boiserie.bumpMap.dispose();
			textures.claretDamask.dispose();
			textures.emeraldDamask.dispose();
			textures.fresco.dispose();
			textures.clockTex.dispose();
			textures.contactTex.dispose();
		};
	}, [textures]);
	const { hall2NorthZ, hall4SouthZ, hall4NorthZ } = (0, import_react.useMemo)(() => getHall4Bounds(hall2DepthExtra), [hall2DepthExtra]);
	const hall2Length = Math.abs(hall2NorthZ - -8.5);
	const hall2CenterZ = (-8.5 + hall2NorthZ) / 2;
	const hall4CenterZ = (hall4SouthZ + hall4NorthZ) / 2;
	const keyLightRef = (0, import_react.useRef)(null);
	const moodConfig = mood === "golden" ? {
		ambient: .44,
		sunColor: "#ffe0a8",
		sunIntensity: 1.35,
		skyColor: "#fff1d1",
		windowGlow: "#ffdfb0",
		chandelierIntensity: 3.1,
		chandelierColor: "#ffda9b"
	} : mood === "evening" ? {
		ambient: .28,
		sunColor: "#a3b3dc",
		sunIntensity: .72,
		skyColor: "#7a8ab8",
		windowGlow: "#43537e",
		chandelierIntensity: 3.4,
		chandelierColor: "#ffd996"
	} : {
		ambient: .5,
		sunColor: "#fff6e8",
		sunIntensity: 1.18,
		skyColor: "#f3f7ff",
		windowGlow: "#eef4ff",
		chandelierIntensity: 2.35,
		chandelierColor: "#ffe6bd"
	};
	useFrame(({ clock }) => {
		if (keyLightRef.current && !reducedMotion) {
			const t = clock.getElapsedTime();
			keyLightRef.current.intensity = moodConfig.sunIntensity + Math.sin(t * .45) * .04;
		}
	});
	const hall2ColumnZs = (0, import_react.useMemo)(() => {
		const zs = [
			-10,
			-15,
			-20,
			-25,
			-30,
			-35,
			-39.5
		];
		for (let z = -44.5; z > hall2NorthZ + 1.2; z -= 5) zs.push(z);
		return zs;
	}, [hall2NorthZ]);
	const dustCount = Math.max(24, Math.round(70 * particleScale));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", {
			intensity: moodConfig.ambient,
			color: moodConfig.sunColor
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
			moodConfig.skyColor,
			"#3b2b20",
			.68
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			ref: keyLightRef,
			position: [
				14,
				22,
				6
			],
			intensity: moodConfig.sunIntensity,
			color: moodConfig.sunColor,
			castShadow: shadowsEnabled,
			"shadow-mapSize": [shadowMapSize, shadowMapSize],
			"shadow-bias": -4e-4,
			"shadow-normalBias": .02,
			"shadow-camera-left": -30,
			"shadow-camera-right": 30,
			"shadow-camera-top": 16,
			"shadow-camera-bottom": -62,
			"shadow-camera-far": 85
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				-14,
				12,
				-24
			],
			intensity: .44,
			color: "#e5dcff"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
			count: dustCount,
			scale: [
				15,
				5.5,
				13
			],
			position: [
				0,
				3.6,
				-1
			],
			size: 1.6,
			speed: reducedMotion ? 0 : .14,
			opacity: .42,
			color: "#ffe6b5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
			count: Math.max(18, Math.round(50 * particleScale)),
			scale: [
				16,
				6,
				12
			],
			position: [
				18.5,
				4.2,
				-1.5
			],
			size: 1.7,
			speed: reducedMotion ? 0 : .16,
			opacity: .46,
			color: "#fff2d2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
			count: Math.max(24, Math.round(65 * particleScale)),
			scale: [
				38,
				6.5,
				14
			],
			position: [
				0,
				4.6,
				hall4CenterZ
			],
			size: 1.6,
			speed: reducedMotion ? 0 : .15,
			opacity: .44,
			color: "#fff4db"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				position: [
					0,
					0,
					-1
				],
				receiveShadow: true,
				onClick: () => {
					if (performance.now() < suppressClickUntilRef.current) return;
					onSelectSlot(null);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [17.2, 15.2] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.parquetH1.map,
					roughnessMap: textures.parquetH1.roughnessMap,
					roughness: .52,
					metalness: .05
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					8.4,
					-1
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [17.2, 15.2] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.fresco,
					roughness: .62
				})]
			}),
			[
				-6.5,
				-1,
				4.5
			].map((z, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					8.15,
					z
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					17,
					.42,
					.48
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#dfd1b8",
					roughness: .55
				})]
			}, `h1-beam-${i}`)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					4.2,
					6.7
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					17.4,
					8.4,
					.4
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.boiserie.map,
					bumpMap: textures.boiserie.bumpMap,
					bumpScale: .04,
					roughness: .68
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MonumentalOakDoors, {
				position: [
					0,
					0,
					6.5
				],
				rotationY: Math.PI
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchedBeauxArtsWindow, {
				position: [
					-5.3,
					1.45,
					6.46
				],
				rotationY: Math.PI,
				width: 2.3,
				height: 4.4,
				skyColor: moodConfig.windowGlow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchedBeauxArtsWindow, {
				position: [
					5.3,
					1.45,
					6.46
				],
				rotationY: Math.PI,
				width: 2.3,
				height: 4.4,
				skyColor: moodConfig.windowGlow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-8.7,
					4.2,
					-6
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.4,
					8.4,
					5
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.boiserie.map,
					bumpMap: textures.boiserie.bumpMap,
					bumpScale: .04,
					roughness: .68
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-8.7,
					4.2,
					3.5
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.4,
					8.4,
					6
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.boiserie.map,
					bumpMap: textures.boiserie.bumpMap,
					bumpScale: .04,
					roughness: .68
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-8.7,
					6.4,
					-1.5
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.42,
					4,
					4.1
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#e5d8c1",
					roughness: .6
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-8.48,
					4.42,
					-1.5
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.22,
					.24,
					4.2
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#cfa857",
					metalness: .82,
					roughness: .25
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					8.7,
					4.2,
					-6.15
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.4,
					8.4,
					4.7
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.boiserie.map,
					bumpMap: textures.boiserie.bumpMap,
					bumpScale: .04,
					roughness: .68
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					8.7,
					4.2,
					3.65
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.4,
					8.4,
					5.7
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.boiserie.map,
					bumpMap: textures.boiserie.bumpMap,
					bumpScale: .04,
					roughness: .68
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					8.7,
					6.5,
					-1.5
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.42,
					3.8,
					4.7
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#e5d8c1",
					roughness: .6
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					8.48,
					4.62,
					-1.5
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.22,
					.24,
					4.8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#cfa857",
					metalness: .82,
					roughness: .25
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-5.45,
					4.2,
					-8.5
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					6.1,
					8.4,
					.5
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.boiserie.map,
					bumpMap: textures.boiserie.bumpMap,
					bumpScale: .04,
					roughness: .68
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					5.45,
					4.2,
					-8.5
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					6.1,
					8.4,
					.5
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.boiserie.map,
					bumpMap: textures.boiserie.bumpMap,
					bumpScale: .04,
					roughness: .68
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					6.65,
					-8.5
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					4.9,
					3.5,
					.52
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#e6dac4",
					roughness: .6
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					4.92,
					-8.5
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					5.1,
					.24,
					.62
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#cfa857",
					metalness: .84,
					roughness: .24
				})]
			}),
			[
				-7.2,
				-4.4,
				1.4,
				4.2
			].map((z, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CorinthianColumn, {
				position: [
					-7.55,
					0,
					z
				],
				height: 7.9
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CorinthianColumn, {
				position: [
					7.55,
					0,
					z
				],
				height: 7.9
			})] }, `h1-col-${i}`)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrassWallSconce, {
				position: [
					-8.48,
					3.2,
					-6
				],
				rotationY: Math.PI / 2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrassWallSconce, {
				position: [
					8.48,
					3.2,
					-6
				],
				rotationY: -Math.PI / 2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrassWallSconce, {
				position: [
					-8.48,
					3.2,
					3.2
				],
				rotationY: Math.PI / 2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrassWallSconce, {
				position: [
					8.48,
					3.2,
					3.2
				],
				rotationY: -Math.PI / 2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AntiqueMuseumBench, {
				position: [
					-3.95,
					0,
					-1
				],
				rotationY: Math.PI / 2,
				length: 2.3,
				velvetColor: "#6c1e2a",
				contactTex: textures.contactTex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AntiqueMuseumBench, {
				position: [
					3.95,
					0,
					-1
				],
				rotationY: Math.PI / 2,
				length: 2.3,
				velvetColor: "#6c1e2a",
				contactTex: textures.contactTex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassicalAmphoraUrn, {
				position: [
					-4.4,
					0,
					4.6
				],
				contactTex: textures.contactTex,
				bodyColor: "#27425d"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassicalAmphoraUrn, {
				position: [
					4.4,
					0,
					4.6
				],
				contactTex: textures.contactTex,
				bodyColor: "#27425d"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrystalChandelier, {
				position: [
					0,
					6.85,
					-1
				],
				scale: 1.35,
				lightIntensity: moodConfig.chandelierIntensity,
				lightColor: moodConfig.chandelierColor,
				withRealLight: true
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				position: [
					0,
					0,
					hall2CenterZ
				],
				receiveShadow: true,
				onClick: () => {
					if (performance.now() < suppressClickUntilRef.current) return;
					onSelectSlot(null);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [17.2, hall2Length + .2] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.parquetH2.map,
					roughnessMap: textures.parquetH2.roughnessMap,
					roughness: .5,
					metalness: .05
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					8.2,
					hall2CenterZ
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [17.2, hall2Length + .2] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.fresco,
					roughness: .62
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-8.7,
					4.1,
					hall2CenterZ
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.4,
					8.2,
					hall2Length + .4
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.claretDamask,
					roughness: .78
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					8.7,
					4.1,
					hall2CenterZ
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.4,
					8.2,
					hall2Length + .4
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.claretDamask,
					roughness: .78
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-13.55,
					4.1,
					hall2NorthZ
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					22.3,
					8.2,
					.5
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.boiserie.map,
					bumpMap: textures.boiserie.bumpMap,
					bumpScale: .04,
					roughness: .68
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					13.55,
					4.1,
					hall2NorthZ
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					22.3,
					8.2,
					.5
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.boiserie.map,
					bumpMap: textures.boiserie.bumpMap,
					bumpScale: .04,
					roughness: .68
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					6.55,
					hall2NorthZ
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					4.9,
					3.3,
					.52
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#e6dac4",
					roughness: .6
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					4.92,
					hall2NorthZ
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					5.1,
					.24,
					.62
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#cfa857",
					metalness: .84,
					roughness: .24
				})]
			}),
			hall2ColumnZs.map((z, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CorinthianColumn, {
					position: [
						-7.55,
						0,
						z
					],
					height: 7.7
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CorinthianColumn, {
					position: [
						7.55,
						0,
						z
					],
					height: 7.7
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						7.98,
						z
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						17,
						.36,
						.42
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#dfd1b8",
						roughness: .55
					})]
				})
			] }, `h2-col-${i}`)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AntiqueMuseumBench, {
				position: [
					0,
					0,
					-17.5
				],
				rotationY: Math.PI / 2,
				length: 2.5,
				velvetColor: "#6a1e29",
				contactTex: textures.contactTex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AntiqueMuseumBench, {
				position: [
					0,
					0,
					-30
				],
				rotationY: Math.PI / 2,
				length: 2.5,
				velvetColor: "#6a1e29",
				contactTex: textures.contactTex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecorativeConsoleTable, {
				position: [
					-5.3,
					0,
					-9.25
				],
				contactTex: textures.contactTex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecorativeConsoleTable, {
				position: [
					5.3,
					0,
					-9.25
				],
				contactTex: textures.contactTex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarbleBustExhibit, {
				position: [
					-6.75,
					0,
					-20
				],
				rotationY: Math.PI / 2,
				contactTex: textures.contactTex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarbleBustExhibit, {
				position: [
					6.75,
					0,
					-20
				],
				rotationY: -Math.PI / 2,
				contactTex: textures.contactTex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarbleBustExhibit, {
				position: [
					-6.75,
					0,
					-30
				],
				rotationY: Math.PI / 2,
				contactTex: textures.contactTex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarbleBustExhibit, {
				position: [
					6.75,
					0,
					-30
				],
				rotationY: -Math.PI / 2,
				contactTex: textures.contactTex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrassWallSconce, {
				position: [
					-3.05,
					3.1,
					-8.76
				],
				rotationY: Math.PI
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrassWallSconce, {
				position: [
					3.05,
					3.1,
					-8.76
				],
				rotationY: Math.PI
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrassWallSconce, {
				position: [
					-3.05,
					3.1,
					hall2NorthZ + .26
				],
				rotationY: 0
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrassWallSconce, {
				position: [
					3.05,
					3.1,
					hall2NorthZ + .26
				],
				rotationY: 0
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrystalChandelier, {
				position: [
					0,
					6.7,
					-14.5
				],
				scale: 1.22,
				withRealLight: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrystalChandelier, {
				position: [
					0,
					6.7,
					-24.5
				],
				scale: 1.25,
				lightIntensity: moodConfig.chandelierIntensity * 1.08,
				lightColor: moodConfig.chandelierColor,
				withRealLight: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrystalChandelier, {
				position: [
					0,
					6.7,
					-34.5
				],
				scale: 1.22,
				withRealLight: false
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				position: [
					18.5,
					0,
					-1.5
				],
				receiveShadow: true,
				onClick: () => {
					if (performance.now() < suppressClickUntilRef.current) return;
					onSelectSlot(null);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [20.2, 14.2] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.marbleH3.map,
					roughnessMap: textures.marbleH3.roughnessMap,
					roughness: .28,
					metalness: .08
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					18.5,
					8.8,
					-1.5
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [20.2, 14.2] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#e6dcc9",
					roughness: .62
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					18.5,
					8.74,
					-1.5
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					3.4,
					.22,
					12,
					32
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#cfa857",
					metalness: .82,
					roughness: .24
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					18.5,
					8.76,
					-1.5
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [3.3, 28] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: moodConfig.windowGlow,
					emissive: moodConfig.windowGlow,
					emissiveIntensity: mood === "evening" ? .45 : 1.05,
					roughness: .18
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					28.7,
					4.4,
					-1.5
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.4,
					8.8,
					14.4
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.boiserie.map,
					bumpMap: textures.boiserie.bumpMap,
					bumpScale: .04,
					roughness: .65
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					18.5,
					4.4,
					-8.7
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					20.4,
					8.8,
					.4
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.boiserie.map,
					bumpMap: textures.boiserie.bumpMap,
					bumpScale: .04,
					roughness: .65
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					18.5,
					4.4,
					5.7
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					20.4,
					8.8,
					.4
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.boiserie.map,
					bumpMap: textures.boiserie.bumpMap,
					bumpScale: .04,
					roughness: .65
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchedBeauxArtsWindow, {
				position: [
					28.46,
					1.45,
					-5.2
				],
				rotationY: -Math.PI / 2,
				width: 2.2,
				height: 4.6,
				skyColor: moodConfig.windowGlow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchedBeauxArtsWindow, {
				position: [
					28.46,
					1.45,
					2.2
				],
				rotationY: -Math.PI / 2,
				width: 2.2,
				height: 4.6,
				skyColor: moodConfig.windowGlow
			}),
			[10.1, 26.9].map((cx) => [-7.3, 4.3].map((cz) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CorinthianColumn, {
				position: [
					cx,
					0,
					cz
				],
				height: 8.2
			}, `h3-col-${cx}-${cz}`))),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassicalSculptureFull, {
				position: [
					18.5,
					0,
					-1.5
				],
				contactTex: textures.contactTex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarbleBustExhibit, {
				position: [
					14,
					0,
					-5
				],
				rotationY: Math.PI * .25,
				contactTex: textures.contactTex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarbleBustExhibit, {
				position: [
					23,
					0,
					-5
				],
				rotationY: -Math.PI * .25,
				contactTex: textures.contactTex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarbleBustExhibit, {
				position: [
					14,
					0,
					2
				],
				rotationY: Math.PI * .75,
				contactTex: textures.contactTex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarbleBustExhibit, {
				position: [
					23,
					0,
					2
				],
				rotationY: -Math.PI * .75,
				contactTex: textures.contactTex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AntiqueMuseumBench, {
				position: [
					18.5,
					0,
					-5.2
				],
				length: 2.2,
				velvetColor: "#293d54",
				contactTex: textures.contactTex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AntiqueMuseumBench, {
				position: [
					18.5,
					0,
					2.2
				],
				length: 2.2,
				velvetColor: "#293d54",
				contactTex: textures.contactTex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
				position: [
					18.5,
					7.2,
					-1.5
				],
				color: moodConfig.skyColor,
				intensity: mood === "evening" ? 2 : 3.2,
				distance: 24,
				decay: 1.25
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				position: [
					0,
					0,
					hall4CenterZ
				],
				receiveShadow: true,
				onClick: () => {
					if (performance.now() < suppressClickUntilRef.current) return;
					onSelectSlot(null);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [49.2, 16.2] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.marbleH4.map,
					roughnessMap: textures.marbleH4.roughnessMap,
					roughness: .26,
					metalness: .08
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-24.7,
					4.1,
					hall4CenterZ
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.4,
					8.2,
					16.4
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.boiserie.map,
					bumpMap: textures.boiserie.bumpMap,
					bumpScale: .04,
					roughness: .62
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					24.7,
					4.1,
					hall4CenterZ
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.4,
					8.2,
					16.4
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.boiserie.map,
					bumpMap: textures.boiserie.bumpMap,
					bumpScale: .04,
					roughness: .62
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					4.4,
					hall4NorthZ - .2
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					49.4,
					8.8,
					.4
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.boiserie.map,
					bumpMap: textures.boiserie.bumpMap,
					bumpScale: .04,
					roughness: .62
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					7.6,
					hall4CenterZ
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					8.1,
					8.1,
					49.2,
					24,
					1,
					true,
					0,
					Math.PI
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: moodConfig.windowGlow,
					emissive: moodConfig.windowGlow,
					emissiveIntensity: mood === "evening" ? .38 : .92,
					roughness: .2,
					side: 1
				})]
			}),
			[
				-20,
				-14,
				-8,
				-2.5,
				2.5,
				8,
				14,
				20
			].map((rx, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					rx,
					7.55,
					hall4CenterZ
				],
				rotation: [
					0,
					Math.PI / 2,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					7.95,
					.12,
					8,
					28,
					Math.PI
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#36383e",
					metalness: .72,
					roughness: .34
				})]
			}, `orsay-rib-${idx}`)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchedBeauxArtsWindow, {
				position: [
					-4.5,
					1.35,
					hall4NorthZ + .04
				],
				width: 2.3,
				height: 4.4,
				skyColor: moodConfig.windowGlow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchedBeauxArtsWindow, {
				position: [
					4.5,
					1.35,
					hall4NorthZ + .04
				],
				width: 2.3,
				height: 4.4,
				skyColor: moodConfig.windowGlow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: [
					0,
					5.4,
					hall4NorthZ + .08
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					1.28,
					1.28,
					.14,
					28
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#cfa857",
					metalness: .88,
					roughness: .22
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						0,
						.08
					],
					rotation: [
						Math.PI / 2,
						0,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [1.15, 28] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: textures.clockTex,
						roughness: .35
					})]
				})]
			}),
			[hall4SouthZ - 2.6, hall4NorthZ + 2.6].map((cz, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CorinthianColumn, {
				position: [
					-7.4,
					0,
					cz
				],
				height: 7.1
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CorinthianColumn, {
				position: [
					7.4,
					0,
					cz
				],
				height: 7.1
			})] }, `h4-col-${i}`)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassicalAmphoraUrn, {
				position: [
					-3.2,
					0,
					hall4NorthZ + 1.2
				],
				contactTex: textures.contactTex,
				bodyColor: "#c6bfb2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassicalAmphoraUrn, {
				position: [
					3.2,
					0,
					hall4NorthZ + 1.2
				],
				contactTex: textures.contactTex,
				bodyColor: "#c6bfb2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarbleBustExhibit, {
				position: [
					-3.4,
					0,
					hall4CenterZ
				],
				rotationY: Math.PI / 2,
				contactTex: textures.contactTex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarbleBustExhibit, {
				position: [
					3.4,
					0,
					hall4CenterZ
				],
				rotationY: -Math.PI / 2,
				contactTex: textures.contactTex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AntiqueMuseumBench, {
				position: [
					0,
					0,
					hall4CenterZ
				],
				length: 2.5,
				velvetColor: "#293d54",
				contactTex: textures.contactTex
			}),
			hasHall4Cimaises ? [-15.2, 15.2].map((cx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: [
					cx,
					0,
					hall4CenterZ
				],
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							.12,
							0
						],
						receiveShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
							8.16,
							.24,
							.66
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#dfd4c1",
							roughness: .44
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							2.3,
							0
						],
						castShadow: true,
						receiveShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
							8,
							4.4,
							.56
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							map: textures.boiserie.map,
							bumpMap: textures.boiserie.bumpMap,
							bumpScale: .04,
							roughness: .62
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							4.62,
							0
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
							8.22,
							.24,
							.7
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#cfa857",
							metalness: .82,
							roughness: .25
						})]
					})
				]
			}, `cimaise-${cx}`)) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AntiqueMuseumBench, {
				position: [
					-15,
					0,
					hall4CenterZ
				],
				length: 2.4,
				velvetColor: "#293d54",
				contactTex: textures.contactTex
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AntiqueMuseumBench, {
				position: [
					15,
					0,
					hall4CenterZ
				],
				length: 2.4,
				velvetColor: "#293d54",
				contactTex: textures.contactTex
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
				position: [
					-11,
					7.6,
					hall4CenterZ
				],
				color: moodConfig.skyColor,
				intensity: mood === "evening" ? 1.85 : 2.9,
				distance: 26,
				decay: 1.25
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
				position: [
					11,
					7.6,
					hall4CenterZ
				],
				color: moodConfig.skyColor,
				intensity: mood === "evening" ? 1.85 : 2.9,
				distance: 26,
				decay: 1.25
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				position: [
					-18.5,
					0,
					-2
				],
				receiveShadow: true,
				onClick: () => {
					if (performance.now() < suppressClickUntilRef.current) return;
					onSelectSlot(null);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [20.2, 11.2] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.parquetH5.map,
					roughnessMap: textures.parquetH5.roughnessMap,
					roughness: .48,
					metalness: .05
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-18.5,
					6.4,
					-2
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [20.2, 11.2] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.fresco,
					roughness: .62
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-28.7,
					3.2,
					-2
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.4,
					6.4,
					11.4
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.emeraldDamask,
					roughness: .78
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-18.5,
					3.2,
					-7.7
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					20.4,
					6.4,
					.4
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.emeraldDamask,
					roughness: .78
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-18.5,
					3.2,
					3.7
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					20.4,
					6.4,
					.4
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: textures.emeraldDamask,
					roughness: .78
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchedBeauxArtsWindow, {
				position: [
					-22.25,
					1.15,
					3.46
				],
				rotationY: Math.PI,
				width: 2.1,
				height: 3.8,
				skyColor: moodConfig.windowGlow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchedBeauxArtsWindow, {
				position: [
					-14.75,
					1.15,
					3.46
				],
				rotationY: Math.PI,
				width: 2.1,
				height: 3.8,
				skyColor: moodConfig.windowGlow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DecorativeConsoleTable, {
				position: [
					-18.5,
					0,
					-6.85
				],
				contactTex: textures.contactTex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AntiqueMuseumBench, {
				position: [
					-14.5,
					0,
					-2
				],
				rotationY: Math.PI / 2,
				length: 2.1,
				velvetColor: "#1d443c",
				contactTex: textures.contactTex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AntiqueMuseumBench, {
				position: [
					-22.5,
					0,
					-2
				],
				rotationY: Math.PI / 2,
				length: 2.1,
				velvetColor: "#1d443c",
				contactTex: textures.contactTex
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassicalAmphoraUrn, {
				position: [
					-22.25,
					0,
					2.75
				],
				contactTex: textures.contactTex,
				bodyColor: "#1e443d"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClassicalAmphoraUrn, {
				position: [
					-14.75,
					0,
					2.75
				],
				contactTex: textures.contactTex,
				bodyColor: "#1e443d"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrassWallSconce, {
				position: [
					-28.48,
					3,
					-3.6
				],
				rotationY: Math.PI / 2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrassWallSconce, {
				position: [
					-28.48,
					3,
					-.4
				],
				rotationY: Math.PI / 2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrystalChandelier, {
				position: [
					-14.5,
					5.1,
					-2
				],
				scale: .95,
				withRealLight: false
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrystalChandelier, {
				position: [
					-22.5,
					5.1,
					-2
				],
				scale: .98,
				lightIntensity: moodConfig.chandelierIntensity * 1,
				lightColor: moodConfig.chandelierColor,
				withRealLight: true
			})
		] }),
		slots.map((slot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrnatePhotoFrame3D, {
			slot,
			active: activeSlot?.index === slot.index,
			maxAnisotropy,
			maxTextureDim,
			priority: slot.hall === currentHall ? 0 : slot.hall === "hall1" || slot.hall === "hall2" ? 1 : 2,
			onSelect: onSelectSlot,
			suppressClickUntilRef
		}, slot.index)),
		!reducedMotion && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmbientVisitorNPC, {
				coatColor: "#333847",
				speed: .55,
				phaseOffset: 0,
				waypoints: [
					[
						-2.2,
						0,
						-12.5
					],
					[
						2.2,
						0,
						-12.5
					],
					[
						2.2,
						0,
						-34.5
					],
					[
						-2.2,
						0,
						-34.5
					]
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmbientVisitorNPC, {
				coatColor: "#574740",
				speed: .48,
				phaseOffset: 6.5,
				waypoints: [
					[
						15.2,
						0,
						-3.5
					],
					[
						21.8,
						0,
						-3.5
					],
					[
						21.8,
						0,
						.5
					],
					[
						15.2,
						0,
						.5
					]
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmbientVisitorNPC, {
				coatColor: "#3f343c",
				speed: .5,
				phaseOffset: 3.2,
				waypoints: [
					[
						-6,
						0,
						hall4SouthZ - 4
					],
					[
						6,
						0,
						hall4SouthZ - 4
					],
					[
						6,
						0,
						hall4NorthZ + 4
					],
					[
						-6,
						0,
						hall4NorthZ + 4
					]
				]
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FirstPersonMuseumController, {
			collisionWorld,
			hall2DepthExtra,
			activeSlot,
			teleportRequest,
			settings,
			reducedMotion,
			joystickRef,
			suppressClickUntilRef,
			onPointerLockChange,
			onHallChange,
			onCanvasElement
		})
	] });
}
function VirtualJoystick({ joystickRef, bottomClass }) {
	const [knobOffset, setKnobOffset] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const activePointerId = (0, import_react.useRef)(null);
	const centerRef = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const maxRadius = 32;
	(0, import_react.useEffect)(() => {
		return () => {
			joystickRef.current = {
				x: 0,
				y: 0
			};
		};
	}, [joystickRef]);
	const updateFromClient = (clientX, clientY) => {
		let dx = clientX - centerRef.current.x;
		let dy = clientY - centerRef.current.y;
		const dist = Math.hypot(dx, dy);
		if (dist > maxRadius) {
			dx = dx / dist * maxRadius;
			dy = dy / dist * maxRadius;
		}
		setKnobOffset({
			x: dx,
			y: dy
		});
		const normX = dx / maxRadius;
		const normY = -dy / maxRadius;
		if (Math.hypot(normX, normY) < .08) joystickRef.current = {
			x: 0,
			y: 0
		};
		else joystickRef.current = {
			x: normX,
			y: normY
		};
	};
	const resetStick = () => {
		activePointerId.current = null;
		setKnobOffset({
			x: 0,
			y: 0
		});
		joystickRef.current = {
			x: 0,
			y: 0
		};
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `fixed left-4 ${bottomClass} z-20 w-24 h-24 rounded-full bg-[#17172F]/82 border border-[#D6B875]/55 flex items-center justify-center touch-none select-none shadow-xl transition-all`,
		onPointerDown: (e) => {
			e.stopPropagation();
			e.currentTarget.setPointerCapture(e.pointerId);
			activePointerId.current = e.pointerId;
			const rect = e.currentTarget.getBoundingClientRect();
			centerRef.current = {
				x: rect.left + rect.width / 2,
				y: rect.top + rect.height / 2
			};
			updateFromClient(e.clientX, e.clientY);
		},
		onPointerMove: (e) => {
			if (activePointerId.current !== e.pointerId) return;
			e.stopPropagation();
			updateFromClient(e.clientX, e.clientY);
		},
		onPointerUp: (e) => {
			if (activePointerId.current !== e.pointerId) return;
			e.stopPropagation();
			resetStick();
		},
		onPointerCancel: (e) => {
			if (activePointerId.current !== e.pointerId) return;
			e.stopPropagation();
			resetStick();
		},
		"aria-label": "اهرم حرکت در موزه",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-2.5 rounded-full border border-dashed border-[#D6B875]/35 pointer-events-none" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-9 h-9 rounded-full bg-gradient-to-br from-[#F1DCCB] to-[#D6B875] border border-[#17172F]/60 shadow-md pointer-events-none",
			style: { transform: `translate(${knobOffset.x}px, ${knobOffset.y}px)` }
		})]
	});
}
var MuseumWorld = () => {
	const { slots, hall2DepthExtra, hasHall4Cimaises } = (0, import_react.useMemo)(() => buildGalleryLayout(_virtual_museum_photos_default), []);
	const collisionWorld = (0, import_react.useMemo)(() => buildMuseumCollisionWorld(hall2DepthExtra, hasHall4Cimaises), [hall2DepthExtra, hasHall4Cimaises]);
	const quality = useUniverseStore((s) => s.environment.quality);
	const reducedMotion = useUniverseStore((s) => s.environment.reducedMotion);
	const audioMuted = useUniverseStore((s) => s.audio.muted);
	const audioVolume = useUniverseStore((s) => s.audio.volume);
	const profile = (0, import_react.useMemo)(() => getGraphicsProfile(quality, reducedMotion), [quality, reducedMotion]);
	const maxTextureDim = profile.lodLevel === "low" || profile.isMobile ? 1024 : profile.lodLevel === "ultra" ? 2048 : 1600;
	const [activeSlot, setActiveSlot] = (0, import_react.useState)(null);
	const [currentHall, setCurrentHall] = (0, import_react.useState)("hall1");
	const [teleportRequest, setTeleportRequest] = (0, import_react.useState)({
		target: "hall1",
		seq: 0
	});
	const [mood, setMood] = (0, import_react.useState)("daylight");
	const [dockOpen, setDockOpen] = (0, import_react.useState)(true);
	const [settingsOpen, setSettingsOpen] = (0, import_react.useState)(false);
	const [pointerLocked, setPointerLocked] = (0, import_react.useState)(false);
	const [settings, setSettings] = (0, import_react.useState)(() => ({
		walkSpeed: 3.6,
		moveSensitivity: 1,
		lookSensitivity: 1,
		touchControls: detectTouchCapable()
	}));
	const joystickRef = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const suppressClickUntilRef = (0, import_react.useRef)(0);
	const canvasElementRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		return () => {
			disposeMuseumPhotoCache();
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const startAudio = () => {
			museumAcoustics.startAmbientHallTone();
		};
		startAudio();
		window.addEventListener("pointerdown", startAudio, { once: true });
		window.addEventListener("keydown", startAudio, { once: true });
		return () => {
			window.removeEventListener("pointerdown", startAudio);
			window.removeEventListener("keydown", startAudio);
			museumAcoustics.stopAmbientHallTone();
		};
	}, []);
	(0, import_react.useEffect)(() => {
		museumAcoustics.syncGlobalVolume();
	}, [audioMuted, audioVolume]);
	const handleCanvasElement = (0, import_react.useCallback)((el) => {
		canvasElementRef.current = el;
	}, []);
	const requestWalkLock = () => {
		const el = canvasElementRef.current;
		if (!el || activeSlot) return;
		if (document.pointerLockElement === el) {
			try {
				document.exitPointerLock?.();
			} catch {}
			return;
		}
		try {
			const maybePromise = el.requestPointerLock?.();
			if (maybePromise && typeof maybePromise.catch === "function") maybePromise.catch(() => {});
		} catch {}
	};
	const triggerTeleport = (target) => {
		setActiveSlot(null);
		setCurrentHall(target);
		setTeleportRequest((prev) => ({
			target,
			seq: prev.seq + 1
		}));
	};
	const goPrevPhoto = (0, import_react.useCallback)(() => {
		if (!activeSlot || slots.length === 0) return;
		const prevIdx = (activeSlot.index - 1 + slots.length) % slots.length;
		setActiveSlot(slots[prevIdx]);
	}, [activeSlot, slots]);
	const goNextPhoto = (0, import_react.useCallback)(() => {
		if (!activeSlot || slots.length === 0) return;
		const nextIdx = (activeSlot.index + 1) % slots.length;
		setActiveSlot(slots[nextIdx]);
	}, [activeSlot, slots]);
	(0, import_react.useEffect)(() => {
		if (!activeSlot) return;
		const onKey = (e) => {
			if (e.key === "Escape") setActiveSlot(null);
			else if (e.key === "ArrowRight") goPrevPhoto();
			else if (e.key === "ArrowLeft") goNextPhoto();
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		activeSlot,
		goPrevPhoto,
		goNextPhoto
	]);
	const activeHallLabel = getMuseumHallSpawns(hall2DepthExtra)[currentHall]?.label ?? "تالار بزرگ فرانسوی";
	const bgColor = mood === "evening" ? "#161a2b" : mood === "golden" ? "#362b22" : "#303442";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full h-full select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneCanvas, {
				cameraPosition: [
					MUSEUM_START_POS.x,
					PLAYER_EYE_HEIGHT,
					MUSEUM_START_POS.z
				],
				fov: 52,
				bgColor,
				fogNear: 36,
				fogFar: 118,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MuseumSceneContent, {
					slots,
					hall2DepthExtra,
					hasHall4Cimaises,
					collisionWorld,
					currentHall,
					activeSlot,
					teleportRequest,
					settings,
					reducedMotion: profile.systemReducedMotion,
					particleScale: profile.particleScale,
					shadowsEnabled: profile.shadowsEnabled,
					shadowMapSize: profile.shadowMapSize,
					maxAnisotropy: profile.maxAnisotropy,
					maxTextureDim,
					joystickRef,
					suppressClickUntilRef,
					onSelectSlot: setActiveSlot,
					onPointerLockChange: setPointerLocked,
					onHallChange: setCurrentHall,
					onCanvasElement: handleCanvasElement,
					mood
				})
			}),
			pointerLocked && !activeSlot && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-10 pointer-events-none flex items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rounded-full bg-[#D6B875]/90 ring-2 ring-[#17172F]/75" })
			}),
			!activeSlot && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed top-16 left-3 sm:left-5 z-20 flex flex-col items-end gap-2 pointer-events-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center justify-end gap-1.5 pointer-events-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-3 py-1.5 rounded-xl bg-[#17172F]/92 border border-[#D6B875]/35 text-[#F1DCCB] text-xs font-medium",
							children: activeHallLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: requestWalkLock,
							className: `hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs border transition-colors cursor-pointer ${pointerLocked ? "bg-[#D6B875] text-[#17172F] border-[#D6B875] font-bold" : "bg-[#17172F]/92 text-[#F1DCCB] border-[#7771A8]/45 hover:border-[#D6B875]"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crosshair, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: pointerLocked ? "خروج از قفل ماوس" : "چرخش آزاد ماوس" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setSettingsOpen((v) => !v),
							className: `flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs border transition-colors cursor-pointer ${settingsOpen ? "bg-[#7771A8] text-[#F1DCCB] border-[#D6B875]" : "bg-[#17172F]/92 text-[#F1DCCB] border-[#7771A8]/45 hover:border-[#D6B875]"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "w-3.5 h-3.5 text-[#D6B875]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "تنظیمات حرکت" })]
						})
					]
				}), settingsOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto w-72 rounded-2xl bg-[#17172F]/96 border border-[#D6B875]/45 p-3.5 shadow-2xl space-y-3 text-right",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between border-b border-[#7771A8]/25 pb-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs font-bold text-[#F1DCCB]",
								children: "تنظیمات حرکت و دوربین"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSettingsOpen(false),
								"aria-label": "بستن تنظیمات حرکت",
								className: "p-1 rounded-lg bg-[#232347] text-[#F1DCCB] hover:bg-[#313160] cursor-pointer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-3.5 h-3.5" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-[11px] text-[#F1DCCB] mb-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "سرعت قدم‌زدن" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#D6B875] tabular-nums",
								children: toPersianDigits(settings.walkSpeed.toFixed(1))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: 2.2,
							max: 6,
							step: .2,
							value: settings.walkSpeed,
							onChange: (e) => setSettings((s) => ({
								...s,
								walkSpeed: parseFloat(e.target.value)
							})),
							className: "w-full accent-[#D6B875]"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-[11px] text-[#F1DCCB] mb-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "حساسیت حرکت" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#D6B875] tabular-nums",
								children: toPersianDigits(settings.moveSensitivity.toFixed(1))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: .5,
							max: 1.8,
							step: .1,
							value: settings.moveSensitivity,
							onChange: (e) => setSettings((s) => ({
								...s,
								moveSensitivity: parseFloat(e.target.value)
							})),
							className: "w-full accent-[#D6B875]"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-[11px] text-[#F1DCCB] mb-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "حساسیت چرخش دوربین" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#D6B875] tabular-nums",
								children: toPersianDigits(settings.lookSensitivity.toFixed(1))
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							min: .5,
							max: 2,
							step: .1,
							value: settings.lookSensitivity,
							onChange: (e) => setSettings((s) => ({
								...s,
								lookSensitivity: parseFloat(e.target.value)
							})),
							className: "w-full accent-[#D6B875]"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex items-center justify-between p-2 rounded-xl bg-[#222245] text-[11px] text-[#F1DCCB] cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "اهرم و چرخش لمسی موبایل" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: settings.touchControls,
								onChange: (e) => setSettings((s) => ({
									...s,
									touchControls: e.target.checked
								})),
								className: "w-4 h-4 accent-[#D6B875]"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-1.5 pt-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => triggerTeleport("hall1"),
								className: "py-1.5 px-2 rounded-xl bg-[#232347] border border-[#7771A8]/40 text-[11px] text-[#F1DCCB] hover:border-[#D6B875] flex items-center justify-center gap-1 cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "w-3 h-3 text-[#D6B875]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "نقطه شروع" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: requestWalkLock,
								className: "py-1.5 px-2 rounded-xl bg-[#232347] border border-[#7771A8]/40 text-[11px] text-[#D9A9C5] hover:border-[#D6B875] flex items-center justify-center gap-1 cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Crosshair, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: pointerLocked ? "آزادسازی ماوس" : "قفل ماوس" })]
							})]
						})
					]
				})]
			}),
			settings.touchControls && !activeSlot && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VirtualJoystick, {
				joystickRef,
				bottomClass: dockOpen ? "bottom-40 sm:bottom-28" : "bottom-12"
			}),
			activeSlot && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-40 flex items-center justify-center bg-[#0d0d1d]/94 p-4 sm:p-8",
				onClick: () => setActiveSlot(null),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActiveSlot(null),
						"aria-label": "بستن",
						className: "fixed top-4 left-4 sm:top-6 sm:left-6 z-50 w-11 h-11 rounded-2xl bg-[#17172F]/95 border border-[#D6B875]/45 text-[#F1DCCB] hover:border-[#D6B875] flex items-center justify-center shadow-lg cursor-pointer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-5 h-5" })
					}),
					slots.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: (e) => {
							e.stopPropagation();
							goPrevPhoto();
						},
						"aria-label": "قبلی",
						className: "fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-2xl bg-[#17172F]/95 border border-[#7771A8]/50 text-[#F1DCCB] hover:border-[#D6B875] flex items-center justify-center shadow-lg cursor-pointer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-6 h-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative max-w-[90vw] max-h-[84vh] rounded-2xl p-2 sm:p-3 bg-gradient-to-br from-[#D6B875]/40 via-[#242345] to-[#D9A9C5]/30 border border-[#D6B875]/55 shadow-2xl",
						onClick: (e) => e.stopPropagation(),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: activeSlot.src,
							alt: "",
							className: "block max-w-[85vw] max-h-[78vh] object-contain rounded-xl select-none"
						})
					}),
					slots.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: (e) => {
							e.stopPropagation();
							goNextPhoto();
						},
						"aria-label": "بعدی",
						className: "fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-2xl bg-[#17172F]/95 border border-[#7771A8]/50 text-[#F1DCCB] hover:border-[#D6B875] flex items-center justify-center shadow-lg cursor-pointer",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-6 h-6" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed bottom-3 inset-x-0 z-20 flex flex-col items-center px-3 pointer-events-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setDockOpen((v) => !v),
					className: "pointer-events-auto mb-1.5 px-3.5 py-1 rounded-t-xl bg-[#17172F]/92 border border-b-0 border-[#7771A8]/45 text-[11px] text-[#F1DCCB] cursor-pointer",
					children: dockOpen ? "جمع کردن راهنمای موزه" : "نمایش تالارها و نورپردازی"
				}), dockOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto w-full max-w-4xl rounded-2xl bg-[#17172F]/94 border border-[#7771A8]/45 p-3 shadow-2xl space-y-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-[#D6B875] flex items-center gap-1 ml-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Compass, { className: "w-3.5 h-3.5" }), "تالارها:"]
							}), HALL_TABS.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => triggerTeleport(tab.id),
								className: `px-2.5 py-1.5 rounded-xl text-xs whitespace-nowrap cursor-pointer ${currentHall === tab.id ? "bg-[#7771A8] text-[#F1DCCB] font-semibold border border-[#D6B875]/60" : "bg-[#222245] text-[#D9A9C5] hover:bg-[#2a2a55]"}`,
								children: tab.label
							}, tab.id))]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "w-3.5 h-3.5 text-[#D6B875]" }), [
								["daylight", "نور روز"],
								["golden", "طلایی"],
								["evening", "شامگاهی"]
							].map(([m, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setMood(m),
								className: `px-2.5 py-1.5 rounded-xl text-xs whitespace-nowrap cursor-pointer ${mood === m ? "bg-[#D6B875] text-[#17172F] font-bold" : "bg-[#222245] text-[#F1DCCB]"}`,
								children: label
							}, m))]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] text-[#A6BBAA] text-center border-t border-[#7771A8]/25 pt-1.5",
						children: "در پنج تالار پاریسی قدم بزن، با کشیدن صفحه اطراف را ببین و برای تماشای نزدیک روی هر قاب عکس کلیک کن."
					})]
				})]
			})
		]
	});
};
export { MuseumWorld };
