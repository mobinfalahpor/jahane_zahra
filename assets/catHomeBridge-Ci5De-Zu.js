import { a as __toESM } from "./rolldown-runtime-DQp2zzRu.js";
import { A as ExtrudeGeometry, At as SphereGeometry, C as Color, Ct as RepeatWrapping, E as CylinderGeometry, Et as Shape, Ft as TubeGeometry, H as LatheGeometry, It as Vector2, Lt as Vector3, N as Group, Pt as TorusGeometry, Rt as VectorKeyframeTrack, S as ClampToEdgeWrapping, T as ConeGeometry, Vt as require_react, at as MeshPhysicalMaterial, b as CatmullRomCurve3, bt as Quaternion, c as useThree, d as AnimationClip, et as MathUtils, f as AnimationMixer, h as BoxGeometry, k as Euler, l as require_jsx_runtime, nt as Mesh, ot as MeshStandardMaterial, rt as MeshBasicMaterial, s as useFrame, v as CanvasTexture, wt as SRGBColorSpace, x as CircleGeometry, xt as QuaternionKeyframeTrack, y as CapsuleGeometry } from "./r3f-core-XgHUAlSk.js";
import { t as GLTFLoader } from "./three-core-BhU-cSAG.js";
import { f as useUniverseStore, o as createLucideIcon, w as getGraphicsProfile } from "./entry-Br_QEXnh.js";
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Camera = createLucideIcon("camera", [["path", {
	d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",
	key: "18u6gg"
}], ["circle", {
	cx: "12",
	cy: "13",
	r: "3",
	key: "1vg3eu"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Heart = createLucideIcon("heart", [["path", {
	d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
	key: "mvr1a0"
}]]);
// src/systems/catGlbBuilder.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var BREED_PALETTES = {
	honey: {
		fur: "#f47b16",
		furHighlight: "#ffa347",
		furShadow: "#c74d08",
		belly: "#fff4e3",
		earInner: "#f4a5b5",
		nose: "#e67285",
		irisOuter: "#448b56",
		irisInner: "#e7c454",
		stripe: "#9e3304"
	},
	calico: {
		fur: "#f6ede3",
		furHighlight: "#ffffff",
		furShadow: "#df833f",
		belly: "#ffffff",
		earInner: "#f4adc0",
		nose: "#e68c9d",
		irisOuter: "#508a66",
		irisInner: "#e6bd5d",
		stripe: "#d9691f"
	},
	snow: {
		fur: "#f7f1eb",
		furHighlight: "#ffffff",
		furShadow: "#dfd5cb",
		belly: "#ffffff",
		earInner: "#f2b7c8",
		nose: "#ea9cb0",
		irisOuter: "#5691bc",
		irisInner: "#add9ee",
		stripe: "#e4d8cd"
	},
	mist: {
		fur: "#8c92a8",
		furHighlight: "#b0b6cc",
		furShadow: "#646980",
		belly: "#e6e8f2",
		earInner: "#e2b0be",
		nose: "#cc8899",
		irisOuter: "#b89440",
		irisInner: "#f2d374",
		stripe: "#585d73"
	},
	midnight: {
		fur: "#2a2c48",
		furHighlight: "#41446b",
		furShadow: "#17172b",
		belly: "#51547d",
		earInner: "#b9859e",
		nose: "#c88fa5",
		irisOuter: "#cda842",
		irisInner: "#fae17d",
		stripe: "#171729"
	}
};
function resolvePalette(breed, customFurColor) {
	const base = BREED_PALETTES[breed] ?? BREED_PALETTES.honey;
	if (!customFurColor) return base;
	const main = new Color(customFurColor);
	const highlight = main.clone().lerp(new Color("#ffd8b0"), .36);
	const shadow = main.clone().lerp(new Color("#3a1503"), .32);
	const stripe = main.clone().lerp(new Color("#280c01"), .45);
	return {
		...base,
		fur: `#${main.getHexString()}`,
		furHighlight: `#${highlight.getHexString()}`,
		furShadow: `#${shadow.getHexString()}`,
		stripe: `#${stripe.getHexString()}`
	};
}
var furMapCache = /* @__PURE__ */ new Map();
function paintFurStrokes(ctx, size, highlight, shadow, count, alphaScale = 1) {
	for (let i = 0; i < count; i++) {
		const x = (i * 73.13 + i % 19 * 11) % size;
		const y = (i * 139.7 + i % 23 * 7) % size;
		const len = 7 + i % 8;
		const lean = (i % 5 - 2) * .7;
		ctx.globalAlpha = (i % 3 === 0 ? .2 : .12) * alphaScale;
		ctx.strokeStyle = i % 3 === 0 ? highlight : shadow;
		ctx.lineWidth = 1.15;
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x + lean, y + len);
		ctx.stroke();
	}
	ctx.globalAlpha = 1;
}
function getOrCreateFurMaps(cacheKey, p) {
	const existing = furMapCache.get(cacheKey);
	if (existing) return existing;
	const bundle = createFurMaps(p);
	bundle.albedo.userData.shared = true;
	bundle.headAlbedo.userData.shared = true;
	bundle.normal.userData.shared = true;
	bundle.roughness.userData.shared = true;
	bundle.iris.userData.shared = true;
	furMapCache.set(cacheKey, bundle);
	return bundle;
}
function createFurMaps(p) {
	const size = 512;
	const albedoCanvas = document.createElement("canvas");
	albedoCanvas.width = size;
	albedoCanvas.height = size;
	const ctx = albedoCanvas.getContext("2d");
	ctx.fillStyle = "#f8f2ec";
	ctx.fillRect(0, 0, size, size);
	for (let i = 0; i < 55; i++) {
		const px = i * 97 % size;
		const py = i * 151 % size;
		const r = 34 + i % 4 * 14;
		const rg = ctx.createRadialGradient(px, py, 2, px, py, r);
		rg.addColorStop(0, i % 2 === 0 ? "#ffffff" : "#d4a682");
		rg.addColorStop(1, "rgba(255,255,255,0)");
		ctx.globalAlpha = .22;
		ctx.fillStyle = rg;
		ctx.beginPath();
		ctx.arc(px, py, r, 0, Math.PI * 2);
		ctx.fill();
	}
	ctx.globalAlpha = .48;
	ctx.strokeStyle = "#9c542c";
	ctx.lineCap = "round";
	for (let y = 26; y < size; y += 54) {
		ctx.lineWidth = 14 + y % 7;
		ctx.beginPath();
		ctx.moveTo(0, y);
		ctx.bezierCurveTo(size * .28, y + 15, size * .72, y - 15, size, y + 6);
		ctx.stroke();
		ctx.lineWidth = 6;
		ctx.globalAlpha = .28;
		ctx.beginPath();
		ctx.moveTo(0, y + 18);
		ctx.bezierCurveTo(size * .35, y + 4, size * .65, y + 24, size, y + 14);
		ctx.stroke();
		ctx.globalAlpha = .48;
	}
	paintFurStrokes(ctx, size, "#ffffff", "#b2683e", 3200, 1);
	const albedo = new CanvasTexture(albedoCanvas);
	albedo.colorSpace = SRGBColorSpace;
	albedo.wrapS = RepeatWrapping;
	albedo.wrapT = RepeatWrapping;
	albedo.needsUpdate = true;
	const headCanvas = document.createElement("canvas");
	headCanvas.width = size;
	headCanvas.height = size;
	const hctx = headCanvas.getContext("2d");
	const hGrad = hctx.createRadialGradient(256, 235, 30, 256, 240, 270);
	hGrad.addColorStop(0, p.furHighlight);
	hGrad.addColorStop(.55, p.fur);
	hGrad.addColorStop(1, p.furShadow);
	hctx.fillStyle = hGrad;
	hctx.fillRect(0, 0, size, size);
	hctx.strokeStyle = p.stripe;
	hctx.lineCap = "round";
	hctx.globalAlpha = .32;
	for (let i = 0; i < 3; i++) {
		hctx.lineWidth = 8 - i * 1.4;
		const offset = (i - 1) * 18;
		hctx.beginPath();
		hctx.moveTo(256 + offset * .7, 152);
		hctx.quadraticCurveTo(256 + offset * 1.15, 92, 256 + offset * 1.45, 32);
		hctx.stroke();
	}
	hctx.strokeStyle = p.stripe;
	hctx.lineWidth = 6.5;
	hctx.globalAlpha = .48;
	hctx.beginPath();
	hctx.moveTo(222, 198);
	hctx.quadraticCurveTo(228, 166, 238, 162);
	hctx.quadraticCurveTo(248, 175, 256, 194);
	hctx.quadraticCurveTo(264, 175, 274, 162);
	hctx.quadraticCurveTo(284, 166, 290, 198);
	hctx.stroke();
	hctx.lineWidth = 4.2;
	hctx.globalAlpha = .36;
	for (const dir of [-1, 1]) {
		hctx.beginPath();
		hctx.moveTo(256 + dir * 22, 206);
		hctx.quadraticCurveTo(256 + dir * 48, 192, 256 + dir * 68, 214);
		hctx.stroke();
	}
	hctx.globalAlpha = .38;
	for (const dir of [-1, 1]) {
		hctx.lineWidth = 5.5;
		hctx.beginPath();
		hctx.moveTo(256 + dir * 56, 254);
		hctx.quadraticCurveTo(256 + dir * 92, 260, 256 + dir * 124, 274);
		hctx.stroke();
		hctx.lineWidth = 4.2;
		hctx.beginPath();
		hctx.moveTo(256 + dir * 58, 272);
		hctx.quadraticCurveTo(256 + dir * 90, 282, 256 + dir * 118, 298);
		hctx.stroke();
	}
	for (const dir of [-1, 1]) {
		const eyeGlow = hctx.createRadialGradient(256 + dir * 35, 246, 3, 256 + dir * 35, 246, 22);
		eyeGlow.addColorStop(0, p.belly);
		eyeGlow.addColorStop(1, "rgba(255,244,227,0)");
		hctx.globalAlpha = .2;
		hctx.fillStyle = eyeGlow;
		hctx.beginPath();
		hctx.arc(256 + dir * 35, 246, 22, 0, Math.PI * 2);
		hctx.fill();
	}
	const muzzleBlend = hctx.createRadialGradient(256, 328, 8, 256, 328, 52);
	muzzleBlend.addColorStop(0, p.belly);
	muzzleBlend.addColorStop(.55, p.furHighlight);
	muzzleBlend.addColorStop(1, "rgba(255,244,227,0)");
	hctx.globalAlpha = .45;
	hctx.fillStyle = muzzleBlend;
	hctx.beginPath();
	hctx.arc(256, 328, 52, 0, Math.PI * 2);
	hctx.fill();
	paintFurStrokes(hctx, size, p.furHighlight, p.furShadow, 2100, .55);
	const headAlbedo = new CanvasTexture(headCanvas);
	headAlbedo.colorSpace = SRGBColorSpace;
	headAlbedo.wrapS = ClampToEdgeWrapping;
	headAlbedo.wrapT = ClampToEdgeWrapping;
	const normCanvas = document.createElement("canvas");
	normCanvas.width = 256;
	normCanvas.height = 256;
	const nctx = normCanvas.getContext("2d");
	nctx.fillStyle = "rgb(128,128,255)";
	nctx.fillRect(0, 0, 256, 256);
	for (let i = 0; i < 1500; i++) {
		const x = i * 61 % 256;
		const y = i * 113 % 256;
		nctx.strokeStyle = `rgb(${116 + i % 25},${123 + i % 12},244)`;
		nctx.lineWidth = 1.25;
		nctx.beginPath();
		nctx.moveTo(x, y);
		nctx.lineTo(x + 1, y + 8);
		nctx.stroke();
	}
	const normal = new CanvasTexture(normCanvas);
	normal.wrapS = RepeatWrapping;
	normal.wrapT = RepeatWrapping;
	const roughCanvas = document.createElement("canvas");
	roughCanvas.width = 256;
	roughCanvas.height = 256;
	const rctx = roughCanvas.getContext("2d");
	rctx.fillStyle = "#d4d4d4";
	rctx.fillRect(0, 0, 256, 256);
	for (let i = 0; i < 1200; i++) {
		const x = i * 53 % 256;
		const y = i * 97 % 256;
		const v = 188 + i % 50;
		rctx.strokeStyle = `rgb(${v},${v},${v})`;
		rctx.lineWidth = 1.4;
		rctx.beginPath();
		rctx.moveTo(x, y);
		rctx.lineTo(x + 1, y + 8);
		rctx.stroke();
	}
	const roughness = new CanvasTexture(roughCanvas);
	roughness.wrapS = RepeatWrapping;
	roughness.wrapT = RepeatWrapping;
	const irisCanvas = document.createElement("canvas");
	irisCanvas.width = 512;
	irisCanvas.height = 512;
	const ictx = irisCanvas.getContext("2d");
	const cx = 256;
	const cy = 256;
	ictx.fillStyle = "#132419";
	ictx.fillRect(0, 0, 512, 512);
	const irad = ictx.createRadialGradient(cx, cy, 40, cx, cy, 232);
	irad.addColorStop(0, p.irisInner);
	irad.addColorStop(.45, p.irisOuter);
	irad.addColorStop(.84, "#1b3e28");
	irad.addColorStop(1, "#0e1b13");
	ictx.fillStyle = irad;
	ictx.beginPath();
	ictx.arc(cx, cy, 240, 0, Math.PI * 2);
	ictx.fill();
	for (let a = 0; a < 120; a++) {
		const ang = a / 120 * Math.PI * 2;
		const r0 = 56 + a % 3 * 8;
		const r1 = 196 + a % 5 * 6;
		ictx.strokeStyle = a % 2 === 0 ? "rgba(255,244,195,0.28)" : "rgba(14,36,22,0.28)";
		ictx.lineWidth = a % 3 === 0 ? 2.6 : 1.6;
		ictx.beginPath();
		ictx.moveTo(cx + Math.cos(ang) * r0, cy + Math.sin(ang) * r0);
		ictx.lineTo(cx + Math.cos(ang) * r1, cy + Math.sin(ang) * r1);
		ictx.stroke();
	}
	const lidShadow = ictx.createLinearGradient(0, 20, 0, 240);
	lidShadow.addColorStop(0, "rgba(8, 12, 10, 0.52)");
	lidShadow.addColorStop(.5, "rgba(8, 12, 10, 0.14)");
	lidShadow.addColorStop(1, "rgba(8, 12, 10, 0)");
	ictx.fillStyle = lidShadow;
	ictx.fillRect(0, 0, 512, 240);
	const iris = new CanvasTexture(irisCanvas);
	iris.colorSpace = SRGBColorSpace;
	iris.wrapS = ClampToEdgeWrapping;
	iris.wrapT = ClampToEdgeWrapping;
	iris.needsUpdate = true;
	headAlbedo.needsUpdate = true;
	normal.needsUpdate = true;
	roughness.needsUpdate = true;
	return {
		albedo,
		headAlbedo,
		normal,
		roughness,
		iris
	};
}
var cachedTorsoGeo = null;
function createSculptedTorsoGeometry() {
	if (cachedTorsoGeo) return cachedTorsoGeo;
	const pts = [
		new Vector2(.01, -.27),
		new Vector2(.115, -.25),
		new Vector2(.18, -.19),
		new Vector2(.198, -.1),
		new Vector2(.178, .01),
		new Vector2(.2, .13),
		new Vector2(.17, .22),
		new Vector2(.108, .27),
		new Vector2(.01, .285)
	];
	const geo = new LatheGeometry(pts, 28);
	geo.rotateX(Math.PI / 2);
	geo.scale(.93, 1, 1.06);
	geo.computeVertexNormals();
	geo.userData.shared = true;
	cachedTorsoGeo = geo;
	return geo;
}
var cachedHeadGeo = null;
function createSculptedHeadGeometry() {
	if (cachedHeadGeo) return cachedHeadGeo;
	const geo = new SphereGeometry(.205, 36, 28, -Math.PI / 2, Math.PI * 2);
	const pos = geo.attributes.position;
	for (let i = 0; i < pos.count; i++) {
		let x = pos.getX(i);
		let y = pos.getY(i);
		let z = pos.getZ(i);
		const cheekFactor = Math.exp(-Math.pow((y + .032) / .105, 2));
		x *= 1.08 + .14 * cheekFactor;
		if (y > .045) y *= .91;
		else x *= .96;
		if (z > .02) {
			const browFactor = Math.exp(-Math.pow((y - .062) / .085, 2));
			const bridgeFactor = Math.exp(-Math.pow(x / .055, 2)) * Math.exp(-Math.pow((y + .015) / .075, 2));
			const muzzleFactor = Math.exp(-Math.pow((y + .052) / .075, 2)) * Math.exp(-Math.pow(x / .115, 2));
			z += .018 * browFactor + .032 * bridgeFactor + .046 * muzzleFactor;
		}
		pos.setXYZ(i, x, y, z);
	}
	geo.computeVertexNormals();
	geo.userData.shared = true;
	cachedHeadGeo = geo;
	return geo;
}
function createSculptedEarGeometry(width, height, depth) {
	const pts = [
		new Vector2(0, -height * .5),
		new Vector2(width * .98, -height * .45),
		new Vector2(width * .86, -height * .15),
		new Vector2(width * .62, height * .16),
		new Vector2(width * .34, height * .39),
		new Vector2(width * .13, height * .48),
		new Vector2(0, height * .5)
	];
	const geo = new LatheGeometry(pts, 20);
	const pos = geo.attributes.position;
	for (let i = 0; i < pos.count; i++) {
		let x = pos.getX(i);
		const y = pos.getY(i);
		let z = pos.getZ(i);
		const hNorm = MathUtils.clamp((y + height * .5) / height, 0, 1);
		z *= depth / width;
		if (z > 0) z *= .42;
		else z -= Math.sin(hNorm * Math.PI) * .014;
		x *= 1 + Math.sin(hNorm * Math.PI) * .06;
		pos.setXYZ(i, x, y, z);
	}
	geo.computeVertexNormals();
	return geo;
}
function createIrisDomeGeometry(radius) {
	const geo = new SphereGeometry(radius, 28, 22, 0, Math.PI, 0, Math.PI);
	const pos = geo.attributes.position;
	const uv = geo.attributes.uv;
	for (let i = 0; i < pos.count; i++) {
		const x = pos.getX(i);
		const y = pos.getY(i);
		const u = .5 + x / radius * .47;
		const v = .5 + y / radius * .47;
		uv.setXY(i, u, v);
	}
	uv.needsUpdate = true;
	geo.computeVertexNormals();
	return geo;
}
function createNoseGeometry() {
	const shape = new Shape();
	shape.moveTo(0, -.017);
	shape.quadraticCurveTo(.023, .002, .025, .015);
	shape.quadraticCurveTo(0, .022, -.025, .015);
	shape.quadraticCurveTo(-.023, .002, 0, -.017);
	const geo = new ExtrudeGeometry(shape, {
		depth: .015,
		bevelEnabled: true,
		bevelSegments: 4,
		steps: 1,
		bevelSize: .006,
		bevelThickness: .006
	});
	geo.center();
	return geo;
}
function createWhiskerTube(points) {
	const curve = new CatmullRomCurve3(points);
	return new TubeGeometry(curve, 12, .0017, 6, false);
}
function quatTrack(nodeName, times, eulerPoints) {
	const values = [];
	const q = new Quaternion();
	const e = new Euler();
	for (const [x, y, z] of eulerPoints) {
		e.set(x, y, z, "XYZ");
		q.setFromEuler(e);
		values.push(q.x, q.y, q.z, q.w);
	}
	return new QuaternionKeyframeTrack(`${nodeName}.quaternion`, times, values);
}
function posTrack(nodeName, times, points) {
	return new VectorKeyframeTrack(`${nodeName}.position`, times, points.flat());
}
function scaleTrack(nodeName, times, scales) {
	return new VectorKeyframeTrack(`${nodeName}.scale`, times, scales.flat());
}
var cachedCatClips = null;
function buildCatAnimationClips() {
	if (cachedCatClips) return cachedCatClips;
	cachedCatClips = [
		new AnimationClip("Idle", 3.4, [
			posTrack("BodyPivot", [
				0,
				1.7,
				3.4
			], [
				[
					0,
					.36,
					0
				],
				[
					0,
					.376,
					0
				],
				[
					0,
					.36,
					0
				]
			]),
			quatTrack("BodyPivot", [0, 3.4], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("HeadPivot", [
				0,
				1.1,
				2.3,
				3.4
			], [
				[
					.02,
					0,
					0
				],
				[
					-.03,
					.09,
					.04
				],
				[
					.01,
					-.08,
					-.03
				],
				[
					.02,
					0,
					0
				]
			]),
			quatTrack("JawPivot", [0, 3.4], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("LegFL", [0, 3.4], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("LegFR", [0, 3.4], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("LegBL", [0, 3.4], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("LegBR", [0, 3.4], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("TailPivot1", [
				0,
				.85,
				1.7,
				2.55,
				3.4
			], [
				[
					.42,
					0,
					0
				],
				[
					.46,
					.24,
					.08
				],
				[
					.42,
					0,
					0
				],
				[
					.46,
					-.24,
					-.08
				],
				[
					.42,
					0,
					0
				]
			]),
			quatTrack("TailPivot2", [
				0,
				.85,
				1.7,
				2.55,
				3.4
			], [
				[
					.28,
					0,
					0
				],
				[
					.36,
					.32,
					0
				],
				[
					.28,
					0,
					0
				],
				[
					.36,
					-.32,
					0
				],
				[
					.28,
					0,
					0
				]
			]),
			quatTrack("TailPivot3", [
				0,
				.85,
				1.7,
				2.55,
				3.4
			], [
				[
					.18,
					0,
					0
				],
				[
					.25,
					.28,
					0
				],
				[
					.18,
					0,
					0
				],
				[
					.25,
					-.28,
					0
				],
				[
					.18,
					0,
					0
				]
			]),
			quatTrack("EarL", [
				0,
				2,
				2.15,
				2.3,
				3.4
			], [
				[
					0,
					0,
					-.22
				],
				[
					0,
					0,
					-.22
				],
				[
					.18,
					0,
					-.34
				],
				[
					0,
					0,
					-.22
				],
				[
					0,
					0,
					-.22
				]
			])
		]),
		new AnimationClip("Walk", .85, [
			posTrack("BodyPivot", [
				0,
				.21,
				.425,
				.64,
				.85
			], [
				[
					0,
					.36,
					0
				],
				[
					0,
					.388,
					0
				],
				[
					0,
					.36,
					0
				],
				[
					0,
					.388,
					0
				],
				[
					0,
					.36,
					0
				]
			]),
			quatTrack("BodyPivot", [
				0,
				.425,
				.85
			], [
				[
					0,
					0,
					.025
				],
				[
					0,
					0,
					-.025
				],
				[
					0,
					0,
					.025
				]
			]),
			quatTrack("LegFL", [
				0,
				.21,
				.425,
				.64,
				.85
			], [
				[
					.42,
					0,
					0
				],
				[
					0,
					0,
					0
				],
				[
					-.44,
					0,
					0
				],
				[
					0,
					0,
					0
				],
				[
					.42,
					0,
					0
				]
			]),
			quatTrack("LegBR", [
				0,
				.21,
				.425,
				.64,
				.85
			], [
				[
					.42,
					0,
					0
				],
				[
					0,
					0,
					0
				],
				[
					-.44,
					0,
					0
				],
				[
					0,
					0,
					0
				],
				[
					.42,
					0,
					0
				]
			]),
			quatTrack("LegFR", [
				0,
				.21,
				.425,
				.64,
				.85
			], [
				[
					-.44,
					0,
					0
				],
				[
					0,
					0,
					0
				],
				[
					.42,
					0,
					0
				],
				[
					0,
					0,
					0
				],
				[
					-.44,
					0,
					0
				]
			]),
			quatTrack("LegBL", [
				0,
				.21,
				.425,
				.64,
				.85
			], [
				[
					-.44,
					0,
					0
				],
				[
					0,
					0,
					0
				],
				[
					.42,
					0,
					0
				],
				[
					0,
					0,
					0
				],
				[
					-.44,
					0,
					0
				]
			]),
			quatTrack("HeadPivot", [
				0,
				.425,
				.85
			], [
				[
					-.03,
					.05,
					0
				],
				[
					-.03,
					-.05,
					0
				],
				[
					-.03,
					.05,
					0
				]
			]),
			quatTrack("JawPivot", [0, .85], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("TailPivot1", [
				0,
				.425,
				.85
			], [
				[
					.78,
					.2,
					0
				],
				[
					.78,
					-.2,
					0
				],
				[
					.78,
					.2,
					0
				]
			]),
			quatTrack("TailPivot2", [
				0,
				.425,
				.85
			], [
				[
					.25,
					.28,
					0
				],
				[
					.25,
					-.28,
					0
				],
				[
					.25,
					.28,
					0
				]
			]),
			quatTrack("TailPivot3", [
				0,
				.425,
				.85
			], [
				[
					.15,
					.2,
					0
				],
				[
					.15,
					-.2,
					0
				],
				[
					.15,
					.2,
					0
				]
			])
		]),
		new AnimationClip("Run", .56, [
			posTrack("BodyPivot", [
				0,
				.14,
				.28,
				.42,
				.56
			], [
				[
					0,
					.36,
					0
				],
				[
					0,
					.47,
					.04
				],
				[
					0,
					.35,
					0
				],
				[
					0,
					.44,
					-.03
				],
				[
					0,
					.36,
					0
				]
			]),
			quatTrack("BodyPivot", [
				0,
				.14,
				.28,
				.42,
				.56
			], [
				[
					.12,
					0,
					0
				],
				[
					-.14,
					0,
					0
				],
				[
					.1,
					0,
					0
				],
				[
					-.08,
					0,
					0
				],
				[
					.12,
					0,
					0
				]
			]),
			quatTrack("LegFL", [
				0,
				.14,
				.28,
				.42,
				.56
			], [
				[
					-.75,
					0,
					0
				],
				[
					-.1,
					0,
					0
				],
				[
					.68,
					0,
					0
				],
				[
					-.2,
					0,
					0
				],
				[
					-.75,
					0,
					0
				]
			]),
			quatTrack("LegFR", [
				0,
				.14,
				.28,
				.42,
				.56
			], [
				[
					-.55,
					0,
					0
				],
				[
					-.2,
					0,
					0
				],
				[
					.72,
					0,
					0
				],
				[
					-.1,
					0,
					0
				],
				[
					-.55,
					0,
					0
				]
			]),
			quatTrack("LegBL", [
				0,
				.14,
				.28,
				.42,
				.56
			], [
				[
					.72,
					0,
					0
				],
				[
					.1,
					0,
					0
				],
				[
					-.68,
					0,
					0
				],
				[
					.15,
					0,
					0
				],
				[
					.72,
					0,
					0
				]
			]),
			quatTrack("LegBR", [
				0,
				.14,
				.28,
				.42,
				.56
			], [
				[
					.58,
					0,
					0
				],
				[
					.15,
					0,
					0
				],
				[
					-.72,
					0,
					0
				],
				[
					.1,
					0,
					0
				],
				[
					.58,
					0,
					0
				]
			]),
			quatTrack("HeadPivot", [
				0,
				.28,
				.56
			], [
				[
					-.1,
					0,
					0
				],
				[
					.06,
					0,
					0
				],
				[
					-.1,
					0,
					0
				]
			]),
			quatTrack("JawPivot", [0, .56], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("TailPivot1", [
				0,
				.28,
				.56
			], [
				[
					.92,
					.18,
					0
				],
				[
					.92,
					-.18,
					0
				],
				[
					.92,
					.18,
					0
				]
			])
		]),
		new AnimationClip("Sit", 2.8, [
			posTrack("BodyPivot", [
				0,
				1.4,
				2.8
			], [
				[
					0,
					.29,
					-.04
				],
				[
					0,
					.3,
					-.04
				],
				[
					0,
					.29,
					-.04
				]
			]),
			quatTrack("BodyPivot", [0, 2.8], [[
				-.32,
				0,
				0
			], [
				-.32,
				0,
				0
			]]),
			quatTrack("HeadPivot", [
				0,
				1.4,
				2.8
			], [
				[
					.24,
					.08,
					.03
				],
				[
					.26,
					-.08,
					-.03
				],
				[
					.24,
					.08,
					.03
				]
			]),
			quatTrack("JawPivot", [0, 2.8], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("LegBL", [0, 2.8], [[
				1.18,
				0,
				0
			], [
				1.18,
				0,
				0
			]]),
			quatTrack("LegBR", [0, 2.8], [[
				1.18,
				0,
				0
			], [
				1.18,
				0,
				0
			]]),
			quatTrack("LegFL", [0, 2.8], [[
				.24,
				0,
				0
			], [
				.24,
				0,
				0
			]]),
			quatTrack("LegFR", [0, 2.8], [[
				.24,
				0,
				0
			], [
				.24,
				0,
				0
			]]),
			quatTrack("TailPivot1", [
				0,
				1.4,
				2.8
			], [
				[
					-.1,
					.55,
					.2
				],
				[
					-.1,
					.35,
					.1
				],
				[
					-.1,
					.55,
					.2
				]
			]),
			quatTrack("TailPivot2", [
				0,
				1.4,
				2.8
			], [
				[
					.2,
					.45,
					0
				],
				[
					.2,
					.65,
					0
				],
				[
					.2,
					.45,
					0
				]
			]),
			quatTrack("TailPivot3", [
				0,
				1.4,
				2.8
			], [
				[
					.2,
					.35,
					0
				],
				[
					.2,
					.5,
					0
				],
				[
					.2,
					.35,
					0
				]
			])
		]),
		new AnimationClip("Sleep", 3.4, [
			posTrack("BodyPivot", [
				0,
				1.7,
				3.4
			], [
				[
					0,
					.18,
					0
				],
				[
					0,
					.198,
					0
				],
				[
					0,
					.18,
					0
				]
			]),
			quatTrack("BodyPivot", [0, 3.4], [[
				.04,
				0,
				.12
			], [
				.04,
				0,
				.12
			]]),
			quatTrack("HeadPivot", [
				0,
				1.7,
				3.4
			], [
				[
					.34,
					.35,
					.18
				],
				[
					.38,
					.35,
					.18
				],
				[
					.34,
					.35,
					.18
				]
			]),
			quatTrack("JawPivot", [0, 3.4], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("LegFL", [0, 3.4], [[
				-1.18,
				0,
				.1
			], [
				-1.18,
				0,
				.1
			]]),
			quatTrack("LegFR", [0, 3.4], [[
				-1.18,
				0,
				-.1
			], [
				-1.18,
				0,
				-.1
			]]),
			quatTrack("LegBL", [0, 3.4], [[
				1.16,
				0,
				0
			], [
				1.16,
				0,
				0
			]]),
			quatTrack("LegBR", [0, 3.4], [[
				1.16,
				0,
				0
			], [
				1.16,
				0,
				0
			]]),
			quatTrack("TailPivot1", [
				0,
				1.7,
				3.4
			], [
				[
					-.22,
					.95,
					.32
				],
				[
					-.22,
					.88,
					.32
				],
				[
					-.22,
					.95,
					.32
				]
			]),
			quatTrack("TailPivot2", [
				0,
				1.7,
				3.4
			], [
				[
					-.1,
					.72,
					.2
				],
				[
					-.1,
					.65,
					.2
				],
				[
					-.1,
					.72,
					.2
				]
			]),
			quatTrack("TailPivot3", [
				0,
				1.7,
				3.4
			], [
				[
					0,
					.65,
					0
				],
				[
					0,
					.6,
					0
				],
				[
					0,
					.65,
					0
				]
			])
		]),
		new AnimationClip("Stretch", 2.4, [
			posTrack("BodyPivot", [
				0,
				.6,
				1.6,
				2.4
			], [
				[
					0,
					.36,
					0
				],
				[
					0,
					.27,
					.08
				],
				[
					0,
					.27,
					.08
				],
				[
					0,
					.36,
					0
				]
			]),
			quatTrack("BodyPivot", [
				0,
				.6,
				1.6,
				2.4
			], [
				[
					0,
					0,
					0
				],
				[
					.34,
					0,
					0
				],
				[
					.34,
					0,
					0
				],
				[
					0,
					0,
					0
				]
			]),
			quatTrack("LegFL", [
				0,
				.6,
				1.6,
				2.4
			], [
				[
					0,
					0,
					0
				],
				[
					-1.05,
					0,
					.08
				],
				[
					-1.05,
					0,
					.08
				],
				[
					0,
					0,
					0
				]
			]),
			quatTrack("LegFR", [
				0,
				.6,
				1.6,
				2.4
			], [
				[
					0,
					0,
					0
				],
				[
					-1.05,
					0,
					-.08
				],
				[
					-1.05,
					0,
					-.08
				],
				[
					0,
					0,
					0
				]
			]),
			quatTrack("LegBL", [0, 2.4], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("LegBR", [0, 2.4], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("HeadPivot", [
				0,
				.6,
				1.6,
				2.4
			], [
				[
					0,
					0,
					0
				],
				[
					-.3,
					0,
					0
				],
				[
					-.3,
					0,
					0
				],
				[
					0,
					0,
					0
				]
			]),
			quatTrack("JawPivot", [
				0,
				.8,
				1.5,
				2.4
			], [
				[
					0,
					0,
					0
				],
				[
					.18,
					0,
					0
				],
				[
					.18,
					0,
					0
				],
				[
					0,
					0,
					0
				]
			]),
			quatTrack("TailPivot1", [
				0,
				.6,
				1.6,
				2.4
			], [
				[
					.45,
					0,
					0
				],
				[
					1.18,
					0,
					0
				],
				[
					1.18,
					0,
					0
				],
				[
					.45,
					0,
					0
				]
			]),
			quatTrack("TailPivot2", [
				0,
				.6,
				1.6,
				2.4
			], [
				[
					.25,
					0,
					0
				],
				[
					.45,
					0,
					0
				],
				[
					.45,
					0,
					0
				],
				[
					.25,
					0,
					0
				]
			])
		]),
		new AnimationClip("Yawn", 2.2, [
			posTrack("BodyPivot", [
				0,
				.9,
				1.6,
				2.2
			], [
				[
					0,
					.32,
					-.02
				],
				[
					0,
					.34,
					-.02
				],
				[
					0,
					.33,
					-.02
				],
				[
					0,
					.32,
					-.02
				]
			]),
			quatTrack("BodyPivot", [0, 2.2], [[
				-.22,
				0,
				0
			], [
				-.22,
				0,
				0
			]]),
			quatTrack("LegBL", [0, 2.2], [[
				.9,
				0,
				0
			], [
				.9,
				0,
				0
			]]),
			quatTrack("LegBR", [0, 2.2], [[
				.9,
				0,
				0
			], [
				.9,
				0,
				0
			]]),
			quatTrack("HeadPivot", [
				0,
				.55,
				1.45,
				2.2
			], [
				[
					.14,
					0,
					0
				],
				[
					-.22,
					.06,
					0
				],
				[
					-.2,
					-.04,
					0
				],
				[
					.14,
					0,
					0
				]
			]),
			quatTrack("JawPivot", [
				0,
				.45,
				1.15,
				1.65,
				2.2
			], [
				[
					0,
					0,
					0
				],
				[
					.58,
					0,
					0
				],
				[
					.64,
					0,
					0
				],
				[
					.12,
					0,
					0
				],
				[
					0,
					0,
					0
				]
			]),
			quatTrack("EarL", [
				0,
				.55,
				1.45,
				2.2
			], [
				[
					0,
					0,
					-.22
				],
				[
					.18,
					0,
					-.52
				],
				[
					.18,
					0,
					-.52
				],
				[
					0,
					0,
					-.22
				]
			]),
			quatTrack("EarR", [
				0,
				.55,
				1.45,
				2.2
			], [
				[
					0,
					0,
					.22
				],
				[
					.18,
					0,
					.52
				],
				[
					.18,
					0,
					.52
				],
				[
					0,
					0,
					.22
				]
			]),
			scaleTrack("EyeL", [
				0,
				.5,
				1.5,
				2.2
			], [
				[
					1,
					1,
					1
				],
				[
					1,
					.3,
					1
				],
				[
					1,
					.3,
					1
				],
				[
					1,
					1,
					1
				]
			]),
			scaleTrack("EyeR", [
				0,
				.5,
				1.5,
				2.2
			], [
				[
					1,
					1,
					1
				],
				[
					1,
					.3,
					1
				],
				[
					1,
					.3,
					1
				],
				[
					1,
					1,
					1
				]
			])
		]),
		new AnimationClip("LickPaw", 2.4, [
			posTrack("BodyPivot", [0, 2.4], [[
				0,
				.3,
				-.03
			], [
				0,
				.3,
				-.03
			]]),
			quatTrack("BodyPivot", [0, 2.4], [[
				-.28,
				0,
				0
			], [
				-.28,
				0,
				0
			]]),
			quatTrack("LegBL", [0, 2.4], [[
				1.1,
				0,
				0
			], [
				1.1,
				0,
				0
			]]),
			quatTrack("LegBR", [0, 2.4], [[
				1.1,
				0,
				0
			], [
				1.1,
				0,
				0
			]]),
			quatTrack("LegFR", [0, 2.4], [[
				.2,
				0,
				0
			], [
				.2,
				0,
				0
			]]),
			quatTrack("LegFL", [
				0,
				.35,
				1.9,
				2.4
			], [
				[
					.2,
					0,
					0
				],
				[
					-1.18,
					-.2,
					-.28
				],
				[
					-1.18,
					-.2,
					-.28
				],
				[
					.2,
					0,
					0
				]
			]),
			quatTrack("HeadPivot", [
				0,
				.4,
				.75,
				1.1,
				1.45,
				1.85,
				2.4
			], [
				[
					.2,
					0,
					0
				],
				[
					.42,
					.16,
					.12
				],
				[
					.24,
					.12,
					.08
				],
				[
					.44,
					.18,
					.14
				],
				[
					.24,
					.12,
					.08
				],
				[
					.36,
					.24,
					.22
				],
				[
					.2,
					0,
					0
				]
			]),
			quatTrack("JawPivot", [
				0,
				.5,
				.75,
				1.1,
				1.45,
				2.4
			], [
				[
					0,
					0,
					0
				],
				[
					.24,
					0,
					0
				],
				[
					0,
					0,
					0
				],
				[
					.24,
					0,
					0
				],
				[
					0,
					0,
					0
				],
				[
					0,
					0,
					0
				]
			])
		]),
		new AnimationClip("Groom", 2.6, [
			posTrack("BodyPivot", [0, 2.6], [[
				0,
				.28,
				-.02
			], [
				0,
				.28,
				-.02
			]]),
			quatTrack("BodyPivot", [
				0,
				1.3,
				2.6
			], [
				[
					-.2,
					0,
					0
				],
				[
					-.22,
					.08,
					0
				],
				[
					-.2,
					0,
					0
				]
			]),
			quatTrack("LegBL", [0, 2.6], [[
				1,
				0,
				0
			], [
				1,
				0,
				0
			]]),
			quatTrack("LegBR", [0, 2.6], [[
				1,
				0,
				0
			], [
				1,
				0,
				0
			]]),
			quatTrack("LegFL", [0, 2.6], [[
				.15,
				0,
				.1
			], [
				.15,
				0,
				.1
			]]),
			quatTrack("LegFR", [0, 2.6], [[
				.15,
				0,
				-.1
			], [
				.15,
				0,
				-.1
			]]),
			quatTrack("HeadPivot", [
				0,
				.45,
				.9,
				1.35,
				1.8,
				2.2,
				2.6
			], [
				[
					.22,
					.1,
					0
				],
				[
					.52,
					-.45,
					-.22
				],
				[
					.34,
					-.35,
					-.15
				],
				[
					.54,
					-.45,
					-.22
				],
				[
					.36,
					.35,
					.18
				],
				[
					.52,
					.42,
					.2
				],
				[
					.22,
					.1,
					0
				]
			]),
			quatTrack("JawPivot", [
				0,
				.5,
				1,
				1.5,
				2,
				2.6
			], [
				[
					0,
					0,
					0
				],
				[
					.22,
					0,
					0
				],
				[
					0,
					0,
					0
				],
				[
					.22,
					0,
					0
				],
				[
					0,
					0,
					0
				],
				[
					0,
					0,
					0
				]
			])
		]),
		new AnimationClip("Play", .96, [
			posTrack("BodyPivot", [
				0,
				.24,
				.48,
				.72,
				.96
			], [
				[
					0,
					.36,
					0
				],
				[
					0,
					.58,
					.08
				],
				[
					0,
					.35,
					0
				],
				[
					0,
					.52,
					-.04
				],
				[
					0,
					.36,
					0
				]
			]),
			quatTrack("BodyPivot", [
				0,
				.24,
				.48,
				.72,
				.96
			], [
				[
					0,
					0,
					0
				],
				[
					-.22,
					.1,
					0
				],
				[
					0,
					0,
					0
				],
				[
					-.14,
					-.1,
					0
				],
				[
					0,
					0,
					0
				]
			]),
			quatTrack("LegFL", [
				0,
				.24,
				.48,
				.96
			], [
				[
					0,
					0,
					0
				],
				[
					-.95,
					0,
					.2
				],
				[
					0,
					0,
					0
				],
				[
					0,
					0,
					0
				]
			]),
			quatTrack("LegFR", [
				0,
				.24,
				.48,
				.96
			], [
				[
					0,
					0,
					0
				],
				[
					-.65,
					0,
					-.2
				],
				[
					0,
					0,
					0
				],
				[
					0,
					0,
					0
				]
			]),
			quatTrack("LegBL", [0, .96], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("LegBR", [0, .96], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("JawPivot", [0, .96], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("TailPivot1", [
				0,
				.24,
				.48,
				.72,
				.96
			], [
				[
					.9,
					0,
					0
				],
				[
					1.1,
					.4,
					0
				],
				[
					.9,
					0,
					0
				],
				[
					1.1,
					-.4,
					0
				],
				[
					.9,
					0,
					0
				]
			])
		]),
		new AnimationClip("Eat", 1, [
			posTrack("BodyPivot", [
				0,
				.5,
				1
			], [
				[
					0,
					.32,
					0
				],
				[
					0,
					.31,
					0
				],
				[
					0,
					.32,
					0
				]
			]),
			quatTrack("BodyPivot", [0, 1], [[
				.08,
				0,
				0
			], [
				.08,
				0,
				0
			]]),
			quatTrack("LegFL", [0, 1], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("LegFR", [0, 1], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("LegBL", [0, 1], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("LegBR", [0, 1], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("HeadPivot", [
				0,
				.25,
				.5,
				.75,
				1
			], [
				[
					.48,
					0,
					0
				],
				[
					.64,
					0,
					0
				],
				[
					.46,
					0,
					0
				],
				[
					.64,
					0,
					0
				],
				[
					.48,
					0,
					0
				]
			]),
			quatTrack("JawPivot", [
				0,
				.25,
				.5,
				.75,
				1
			], [
				[
					0,
					0,
					0
				],
				[
					.25,
					0,
					0
				],
				[
					.02,
					0,
					0
				],
				[
					.25,
					0,
					0
				],
				[
					0,
					0,
					0
				]
			]),
			quatTrack("TailPivot1", [
				0,
				.5,
				1
			], [
				[
					.65,
					.25,
					0
				],
				[
					.65,
					-.25,
					0
				],
				[
					.65,
					.25,
					0
				]
			])
		]),
		new AnimationClip("Drink", 1.2, [
			posTrack("BodyPivot", [
				0,
				.6,
				1.2
			], [
				[
					0,
					.31,
					0
				],
				[
					0,
					.305,
					0
				],
				[
					0,
					.31,
					0
				]
			]),
			quatTrack("BodyPivot", [0, 1.2], [[
				.08,
				0,
				0
			], [
				.08,
				0,
				0
			]]),
			quatTrack("LegFL", [0, 1.2], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("LegFR", [0, 1.2], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("LegBL", [0, 1.2], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("LegBR", [0, 1.2], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("HeadPivot", [
				0,
				.2,
				.4,
				.6,
				.8,
				1,
				1.2
			], [
				[
					.52,
					0,
					0
				],
				[
					.62,
					0,
					0
				],
				[
					.5,
					0,
					0
				],
				[
					.62,
					0,
					0
				],
				[
					.5,
					0,
					0
				],
				[
					.62,
					0,
					0
				],
				[
					.52,
					0,
					0
				]
			]),
			quatTrack("JawPivot", [
				0,
				.2,
				.4,
				.6,
				.8,
				1,
				1.2
			], [
				[
					0,
					0,
					0
				],
				[
					.22,
					0,
					0
				],
				[
					0,
					0,
					0
				],
				[
					.22,
					0,
					0
				],
				[
					0,
					0,
					0
				],
				[
					.22,
					0,
					0
				],
				[
					0,
					0,
					0
				]
			]),
			quatTrack("TailPivot1", [
				0,
				.6,
				1.2
			], [
				[
					.5,
					.15,
					0
				],
				[
					.5,
					-.15,
					0
				],
				[
					.5,
					.15,
					0
				]
			])
		]),
		new AnimationClip("Bath", 1.4, [
			posTrack("BodyPivot", [
				0,
				.7,
				1.4
			], [
				[
					0,
					.33,
					0
				],
				[
					0,
					.34,
					0
				],
				[
					0,
					.33,
					0
				]
			]),
			quatTrack("BodyPivot", [0, 1.4], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("HeadPivot", [
				0,
				.35,
				.7,
				1.05,
				1.4
			], [
				[
					.1,
					0,
					.2
				],
				[
					.2,
					.25,
					.1
				],
				[
					.1,
					0,
					-.2
				],
				[
					.2,
					-.25,
					-.1
				],
				[
					.1,
					0,
					.2
				]
			]),
			quatTrack("JawPivot", [0, 1.4], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("LegFL", [
				0,
				.35,
				.7,
				1.05,
				1.4
			], [
				[
					0,
					0,
					0
				],
				[
					-.85,
					0,
					.15
				],
				[
					-.6,
					0,
					.1
				],
				[
					-.85,
					0,
					.15
				],
				[
					0,
					0,
					0
				]
			]),
			quatTrack("LegFR", [0, 1.4], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("LegBL", [0, 1.4], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("LegBR", [0, 1.4], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]])
		]),
		new AnimationClip("Happy", 1.4, [
			posTrack("BodyPivot", [
				0,
				.35,
				.7,
				1.05,
				1.4
			], [
				[
					0,
					.36,
					0
				],
				[
					0,
					.4,
					0
				],
				[
					0,
					.36,
					0
				],
				[
					0,
					.4,
					0
				],
				[
					0,
					.36,
					0
				]
			]),
			quatTrack("BodyPivot", [0, 1.4], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("HeadPivot", [
				0,
				.35,
				.7,
				1.05,
				1.4
			], [
				[
					0,
					0,
					.16
				],
				[
					-.08,
					.14,
					-.14
				],
				[
					0,
					0,
					.16
				],
				[
					-.08,
					-.14,
					-.14
				],
				[
					0,
					0,
					.16
				]
			]),
			quatTrack("JawPivot", [0, 1.4], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("LegFL", [0, 1.4], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("LegFR", [0, 1.4], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("LegBL", [0, 1.4], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("LegBR", [0, 1.4], [[
				0,
				0,
				0
			], [
				0,
				0,
				0
			]]),
			quatTrack("TailPivot1", [
				0,
				.35,
				.7,
				1.05,
				1.4
			], [
				[
					.98,
					.25,
					0
				],
				[
					.98,
					-.25,
					0
				],
				[
					.98,
					.25,
					0
				],
				[
					.98,
					-.25,
					0
				],
				[
					.98,
					.25,
					0
				]
			]),
			quatTrack("TailPivot2", [
				0,
				.7,
				1.4
			], [
				[
					.25,
					.15,
					0
				],
				[
					.25,
					-.15,
					0
				],
				[
					.25,
					.15,
					0
				]
			]),
			quatTrack("TailPivot3", [
				0,
				.7,
				1.4
			], [
				[
					.28,
					0,
					0
				],
				[
					.28,
					0,
					0
				],
				[
					.28,
					0,
					0
				]
			])
		])
	];
	return cachedCatClips;
}
function buildArticulatedCatGroup(breed, customFurColor) {
	const palette = resolvePalette(breed, customFurColor);
	const maps = getOrCreateFurMaps(`${breed}:${customFurColor ?? ""}`, palette);
	const furMat = new MeshStandardMaterial({
		name: "CatFurMat",
		color: palette.fur,
		map: maps.albedo,
		normalMap: maps.normal,
		normalScale: new Vector2(.28, .28),
		roughnessMap: maps.roughness,
		roughness: .82,
		metalness: .01
	});
	const headMat = new MeshStandardMaterial({
		name: "CatHeadMat",
		color: "#ffffff",
		map: maps.headAlbedo,
		normalMap: maps.normal,
		normalScale: new Vector2(.18, .18),
		roughnessMap: maps.roughness,
		roughness: .78,
		metalness: .01
	});
	const earOuterMat = new MeshStandardMaterial({
		name: "CatFurMat",
		color: palette.fur,
		normalMap: maps.normal,
		normalScale: new Vector2(.18, .18),
		roughness: .82,
		metalness: .01
	});
	const bellyMat = new MeshStandardMaterial({
		name: "CatBellyMat",
		color: palette.belly,
		normalMap: maps.normal,
		normalScale: new Vector2(.16, .16),
		roughness: .84,
		metalness: 0
	});
	const earInnerMat = new MeshStandardMaterial({
		name: "CatEarInnerMat",
		color: palette.earInner,
		roughness: .68,
		metalness: 0
	});
	const noseMat = new MeshStandardMaterial({
		name: "CatNoseMat",
		color: palette.nose,
		roughness: .24,
		metalness: .04
	});
	const mouthInnerMat = new MeshStandardMaterial({
		name: "CatMouthInnerMat",
		color: "#c95c70",
		roughness: .48
	});
	const eyelinerMat = new MeshStandardMaterial({
		name: "CatEyelinerMat",
		color: "#2a1810",
		roughness: .42,
		metalness: .04
	});
	const irisMat = new MeshStandardMaterial({
		name: "CatIrisMat",
		map: maps.iris,
		roughness: .14,
		metalness: .04
	});
	const pupilMat = new MeshStandardMaterial({
		name: "CatPupilMat",
		color: "#07080d",
		roughness: .06,
		metalness: .12
	});
	const corneaMat = new MeshStandardMaterial({
		name: "CatCorneaMat",
		color: "#ffffff",
		roughness: .03,
		metalness: .04,
		transparent: true,
		opacity: .16
	});
	const whiskerMat = new MeshStandardMaterial({
		name: "CatWhiskerMat",
		color: "#fff8ef",
		roughness: .3,
		transparent: true,
		opacity: .9
	});
	const highlightMat = new MeshBasicMaterial({ color: "#ffffff" });
	const padPinkMat = new MeshStandardMaterial({
		color: palette.earInner,
		roughness: .65
	});
	const root = new Group();
	root.name = "CatRoot";
	const bodyPivot = new Group();
	bodyPivot.name = "BodyPivot";
	bodyPivot.position.set(0, .36, 0);
	root.add(bodyPivot);
	const torso = new Mesh(createSculptedTorsoGeometry(), furMat);
	torso.name = "TorsoMesh";
	torso.castShadow = true;
	torso.receiveShadow = true;
	bodyPivot.add(torso);
	const chestBib = new Mesh(new SphereGeometry(.165, 20, 16), bellyMat);
	chestBib.scale.set(.88, 1.04, .88);
	chestBib.position.set(0, -.015, .158);
	bodyPivot.add(chestBib);
	const chestFluff = new Mesh(new SphereGeometry(.105, 16, 14), bellyMat);
	chestFluff.scale.set(1.06, .9, .72);
	chestFluff.position.set(0, -.038, .232);
	bodyPivot.add(chestFluff);
	const underbelly = new Mesh(new CapsuleGeometry(.132, .24, 6, 14), bellyMat);
	underbelly.rotation.x = Math.PI / 2;
	underbelly.position.set(0, -.095, -.02);
	bodyPivot.add(underbelly);
	const haunchGeo = new SphereGeometry(.13, 14, 14);
	for (const xSign of [1, -1]) {
		const haunch = new Mesh(haunchGeo, furMat);
		haunch.scale.set(.76, 1.02, 1.15);
		haunch.position.set(xSign * .115, -.02, -.155);
		haunch.castShadow = true;
		bodyPivot.add(haunch);
	}
	const headPivot = new Group();
	headPivot.name = "HeadPivot";
	headPivot.position.set(0, .145, .245);
	bodyPivot.add(headPivot);
	const headLookPivot = new Group();
	headLookPivot.name = "HeadLookPivot";
	headPivot.add(headLookPivot);
	const headMesh = new Mesh(createSculptedHeadGeometry(), headMat);
	headMesh.name = "HeadMesh";
	headMesh.position.set(0, .1, .035);
	headMesh.castShadow = true;
	headLookPivot.add(headMesh);
	for (const xSign of [1, -1]) {
		const cheekPuff = new Mesh(new SphereGeometry(.088, 16, 14), earOuterMat);
		cheekPuff.scale.set(1.18, .84, .92);
		cheekPuff.position.set(xSign * .145, .048, .068);
		cheekPuff.castShadow = true;
		headLookPivot.add(cheekPuff);
	}
	const noseBridge = new Mesh(new CapsuleGeometry(.024, .044, 6, 12), earOuterMat);
	noseBridge.scale.set(1.05, 1, .78);
	noseBridge.position.set(0, .094, .214);
	noseBridge.rotation.x = -.58;
	headLookPivot.add(noseBridge);
	const padGeo = new SphereGeometry(.056, 18, 14);
	const padL = new Mesh(padGeo, bellyMat);
	padL.scale.set(1.1, .84, .86);
	padL.position.set(.044, .042, .206);
	const padR = new Mesh(padGeo, bellyMat);
	padR.scale.set(1.1, .84, .86);
	padR.position.set(-.044, .042, .206);
	headLookPivot.add(padL, padR);
	const jawPivot = new Group();
	jawPivot.name = "JawPivot";
	jawPivot.position.set(0, .022, .145);
	headLookPivot.add(jawPivot);
	const chin = new Mesh(new SphereGeometry(.052, 16, 12), bellyMat);
	chin.scale.set(1.04, .72, .98);
	chin.position.set(0, -.015, .045);
	const tongue = new Mesh(new SphereGeometry(.025, 10, 10), mouthInnerMat);
	tongue.scale.set(.95, .36, 1.25);
	tongue.position.set(0, -.002, .05);
	jawPivot.add(chin, tongue);
	const nose = new Mesh(createNoseGeometry(), noseMat);
	nose.name = "CatNose";
	nose.position.set(0, .068, .248);
	headLookPivot.add(nose);
	const mouthStem = new Mesh(new CylinderGeometry(.0024, .0024, .016, 6), eyelinerMat);
	mouthStem.position.set(0, .05, .248);
	headLookPivot.add(mouthStem);
	for (const xSign of [1, -1]) {
		const lipArc = new Mesh(new TorusGeometry(.0165, .0026, 8, 16, Math.PI * .88), eyelinerMat);
		lipArc.position.set(xSign * .016, .044, .245);
		lipArc.rotation.z = Math.PI + xSign * .18;
		lipArc.rotation.y = xSign * .26;
		headLookPivot.add(lipArc);
	}
	const whiskerRows = [
		[
			.048,
			.228,
			.032,
			-.03
		],
		[
			.039,
			.23,
			.002,
			-.05
		],
		[
			.03,
			.226,
			-.032,
			-.08
		]
	];
	for (const xSign of [1, -1]) {
		whiskerRows.forEach(([wy, wz, tipDy, tipDz], idx) => {
			const baseX = xSign * .056;
			const dot = new Mesh(new SphereGeometry(.0032, 6, 6), eyelinerMat);
			dot.position.set(baseX, wy, wz + .008);
			headLookPivot.add(dot);
			const span = .185 - idx * .014;
			const wGeo = createWhiskerTube([
				new Vector3(baseX, wy, wz),
				new Vector3(baseX + xSign * span * .45, wy + tipDy * .4, wz - .02 + tipDz * .4),
				new Vector3(baseX + xSign * span, wy + tipDy - .014, wz - .055 + tipDz)
			]);
			headLookPivot.add(new Mesh(wGeo, whiskerMat));
		});
		const browGeo = createWhiskerTube([
			new Vector3(xSign * .068, .172, .188),
			new Vector3(xSign * .095, .212, .168),
			new Vector3(xSign * .125, .238, .135)
		]);
		headLookPivot.add(new Mesh(browGeo, whiskerMat));
	}
	const makeEar = (name, xSign) => {
		const earGroup = new Group();
		earGroup.name = name;
		earGroup.position.set(xSign * .132, .225, .028);
		earGroup.rotation.z = -xSign * .22;
		const outer = new Mesh(createSculptedEarGeometry(.084, .17, .055), earOuterMat);
		outer.position.set(0, .062, 0);
		outer.castShadow = true;
		const inner = new Mesh(createSculptedEarGeometry(.05, .115, .022), earInnerMat);
		inner.position.set(0, .052, .018);
		const earFluff = new Mesh(new SphereGeometry(.024, 10, 10), bellyMat);
		earFluff.scale.set(.75, 1.35, .65);
		earFluff.position.set(-xSign * .02, .022, .026);
		earFluff.rotation.z = xSign * .48;
		earGroup.add(outer, inner, earFluff);
		return earGroup;
	};
	headLookPivot.add(makeEar("EarL", 1), makeEar("EarR", -1));
	const makeEye = (side, xSign) => {
		const eyeGroup = new Group();
		eyeGroup.name = `Eye${side}`;
		eyeGroup.position.set(xSign * .08, .118, .194);
		eyeGroup.rotation.y = xSign * .14;
		const iris = new Mesh(createIrisDomeGeometry(.048), irisMat);
		iris.scale.set(1.02, 1.08, .56);
		const pupil = new Mesh(new SphereGeometry(.024, 18, 16), pupilMat);
		pupil.name = `Pupil${side}`;
		pupil.scale.set(.58, 1.18, .26);
		pupil.position.set(0, 0, .0245);
		const eyeliner = new Mesh(new TorusGeometry(.049, .0042, 8, 24, Math.PI * 1.05), eyelinerMat);
		eyeliner.scale.set(1.02, 1.08, .65);
		eyeliner.position.set(0, .002, .006);
		eyeliner.rotation.z = -.08 * xSign;
		const cornea = new Mesh(new SphereGeometry(.0505, 22, 18, 0, Math.PI, 0, Math.PI), corneaMat);
		cornea.name = `EyeCornea${side}`;
		cornea.scale.set(1.02, 1.08, .62);
		const glintMain = new Mesh(new SphereGeometry(.0105, 8, 8), highlightMat);
		glintMain.position.set(.015, .016, .032);
		const glintSoft = new Mesh(new SphereGeometry(.005, 8, 8), highlightMat);
		glintSoft.position.set(-.012, -.012, .0305);
		const upperLidPivot = new Group();
		upperLidPivot.name = `UpperLid${side}`;
		upperLidPivot.rotation.x = -.84;
		const upperLidMesh = new Mesh(new SphereGeometry(.053, 20, 14, 0, Math.PI, 0, Math.PI * .54), earOuterMat);
		upperLidMesh.scale.set(1.05, 1.1, .66);
		upperLidPivot.add(upperLidMesh);
		const lowerLidPivot = new Group();
		lowerLidPivot.name = `LowerLid${side}`;
		lowerLidPivot.rotation.x = .84;
		const lowerLidMesh = new Mesh(new SphereGeometry(.052, 20, 14, 0, Math.PI, Math.PI * .46, Math.PI * .54), earOuterMat);
		lowerLidMesh.scale.set(1.04, 1.09, .65);
		lowerLidPivot.add(lowerLidMesh);
		eyeGroup.add(iris, pupil, eyeliner, cornea, glintMain, glintSoft, upperLidPivot, lowerLidPivot);
		return eyeGroup;
	};
	headLookPivot.add(makeEye("L", 1), makeEye("R", -1));
	const accMount = new Group();
	accMount.name = "AccessoryMount";
	accMount.position.set(0, .1, .035);
	headLookPivot.add(accMount);
	const makeLeg = (name, x, z, isBack) => {
		const legPivot = new Group();
		legPivot.name = name;
		legPivot.position.set(x, -.055, z);
		const upperLeg = new Mesh(new CapsuleGeometry(isBack ? .068 : .058, .12, 6, 14), furMat);
		upperLeg.position.set(0, -.08, isBack ? -.01 : 0);
		upperLeg.castShadow = true;
		const lowerLeg = new Mesh(new CapsuleGeometry(.048, .14, 6, 12), furMat);
		lowerLeg.position.set(0, -.18, .01);
		lowerLeg.castShadow = true;
		const pawGroup = new Group();
		pawGroup.position.set(0, -.275, .025);
		const pawBase = new Mesh(new SphereGeometry(.054, 14, 12), bellyMat);
		pawBase.scale.set(1.02, .62, 1.15);
		pawGroup.add(pawBase);
		for (const toeX of [
			-.026,
			0,
			.026
		]) {
			const toe = new Mesh(new SphereGeometry(.021, 10, 10), bellyMat);
			toe.scale.set(.9, .72, 1.15);
			toe.position.set(toeX, -.008, .046);
			pawGroup.add(toe);
		}
		const mainPad = new Mesh(new SphereGeometry(.022, 8, 8), padPinkMat);
		mainPad.scale.set(1.1, .25, 1);
		mainPad.position.set(0, -.032, .01);
		pawGroup.add(mainPad);
		legPivot.add(upperLeg, lowerLeg, pawGroup);
		return legPivot;
	};
	bodyPivot.add(makeLeg("LegFL", .112, .175, false), makeLeg("LegFR", -.112, .175, false), makeLeg("LegBL", .116, -.18, true), makeLeg("LegBR", -.116, -.18, true));
	const tailPivot1 = new Group();
	tailPivot1.name = "TailPivot1";
	tailPivot1.position.set(0, .055, -.265);
	tailPivot1.rotation.x = .42;
	bodyPivot.add(tailPivot1);
	const tailSeg1 = new Mesh(new CapsuleGeometry(.054, .15, 6, 14), furMat);
	tailSeg1.position.set(0, .08, -.025);
	tailSeg1.rotation.x = -.18;
	tailSeg1.castShadow = true;
	tailPivot1.add(tailSeg1);
	const tailPivot2 = new Group();
	tailPivot2.name = "TailPivot2";
	tailPivot2.position.set(0, .165, -.055);
	tailPivot1.add(tailPivot2);
	const tailSeg2 = new Mesh(new CapsuleGeometry(.05, .15, 6, 14), furMat);
	tailSeg2.position.set(0, .08, -.015);
	tailSeg2.castShadow = true;
	tailPivot2.add(tailSeg2);
	const tailPivot3 = new Group();
	tailPivot3.name = "TailPivot3";
	tailPivot3.position.set(0, .165, -.03);
	tailPivot2.add(tailPivot3);
	const tailSeg3 = new Mesh(new CapsuleGeometry(.045, .13, 6, 14), furMat);
	tailSeg3.position.set(0, .07, -.01);
	tailSeg3.castShadow = true;
	tailPivot3.add(tailSeg3);
	const tailTipPivot = new Group();
	tailTipPivot.name = "TailTipPivot";
	tailTipPivot.position.set(0, .145, -.015);
	tailPivot3.add(tailTipPivot);
	const tailTip = new Mesh(new SphereGeometry(.054, 14, 14), bellyMat);
	tailTip.scale.set(1, 1.25, 1);
	tailTip.position.set(0, .03, 0);
	tailTip.castShadow = true;
	tailTipPivot.add(tailTip);
	return root;
}
async function loadCatGltf(breed, customBuffer, customFurColor) {
	if (customBuffer) {
		const loader = new GLTFLoader();
		return new Promise((resolve, reject) => {
			loader.parse(customBuffer, "", resolve, reject);
		});
	}
	return {
		scene: buildArticulatedCatGroup(breed, customFurColor),
		animations: buildCatAnimationClips()
	};
}
// src/core/dispose.ts
function isSharedResource(obj) {
	return Boolean(obj?.userData && obj.userData.shared === true);
}
function disposeMaterial(material) {
	const list = Array.isArray(material) ? material : [material];
	for (const mat of list) {
		if (isSharedResource(mat)) continue;
		for (const value of Object.values(mat)) if (value && typeof value === "object" && "isTexture" in value && value.isTexture) {
			const tex = value;
			if (!isSharedResource(tex)) tex.dispose();
		}
		mat.dispose();
	}
}
function disposeObject3D(root) {
	if (!root) return;
	root.traverse((child) => {
		const mesh = child;
		if (mesh.geometry && !isSharedResource(mesh.geometry)) mesh.geometry.dispose();
		if (mesh.material) disposeMaterial(mesh.material);
	});
}
// src/components/CatActor3D.tsx
var import_jsx_runtime = require_jsx_runtime();
var _worldPos = new Vector3();
var _targetVec = new Vector3();
var CatActor3D = ({ breed, customFurColor, accessory, stage, animation, emotion = "happy", position = [
	0,
	0,
	0
], rotationY = 0, lookAtUser = false, lookTarget = null, isPetting = false, earPerked = false, customGlbBuffer, onClick, onHeadClick, onBodyClick, onFootstep }) => {
	const { camera } = useThree();
	const containerRef = (0, import_react.useRef)(null);
	const mixerRef = (0, import_react.useRef)(null);
	const actionsRef = (0, import_react.useRef)({});
	const currentActionRef = (0, import_react.useRef)(null);
	const rigRef = (0, import_react.useRef)({});
	const [loadedScene, setLoadedScene] = (0, import_react.useState)(null);
	const blinkTimerRef = (0, import_react.useRef)(2.4);
	const blinkAmountRef = (0, import_react.useRef)(0);
	const doubleBlinkRef = (0, import_react.useRef)(false);
	const stepAccumRef = (0, import_react.useRef)(0);
	const stageScale = (0, import_react.useMemo)(() => {
		if (stage === "kitten") return .78;
		if (stage === "young") return .96;
		return 1.12;
	}, [stage]);
	const quality = useUniverseStore((s) => s.environment.quality);
	const reducedMotion = useUniverseStore((s) => s.environment.reducedMotion);
	const enablePhysicalSheen = (0, import_react.useMemo)(() => getGraphicsProfile(quality, reducedMotion).enablePhysicalSheen, [quality, reducedMotion]);
	(0, import_react.useEffect)(() => {
		let active = true;
		let sceneObj = null;
		loadCatGltf(breed, customGlbBuffer, customFurColor).then((gltf) => {
			if (!active) {
				disposeObject3D(gltf.scene);
				return;
			}
			sceneObj = gltf.scene;
			const upgradedMats = /* @__PURE__ */ new Map();
			sceneObj.traverse((child) => {
				if (child.isMesh) {
					const mesh = child;
					mesh.castShadow = true;
					mesh.receiveShadow = true;
					if (!enablePhysicalSheen) return;
					const mat = mesh.material;
					if (!mat) return;
					const existing = upgradedMats.get(mat);
					if (existing) {
						mesh.material = existing;
						return;
					}
					if (mat.name === "CatFurMat" || mat.name === "CatHeadMat" || mat.name === "CatBellyMat") {
						const phys = new MeshPhysicalMaterial({
							name: mat.name,
							color: mat.color.clone(),
							map: mat.map,
							normalMap: mat.normalMap,
							normalScale: mat.normalScale.clone(),
							roughnessMap: mat.roughnessMap,
							roughness: mat.roughness,
							metalness: mat.metalness,
							sheen: .22,
							sheenRoughness: .65,
							sheenColor: new Color(mat.name === "CatBellyMat" ? "#fff4e3" : "#ff9c3b")
						});
						upgradedMats.set(mat, phys);
						mesh.material = phys;
					} else if (mesh.name.startsWith("EyeCornea")) {
						const corneaPhys = new MeshPhysicalMaterial({
							name: mat.name,
							color: "#ffffff",
							roughness: .03,
							metalness: .02,
							clearcoat: 1,
							clearcoatRoughness: .04,
							transparent: true,
							opacity: .16,
							depthWrite: false
						});
						upgradedMats.set(mat, corneaPhys);
						mesh.material = corneaPhys;
					}
				}
			});
			upgradedMats.forEach((_val, oldMat) => {
				oldMat.dispose();
			});
			rigRef.current = {
				bodyPivot: sceneObj.getObjectByName("BodyPivot"),
				headLookPivot: sceneObj.getObjectByName("HeadLookPivot"),
				earL: sceneObj.getObjectByName("EarL"),
				earR: sceneObj.getObjectByName("EarR"),
				upperLidL: sceneObj.getObjectByName("UpperLidL"),
				upperLidR: sceneObj.getObjectByName("UpperLidR"),
				lowerLidL: sceneObj.getObjectByName("LowerLidL"),
				lowerLidR: sceneObj.getObjectByName("LowerLidR"),
				pupilL: sceneObj.getObjectByName("PupilL"),
				pupilR: sceneObj.getObjectByName("PupilR"),
				tailTipPivot: sceneObj.getObjectByName("TailTipPivot")
			};
			const mixer = new AnimationMixer(sceneObj);
			const map = {};
			for (const clip of gltf.animations) map[clip.name] = mixer.clipAction(clip);
			mixerRef.current = mixer;
			actionsRef.current = map;
			const startAction = map[animation] || map["Idle"] || Object.values(map)[0];
			if (startAction) {
				startAction.reset().play();
				currentActionRef.current = startAction;
			}
			setLoadedScene(sceneObj);
		});
		return () => {
			active = false;
			mixerRef.current?.stopAllAction();
			mixerRef.current = null;
			actionsRef.current = {};
			currentActionRef.current = null;
			rigRef.current = {};
			if (sceneObj) disposeObject3D(sceneObj);
			setLoadedScene(null);
		};
	}, [
		breed,
		customFurColor,
		customGlbBuffer,
		enablePhysicalSheen
	]);
	(0, import_react.useEffect)(() => {
		const map = actionsRef.current;
		const nextAction = map[animation] || map["Idle"];
		if (!nextAction) return;
		if (currentActionRef.current === nextAction) return;
		const prev = currentActionRef.current;
		nextAction.reset().fadeIn(.35).play();
		if (prev) prev.crossFadeTo(nextAction, .35, true);
		currentActionRef.current = nextAction;
	}, [animation, loadedScene]);
	(0, import_react.useEffect)(() => {
		if (!loadedScene) return;
		const mount = loadedScene.getObjectByName("AccessoryMount");
		if (!mount) return;
		while (mount.children.length > 0) {
			const ch = mount.children[0];
			mount.remove(ch);
			disposeObject3D(ch);
		}
		if (accessory === "none") return;
		const accGroup = new Group();
		if (accessory === "rose_bow") {
			const mat = new MeshStandardMaterial({
				color: "#D9A9C5",
				roughness: .45
			});
			const left = new Mesh(new ConeGeometry(.055, .08, 10), mat);
			left.rotation.z = -Math.PI / 2;
			left.position.set(-.045, .16, .06);
			const right = new Mesh(new ConeGeometry(.055, .08, 10), mat);
			right.rotation.z = Math.PI / 2;
			right.position.set(.045, .16, .06);
			const knot = new Mesh(new SphereGeometry(.025, 10, 10), new MeshStandardMaterial({
				color: "#D6B875",
				roughness: .3
			}));
			knot.position.set(0, .16, .065);
			accGroup.add(left, right, knot);
		} else if (accessory === "gold_crown") {
			const goldMat = new MeshStandardMaterial({
				color: "#D6B875",
				metalness: .85,
				roughness: .2
			});
			const base = new Mesh(new CylinderGeometry(.085, .095, .04, 16), goldMat);
			base.position.set(0, .205, 0);
			accGroup.add(base);
			for (let i = 0; i < 5; i++) {
				const a = i / 5 * Math.PI * 2;
				const spike = new Mesh(new ConeGeometry(.022, .06, 8), goldMat);
				spike.position.set(Math.cos(a) * .075, .245, Math.sin(a) * .075);
				accGroup.add(spike);
			}
		} else if (accessory === "lavender_scarf") {
			const scarfMat = new MeshStandardMaterial({
				color: "#7771A8",
				roughness: .75
			});
			const ring = new Mesh(new TorusGeometry(.145, .036, 10, 20), scarfMat);
			ring.rotation.x = Math.PI / 2;
			ring.position.set(0, -.14, -.02);
			const tail = new Mesh(new BoxGeometry(.065, .14, .025), scarfMat);
			tail.position.set(.085, -.21, .09);
			tail.rotation.z = -.25;
			accGroup.add(ring, tail);
		} else if (accessory === "round_glasses") {
			const frameMat = new MeshStandardMaterial({
				color: "#D6B875",
				metalness: .8,
				roughness: .25
			});
			const lensMat = new MeshPhysicalMaterial({
				color: "#F1DCCB",
				transparent: true,
				opacity: .25,
				roughness: .08
			});
			const gL = new Mesh(new TorusGeometry(.052, .008, 8, 20), frameMat);
			gL.position.set(.086, .022, .205);
			const gR = new Mesh(new TorusGeometry(.052, .008, 8, 20), frameMat);
			gR.position.set(-.086, .022, .205);
			const lL = new Mesh(new CircleGeometry(.048, 16), lensMat);
			lL.position.copy(gL.position);
			const lR = new Mesh(new CircleGeometry(.048, 16), lensMat);
			lR.position.copy(gR.position);
			const bridge = new Mesh(new BoxGeometry(.06, .008, .008), frameMat);
			bridge.position.set(0, .024, .205);
			accGroup.add(gL, gR, lL, lR, bridge);
		} else if (accessory === "bell_collar") {
			const collarMat = new MeshStandardMaterial({
				color: "#D9A9C5",
				roughness: .5
			});
			const bellMat = new MeshStandardMaterial({
				color: "#D6B875",
				metalness: .9,
				roughness: .18
			});
			const collar = new Mesh(new TorusGeometry(.135, .022, 10, 20), collarMat);
			collar.rotation.x = Math.PI / 2;
			collar.position.set(0, -.14, -.02);
			const bell = new Mesh(new SphereGeometry(.034, 12, 12), bellMat);
			bell.position.set(0, -.165, .13);
			accGroup.add(collar, bell);
		}
		mount.add(accGroup);
	}, [accessory, loadedScene]);
	useFrame(({ clock }, delta) => {
		const dt = Math.min(delta, .05);
		const t = clock.getElapsedTime();
		mixerRef.current?.update(dt);
		if (containerRef.current) {
			let diff = (rotationY - containerRef.current.rotation.y + Math.PI) % (Math.PI * 2) - Math.PI;
			if (diff < -Math.PI) diff += Math.PI * 2;
			containerRef.current.rotation.y += diff * Math.min(1, dt * 7);
		}
		if ((animation === "Walk" || animation === "Run") && onFootstep) {
			stepAccumRef.current += dt * (animation === "Run" ? 3.8 : 2.3);
			if (stepAccumRef.current >= 1) {
				stepAccumRef.current = 0;
				onFootstep();
			}
		} else stepAccumRef.current = .6;
		const rig = rigRef.current;
		blinkTimerRef.current -= dt;
		if (blinkTimerRef.current <= 0) {
			blinkAmountRef.current = 1;
			if (!doubleBlinkRef.current && Math.random() < .22) {
				doubleBlinkRef.current = true;
				blinkTimerRef.current = .24;
			} else {
				doubleBlinkRef.current = false;
				blinkTimerRef.current = 2.8 + Math.random() * 2.8;
			}
		}
		blinkAmountRef.current = MathUtils.damp(blinkAmountRef.current, 0, 18, dt);
		let targetUpperLid = -.84;
		let targetLowerLid = .84;
		let targetPupilW = .62;
		let targetPupilH = 1.16;
		let headTiltZ = 0;
		let earOutRotZ = .22;
		let earPitchX = 0;
		if (animation === "Sleep") {
			targetUpperLid = .16;
			targetLowerLid = .04;
			targetPupilW = .42;
		} else if (isPetting || animation === "Happy") {
			targetUpperLid = -.06;
			targetLowerLid = -.14;
			targetPupilW = .88;
			targetPupilH = 1.06;
			earPitchX = .12;
		} else if (emotion === "sleepy") {
			targetUpperLid = -.32;
			targetLowerLid = .46;
			targetPupilW = .5;
			earOutRotZ = .34;
		} else if (emotion === "curious") {
			targetUpperLid = -.92;
			targetLowerLid = .9;
			targetPupilW = .92;
			targetPupilH = 1.06;
			headTiltZ = .16;
			earPitchX = -.18;
		} else if (emotion === "affectionate") {
			targetUpperLid = -.34;
			targetLowerLid = .18;
			targetPupilW = .86;
			targetPupilH = 1.08;
		} else if (emotion === "excited") {
			targetUpperLid = -.94;
			targetLowerLid = .9;
			targetPupilW = 1;
			targetPupilH = 1.04;
			earOutRotZ = .15;
			earPitchX = -.2;
		} else if (emotion === "stubborn") {
			targetUpperLid = -.42;
			targetLowerLid = .52;
			targetPupilW = .46;
			earOutRotZ = .52;
			earPitchX = .2;
			headTiltZ = -.09;
		}
		if (earPerked) {
			earPitchX = -.26;
			earOutRotZ = .14;
			targetPupilW = Math.max(targetPupilW, .92);
		}
		const finalUpperLid = MathUtils.lerp(targetUpperLid, .16, blinkAmountRef.current);
		const finalLowerLid = MathUtils.lerp(targetLowerLid, .04, blinkAmountRef.current);
		if (rig.upperLidL && rig.upperLidR) {
			rig.upperLidL.rotation.x = MathUtils.damp(rig.upperLidL.rotation.x, finalUpperLid, 16, dt);
			rig.upperLidR.rotation.x = MathUtils.damp(rig.upperLidR.rotation.x, finalUpperLid, 16, dt);
		}
		if (rig.lowerLidL && rig.lowerLidR) {
			rig.lowerLidL.rotation.x = MathUtils.damp(rig.lowerLidL.rotation.x, finalLowerLid, 16, dt);
			rig.lowerLidR.rotation.x = MathUtils.damp(rig.lowerLidR.rotation.x, finalLowerLid, 16, dt);
		}
		let gazeYaw = 0;
		let gazePitch = 0;
		if (containerRef.current && animation !== "Sleep" && animation !== "Bath" && animation !== "Groom") {
			if (lookAtUser || lookTarget) {
				containerRef.current.getWorldPosition(_worldPos);
				if (lookTarget) _targetVec.set(lookTarget[0], lookTarget[1], lookTarget[2]);
				else _targetVec.copy(camera.position);
				const dx = _targetVec.x - _worldPos.x;
				const dy = _targetVec.y - (_worldPos.y + .45);
				const dz = _targetVec.z - _worldPos.z;
				let localYaw = Math.atan2(dx, dz) - containerRef.current.rotation.y;
				while (localYaw > Math.PI) localYaw -= Math.PI * 2;
				while (localYaw < -Math.PI) localYaw += Math.PI * 2;
				gazeYaw = MathUtils.clamp(localYaw, -.58, .58);
				const horizDist = Math.max(.5, Math.hypot(dx, dz));
				gazePitch = MathUtils.clamp(-Math.atan2(dy, horizDist) * .65, -.35, .35);
			} else if (emotion === "stubborn") gazeYaw = .28;
		}
		if (rig.headLookPivot) {
			rig.headLookPivot.rotation.y = MathUtils.damp(rig.headLookPivot.rotation.y, gazeYaw, 6, dt);
			rig.headLookPivot.rotation.x = MathUtils.damp(rig.headLookPivot.rotation.x, gazePitch, 6, dt);
			rig.headLookPivot.rotation.z = MathUtils.damp(rig.headLookPivot.rotation.z, headTiltZ, 6, dt);
		}
		if (rig.pupilL && rig.pupilR) {
			rig.pupilL.scale.x = MathUtils.damp(rig.pupilL.scale.x, targetPupilW, 10, dt);
			rig.pupilL.scale.y = MathUtils.damp(rig.pupilL.scale.y, targetPupilH, 10, dt);
			rig.pupilR.scale.x = MathUtils.damp(rig.pupilR.scale.x, targetPupilW, 10, dt);
			rig.pupilR.scale.y = MathUtils.damp(rig.pupilR.scale.y, targetPupilH, 10, dt);
			const eyeOffsetX = MathUtils.clamp(gazeYaw * .012, -.008, .008);
			const eyeOffsetY = MathUtils.clamp(-gazePitch * .01, -.006, .006);
			rig.pupilL.position.x = MathUtils.damp(rig.pupilL.position.x, eyeOffsetX, 10, dt);
			rig.pupilL.position.y = MathUtils.damp(rig.pupilL.position.y, eyeOffsetY, 10, dt);
			rig.pupilR.position.x = MathUtils.damp(rig.pupilR.position.x, eyeOffsetX, 10, dt);
			rig.pupilR.position.y = MathUtils.damp(rig.pupilR.position.y, eyeOffsetY, 10, dt);
		}
		if (rig.earL && rig.earR && animation !== "Yawn") {
			const microTwitch = Math.sin(t * 2.1) > .94 ? .12 : 0;
			rig.earL.rotation.z = MathUtils.damp(rig.earL.rotation.z, -earOutRotZ - microTwitch, 8, dt);
			rig.earR.rotation.z = MathUtils.damp(rig.earR.rotation.z, earOutRotZ, 8, dt);
			rig.earL.rotation.x = MathUtils.damp(rig.earL.rotation.x, earPitchX, 8, dt);
			rig.earR.rotation.x = MathUtils.damp(rig.earR.rotation.x, earPitchX, 8, dt);
		}
		if (rig.tailTipPivot) {
			const tipRate = emotion === "excited" ? 6.5 : emotion === "stubborn" ? 3.2 : 1.8;
			const tipAmp = emotion === "stubborn" ? .35 : emotion === "excited" ? .42 : .16;
			rig.tailTipPivot.rotation.z = Math.sin(t * tipRate) * tipAmp;
		}
		if (rig.bodyPivot && isPetting) rig.bodyPivot.position.y += Math.sin(t * 28) * .0018;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: containerRef,
		position,
		scale: stageScale,
		onClick: (e) => {
			if (onClick) {
				e.stopPropagation();
				onClick();
			}
		},
		children: [
			loadedScene && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("primitive", { object: loadedScene }),
			(onHeadClick || onClick) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.56,
					.31
				],
				onClick: (e) => {
					e.stopPropagation();
					if (onHeadClick) onHeadClick();
					else if (onClick) onClick();
				},
				onPointerOver: (e) => {
					e.stopPropagation();
					document.body.style.cursor = "pointer";
				},
				onPointerOut: () => {
					document.body.style.cursor = "default";
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.26,
					8,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					transparent: true,
					opacity: 0,
					depthWrite: false
				})]
			}),
			(onBodyClick || onClick) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.34,
					-.02
				],
				onClick: (e) => {
					e.stopPropagation();
					if (onBodyClick) onBodyClick();
					else if (onClick) onClick();
				},
				onPointerOver: (e) => {
					e.stopPropagation();
					document.body.style.cursor = "pointer";
				},
				onPointerOut: () => {
					document.body.style.cursor = "default";
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.32,
					8,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					transparent: true,
					opacity: 0,
					depthWrite: false
				})]
			})
		]
	});
};
// src/systems/catHomeBridge.ts
function deriveCatEmotion(cat, recentAction) {
	if (recentAction === "Play" || recentAction === "Run") return "excited";
	if (recentAction === "Happy") return "affectionate";
	if (recentAction === "Sleep" || recentAction === "Yawn") return "sleepy";
	if (cat.energy < 34) return "sleepy";
	if (cat.hunger < 36 || cat.cleanliness < 38) return "stubborn";
	if (cat.affection >= 82 && cat.happiness >= 75) return "affectionate";
	if (cat.happiness >= 85 && cat.energy >= 70) return "excited";
	if (cat.happiness >= 65) return "happy";
	return "curious";
}
var CAT_EMOTION_LABELS = {
	happy: "خوشحال و بازیگوش",
	sleepy: "خواب‌آلود",
	curious: "کنجکاو",
	affectionate: "آرام و مهربان",
	excited: "هیجان‌زده",
	stubborn: "کمی لجباز"
};
function sampleItem(items, predicate) {
	const matched = items.filter(predicate);
	if (matched.length === 0) return void 0;
	return matched[Math.floor(Math.random() * matched.length)];
}
/**
* انتخاب رفتار هوشمند گربه بر اساس وسایل و بخش‌های زنده عمارت ایرانی
* گربه پیوسته بین حیاط، حوض، ایوان، تالار، اتاق خواب و اتاق گربه قدم می‌زند و با وسایل جابه‌جاشده تعامل می‌کند.
*/
function pickCatHomeBehavior(cat, allItems, preferredZone) {
	const catName = cat.name;
	const zonePool = preferredZone && Math.random() < .65 ? allItems.filter((i) => i.room === preferredZone) : allItems;
	const pool = zonePool.length > 0 ? zonePool : allItems;
	const basket = sampleItem(pool, (i) => i.kind === "cat_basket");
	const tower = sampleItem(pool, (i) => i.kind === "cat_tower");
	const bowls = sampleItem(pool, (i) => i.kind === "cat_bowls");
	const sofa = sampleItem(pool, (i) => i.kind === "sofa" || i.kind === "persian_sofa" || i.kind === "armchair" || i.kind === "royal_chair");
	const bed = sampleItem(pool, (i) => i.kind === "bed");
	const bolster = sampleItem(pool, (i) => i.kind === "bolster_set" || i.kind === "courtyard_bench");
	const toy = sampleItem(pool, (i) => i.kind === "cat_toy");
	const rug = sampleItem(pool, (i) => i.kind === "persian_carpet_large" || i.kind === "persian_carpet_runner" || i.kind === "rug_round");
	const tree = sampleItem(pool, (i) => i.kind === "tree_pomegranate" || i.kind === "tree_orange" || i.kind === "tree_cypress");
	const flowerPot = sampleItem(pool, (i) => i.kind === "flower_pot_clay" || i.kind === "flower_pot_turquoise" || i.kind === "greenhouse_planter" || i.kind === "plant_monstera");
	const candidates = [];
	if (basket) candidates.push({
		position: [
			basket.position[0],
			basket.position[1] + .14,
			basket.position[2]
		],
		animation: cat.energy < 60 ? "Sleep" : "LickPaw",
		emotion: cat.energy < 60 ? "sleepy" : "affectionate",
		statusText: cat.energy < 60 ? `${catName} داخل سبد مخملی‌اش جمع شده و می‌خوابد` : `${catName} روی تشک گرمش پنجه‌هایش را تمیز می‌کند`,
		targetUid: basket.uid,
		targetKind: basket.kind
	});
	if (tower) candidates.push({
		position: [
			tower.position[0] - .16,
			tower.position[1] + .84,
			tower.position[2]
		],
		animation: "Sit",
		emotion: "curious",
		statusText: `${catName} بالای برج بازی رفته و حیاط را زیر نظر دارد`,
		targetUid: tower.uid,
		targetKind: tower.kind
	});
	if (bowls) candidates.push({
		position: [
			bowls.position[0],
			bowls.position[1],
			bowls.position[2] + .34
		],
		animation: "Groom",
		emotion: "happy",
		statusText: `${catName} کنار ظرف آب و غذایش سرک می‌کشد`,
		targetUid: bowls.uid,
		targetKind: bowls.kind,
		lookTarget: [
			bowls.position[0],
			bowls.position[1] + .08,
			bowls.position[2]
		]
	});
	if (sofa) candidates.push({
		position: [
			sofa.position[0],
			sofa.position[1] + .43,
			sofa.position[2] + .05
		],
		animation: "Sleep",
		emotion: "sleepy",
		statusText: `${catName} روی مبل باشکوه عمارت چرت می‌زند`,
		targetUid: sofa.uid,
		targetKind: sofa.kind
	});
	if (bed) candidates.push({
		position: [
			bed.position[0],
			bed.position[1] + .54,
			bed.position[2] + .15
		],
		animation: Math.random() > .35 ? "Sleep" : "Yawn",
		emotion: "sleepy",
		statusText: `${catName} روی تخت نرم اتاق خواب استراحت می‌کند`,
		targetUid: bed.uid,
		targetKind: bed.kind
	});
	if (bolster) candidates.push({
		position: [
			bolster.position[0],
			bolster.position[1] + .22,
			bolster.position[2] + .15
		],
		animation: "Stretch",
		emotion: "affectionate",
		statusText: `${catName} کنار شاه‌نشین و پشتی سنتی آفتاب می‌گیرد`,
		targetUid: bolster.uid,
		targetKind: bolster.kind
	});
	if (toy) candidates.push({
		position: [
			toy.position[0] + .36,
			toy.position[1],
			toy.position[2] + .3
		],
		animation: "Play",
		emotion: "excited",
		statusText: `${catName} با کلاف کاموا بازیگوشی می‌کند`,
		targetUid: toy.uid,
		targetKind: toy.kind,
		lookTarget: [
			toy.position[0],
			toy.position[1] + .18,
			toy.position[2]
		]
	});
	if (rug) {
		const roll = Math.random();
		candidates.push({
			position: [
				rug.position[0] + (Math.random() - .5) * .85,
				rug.position[1] + .01,
				rug.position[2] + (Math.random() - .5) * .7
			],
			animation: roll < .4 ? "Stretch" : roll < .75 ? "Sleep" : "Groom",
			emotion: roll < .4 ? "happy" : "affectionate",
			statusText: roll < .4 ? `${catName} روی فرش دست‌بافت کش‌وقوس می‌آید` : `${catName} روی نقش‌ونگار فرش ایرانی آرام گرفته است`,
			targetUid: rug.uid,
			targetKind: rug.kind
		});
	}
	if (tree) candidates.push({
		position: [
			tree.position[0] > 0 ? tree.position[0] - .85 : tree.position[0] + .85,
			0,
			tree.position[2] > 0 ? tree.position[2] - .7 : tree.position[2] + .7
		],
		animation: "Sit",
		emotion: "curious",
		statusText: `${catName} زیر سایه درختان انار و نارنج نشسته است`,
		targetUid: tree.uid,
		targetKind: tree.kind,
		lookTarget: [
			tree.position[0],
			1.1,
			tree.position[2]
		]
	});
	if (flowerPot) candidates.push({
		position: [
			flowerPot.position[0] + .46,
			flowerPot.position[1],
			flowerPot.position[2] + .35
		],
		animation: "Sit",
		emotion: "curious",
		statusText: `${catName} عطر گل‌های حیاط و گلخانه را بو می‌کشد`,
		targetUid: flowerPot.uid,
		targetKind: flowerPot.kind,
		lookTarget: [
			flowerPot.position[0],
			flowerPot.position[1] + .6,
			flowerPot.position[2]
		]
	});
	if (!preferredZone || preferredZone === "courtyard" || Math.random() < .35) {
		const side = Math.random() > .5 ? 1 : -1;
		candidates.push({
			position: [
				side * 2.38,
				0,
				(Math.random() - .5) * 1.4
			],
			animation: "Sit",
			emotion: "curious",
			statusText: `${catName} کنار حوض فیروزه‌ای نشسته و ماهی‌های قرمز را تماشا می‌کند`,
			lookTarget: [
				0,
				.25,
				0
			]
		});
	}
	if (candidates.length === 0) return {
		position: [
			(Math.random() - .5) * 3.8,
			0,
			2.2 + (Math.random() - .5) * 1.4
		],
		animation: "Idle",
		emotion: deriveCatEmotion(cat),
		statusText: `${catName} در حیاط عمارت قدم می‌زند`
	};
	return candidates[Math.floor(Math.random() * candidates.length)];
}
export { Heart as a, CatActor3D as i, deriveCatEmotion as n, Camera as o, pickCatHomeBehavior as r, CAT_EMOTION_LABELS as t };
