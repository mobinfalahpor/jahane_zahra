import { a as __toESM } from "./rolldown-runtime-DQp2zzRu.js";
import { Ct as RepeatWrapping, Ft as TubeGeometry, H as LatheGeometry, It as Vector2, Lt as Vector3, S as ClampToEdgeWrapping, Vt as require_react, b as CatmullRomCurve3, et as MathUtils, l as require_jsx_runtime, r as OrbitControls, s as useFrame, v as CanvasTexture, wt as SRGBColorSpace } from "./r3f-core-XgHUAlSk.js";
import { f as useUniverseStore, l as toPersianDigits, n as VolumeX, o as createLucideIcon, r as Volume2, s as audioEngine, u as SceneCanvas, w as getGraphicsProfile } from "./entry-Br_QEXnh.js";
import { t as CloudRain } from "./cloud-rain-f5UU80Ru.js";
import { t as Moon } from "./moon-Bz-WB2TQ.js";
import { d as Sunset, s as getPersianCarpetByColor } from "./persianMansionTextures-DVNX_O6m.js";
import { t as Upload } from "./upload-D702qH12.js";
import { a as createWoodTexture } from "./proceduralTextures-CcJ_R3cZ.js";
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronDown = createLucideIcon("chevron-down", [["path", {
	d: "m6 9 6 6 6-6",
	key: "qrunsl"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ChevronUp = createLucideIcon("chevron-up", [["path", {
	d: "m18 15-6-6-6 6",
	key: "153udz"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var CircleAlert = createLucideIcon("circle-alert", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["line", {
		x1: "12",
		x2: "12",
		y1: "8",
		y2: "12",
		key: "1pkeuh"
	}],
	["line", {
		x1: "12",
		x2: "12.01",
		y1: "16",
		y2: "16",
		key: "4dfq90"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Disc3 = createLucideIcon("disc-3", [
	["circle", {
		cx: "12",
		cy: "12",
		r: "10",
		key: "1mglay"
	}],
	["path", {
		d: "M6 12c0-1.7.7-3.2 1.8-4.2",
		key: "oqkarx"
	}],
	["circle", {
		cx: "12",
		cy: "12",
		r: "2",
		key: "1c9p78"
	}],
	["path", {
		d: "M18 12c0 1.7-.7 3.2-1.8 4.2",
		key: "1eah9h"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ListMusic = createLucideIcon("list-music", [
	["path", {
		d: "M16 5H3",
		key: "m91uny"
	}],
	["path", {
		d: "M11 12H3",
		key: "51ecnj"
	}],
	["path", {
		d: "M11 19H3",
		key: "zflm78"
	}],
	["path", {
		d: "M21 16V5",
		key: "yxg4q8"
	}],
	["circle", {
		cx: "18",
		cy: "16",
		r: "3",
		key: "1hluhg"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Pause = createLucideIcon("pause", [["rect", {
	x: "14",
	y: "3",
	width: "5",
	height: "18",
	rx: "1",
	key: "kaeet6"
}], ["rect", {
	x: "5",
	y: "3",
	width: "5",
	height: "18",
	rx: "1",
	key: "1wsw3u"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Play = createLucideIcon("play", [["path", {
	d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
	key: "10ikf1"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var SkipBack = createLucideIcon("skip-back", [["path", {
	d: "M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",
	key: "15892j"
}], ["path", {
	d: "M3 20V4",
	key: "1ptbpl"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var SkipForward = createLucideIcon("skip-forward", [["path", {
	d: "M21 4v16",
	key: "7j8fe9"
}], ["path", {
	d: "M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",
	key: "zs4d6"
}]]);
// src/worlds/MusicRoom/victorianTextures.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var victorianTexCache = /* @__PURE__ */ new Map();
function cachedVictorian(key, build) {
	const existing = victorianTexCache.get(key);
	if (existing) return existing;
	const tex = build();
	tex.userData.shared = true;
	victorianTexCache.set(key, tex);
	return tex;
}
function makeCanvas(w, h) {
	const canvas = document.createElement("canvas");
	canvas.width = w;
	canvas.height = h;
	return [canvas, canvas.getContext("2d")];
}
/**
* کاغذدیواری ویکتوریایی سبز زمردی تیره با نقش گلدار دمشقی طلایی-زیتونی
*/
function createVictorianDamaskTexture() {
	return cachedVictorian("damask", () => {
		const [canvas, ctx] = makeCanvas(512, 512);
		ctx.fillStyle = "#183328";
		ctx.fillRect(0, 0, 512, 512);
		for (let x = 0; x < 512; x += 32) {
			ctx.fillStyle = x % 64 === 0 ? "rgba(255,245,220,0.03)" : "rgba(0,0,0,0.07)";
			ctx.fillRect(x, 0, 16, 512);
		}
		const drawMotif = (cx, cy) => {
			ctx.save();
			ctx.translate(cx, cy);
			ctx.strokeStyle = "rgba(182, 149, 78, 0.28)";
			ctx.fillStyle = "rgba(38, 79, 59, 0.62)";
			ctx.lineWidth = 2;
			ctx.beginPath();
			ctx.moveTo(0, -56);
			ctx.bezierCurveTo(38, -28, 38, 28, 0, 56);
			ctx.bezierCurveTo(-38, 28, -38, -28, 0, -56);
			ctx.fill();
			ctx.stroke();
			ctx.fillStyle = "rgba(196, 162, 88, 0.22)";
			for (let i = 0; i < 6; i++) {
				ctx.save();
				ctx.rotate(i / 6 * Math.PI * 2);
				ctx.beginPath();
				ctx.ellipse(0, -18, 6, 14, 0, 0, Math.PI * 2);
				ctx.fill();
				ctx.restore();
			}
			ctx.beginPath();
			ctx.arc(0, 0, 7, 0, Math.PI * 2);
			ctx.fillStyle = "rgba(208, 173, 98, 0.34)";
			ctx.fill();
			ctx.restore();
		};
		for (let gy = 0; gy <= 512; gy += 128) for (let gx = 0; gx <= 512; gx += 128) {
			drawMotif(gx, gy);
			drawMotif(gx + 64, gy + 64);
		}
		const tex = new CanvasTexture(canvas);
		tex.colorSpace = SRGBColorSpace;
		tex.wrapS = RepeatWrapping;
		tex.wrapT = RepeatWrapping;
		tex.repeat.set(4, 2);
		tex.anisotropy = 4;
		return tex;
	});
}
/**
* پنل‌بندی چوب گردو و ماهگونی دیوارهای ویکتوریایی
*/
function createVictorianWainscotTexture() {
	return cachedVictorian("wainscot", () => {
		const [canvas, ctx] = makeCanvas(512, 256);
		ctx.fillStyle = "#331d12";
		ctx.fillRect(0, 0, 512, 256);
		const panels = 4;
		const pw = 512 / panels;
		for (let i = 0; i < panels; i++) {
			const x = i * pw;
			ctx.fillStyle = "#3d2316";
			ctx.fillRect(x + 12, 18, 104, 220);
			ctx.strokeStyle = "#5c3824";
			ctx.lineWidth = 4;
			ctx.strokeRect(x + 14, 20, 100, 216);
			ctx.strokeStyle = "#1f1009";
			ctx.lineWidth = 3;
			ctx.strokeRect(x + 24, 32, 80, 192);
			ctx.strokeStyle = "rgba(18, 8, 4, 0.25)";
			ctx.lineWidth = 1.2;
			for (let g = 0; g < 10; g++) {
				const gx = x + 28 + g * 8;
				ctx.beginPath();
				ctx.moveTo(gx, 32);
				ctx.bezierCurveTo(gx + 3, 95, gx - 3, 160, gx, 224);
				ctx.stroke();
			}
		}
		const tex = new CanvasTexture(canvas);
		tex.colorSpace = SRGBColorSpace;
		tex.wrapS = RepeatWrapping;
		tex.wrapT = ClampToEdgeWrapping;
		tex.repeat.set(3, 1);
		tex.anisotropy = 4;
		return tex;
	});
}
/**
* کفپوش پارکت چوب گردوی تیره اشرافی
*/
function createVictorianParquetTexture() {
	return cachedVictorian("parquet", () => {
		const [canvas, ctx] = makeCanvas(512, 512);
		ctx.fillStyle = "#2d1a10";
		ctx.fillRect(0, 0, 512, 512);
		const plankH = 42.66;
		for (let r = 0; r < 12; r++) {
			const y = r * plankH;
			const tones = [
				"#361f13",
				"#2e1a10",
				"#3d2416",
				"#28160d"
			];
			ctx.fillStyle = tones[r % tones.length];
			ctx.fillRect(0, y, 512, 41.16);
			ctx.strokeStyle = "rgba(18, 9, 4, 0.32)";
			ctx.lineWidth = 1;
			for (let g = 0; g < 6; g++) {
				const gy = y + 6 + g * 6;
				ctx.beginPath();
				ctx.moveTo(0, gy);
				ctx.bezierCurveTo(170, gy + 2, 340, gy - 2, 512, gy);
				ctx.stroke();
			}
			const splitX = (r * 197 + 80) % 420 + 40;
			ctx.fillStyle = "rgba(14, 7, 3, 0.5)";
			ctx.fillRect(splitX, y, 2, plankH);
		}
		const tex = new CanvasTexture(canvas);
		tex.colorSpace = SRGBColorSpace;
		tex.wrapS = RepeatWrapping;
		tex.wrapT = RepeatWrapping;
		tex.repeat.set(5, 5);
		tex.anisotropy = 4;
		return tex;
	});
}
/**
* صفحه وینیل مشکی با شیارهای ریز و برچسب کلاسیک ویکتوریایی
*/
function createVictorianVinylTexture(labelAccent = "#781d29") {
	return cachedVictorian(`vinyl_${labelAccent}`, () => {
		const [canvas, ctx] = makeCanvas(512, 512);
		ctx.fillStyle = "#0e0e12";
		ctx.fillRect(0, 0, 512, 512);
		const sheen = ctx.createConicGradient(0, 256, 256);
		sheen.addColorStop(0, "rgba(255,255,255,0.02)");
		sheen.addColorStop(.18, "rgba(255,244,220,0.12)");
		sheen.addColorStop(.35, "rgba(255,255,255,0.02)");
		sheen.addColorStop(.68, "rgba(255,244,220,0.10)");
		sheen.addColorStop(1, "rgba(255,255,255,0.02)");
		ctx.fillStyle = sheen;
		ctx.beginPath();
		ctx.arc(256, 256, 248, 0, Math.PI * 2);
		ctx.fill();
		for (let r = 92; r < 246; r += 3) {
			ctx.beginPath();
			ctx.arc(256, 256, r, 0, Math.PI * 2);
			ctx.strokeStyle = r % 12 === 0 ? "rgba(255,240,210,0.12)" : "rgba(255,255,255,0.04)";
			ctx.lineWidth = 1;
			ctx.stroke();
		}
		ctx.beginPath();
		ctx.arc(256, 256, 84, 0, Math.PI * 2);
		ctx.fillStyle = labelAccent;
		ctx.fill();
		ctx.beginPath();
		ctx.arc(256, 256, 76, 0, Math.PI * 2);
		ctx.strokeStyle = "#d4a84f";
		ctx.lineWidth = 3.5;
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(256, 256, 56, 0, Math.PI * 2);
		ctx.strokeStyle = "rgba(242,226,190,0.55)";
		ctx.lineWidth = 1.5;
		ctx.stroke();
		ctx.beginPath();
		ctx.arc(256, 256, 12, 0, Math.PI * 2);
		ctx.fillStyle = "#18130f";
		ctx.fill();
		const tex = new CanvasTexture(canvas);
		tex.colorSpace = SRGBColorSpace;
		tex.anisotropy = 4;
		return tex;
	});
}
/**
* نقاشی رنگ روغن کلاسیک قرن نوزدهم برای تابلوهای دیواری
*/
function createVictorianOilPaintingTexture(variant) {
	return cachedVictorian(`painting_${variant}`, () => {
		const [canvas, ctx] = makeCanvas(512, 384);
		if (variant === "landscape") {
			const sky = ctx.createLinearGradient(0, 0, 0, 240);
			sky.addColorStop(0, "#2a3342");
			sky.addColorStop(.55, "#8c694a");
			sky.addColorStop(1, "#d9b47e");
			ctx.fillStyle = sky;
			ctx.fillRect(0, 0, 512, 384);
			ctx.fillStyle = "#3b4238";
			ctx.beginPath();
			ctx.moveTo(0, 220);
			ctx.quadraticCurveTo(150, 150, 310, 210);
			ctx.quadraticCurveTo(420, 165, 512, 220);
			ctx.lineTo(512, 384);
			ctx.lineTo(0, 384);
			ctx.closePath();
			ctx.fill();
			ctx.fillStyle = "#4f5d5b";
			ctx.fillRect(0, 245, 512, 139);
			const refGrad = ctx.createLinearGradient(220, 245, 290, 384);
			refGrad.addColorStop(0, "rgba(235, 200, 135, 0.65)");
			refGrad.addColorStop(1, "rgba(235, 200, 135, 0.05)");
			ctx.fillStyle = refGrad;
			ctx.fillRect(210, 245, 92, 139);
			ctx.fillStyle = "#1d2218";
			ctx.beginPath();
			ctx.arc(88, 185, 68, 0, Math.PI * 2);
			ctx.arc(135, 205, 52, 0, Math.PI * 2);
			ctx.fill();
		} else {
			ctx.fillStyle = "#1f1612";
			ctx.fillRect(0, 0, 512, 384);
			ctx.fillStyle = "#3b2419";
			ctx.fillRect(0, 270, 512, 114);
			const pitcherGrad = ctx.createLinearGradient(200, 150, 280, 280);
			pitcherGrad.addColorStop(0, "#d9b05b");
			pitcherGrad.addColorStop(1, "#75531f");
			ctx.fillStyle = pitcherGrad;
			ctx.beginPath();
			ctx.ellipse(245, 225, 42, 62, 0, 0, Math.PI * 2);
			ctx.fill();
			for (const [fx, fy, col] of [
				[
					220,
					125,
					"#8c1d2b"
				],
				[
					265,
					115,
					"#a82c3a"
				],
				[
					240,
					95,
					"#d9b37e"
				],
				[
					205,
					148,
					"#7a1925"
				],
				[
					285,
					145,
					"#9e2634"
				]
			]) {
				ctx.beginPath();
				ctx.arc(fx, fy, 22, 0, Math.PI * 2);
				ctx.fillStyle = col;
				ctx.fill();
			}
		}
		const vig = ctx.createRadialGradient(256, 192, 80, 256, 192, 310);
		vig.addColorStop(0, "rgba(0,0,0,0)");
		vig.addColorStop(1, "rgba(15,10,6,0.48)");
		ctx.fillStyle = vig;
		ctx.fillRect(0, 0, 512, 384);
		const tex = new CanvasTexture(canvas);
		tex.colorSpace = SRGBColorSpace;
		return tex;
	});
}
// src/worlds/MusicRoom/VictorianGramophone3D.tsx
var import_jsx_runtime = require_jsx_runtime();
var VictorianGramophone3D = import_react.memo(function VictorianGramophone3D({ isPlaying, position = [
	0,
	0,
	-.35
] }) {
	const quality = useUniverseStore((s) => s.environment.quality);
	const reducedMotion = useUniverseStore((s) => s.environment.reducedMotion);
	const profile = (0, import_react.useMemo)(() => getGraphicsProfile(quality, reducedMotion), [quality, reducedMotion]);
	const mahoganyTex = (0, import_react.useMemo)(() => createWoodTexture("#572919", "#32150c", 3), []);
	const walnutTex = (0, import_react.useMemo)(() => createWoodTexture("#3e2114", "#221008", 3), []);
	const vinylTex = (0, import_react.useMemo)(() => createVictorianVinylTexture("#781d29"), []);
	const recordRef = (0, import_react.useRef)(null);
	const armPivotRef = (0, import_react.useRef)(null);
	const armLiftRef = (0, import_react.useRef)(null);
	const crankRef = (0, import_react.useRef)(null);
	const hornGlowRef = (0, import_react.useRef)(null);
	const swanNeckGeo = (0, import_react.useMemo)(() => {
		const curve = new CatmullRomCurve3([
			new Vector3(0, 0, 0),
			new Vector3(0, .24, -.06),
			new Vector3(-.04, .44, -.02),
			new Vector3(-.08, .56, .14)
		]);
		return new TubeGeometry(curve, 24, .046, 14, false);
	}, []);
	const hornBellGeo = (0, import_react.useMemo)(() => {
		const pts = [];
		const steps = 28;
		for (let i = 0; i <= steps; i++) {
			const t = i / steps;
			const r = .044 + .055 * t + .42 * Math.pow(t, 2.75);
			const y = t * .92;
			pts.push(new Vector2(r, y));
		}
		const geo = new LatheGeometry(pts, 40);
		const pos = geo.attributes.position;
		for (let i = 0; i < pos.count; i++) {
			const x = pos.getX(i);
			const y = pos.getY(i);
			const z = pos.getZ(i);
			const t = Math.max(0, Math.min(1, y / .92));
			if (t > .45) {
				const wave = Math.sin(Math.atan2(z, x) * 10) * .024 * Math.pow((t - .45) / .55, 1.8);
				const rad = Math.hypot(x, z);
				if (rad > .001) {
					const scale = (rad + wave) / rad;
					pos.setX(i, x * scale);
					pos.setZ(i, z * scale);
				}
			}
		}
		geo.computeVertexNormals();
		return geo;
	}, []);
	(0, import_react.useEffect)(() => {
		return () => {
			swanNeckGeo.dispose();
			hornBellGeo.dispose();
		};
	}, [swanNeckGeo, hornBellGeo]);
	useFrame(({ clock }, rawDelta) => {
		const dt = Math.min(.05, rawDelta);
		const t = clock.getElapsedTime();
		if (recordRef.current && isPlaying && !profile.systemReducedMotion) recordRef.current.rotation.y += dt * 1.48;
		if (armPivotRef.current) {
			const targetYaw = isPlaying ? .42 : -.04;
			armPivotRef.current.rotation.y = MathUtils.damp(armPivotRef.current.rotation.y, targetYaw, 4.6, dt);
		}
		if (armLiftRef.current) {
			const targetPitch = isPlaying ? 0 : -.17;
			armLiftRef.current.rotation.z = MathUtils.damp(armLiftRef.current.rotation.z, targetPitch, 5.5, dt);
		}
		if (hornGlowRef.current) {
			const targetIntensity = isPlaying && !profile.systemReducedMotion ? .85 + Math.sin(t * 2.4) * .14 : isPlaying ? .85 : .35;
			hornGlowRef.current.intensity = MathUtils.damp(hornGlowRef.current.intensity, targetIntensity, 5, dt);
		}
		if (crankRef.current && isPlaying && !profile.systemReducedMotion) crankRef.current.rotation.x = Math.sin(t * .6) * .02;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.75,
					0
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.68,
					.075,
					1.32
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: mahoganyTex,
					roughness: .34,
					metalness: .08
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.67,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.52,
					.11,
					1.16
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: walnutTex,
					roughness: .45
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.755,
					.665
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.62,
					.02,
					.015
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#c99c42",
					metalness: .85,
					roughness: .24
				})]
			}),
			[
				[
					-.68,
					.35,
					-.5
				],
				[
					.68,
					.35,
					-.5
				],
				[
					-.68,
					.35,
					.5
				],
				[
					.68,
					.35,
					.5
				]
			].map(([lx, ly, lz], idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: [
					lx,
					ly,
					lz
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.055,
						.036,
						.68,
						14
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: walnutTex,
						roughness: .42
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						-.31,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.042,
						.038,
						.065,
						12
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#c99c42",
						metalness: .85,
						roughness: .25
					})]
				})]
			}, idx)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.22,
					0
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.38,
					.045,
					1.02
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: walnutTex,
					roughness: .48
				})]
			}),
			[
				"#5e1621",
				"#1b382c",
				"#3d281a",
				"#705224"
			].map((col, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-.38 + idx * .22,
					.262,
					.05
				],
				rotation: [
					0,
					.06 * (idx - 1.5),
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.36,
					.024,
					.36
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: col,
					roughness: .68
				})]
			}, idx))
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				0,
				.788,
				.04
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.035,
						0
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.98,
						.07,
						.88
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: walnutTex,
						roughness: .38
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.19,
						0
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.88,
						.25,
						.78
					] }), profile.enablePhysicalSheen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
						map: mahoganyTex,
						roughness: .28,
						clearcoat: .55,
						clearcoatRoughness: .22
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: mahoganyTex,
						roughness: .28,
						metalness: .08
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.325,
						0
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.94,
						.05,
						.84
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: walnutTex,
						roughness: .35
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.19,
						.395
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.68,
						.15,
						.025
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#3c1e12",
						roughness: .42
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.22,
						.412
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.18,
						.045,
						.01
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#d4a64a",
						metalness: .9,
						roughness: .2
					})]
				}),
				[-.22, .22].map((kx, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						kx,
						.16,
						.415
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.02,
						10,
						10
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#d4a64a",
						metalness: .9,
						roughness: .2
					})]
				}, i)),
				[
					[
						-.44,
						.05,
						.39
					],
					[
						.44,
						.05,
						.39
					],
					[
						-.44,
						.05,
						-.39
					],
					[
						.44,
						.05,
						-.39
					]
				].map((cp, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: cp,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.06,
						.08,
						.06
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#c99c42",
						metalness: .88,
						roughness: .22
					})]
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
					ref: crankRef,
					position: [
						.45,
						.19,
						.04
					],
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							rotation: [
								0,
								0,
								Math.PI / 2
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
								.026,
								.03,
								.06,
								12
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: "#c99c42",
								metalness: .88,
								roughness: .22
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								.08,
								-.04,
								0
							],
							rotation: [
								.4,
								0,
								Math.PI / 2
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
								.012,
								.012,
								.14,
								8
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: "#d4a64a",
								metalness: .9,
								roughness: .2
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								.14,
								-.09,
								.05
							],
							rotation: [
								0,
								0,
								Math.PI / 2
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
								.018,
								.016,
								.09,
								10
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: "#2a160c",
								roughness: .45
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-.34,
						.356,
						.24
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.028,
						.032,
						.022,
						12
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#d4a64a",
						metalness: .88,
						roughness: .22
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
					position: [
						-.06,
						.352,
						.04
					],
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							castShadow: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
								.36,
								.38,
								.03,
								36
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: "#c99c42",
								metalness: .88,
								roughness: .22
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								0,
								.017,
								0
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
								.345,
								.345,
								.006,
								32
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: "#184231",
								roughness: .92
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							ref: recordRef,
							position: [
								0,
								.026,
								0
							],
							castShadow: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
								.335,
								.335,
								.01,
								40
							] }), profile.enablePhysicalSheen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
								map: vinylTex,
								roughness: .22,
								metalness: .12,
								clearcoat: .65,
								clearcoatRoughness: .18
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								map: vinylTex,
								roughness: .22,
								metalness: .18
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								0,
								.044,
								0
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
								.014,
								.016,
								.032,
								12
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: "#e0b861",
								metalness: .92,
								roughness: .16
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
					ref: armPivotRef,
					position: [
						.32,
						.365,
						-.22
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						castShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
							.048,
							.062,
							.09,
							16
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#c99c42",
							metalness: .9,
							roughness: .2
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
						ref: armLiftRef,
						position: [
							0,
							.048,
							0
						],
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
								position: [
									-.14,
									.015,
									.16
								],
								rotation: [
									0,
									-.68,
									Math.PI / 2
								],
								castShadow: true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
									.011,
									.02,
									.42,
									12
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
									color: "#d4a64a",
									metalness: .92,
									roughness: .18
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
								position: [
									-.29,
									-.005,
									.3
								],
								rotation: [
									Math.PI / 2,
									.68,
									0
								],
								castShadow: true,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
									.048,
									.048,
									.026,
									18
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
									color: "#d4a64a",
									metalness: .92,
									roughness: .18
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
								position: [
									-.31,
									-.036,
									.315
								],
								rotation: [
									.22,
									0,
									0
								],
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
									.006,
									.04,
									8
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
									color: "#d8dde6",
									metalness: .95,
									roughness: .12
								})]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.31,
						.38,
						.16
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.012,
						.018,
						.06,
						8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#c99c42",
						metalness: .85,
						roughness: .25
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
					position: [
						.24,
						.35,
						-.34
					],
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								0,
								.04,
								-.02
							],
							castShadow: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
								.16,
								.16,
								.09
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: "#a67c30",
								metalness: .88,
								roughness: .28
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								0,
								.08,
								-.05
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
								.055,
								.068,
								.12,
								14
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: "#c99c42",
								metalness: .9,
								roughness: .22
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
							geometry: swanNeckGeo,
							castShadow: true,
							children: profile.enablePhysicalSheen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
								color: "#d4a546",
								metalness: .92,
								roughness: .18,
								clearcoat: .45
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: "#d4a546",
								metalness: .92,
								roughness: .18
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								-.08,
								.56,
								.14
							],
							rotation: [
								.92,
								0,
								.2
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
								.052,
								.014,
								10,
								20
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: "#b38534",
								metalness: .92,
								roughness: .22
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
							position: [
								-.08,
								.56,
								.14
							],
							rotation: [
								.98,
								.12,
								.24
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
								geometry: hornBellGeo,
								castShadow: true,
								children: profile.enablePhysicalSheen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
									color: "#d8aa4c",
									metalness: .92,
									roughness: .16,
									clearcoat: .5,
									clearcoatRoughness: .14,
									side: 2
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
									color: "#d8aa4c",
									metalness: .92,
									roughness: .16,
									side: 2
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
								position: [
									0,
									.92,
									0
								],
								rotation: [
									Math.PI / 2,
									0,
									0
								],
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
									.515,
									.016,
									12,
									42
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
									color: "#e6be6a",
									metalness: .95,
									roughness: .14
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
							ref: hornGlowRef,
							position: [
								-.25,
								1.05,
								.72
							],
							color: "#ffd88c",
							intensity: .45,
							distance: 3.2,
							decay: 2
						})
					]
				})
			]
		})]
	});
});
// src/worlds/MusicRoom/MusicRoomWorld.tsx
function formatTimeFa(seconds) {
	if (!Number.isFinite(seconds) || seconds < 0) return toPersianDigits("00:00");
	const total = Math.floor(seconds);
	const mins = Math.floor(total / 60);
	const secs = total % 60;
	return toPersianDigits(`${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`);
}
var VictorianFireplace = import_react.memo(function VictorianFireplace({ position, rotationY, mahoganyTex, reducedMotion }) {
	const flameGroupRef = (0, import_react.useRef)(null);
	const fireLightRef = (0, import_react.useRef)(null);
	useFrame(({ clock }) => {
		if (reducedMotion) return;
		const t = clock.getElapsedTime();
		if (flameGroupRef.current) {
			const children = flameGroupRef.current.children;
			for (let idx = 0; idx < children.length; idx++) {
				const child = children[idx];
				const s = .85 + Math.sin(t * (7 + idx * 1.9) + idx * 1.3) * .2;
				child.scale.set(1, s, 1);
				child.rotation.z = Math.sin(t * 5.2 + idx) * .08;
			}
		}
		if (fireLightRef.current) fireLightRef.current.intensity = 2 + Math.sin(t * 8.5) * .22 + Math.cos(t * 13) * .12;
	});
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
					0,
					.05,
					.25
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					2.15,
					.1,
					.78
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#3c3734",
					roughness: .75
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-.78,
					.74,
					.14
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.36,
					1.28,
					.48
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#4e4640",
					roughness: .78
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					.78,
					.74,
					.14
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.36,
					1.28,
					.48
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#4e4640",
					roughness: .78
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.65,
					.04
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.22,
					1.1,
					.34
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#14100f",
					roughness: .95
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					1.44,
					.2
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					2.22,
					.14,
					.56
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: mahoganyTex,
					roughness: .38
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					1.28,
					.18
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.98,
					.2,
					.48
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: mahoganyTex,
					roughness: .42
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.14,
					.45
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.38,
					.05,
					.04
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#c99c42",
					metalness: .88,
					roughness: .24
				})]
			}),
			[
				-.22,
				.04,
				.24
			].map((lx, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					lx,
					.18 + idx % 2 * .04,
					.16
				],
				rotation: [
					0,
					.3 * (idx - 1),
					Math.PI / 2
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.06,
					.07,
					.52,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#2b1910",
					emissive: "#5c1b06",
					emissiveIntensity: .6,
					roughness: .92
				})]
			}, idx)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
				ref: flameGroupRef,
				position: [
					0,
					.24,
					.16
				],
				children: [
					[
						-.14,
						.12,
						0,
						"#ff8e2b",
						.09,
						.28
					],
					[
						.02,
						.16,
						.02,
						"#ffb647",
						.11,
						.34
					],
					[
						.16,
						.11,
						-.02,
						"#ff771c",
						.08,
						.25
					],
					[
						-.04,
						.1,
						.05,
						"#ffe08a",
						.06,
						.2
					]
				].map(([fx, fy, fz, col, rad, h], idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						fx,
						fy,
						fz
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
						rad,
						h,
						8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
						color: col,
						transparent: true,
						opacity: .88
					})]
				}, idx))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
				ref: fireLightRef,
				position: [
					0,
					.55,
					.58
				],
				color: "#ff9d47",
				intensity: 2.1,
				distance: 6.5,
				decay: 2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					2.38,
					.04
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.45,
					1.55,
					.07
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#c99c42",
					metalness: .78,
					roughness: .28
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					2.38,
					.08
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [1.22, 1.32] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#b9c7ce",
					metalness: .94,
					roughness: .07
				})]
			}),
			[-.82, .82].map((cx, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: [
					cx,
					1.52,
					.24
				],
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.04,
						.07,
						.22,
						10
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#d4a64a",
						metalness: .88,
						roughness: .22
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							.17,
							0
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
							.018,
							.018,
							.14,
							8
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#f5ebd8",
							roughness: .5
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							.26,
							0
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
							.02,
							8,
							8
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", { color: "#ffd575" })]
					})
				]
			}, idx))
		]
	});
});
var ChesterfieldArmchair = import_react.memo(function ChesterfieldArmchair({ position, rotationY, velvetColor }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		rotation: [
			0,
			rotationY,
			0
		],
		children: [
			[
				[
					-.38,
					.07,
					-.34
				],
				[
					.38,
					.07,
					-.34
				],
				[
					-.38,
					.07,
					.34
				],
				[
					.38,
					.07,
					.34
				]
			].map((fp, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: fp,
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.075,
					10,
					10
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#3b2013",
					roughness: .45
				})]
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.22,
					0
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.98,
					.22,
					.9
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: velvetColor,
					roughness: .86
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.37,
					.06
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.74,
					.13,
					.72
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: velvetColor,
					roughness: .88
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.64,
					-.33
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.98,
					.64,
					.24
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: velvetColor,
					roughness: .86
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.94,
					-.33
				],
				rotation: [
					0,
					0,
					Math.PI / 2
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.12,
					.12,
					.98,
					12
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: velvetColor,
					roughness: .86
				})]
			}),
			[-.44, .44].map((ax, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: [
					ax,
					.48,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.18,
						.34,
						.88
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: velvetColor,
						roughness: .86
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.17,
						0
					],
					rotation: [
						Math.PI / 2,
						0,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.11,
						.11,
						.88,
						12
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: velvetColor,
						roughness: .86
					})]
				})]
			}, i))
		]
	});
});
function VictorianRoomScene({ isPlaying, mood }) {
	const quality = useUniverseStore((s) => s.environment.quality);
	const reducedMotion = useUniverseStore((s) => s.environment.reducedMotion);
	const profile = (0, import_react.useMemo)(() => getGraphicsProfile(quality, reducedMotion), [quality, reducedMotion]);
	const parquetTex = (0, import_react.useMemo)(() => createVictorianParquetTexture(), []);
	const damaskTex = (0, import_react.useMemo)(() => createVictorianDamaskTexture(), []);
	const wainscotTex = (0, import_react.useMemo)(() => createVictorianWainscotTexture(), []);
	const mahoganyTex = (0, import_react.useMemo)(() => createWoodTexture("#522618", "#30140b", 3), []);
	const persianRugTex = (0, import_react.useMemo)(() => getPersianCarpetByColor("#5e1621"), []);
	const paintingLandscapeTex = (0, import_react.useMemo)(() => createVictorianOilPaintingTexture("landscape"), []);
	const paintingStillTex = (0, import_react.useMemo)(() => createVictorianOilPaintingTexture("still_life"), []);
	const curtainLRef = (0, import_react.useRef)(null);
	const curtainRRef = (0, import_react.useRef)(null);
	const rainRef = (0, import_react.useRef)(null);
	const dustRef = (0, import_react.useRef)(null);
	const candleLightRef = (0, import_react.useRef)(null);
	const rainCount = (0, import_react.useMemo)(() => Math.max(60, Math.round(180 * profile.particleScale)), [profile.particleScale]);
	const dustCount = (0, import_react.useMemo)(() => Math.max(20, Math.round(55 * profile.particleScale)), [profile.particleScale]);
	const rainPositions = (0, import_react.useMemo)(() => {
		const arr = new Float32Array(rainCount * 3);
		for (let i = 0; i < rainCount; i++) {
			arr[i * 3] = (Math.random() > .5 ? 1 : -1) * (1.2 + Math.random() * 1.9);
			arr[i * 3 + 1] = .6 + Math.random() * 3.4;
			arr[i * 3 + 2] = -4.25 - Math.random() * .8;
		}
		return arr;
	}, [rainCount]);
	const dustPositions = (0, import_react.useMemo)(() => {
		const arr = new Float32Array(dustCount * 3);
		for (let i = 0; i < dustCount; i++) {
			arr[i * 3] = (Math.random() - .5) * 6.4;
			arr[i * 3 + 1] = .6 + Math.random() * 3;
			arr[i * 3 + 2] = (Math.random() - .5) * 5.2;
		}
		return arr;
	}, [dustCount]);
	useFrame(({ clock }, rawDelta) => {
		if (profile.systemReducedMotion) return;
		const dt = Math.min(.05, rawDelta);
		const t = clock.getElapsedTime();
		if (curtainLRef.current) curtainLRef.current.rotation.z = Math.sin(t * .7) * .015;
		if (curtainRRef.current) curtainRRef.current.rotation.z = Math.cos(t * .65) * .015;
		if (candleLightRef.current) candleLightRef.current.intensity = 1.05 + Math.sin(t * 6.5) * .1;
		if (rainRef.current && mood === "rainy") {
			const pos = rainRef.current.geometry.attributes.position;
			for (let i = 0; i < rainCount; i++) {
				let y = pos.getY(i) - dt * 4.4;
				if (y < .6) y = 4;
				pos.setY(i, y);
			}
			pos.needsUpdate = true;
		}
		if (dustRef.current) {
			const pos = dustRef.current.geometry.attributes.position;
			for (let i = 0; i < dustCount; i++) {
				let y = pos.getY(i) + dt * .05;
				if (y > 3.6) y = .6;
				pos.setY(i, y);
			}
			pos.needsUpdate = true;
		}
	});
	const skyColor = mood === "sunset" ? "#7a4b4e" : mood === "rainy" ? "#1c2638" : "#101526";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", {
			intensity: .34,
			color: mood === "sunset" ? "#ffd2a8" : "#e6d3b8"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
			mood === "sunset" ? "#cfa182" : "#707d94",
			"#261810",
			.48
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				3.5,
				6.2,
				4
			],
			intensity: mood === "sunset" ? 1.15 : .78,
			color: mood === "sunset" ? "#ffbe8a" : "#f7dfb8",
			castShadow: profile.shadowsEnabled,
			"shadow-mapSize": [profile.shadowMapSize, profile.shadowMapSize]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [10, 8.6] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				map: parquetTex,
				roughness: .44,
				metalness: .05
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.01,
				-.15
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				5.4,
				.018,
				3.8
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				map: persianRugTex,
				roughness: .92
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				0,
				0,
				-4.1
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						2.75,
						0
					],
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						10,
						2.9,
						.22
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: damaskTex,
						roughness: .85
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.65,
						.02
					],
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						10,
						1.3,
						.24
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: wainscotTex,
						roughness: .48
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						1.32,
						.14
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						10,
						.09,
						.08
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#3c2214",
						roughness: .45
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						4.14,
						.14
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						10,
						.18,
						.12
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#dfd3be",
						roughness: .75
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				-4.8,
				0,
				0
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						2.75,
						0
					],
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.22,
						2.9,
						8.6
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: damaskTex,
						roughness: .85
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.02,
						.65,
						0
					],
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.24,
						1.3,
						8.6
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: wainscotTex,
						roughness: .48
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.14,
						1.32,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.08,
						.09,
						8.6
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#3c2214",
						roughness: .45
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.14,
						4.14,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.12,
						.18,
						8.6
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#dfd3be",
						roughness: .75
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				4.8,
				0,
				0
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						2.75,
						0
					],
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.22,
						2.9,
						8.6
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: damaskTex,
						roughness: .85
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-.02,
						.65,
						0
					],
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.24,
						1.3,
						8.6
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: wainscotTex,
						roughness: .48
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-.14,
						1.32,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.08,
						.09,
						8.6
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#3c2214",
						roughness: .45
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-.14,
						4.14,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.12,
						.18,
						8.6
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#dfd3be",
						roughness: .75
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				4.28,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				10,
				.2,
				8.6
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#e3d7c3",
				roughness: .78
			})]
		}),
		[
			-2.4,
			0,
			2.4
		].map((bx, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				bx,
				4.15,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.24,
				.16,
				8.4
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#3a2013",
				roughness: .5
			})]
		}, i)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				0,
				3.35,
				-.35
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.45,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.025,
						.025,
						.9,
						10
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#c99c42",
						metalness: .9,
						roughness: .22
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.85,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.38,
						.46,
						.06,
						24
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#dfd3be",
						roughness: .72
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					.56,
					.032,
					10,
					32
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#d4a64a",
					metalness: .9,
					roughness: .2
				})] }),
				[
					0,
					1,
					2,
					3,
					4,
					5
				].map((i) => {
					const a = i / 6 * Math.PI * 2;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
						position: [
							Math.cos(a) * .56,
							.09,
							Math.sin(a) * .56
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
							.024,
							.028,
							.14,
							8
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#f5ebd8",
							roughness: .5
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								0,
								.09,
								0
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
								.024,
								8,
								8
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", { color: "#ffd885" })]
						})]
					}, i);
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
					position: [
						0,
						-.1,
						0
					],
					color: "#ffd58c",
					intensity: 2.4,
					distance: 11,
					decay: 2
				})
			]
		}),
		[-2.25, 2.25].map((wx, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				wx,
				2.38,
				-3.96
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						0,
						-.02
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [1.42, 2.42] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", { color: skyColor })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						0,
						.02
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.06,
						2.45,
						.06
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#381f13",
						roughness: .52
					})]
				}),
				[-.4, .4].map((my, mi) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						my,
						.02
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.44,
						.06,
						.06
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#381f13",
						roughness: .52
					})]
				}, mi)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						1.32,
						.14
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.82,
						.24,
						.16
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#5e1621",
						roughness: .86
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						1.2,
						.15
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.84,
						.035,
						.18
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#c99c42",
						metalness: .7,
						roughness: .3
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
					ref: idx === 0 ? curtainLRef : curtainRRef,
					children: [-.76, .76].map((cx, ci) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							cx,
							-.12,
							.12
						],
						castShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
							.14,
							.2,
							2.75,
							14
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#5e1621",
							roughness: .88
						})]
					}, ci))
				})
			]
		}, idx)),
		mood === "rainy" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("points", {
			ref: rainRef,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("bufferGeometry", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("bufferAttribute", {
				attach: "attributes-position",
				args: [rainPositions, 3]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointsMaterial", {
				color: "#9bb4d4",
				size: .045,
				transparent: true,
				opacity: .65
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				0,
				2.48,
				-3.96
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.64,
						1.24,
						.06
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#c99c42",
						metalness: .78,
						roughness: .28
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						0,
						.035
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [1.42, 1.04] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: paintingLandscapeTex,
						roughness: .52
					})]
				}),
				[-1.08, 1.08].map((sx, si) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
					position: [
						sx,
						.05,
						.08
					],
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
							.09,
							.22,
							.04
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#c99c42",
							metalness: .88,
							roughness: .22
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								0,
								.08,
								.1
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
								.015,
								.018,
								.12,
								8
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: "#f5ebd8",
								roughness: .5
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								0,
								.16,
								.1
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
								.018,
								8,
								8
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", { color: "#ffd57a" })]
						})
					]
				}, si)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
					position: [
						0,
						.2,
						.45
					],
					color: "#ffcf85",
					intensity: .95,
					distance: 5.2,
					decay: 2
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VictorianFireplace, {
			position: [
				-4.62,
				0,
				-.35
			],
			rotationY: Math.PI / 2,
			mahoganyTex,
			reducedMotion: profile.systemReducedMotion
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChesterfieldArmchair, {
			position: [
				-2.35,
				0,
				1.25
			],
			rotationY: Math.PI * .72,
			velvetColor: "#5e1621"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				4.35,
				0,
				-1.65
			],
			rotation: [
				0,
				-Math.PI / 2,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					1.38,
					0
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					2.15,
					2.75,
					.46
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: mahoganyTex,
					roughness: .46
				})]
			}), [
				.48,
				1.02,
				1.56,
				2.1
			].map((sy, sIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: [
					0,
					sy,
					.06
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						-.18,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.95,
						.04,
						.38
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#381d11",
						roughness: .5
					})]
				}), Array.from({ length: 11 }).map((_, bi) => {
					const colors = [
						"#5e1621",
						"#1b382c",
						"#1e2c4a",
						"#704d24",
						"#402619"
					];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							-.82 + bi * .16,
							.02,
							.02
						],
						rotation: [
							0,
							0,
							bi === 10 && sIdx % 2 === 0 ? -.16 : 0
						],
						castShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
							.1,
							.3 + (bi + sIdx) % 3 * .04,
							.24
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: colors[(bi + sIdx) % colors.length],
							roughness: .62
						})]
					}, bi);
				})]
			}, sIdx))]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				4.66,
				2.38,
				1.35
			],
			rotation: [
				0,
				-Math.PI / 2,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.28,
					.98,
					.06
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#c99c42",
					metalness: .78,
					roughness: .28
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					0,
					.035
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [1.1, .8] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: paintingStillTex,
					roughness: .52
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChesterfieldArmchair, {
			position: [
				2.35,
				0,
				.9
			],
			rotationY: -Math.PI * .68,
			velvetColor: "#1a4031"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				1.72,
				0,
				-.05
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.56,
						0
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.34,
						.32,
						.045,
						22
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: mahoganyTex,
						roughness: .35
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.28,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.045,
						.065,
						.54,
						12
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#3a2013",
						roughness: .45
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.04,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.2,
						.24,
						.06,
						14
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#3a2013",
						roughness: .48
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.06,
						.65,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.035,
						.06,
						.16,
						12
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#d4a64a",
						metalness: .88,
						roughness: .22
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.06,
						.77,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.015,
						.015,
						.1,
						8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#f5ebd8",
						roughness: .5
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.06,
						.835,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.018,
						8,
						8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", { color: "#ffd578" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
					ref: candleLightRef,
					position: [
						.06,
						.88,
						0
					],
					color: "#ffc970",
					intensity: 1.05,
					distance: 4.5,
					decay: 2
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VictorianGramophone3D, {
			isPlaying,
			position: [
				0,
				0,
				-.35
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("points", {
			ref: dustRef,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("bufferGeometry", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("bufferAttribute", {
				attach: "attributes-position",
				args: [dustPositions, 3]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointsMaterial", {
				color: "#f2dfb8",
				size: .028,
				transparent: true,
				opacity: .26
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
			enableDamping: true,
			dampingFactor: .055,
			minDistance: 2.2,
			maxDistance: 6.6,
			maxPolarAngle: Math.PI * .48,
			minPolarAngle: Math.PI * .18,
			minAzimuthAngle: -Math.PI * .48,
			maxAzimuthAngle: Math.PI * .48,
			target: [
				0,
				1.32,
				-.35
			]
		})
	] });
}
var MusicRoomWorld = () => {
	const audioVolume = useUniverseStore((s) => s.audio.volume);
	const audioMuted = useUniverseStore((s) => s.audio.muted);
	const activeTrackId = useUniverseStore((s) => s.audio.activeTrackId);
	const setAudioSettings = useUniverseStore((s) => s.setAudioSettings);
	const [playerSnap, setPlayerSnap] = (0, import_react.useState)(() => audioEngine.getSnapshot());
	const [tracks, setTracks] = (0, import_react.useState)(() => audioEngine.getAllTracks());
	const [mood, setMood] = (0, import_react.useState)("rainy");
	const [isMinimized, setIsMinimized] = (0, import_react.useState)(false);
	const [playlistOpen, setPlaylistOpen] = (0, import_react.useState)(false);
	const [coverFailedId, setCoverFailedId] = (0, import_react.useState)(null);
	const fileInputRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		return audioEngine.subscribe((snap) => {
			setPlayerSnap(snap);
		});
	}, []);
	(0, import_react.useEffect)(() => {
		audioEngine.setVolume(audioVolume);
		audioEngine.setMuted(audioMuted);
	}, [audioVolume, audioMuted]);
	(0, import_react.useEffect)(() => {
		if (playerSnap.currentTrackId && playerSnap.currentTrackId !== activeTrackId) setAudioSettings({ activeTrackId: playerSnap.currentTrackId });
	}, [
		playerSnap.currentTrackId,
		activeTrackId,
		setAudioSettings
	]);
	const activeTrack = tracks.find((t) => t.id === (playerSnap.currentTrackId || activeTrackId)) || tracks[0];
	const handleTogglePlay = (trackId) => {
		const id = trackId || activeTrack?.id;
		if (id) setAudioSettings({ activeTrackId: id });
		audioEngine.togglePlay(id);
	};
	const handleSelectMood = (m) => {
		setMood(m);
		const ambient = m === "rainy" ? "rain" : m === "midnight" ? "night" : "none";
		audioEngine.setAmbient(ambient);
		setAudioSettings({ ambientMode: ambient });
	};
	const handleFileUpload = (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const added = audioEngine.addCustomAudioFile(file);
		setTracks(audioEngine.getAllTracks());
		setAudioSettings({ activeTrackId: added.id });
		audioEngine.playTrack(added.id);
		e.target.value = "";
	};
	const progressMax = Math.max(playerSnap.duration, .01);
	const remainingTime = Math.max(0, playerSnap.duration - playerSnap.currentTime);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full h-full select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneCanvas, {
				cameraPosition: [
					.45,
					2.05,
					4.15
				],
				fov: 44,
				bgColor: "#120d0a",
				fogColor: "#140e0b",
				fogNear: 9,
				fogFar: 22,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VictorianRoomScene, {
					isPlaying: playerSnap.isPlaying,
					mood
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				ref: fileInputRef,
				type: "file",
				accept: ".mp3,.wav,.ogg,audio/*",
				onChange: handleFileUpload,
				className: "hidden"
			}),
			playerSnap.errorMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed top-16 inset-x-0 z-30 flex justify-center px-3 pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto flex items-center gap-2 rounded-xl bg-[#2a1216]/92 border border-[#c99c42]/50 px-3 py-1.5 text-[11px] text-[#efe4ce]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "w-3.5 h-3.5 text-[#d4a64a] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: playerSnap.errorMessage })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed bottom-2.5 inset-x-0 z-20 flex flex-col items-center px-3 pointer-events-none",
				children: [!isMinimized && playlistOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto mb-1.5 w-full max-w-md rounded-xl bg-[#160f0b]/90 border border-[#c99c42]/35 p-2.5 space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2 pb-1.5 border-b border-[#c99c42]/20",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-medium text-[#d4af63]",
								children: "فهرست صفحه‌های گرامافون"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => fileInputRef.current?.click(),
								className: "flex items-center gap-1 px-2 py-1 rounded-lg bg-[#281b14] border border-[#c99c42]/35 text-[10px] text-[#efe4ce] hover:border-[#d4af63] cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "w-3 h-3 text-[#d4af63]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "افزودن فایل صوتی" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "max-h-36 overflow-y-auto space-y-1",
							children: tracks.map((tr) => {
								const isSelected = activeTrack?.id === tr.id;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										setAudioSettings({ activeTrackId: tr.id });
										audioEngine.playTrack(tr.id);
									},
									className: `w-full flex items-center justify-between gap-2 px-2 py-1.5 rounded-lg text-right transition-colors cursor-pointer ${isSelected ? "bg-[#5e1621]/70 border border-[#c99c42]/50 text-[#f5ebd8]" : "hover:bg-white/5 text-[#e6d7bd]/85"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: tr.coverUrl,
											alt: tr.title,
											onError: (ev) => {
												ev.currentTarget.style.display = "none";
											},
											className: "w-6 h-6 rounded object-cover shrink-0 bg-[#231710]"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[11px] font-medium truncate",
												children: tr.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-[10px] opacity-70 truncate",
												children: tr.artist
											})]
										})]
									}), isSelected && playerSnap.isPlaying && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[9px] text-[#d4af63] shrink-0",
										children: "در حال پخش"
									})]
								}, tr.id);
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2 pt-1.5 border-t border-[#c99c42]/20 flex-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										const nextMuted = !audioMuted;
										setAudioSettings({ muted: nextMuted });
										audioEngine.setMuted(nextMuted);
									},
									"aria-label": audioMuted ? "وصل صدا" : "بی‌صدا",
									className: "w-7 h-7 flex items-center justify-center text-[#d4af63] cursor-pointer",
									children: audioMuted || audioVolume === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "w-3.5 h-3.5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: 0,
									max: 1,
									step: .05,
									value: audioMuted ? 0 : audioVolume,
									onChange: (e) => {
										const v = parseFloat(e.target.value);
										setAudioSettings({
											volume: v,
											muted: v === 0
										});
										audioEngine.setVolume(v);
										audioEngine.setMuted(v === 0);
									},
									className: "w-20 h-1 accent-[#d4af63] cursor-pointer",
									"aria-label": "تنظیم صدا"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1",
								children: [
									[
										"rainy",
										"بارانی",
										CloudRain
									],
									[
										"midnight",
										"نیمه‌شب",
										Moon
									],
									[
										"sunset",
										"شفق",
										Sunset
									]
								].map(([mId, label, Icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => handleSelectMood(mId),
									className: `flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] cursor-pointer ${mood === mId ? "bg-[#c99c42] text-[#160f0b] font-semibold" : "bg-[#261a13] text-[#e6d7bd]/80"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
								}, mId))
							})]
						})
					]
				}), isMinimized ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-[#160f0b]/82 border border-[#c99c42]/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => handleTogglePlay(),
						className: "w-8 h-8 rounded-full border border-[#c99c42]/65 text-[#d4af63] hover:bg-[#c99c42]/15 flex items-center justify-center shrink-0 cursor-pointer",
						"aria-label": playerSnap.isPlaying ? "توقف" : "پخش",
						children: playerSnap.isPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-3.5 h-3.5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setIsMinimized(false),
						className: "flex items-center gap-1.5 text-right max-w-[170px] sm:max-w-[240px] px-1 cursor-pointer",
						title: "باز کردن کنترل‌های گرامافون",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-medium text-[#efe4ce] truncate",
							children: activeTrack?.title ?? "گرامافون ویکتوریایی"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "w-3.5 h-3.5 text-[#d4af63] shrink-0" })]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto w-full max-w-xl rounded-xl bg-[#160f0b]/84 border border-[#c99c42]/35 px-3 py-2 space-y-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						dir: "ltr",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-[#e6d7bd]/80 tabular-nums w-9 text-center",
								children: formatTimeFa(playerSnap.currentTime)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								min: 0,
								max: progressMax,
								step: .1,
								value: Math.min(playerSnap.currentTime, progressMax),
								onChange: (e) => audioEngine.seek(parseFloat(e.target.value)),
								className: "flex-1 h-1 accent-[#d4af63] cursor-pointer",
								"aria-label": "پیشرفت آهنگ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-[#d4af63]/85 tabular-nums w-10 text-center",
								children: playerSnap.duration > 0 ? `-${formatTimeFa(remainingTime)}` : toPersianDigits("00:00")
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-8 h-8 rounded-lg overflow-hidden border border-[#c99c42]/40 bg-[#241812] shrink-0 flex items-center justify-center",
									children: activeTrack && coverFailedId !== activeTrack.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: activeTrack.coverUrl,
										alt: activeTrack.title,
										onError: () => setCoverFailedId(activeTrack.id),
										className: "w-full h-full object-cover"
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Disc3, { className: `w-4 h-4 text-[#d4af63] ${playerSnap.isPlaying ? "animate-spin" : ""}` })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-medium text-[#efe4ce] truncate leading-tight",
										children: activeTrack?.title ?? "آهنگی انتخاب نشده"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] text-[#d4af63]/80 truncate leading-tight",
										children: playerSnap.isLoading ? "در حال بارگذاری..." : activeTrack?.artist ?? ""
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-0.5 shrink-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => audioEngine.prevTrack(),
										className: "w-9 h-9 rounded-full text-[#efe4ce]/85 hover:text-[#d4af63] hover:bg-white/5 flex items-center justify-center cursor-pointer",
										"aria-label": "آهنگ قبلی",
										title: "آهنگ قبلی",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipForward, { className: "w-3.5 h-3.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => handleTogglePlay(),
										className: "w-10 h-10 rounded-full border border-[#c99c42]/70 bg-[#2a1c14]/70 text-[#d4af63] hover:bg-[#c99c42]/20 flex items-center justify-center cursor-pointer",
										"aria-label": playerSnap.isPlaying ? "توقف" : "پخش",
										children: playerSnap.isPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-4 h-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => audioEngine.nextTrack(true),
										className: "w-9 h-9 rounded-full text-[#efe4ce]/85 hover:text-[#d4af63] hover:bg-white/5 flex items-center justify-center cursor-pointer",
										"aria-label": "آهنگ بعدی",
										title: "آهنگ بعدی",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkipBack, { className: "w-3.5 h-3.5" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-0.5 shrink-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "hidden sm:flex items-center gap-1 ml-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												const nextMuted = !audioMuted;
												setAudioSettings({ muted: nextMuted });
												audioEngine.setMuted(nextMuted);
											},
											"aria-label": audioMuted ? "وصل صدا" : "بی‌صدا",
											className: "w-8 h-8 flex items-center justify-center text-[#d4af63]/90 hover:text-[#d4af63] cursor-pointer",
											children: audioMuted || audioVolume === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "w-3.5 h-3.5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "range",
											min: 0,
											max: 1,
											step: .05,
											value: audioMuted ? 0 : audioVolume,
											onChange: (e) => {
												const v = parseFloat(e.target.value);
												setAudioSettings({
													volume: v,
													muted: v === 0
												});
												audioEngine.setVolume(v);
												audioEngine.setMuted(v === 0);
											},
											className: "w-16 h-1 accent-[#d4af63] cursor-pointer",
											"aria-label": "تنظیم صدا"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setPlaylistOpen((v) => !v),
										className: `w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer ${playlistOpen ? "text-[#d4af63] bg-[#c99c42]/15" : "text-[#efe4ce]/80 hover:text-[#d4af63]"}`,
										"aria-label": "فهرست آهنگ‌ها و فضا",
										title: "فهرست آهنگ‌ها و حال‌وهوای اتاق",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ListMusic, { className: "w-4 h-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											setPlaylistOpen(false);
											setIsMinimized(true);
										},
										className: "w-9 h-9 rounded-lg text-[#efe4ce]/75 hover:text-[#d4af63] flex items-center justify-center cursor-pointer",
										"aria-label": "جمع کردن نوار پخش",
										title: "حالت مینیمال",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "w-4 h-4" })
									})
								]
							})
						]
					})]
				})]
			})
		]
	});
};
export { MusicRoomWorld };
