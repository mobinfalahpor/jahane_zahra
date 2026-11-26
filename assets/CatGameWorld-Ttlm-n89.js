import { a as __toESM } from "./rolldown-runtime-DQp2zzRu.js";
import { Lt as Vector3, Vt as require_react, c as useThree, et as MathUtils, l as require_jsx_runtime, r as OrbitControls, s as useFrame, t as Sparkles } from "./r3f-core-XgHUAlSk.js";
import { f as useUniverseStore, l as toPersianDigits, n as VolumeX, o as createLucideIcon, r as Volume2, s as audioEngine, u as SceneCanvas, w as getGraphicsProfile } from "./entry-Br_QEXnh.js";
import { a as Heart, i as CatActor3D, n as deriveCatEmotion, o as Camera, t as CAT_EMOTION_LABELS } from "./catHomeBridge-Ci5De-Zu.js";
import { t as Droplets } from "./droplets-B5qo1LiR.js";
import { t as Eye } from "./eye-hkO0mNOO.js";
import { t as Moon } from "./moon-Bz-WB2TQ.js";
import { t as Sparkles$1 } from "./sparkles-NkR5KE3G.js";
import { t as Sun } from "./sun-ByRizIWH.js";
import { t as Upload } from "./upload-D702qH12.js";
import { a as createWoodTexture, n as createPersianRugTexture, r as createPersianTileTexture, t as createPersianBolsterTexture } from "./proceduralTextures-CcJ_R3cZ.js";
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Bath = createLucideIcon("bath", [
	["path", {
		d: "M10 4 8 6",
		key: "1rru8s"
	}],
	["path", {
		d: "M17 19v2",
		key: "ts1sot"
	}],
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}],
	["path", {
		d: "M7 19v2",
		key: "12npes"
	}],
	["path", {
		d: "M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",
		key: "14ym8i"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Megaphone = createLucideIcon("megaphone", [
	["path", {
		d: "M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",
		key: "q8bfy3"
	}],
	["path", {
		d: "M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",
		key: "1853fq"
	}],
	["path", {
		d: "M8 6v8",
		key: "15ugcq"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var PenLine = createLucideIcon("pen-line", [["path", {
	d: "M13 21h8",
	key: "1jsn5i"
}], ["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var ShoppingBag = createLucideIcon("shopping-bag", [
	["path", {
		d: "M16 10a4 4 0 0 1-8 0",
		key: "1ltviw"
	}],
	["path", {
		d: "M3.103 6.034h17.794",
		key: "awc11p"
	}],
	["path", {
		d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
		key: "o988cm"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Utensils = createLucideIcon("utensils", [
	["path", {
		d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",
		key: "cjf0a3"
	}],
	["path", {
		d: "M7 2v20",
		key: "1473qp"
	}],
	["path", {
		d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",
		key: "j28e5"
	}]
]);
// src/worlds/CatGame/CatGameWorld.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var BREEDS = [
	{
		id: "honey",
		label: "نارنجی کلاسیک",
		color: "#f47b16"
	},
	{
		id: "calico",
		label: "نارنجی سه‌رنگ",
		color: "#d46b27"
	},
	{
		id: "snow",
		label: "برفی سفید",
		color: "#f6f0ea"
	},
	{
		id: "mist",
		label: "طوسی دودی",
		color: "#8c91a6"
	},
	{
		id: "midnight",
		label: "شب‌پرست",
		color: "#2a2b45"
	}
];
var ACCESSORIES = [
	{
		id: "none",
		label: "بدون اکسسوری"
	},
	{
		id: "rose_bow",
		label: "پاپیون رز"
	},
	{
		id: "gold_crown",
		label: "تاج طلایی"
	},
	{
		id: "lavender_scarf",
		label: "شالگردن"
	},
	{
		id: "round_glasses",
		label: "عینک گرد"
	},
	{
		id: "bell_collar",
		label: "زنگوله طلایی"
	}
];
var CAT_SHOP_ITEMS = [
	{
		id: "yarn_ball",
		label: "کلاف کاموا",
		desc: "توپ نرم برای بازی و دویدن",
		cost: 0
	},
	{
		id: "velvet_cushion",
		label: "تشک مخملی دنج",
		desc: "جای خواب گرم و نرم گربه",
		cost: 0
	},
	{
		id: "toy_mouse",
		label: "موش اسباب‌بازی",
		desc: "اسباب‌بازی شیطون کنار فرش",
		cost: 15
	},
	{
		id: "gold_bowl",
		label: "ظرف غذای طلایی",
		desc: "ظرف سلطنتی با جلای طلا",
		cost: 25
	},
	{
		id: "play_tower",
		label: "برج بازی چندطبقه",
		desc: "سکو و آویز بازی اختصاصی",
		cost: 40
	}
];
var _camGoal = new Vector3();
var _targetGoal = new Vector3();
var CatRoomScene = import_react.memo(function CatRoomScene({ activeAction, emotion, cameraPreset, callTrigger, ballTrigger, customGlbBuffer, onPetHead, onPetBody, onAutoState }) {
	const catName = useUniverseStore((s) => s.cat.name);
	const catEnergy = useUniverseStore((s) => s.cat.energy);
	const catBreed = useUniverseStore((s) => s.cat.breed);
	const customFurColor = useUniverseStore((s) => s.cat.customFurColor);
	const catAccessory = useUniverseStore((s) => s.cat.accessory);
	const catStage = useUniverseStore((s) => s.cat.stage);
	const unlockedItems = useUniverseStore((s) => s.cat.unlockedItems);
	const quality = useUniverseStore((s) => s.environment.quality);
	const reducedMotion = useUniverseStore((s) => s.environment.reducedMotion);
	const profile = (0, import_react.useMemo)(() => getGraphicsProfile(quality, reducedMotion), [quality, reducedMotion]);
	const woodTex = (0, import_react.useMemo)(() => createWoodTexture("#96633d", "#683f22", 4), []);
	const rugTex = (0, import_react.useMemo)(() => createPersianRugTexture(), []);
	const tileTex = (0, import_react.useMemo)(() => createPersianTileTexture(), []);
	const bolsterTex = (0, import_react.useMemo)(() => createPersianBolsterTexture(), []);
	const [catRot, setCatRot] = (0, import_react.useState)(0);
	const [autoAnim, setAutoAnim] = (0, import_react.useState)("Idle");
	const [lookTarget, setLookTarget] = (0, import_react.useState)(null);
	const [lookAtUser, setLookAtUser] = (0, import_react.useState)(true);
	const [earPerked, setEarPerked] = (0, import_react.useState)(false);
	const controlsRef = (0, import_react.useRef)(null);
	const { camera } = useThree();
	const isManualCamRef = (0, import_react.useRef)(false);
	const catWrapperRef = (0, import_react.useRef)(null);
	const shadowRef = (0, import_react.useRef)(null);
	const petSparklesRef = (0, import_react.useRef)(null);
	const catRotRef = (0, import_react.useRef)(0);
	const lastAutoAnimRef = (0, import_react.useRef)("Idle");
	const posVec = (0, import_react.useRef)(new Vector3(0, 0, .25));
	const targetVec = (0, import_react.useRef)(new Vector3(0, 0, .25));
	const ballPos = (0, import_react.useRef)(new Vector3(1.5, .22, 1.1));
	const ballVel = (0, import_react.useRef)(new Vector3(0, 0, 0));
	const ballRef = (0, import_react.useRef)(null);
	const mouseRef = (0, import_react.useRef)(null);
	const pomPomRef = (0, import_react.useRef)(null);
	const bubblesRef = (0, import_react.useRef)(null);
	const wanderTimer = (0, import_react.useRef)(5.5);
	const idleChoiceRef = (0, import_react.useRef)("Idle");
	const chaseBallRef = (0, import_react.useRef)(false);
	const comeToUserRef = (0, import_react.useRef)(false);
	const hasYarn = unlockedItems.includes("yarn_ball");
	const hasCushion = unlockedItems.includes("velvet_cushion");
	const hasMouse = unlockedItems.includes("toy_mouse");
	const hasGoldBowl = unlockedItems.includes("gold_bowl");
	const hasPlayTower = unlockedItems.includes("play_tower");
	const handleFootstep = (0, import_react.useCallback)(() => {
		audioEngine.playSfx("step");
	}, []);
	(0, import_react.useEffect)(() => {
		isManualCamRef.current = false;
	}, [cameraPreset]);
	(0, import_react.useEffect)(() => {
		if (ballTrigger === 0) return;
		const angle = Math.random() * Math.PI * 2;
		ballPos.current.set(Math.cos(angle) * 2, .65, Math.sin(angle) * 2);
		ballVel.current.set(-Math.cos(angle) * 1.5, 2.4, -Math.sin(angle) * 1.5);
		targetVec.current.set(Math.cos(angle) * 1.3, 0, Math.sin(angle) * 1.3);
		chaseBallRef.current = true;
		comeToUserRef.current = false;
		setLookAtUser(false);
		setLookTarget([
			ballPos.current.x,
			.25,
			ballPos.current.z
		]);
		audioEngine.playSfx("toy");
	}, [ballTrigger]);
	(0, import_react.useEffect)(() => {
		if (callTrigger === 0) return;
		chaseBallRef.current = false;
		comeToUserRef.current = true;
		setEarPerked(true);
		setLookAtUser(true);
		setLookTarget(null);
		targetVec.current.set(0, 0, 1.45);
		const id = window.setTimeout(() => setEarPerked(false), 2400);
		return () => window.clearTimeout(id);
	}, [callTrigger]);
	(0, import_react.useEffect)(() => {
		if (!activeAction) return;
		chaseBallRef.current = activeAction === "Play";
		comeToUserRef.current = false;
		if (activeAction === "Eat") {
			targetVec.current.set(-1.42, 0, .88);
			setLookAtUser(false);
			setLookTarget([
				-1.7,
				.14,
				.9
			]);
		} else if (activeAction === "Drink") {
			targetVec.current.set(-1.02, 0, 1.06);
			setLookAtUser(false);
			setLookTarget([
				-1.14,
				.14,
				1.08
			]);
		} else if (activeAction === "Sleep") {
			targetVec.current.set(1.85, .08, -1.25);
			setLookAtUser(false);
			setLookTarget(null);
		} else if (activeAction === "Bath") {
			targetVec.current.set(0, 0, .25);
			setLookAtUser(true);
		} else if (activeAction === "Happy" || activeAction === "Yawn" || activeAction === "Stretch") {
			setLookAtUser(true);
			setLookTarget(null);
		}
	}, [activeAction]);
	useFrame(({ clock }, delta) => {
		const dt = Math.min(delta, .05);
		const t = clock.getElapsedTime();
		if (controlsRef.current && !isManualCamRef.current) {
			const cx = posVec.current.x;
			const cy = posVec.current.y;
			const cz = posVec.current.z;
			const curRot = catRotRef.current;
			if (cameraPreset === "closeup") {
				const faceOffsetX = Math.sin(curRot) * 1.12;
				const faceOffsetZ = Math.cos(curRot) * 1.12;
				_camGoal.set(cx + faceOffsetX, cy + .68, cz + faceOffsetZ);
				_targetGoal.set(cx + Math.sin(curRot) * .22, cy + .56, cz + Math.cos(curRot) * .22);
			} else if (cameraPreset === "play") {
				_camGoal.set(0, 1.65, 4.4);
				_targetGoal.set(cx * .5, .45, cz * .5);
			} else {
				_camGoal.set(0, 2.45, 5.3);
				_targetGoal.set(0, .58, 0);
			}
			camera.position.lerp(_camGoal, Math.min(1, dt * 4.2));
			controlsRef.current.target.lerp(_targetGoal, Math.min(1, dt * 5));
			controlsRef.current.update();
		}
		if (ballRef.current) {
			ballVel.current.y -= 9.5 * dt;
			ballPos.current.addScaledVector(ballVel.current, dt);
			if (ballPos.current.y < .22) {
				ballPos.current.y = .22;
				ballVel.current.y = Math.abs(ballVel.current.y) > .4 ? -ballVel.current.y * .52 : 0;
				ballVel.current.x *= .82;
				ballVel.current.z *= .82;
			}
			ballPos.current.x = MathUtils.clamp(ballPos.current.x, -2.5, 2.5);
			ballPos.current.z = MathUtils.clamp(ballPos.current.z, -2.2, 2.2);
			ballRef.current.position.copy(ballPos.current);
			ballRef.current.rotation.x += ballVel.current.z * dt * 2;
			ballRef.current.rotation.z -= ballVel.current.x * dt * 2;
		}
		if (!profile.systemReducedMotion) {
			if (mouseRef.current) mouseRef.current.rotation.y = Math.sin(t * 2.3) * .28 + .4;
			if (pomPomRef.current) pomPomRef.current.position.x = Math.sin(t * 2.5) * .09;
		}
		if (!activeAction) {
			wanderTimer.current -= dt;
			if (wanderTimer.current <= 0) {
				wanderTimer.current = 5.5 + Math.random() * 5;
				chaseBallRef.current = false;
				comeToUserRef.current = false;
				const roll = Math.random();
				if (catEnergy < 34) {
					targetVec.current.set(1.85, .08, -1.25);
					idleChoiceRef.current = "Sleep";
					setLookAtUser(false);
					onAutoState(`${catName} خوابش گرفته و روی تشک جمع شده است`, "Sleep");
				} else if (roll < .22) {
					targetVec.current.set((Math.random() - .5) * .9, 0, 1.35);
					idleChoiceRef.current = "Sit";
					setLookAtUser(true);
					onAutoState(`${catName} به سمتت آمد و با کنجکاوی نگاهت می‌کند`, "Sit");
				} else if (roll < .4) {
					targetVec.current.set((Math.random() - .5) * 2.6, 0, (Math.random() - .5) * 2.1);
					idleChoiceRef.current = "LickPaw";
					setLookAtUser(false);
					onAutoState(`${catName} نشسته و پنجه‌هایش را لیس می‌زند`, "LickPaw");
				} else if (roll < .56) {
					idleChoiceRef.current = "Groom";
					setLookAtUser(false);
					onAutoState(`${catName} مشغول تمیز کردن خزهایش است`, "Groom");
				} else if (roll < .72) {
					idleChoiceRef.current = "Stretch";
					setLookAtUser(true);
					onAutoState(`${catName} یک کش‌وقوس حسابی می‌آید`, "Stretch");
				} else if (roll < .86) {
					idleChoiceRef.current = "Yawn";
					audioEngine.playSfx("yawn");
					setLookAtUser(true);
					onAutoState(`${catName} خمیازه نرمی می‌کشد`, "Yawn");
				} else {
					targetVec.current.set((Math.random() - .5) * 2.8, 0, -.6 + Math.random() * 1.8);
					idleChoiceRef.current = "Sit";
					setLookAtUser(true);
					onAutoState(`${catName} در اتاق قدم می‌زند`, "Sit");
				}
			}
		}
		const dx = targetVec.current.x - posVec.current.x;
		const dz = targetVec.current.z - posVec.current.z;
		const dist = Math.hypot(dx, dz);
		let nextAnim;
		if (dist > .14) {
			const isRunning = chaseBallRef.current || comeToUserRef.current || dist > 2.2;
			const speed = isRunning ? 2.45 : 1.25;
			posVec.current.x += dx / dist * speed * dt;
			posVec.current.z += dz / dist * speed * dt;
			posVec.current.y = MathUtils.lerp(posVec.current.y, targetVec.current.y, dt * 5);
			const nextRot = Math.atan2(dx, dz);
			if (Math.abs(nextRot - catRotRef.current) > .02) {
				catRotRef.current = nextRot;
				setCatRot(nextRot);
			}
			nextAnim = isRunning ? "Run" : "Walk";
		} else {
			posVec.current.y = MathUtils.lerp(posVec.current.y, targetVec.current.y, dt * 5);
			if (comeToUserRef.current) {
				const nextRot = Math.atan2(camera.position.x - posVec.current.x, camera.position.z - posVec.current.z);
				if (Math.abs(nextRot - catRotRef.current) > .02) {
					catRotRef.current = nextRot;
					setCatRot(nextRot);
				}
			}
			nextAnim = activeAction ?? (catEnergy < 28 ? "Sleep" : idleChoiceRef.current);
		}
		if (nextAnim !== lastAutoAnimRef.current) {
			lastAutoAnimRef.current = nextAnim;
			setAutoAnim(nextAnim);
		}
		if (catWrapperRef.current) catWrapperRef.current.position.copy(posVec.current);
		if (shadowRef.current) shadowRef.current.position.set(posVec.current.x, .018, posVec.current.z);
		if (petSparklesRef.current) petSparklesRef.current.position.set(posVec.current.x, 0, posVec.current.z);
		if (bubblesRef.current && activeAction === "Bath") {
			bubblesRef.current.position.copy(posVec.current);
			if (!profile.systemReducedMotion) {
				const children = bubblesRef.current.children;
				for (let idx = 0; idx < children.length; idx++) {
					const b = children[idx];
					b.position.y = .3 + (t * .9 + idx * .35) % 1.8;
					b.position.x = Math.sin(t * 2 + idx) * .45;
				}
			}
		}
	});
	const currentAnim = autoAnim === "Walk" || autoAnim === "Run" ? autoAnim : activeAction || autoAnim;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", {
			intensity: .38,
			color: "#fff0d6"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
			"#fff2db",
			"#59311e",
			.68
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				3.6,
				7.2,
				5.2
			],
			intensity: 1.18,
			color: "#ffebd0",
			castShadow: profile.shadowsEnabled,
			"shadow-mapSize": [profile.shadowMapSize, profile.shadowMapSize]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				-2.5,
				2.2,
				-2.4
			],
			color: "#ffb75e",
			intensity: .95,
			distance: 10
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				2.2,
				2.5,
				1.8
			],
			color: "#ffe0ba",
			intensity: .7,
			distance: 10
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [14, 12] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				map: woodTex,
				roughness: .58
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				0,
				.014,
				.15
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [5.2, 3.45] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: rugTex,
					roughness: .94
				})]
			}), [-2.65, 2.65].map((fx, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				position: [
					fx,
					-.001,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [.14, 3.38] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#f2e4cb",
					roughness: .95
				})]
			}, idx))]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			ref: shadowRef,
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				0,
				.018,
				.25
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [.42, 24] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: "#1a0d12",
				transparent: true,
				opacity: .34,
				depthWrite: false
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				2.5,
				-3.5
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				13.2,
				5.2,
				.22
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#efe0c9",
				roughness: .88
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				-6.4,
				2.5,
				.5
			],
			rotation: [
				0,
				Math.PI / 2,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				10,
				5.2,
				.2
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#e8d6bc",
				roughness: .88
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				6.4,
				2.5,
				.5
			],
			rotation: [
				0,
				-Math.PI / 2,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				10,
				5.2,
				.2
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#e8d6bc",
				roughness: .88
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.58,
				-3.37
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				12.8,
				1.16,
				.05
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				map: tileTex,
				roughness: .42
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.18,
				-3.35
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				12.8,
				.07,
				.08
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#7b4d2b",
				roughness: .55
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				1.13,
				-3.34
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				12.8,
				.025,
				.085
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#d4a84f",
				metalness: .65,
				roughness: .28
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				0,
				2.55,
				-3.36
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						0,
						-.02
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						2.52,
						1.75,
						.06
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#6e4324",
						roughness: .58
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.88,
						-.02
					],
					rotation: [
						Math.PI / 2,
						0,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						1.26,
						1.26,
						.06,
						24,
						1,
						false,
						0,
						Math.PI
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#6e4324",
						roughness: .58
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						0,
						.015
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [2.28, 1.56] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#ffdf9e",
						emissive: "#ffd180",
						emissiveIntensity: .42,
						roughness: .2
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-.76,
						0,
						.02
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [.56, 1.5] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#2a9d98",
						emissive: "#258783",
						emissiveIntensity: .32,
						roughness: .22
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.76,
						0,
						.02
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [.56, 1.5] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#2a9d98",
						emissive: "#258783",
						emissiveIntensity: .32,
						roughness: .22
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.86,
						.018
					],
					rotation: [
						0,
						0,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [
						1.12,
						24,
						0,
						Math.PI
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#e09a3e",
						emissive: "#d4882e",
						emissiveIntensity: .35,
						roughness: .2
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.86,
						.024
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [
						.55,
						20,
						0,
						Math.PI
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#a82438",
						emissive: "#8f1e30",
						emissiveIntensity: .35,
						roughness: .2
					})]
				}),
				[
					-.46,
					0,
					.46
				].map((mx, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						mx,
						.16,
						.035
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.045,
						1.9,
						.04
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#5c361c",
						roughness: .6
					})]
				}, idx)),
				[
					-.36,
					.22,
					.78
				].map((my, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						my,
						.035
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						2.32,
						.045,
						.04
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#5c361c",
						roughness: .6
					})]
				}, idx))
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				-2.65,
				2.02,
				-3.35
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.92,
					1.05,
					.05
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#1d355e",
					roughness: .6
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.52,
						0
					],
					rotation: [
						Math.PI / 2,
						0,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.46,
						.46,
						.05,
						20,
						1,
						false,
						0,
						Math.PI
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#1d355e",
						roughness: .6
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						-.52,
						.08
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1,
						.07,
						.22
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#7b4d2b",
						roughness: .5
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						-.3,
						.1
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.11,
						.14,
						.32,
						6
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#ffca73",
						emissive: "#ffb240",
						emissiveIntensity: .85,
						roughness: .25
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						-.09,
						.1
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
						.14,
						.14,
						6
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#d4a84f",
						metalness: .82,
						roughness: .22
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				2.65,
				2.02,
				-3.35
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.92,
					1.05,
					.05
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#1d355e",
					roughness: .6
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.52,
						0
					],
					rotation: [
						Math.PI / 2,
						0,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.46,
						.46,
						.05,
						20,
						1,
						false,
						0,
						Math.PI
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#1d355e",
						roughness: .6
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						-.52,
						.08
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1,
						.07,
						.22
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#7b4d2b",
						roughness: .5
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						-.32,
						.1
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.07,
						.12,
						.34,
						16
					] }), profile.enablePhysicalSheen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
						color: "#278c8c",
						roughness: .18,
						clearcoat: .8
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#278c8c",
						roughness: .2,
						metalness: .1
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						-.11,
						.1
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.085,
						.06,
						.1,
						16
					] }), profile.enablePhysicalSheen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
						color: "#278c8c",
						roughness: .18,
						clearcoat: .8
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#278c8c",
						roughness: .2,
						metalness: .1
					})]
				})
			]
		}),
		[-1.08, 1.08].map((bx, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				bx,
				.32,
				-2.55
			],
			rotation: [
				-.18,
				0,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.96,
					.58,
					.34
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: bolsterTex,
					roughness: .86
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.29,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.98,
					.05,
					.36
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#d4a84f",
					roughness: .65
				})]
			})]
		}, idx)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				2.65,
				0,
				1.45
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.22,
						0
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.42,
						.42,
						.05,
						8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#784a28",
						roughness: .5
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.11,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.32,
						.36,
						.2,
						8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#623a1e",
						roughness: .58
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.255,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.28,
						.26,
						.02,
						20
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#d6b05c",
						metalness: .85,
						roughness: .22
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-.08,
						.34,
						-.04
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.085,
						14,
						12
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#f5ead7",
						roughness: .2
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.1,
						.3,
						.06
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.036,
						.028,
						.07,
						12
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#9e2432",
						roughness: .2,
						transparent: true,
						opacity: .85
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				1.85,
				0,
				-1.25
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.08,
					0
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.72,
					.78,
					.16,
					24
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: hasCushion ? "#9e2432" : "#b89a84",
					roughness: .85
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.14,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					.62,
					.12,
					12,
					24
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: hasCushion ? "#d4a84f" : "#8c6f5a",
					roughness: .82
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				-1.7,
				0,
				.9
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.07,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.25,
						.29,
						.14,
						18
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: hasGoldBowl ? "#D6B875" : "#c96f3b",
						roughness: hasGoldBowl ? .2 : .45,
						metalness: hasGoldBowl ? .8 : .35
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.12,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.19,
						.19,
						.04,
						16
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#9e6442",
						roughness: .8
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.56,
						.07,
						.18
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.22,
						.26,
						.14,
						18
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#2b8685",
						roughness: .3
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.56,
						.12,
						.18
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.18,
						.18,
						.03,
						16
					] }), profile.enablePhysicalSheen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
						color: "#8ecbe0",
						roughness: .1,
						clearcoat: 1
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#8ecbe0",
						roughness: .14,
						metalness: .15
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				-2.2,
				0,
				-1.8
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.06,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.88,
						.12,
						.88
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#f2e4cb",
						roughness: .85
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.65,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.11,
						.11,
						1.15,
						14
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#c9a57b",
						roughness: .95
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						1.25,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.38,
						.38,
						.08,
						18
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#9e2432",
						roughness: .85
					})]
				}),
				hasPlayTower && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							.42,
							1.55,
							0
						],
						castShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
							.07,
							.07,
							.65,
							10
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#c9a57b",
							roughness: .95
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							.42,
							1.9,
							0
						],
						castShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
							.32,
							.32,
							.07,
							16
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#2b8685",
							roughness: .85
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						ref: pomPomRef,
						position: [
							.58,
							1.62,
							0
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
							.08,
							12,
							12
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#d4a84f",
							roughness: .8
						})]
					})
				] })
			]
		}),
		hasYarn && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			ref: ballRef,
			position: [
				1.5,
				.22,
				1.1
			],
			castShadow: true,
			onClick: (e) => {
				e.stopPropagation();
				const a = Math.random() * Math.PI * 2;
				ballVel.current.set(Math.cos(a) * 2.5, 2.8, Math.sin(a) * 2.5);
				targetVec.current.set(Math.cos(a) * 1.4, 0, Math.sin(a) * 1.4);
				chaseBallRef.current = true;
				audioEngine.playSfx("toy");
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.21,
				18,
				18
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#e0744a",
				roughness: .88
			})]
		}),
		hasMouse && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			ref: mouseRef,
			position: [
				-.75,
				.09,
				1.35
			],
			onClick: (e) => {
				e.stopPropagation();
				audioEngine.playSfx("toy");
				chaseBallRef.current = true;
				setLookAtUser(false);
				setLookTarget([
					-.75,
					.1,
					1.35
				]);
				targetVec.current.set(-.55, 0, 1.15);
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					scale: [
						1.3,
						.75,
						.8
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.13,
						14,
						14
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#a6a9bd",
						roughness: .85
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.09,
						.07,
						.06
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.04,
						10,
						10
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#f2a2b4",
						roughness: .8
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.09,
						.07,
						-.06
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.04,
						10,
						10
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#f2a2b4",
						roughness: .8
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-.2,
						.02,
						0
					],
					rotation: [
						0,
						0,
						.3
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.012,
						.015,
						.22,
						8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#f2a2b4",
						roughness: .8
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
			ref: catWrapperRef,
			position: [
				0,
				0,
				.25
			],
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatActor3D, {
				breed: catBreed,
				customFurColor,
				accessory: catAccessory,
				stage: catStage,
				animation: currentAnim,
				emotion,
				position: [
					0,
					0,
					0
				],
				rotationY: catRot,
				lookAtUser,
				lookTarget,
				isPetting: activeAction === "Happy",
				earPerked,
				customGlbBuffer,
				onHeadClick: onPetHead,
				onBodyClick: onPetBody,
				onFootstep: handleFootstep
			})
		}),
		activeAction === "Bath" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
			ref: bubblesRef,
			position: [
				posVec.current.x,
				posVec.current.y,
				posVec.current.z
			],
			children: [
				0,
				1,
				2,
				3,
				4,
				5,
				6
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					(i - 3) * .2,
					.5,
					(i % 3 - 1) * .25
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.08 + i % 3 * .03,
					12,
					12
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#ffffff",
					transparent: true,
					opacity: .55,
					roughness: .08
				})]
			}, i))
		}),
		(activeAction === "Happy" || activeAction === "Stretch") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
			ref: petSparklesRef,
			position: [
				posVec.current.x,
				0,
				posVec.current.z
			],
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
				count: Math.max(8, Math.round(24 * profile.particleScale)),
				position: [
					0,
					.9,
					0
				],
				scale: 1.4,
				size: 4,
				speed: profile.systemReducedMotion ? 0 : 1,
				color: "#D9A9C5"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
			ref: controlsRef,
			enableDamping: true,
			dampingFactor: .05,
			minDistance: 1.05,
			maxDistance: 9,
			maxPolarAngle: Math.PI * .48,
			target: [
				0,
				.65,
				0
			],
			onStart: () => {
				isManualCamRef.current = true;
			}
		})
	] });
});
var CatGameWorld = () => {
	const cat = useUniverseStore((s) => s.cat);
	const audio = useUniverseStore((s) => s.audio);
	const starsCurrency = useUniverseStore((s) => s.starsCurrency);
	const updateCatProfile = useUniverseStore((s) => s.updateCatProfile);
	const interactWithCat = useUniverseStore((s) => s.interactWithCat);
	const unlockCatItem = useUniverseStore((s) => s.unlockCatItem);
	const tickCatNeeds = useUniverseStore((s) => s.tickCatNeeds);
	const setAudioSettings = useUniverseStore((s) => s.setAudioSettings);
	const [activeAction, setActiveAction] = (0, import_react.useState)(null);
	const [cameraPreset, setCameraPreset] = (0, import_react.useState)("room");
	const [ballTrigger, setBallTrigger] = (0, import_react.useState)(0);
	const [callTrigger, setCallTrigger] = (0, import_react.useState)(0);
	const [tab, setTab] = (0, import_react.useState)("care");
	const [dockOpen, setDockOpen] = (0, import_react.useState)(true);
	const [editingName, setEditingName] = (0, import_react.useState)(false);
	const [nameInput, setNameInput] = (0, import_react.useState)(cat.name);
	const [shopNotice, setShopNotice] = (0, import_react.useState)(null);
	const [liveStatus, setLiveStatus] = (0, import_react.useState)(`${cat.name} با چشم‌های براقش کنارت نشسته است`);
	const [emotionOverride, setEmotionOverride] = (0, import_react.useState)(null);
	const [customGlbBuffer, setCustomGlbBuffer] = (0, import_react.useState)();
	const glbInputRef = (0, import_react.useRef)(null);
	const actionTimerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		tickCatNeeds();
		const id = window.setInterval(tickCatNeeds, 15e3);
		return () => window.clearInterval(id);
	}, [tickCatNeeds]);
	(0, import_react.useEffect)(() => {
		audioEngine.setMuted(audio.muted);
	}, [audio.muted]);
	const currentEmotion = emotionOverride || deriveCatEmotion(cat, activeAction);
	const scheduleActionClear = (ms = 3400) => {
		if (actionTimerRef.current) window.clearTimeout(actionTimerRef.current);
		actionTimerRef.current = window.setTimeout(() => {
			setActiveAction(null);
			setEmotionOverride(null);
		}, ms);
	};
	const triggerCare = (care, anim, customText, forcedEmotion) => {
		interactWithCat(care);
		setActiveAction(anim);
		if (forcedEmotion) setEmotionOverride(forcedEmotion);
		if (care === "play") {
			setBallTrigger((n) => n + 1);
			audioEngine.playSfx("meow");
			setLiveStatus(customText || `${cat.name} با ذوق دنبال توپ می‌دود!`);
		} else if (care === "pet") {
			audioEngine.playSfx("purr");
			setLiveStatus(customText || `${cat.name} چشم‌هایش را نیمه‌بسته کرده و خرخر می‌کند`);
		} else if (care === "call") {
			setCallTrigger((n) => n + 1);
			audioEngine.playSfx("meow");
			setLiveStatus(customText || `${cat.name} گوش‌هایش را تیز کرد و به طرفت دوید!`);
		} else if (care === "bath" || care === "drink") {
			audioEngine.playSfx("water");
			setLiveStatus(customText || (care === "bath" ? `${cat.name} در حال تمیز شدن است` : `${cat.name} آب گوارا می‌نوشد`));
		} else if (care === "yawn") {
			audioEngine.playSfx("yawn");
			setLiveStatus(customText || `${cat.name} خمیازه نرم و دوست‌داشتنی می‌کشد`);
		} else {
			audioEngine.playSfx("sparkle");
			setLiveStatus(customText || `${cat.name} با حس خوب مشغول است`);
		}
		scheduleActionClear(care === "sleep" ? 4500 : 3400);
	};
	const handleBuyItem = (item) => {
		if (cat.unlockedItems.includes(item.id)) {
			setShopNotice(`«${item.label}» همین الان در اتاق آماده است.`);
			return;
		}
		if (unlockCatItem(item.id, item.cost)) {
			audioEngine.playSfx("sparkle");
			setShopNotice(`«${item.label}» خریداری و به اتاق اضافه شد!`);
		} else setShopNotice(`برای خرید «${item.label}» به ${toPersianDigits(item.cost)} ستاره نیاز داری.`);
	};
	const stageLabel = cat.stage === "kitten" ? "بچه‌گربه" : cat.stage === "young" ? "گربه جوان" : "گربه بالغ";
	const handleGlbUpload = async (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		const buf = await file.arrayBuffer();
		setCustomGlbBuffer(buf);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneCanvas, {
				cameraPosition: [
					0,
					2.45,
					5.3
				],
				fov: 44,
				bgColor: "#2a1d24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatRoomScene, {
					activeAction,
					emotion: currentEmotion,
					cameraPreset,
					callTrigger,
					ballTrigger,
					customGlbBuffer,
					onPetHead: () => triggerCare("pet", "Happy", `${cat.name} سرش را به دستت می‌ساید و آرام خرخر می‌کند`, "affectionate"),
					onPetBody: () => triggerCare("stretch", "Stretch", `${cat.name} از نوازش لذت می‌برد و کش‌وقوس می‌آید`, "happy"),
					onAutoState: (status) => setLiveStatus(status)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed top-16 sm:top-20 right-3 sm:right-5 z-20 w-56 sm:w-64 rounded-2xl bg-[#17172F]/92 border border-[#D9A9C5]/35 p-3 shadow-xl space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center justify-between gap-2",
						children: editingName ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit: (e) => {
								e.preventDefault();
								if (nameInput.trim()) updateCatProfile({ name: nameInput.trim() });
								setEditingName(false);
							},
							className: "flex items-center gap-1 w-full",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								value: nameInput,
								onChange: (e) => setNameInput(e.target.value),
								className: "w-full px-2 py-1 rounded-lg bg-[#25254a] text-xs text-[#F1DCCB] outline-none border border-[#D6B875]",
								autoFocus: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "text-xs text-[#D6B875] px-1.5 cursor-pointer",
								children: "ثبت"
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-bold text-sm text-[#F1DCCB] truncate",
								children: cat.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[11px] text-[#D9A9C5] truncate",
								children: [
									stageLabel,
									" · ",
									CAT_EMOTION_LABELS[currentEmotion]
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1 shrink-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									const nextMuted = !audio.muted;
									setAudioSettings({ muted: nextMuted });
									audioEngine.setMuted(nextMuted);
								},
								"aria-label": audio.muted ? "روشن کردن صدای گربه" : "بی‌صدا کردن گربه",
								title: audio.muted ? "روشن کردن صدا" : "بی‌صدا",
								className: "p-1.5 rounded-lg bg-[#232347] text-[#A6BBAA] hover:text-[#F1DCCB] cursor-pointer",
								children: audio.muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "w-3.5 h-3.5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setNameInput(cat.name);
									setEditingName(true);
								},
								"aria-label": "تغییر نام گربه",
								className: "p-1.5 rounded-lg bg-[#232347] text-[#D6B875] cursor-pointer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "w-3.5 h-3.5" })
							})]
						})] })
					}),
					[
						[
							"سیری",
							cat.hunger,
							"#D6B875"
						],
						[
							"شادی",
							cat.happiness,
							"#D9A9C5"
						],
						[
							"انرژی",
							cat.energy,
							"#7771A8"
						],
						[
							"تمیزی",
							cat.cleanliness,
							"#A6BBAA"
						],
						[
							"محبت",
							cat.affection,
							"#eb8d3b"
						]
					].map(([label, val, col]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-[11px] text-[#F1DCCB]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular-nums",
								children: [toPersianDigits(Math.round(val)), "٪"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-1.5 w-full rounded-full bg-[#26264a] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full rounded-full transition-all duration-300",
								style: {
									width: `${val}%`,
									backgroundColor: col
								}
							})
						})]
					}, label)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] text-[#F1DCCB]/85 border-t border-[#7771A8]/25 pt-1.5 leading-relaxed",
						children: liveStatus
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed top-16 sm:top-20 left-3 sm:left-5 z-20 flex flex-col gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setCameraPreset("closeup"),
					className: `flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs border shadow-lg cursor-pointer ${cameraPreset === "closeup" ? "bg-[#D6B875] border-[#D6B875] text-[#17172F] font-bold" : "bg-[#17172F]/90 border-[#7771A8]/45 text-[#F1DCCB]"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "نمای نزدیک چهره" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setCameraPreset("room"),
					className: `flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs border shadow-lg cursor-pointer ${cameraPreset === "room" ? "bg-[#7771A8] border-[#7771A8] text-[#F1DCCB] font-semibold" : "bg-[#17172F]/90 border-[#7771A8]/45 text-[#F1DCCB]"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "نمای اتاق" })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed bottom-3 inset-x-0 z-20 flex flex-col items-center px-3 pointer-events-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setDockOpen((v) => !v),
					className: "pointer-events-auto mb-1.5 px-3.5 py-1 rounded-t-xl bg-[#17172F]/92 border border-b-0 border-[#D9A9C5]/40 text-[11px] text-[#F1DCCB] cursor-pointer",
					children: dockOpen ? "جمع کردن ابزارهای گربه" : "باز کردن مراقبت و فروشگاه گربه"
				}), dockOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto w-full max-w-3xl rounded-2xl bg-[#17172F]/94 border border-[#7771A8]/40 p-3 shadow-2xl space-y-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setTab("care"),
											className: `px-3 py-1.5 rounded-xl text-xs font-medium cursor-pointer ${tab === "care" ? "bg-[#7771A8] text-[#F1DCCB]" : "bg-[#212142] text-[#D9A9C5]"}`,
											children: "مراقبت و تعامل"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setTab("shop"),
											className: `flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-medium cursor-pointer ${tab === "shop" ? "bg-[#7771A8] text-[#F1DCCB]" : "bg-[#212142] text-[#D9A9C5]"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "فروشگاه وسایل" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setTab("style"),
											className: `px-3 py-1.5 rounded-xl text-xs font-medium cursor-pointer ${tab === "style" ? "bg-[#7771A8] text-[#F1DCCB]" : "bg-[#212142] text-[#D9A9C5]"}`,
											children: "احساس، رنگ و اکسسوری"
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									ref: glbInputRef,
									type: "file",
									accept: ".glb,.gltf",
									onChange: handleGlbUpload,
									className: "hidden"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => glbInputRef.current?.click(),
									className: "flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-[#212142] text-[11px] text-[#D6B875] cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "مدل GLB دلخواه" })]
								})
							]
						}),
						tab === "care" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5 overflow-x-auto pb-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => triggerCare("call", "Happy", void 0, "curious"),
									className: "flex flex-col items-center gap-1 py-2 px-3 rounded-xl bg-[#292652] hover:bg-[#36326b] border border-[#D6B875]/35 text-xs text-[#F1DCCB] whitespace-nowrap shrink-0 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "w-4 h-4 text-[#D6B875]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "صدا زدن" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => triggerCare("pet", "Happy", void 0, "affectionate"),
									className: "flex flex-col items-center gap-1 py-2 px-3 rounded-xl bg-[#222246] hover:bg-[#2d2d59] text-xs text-[#F1DCCB] whitespace-nowrap shrink-0 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "w-4 h-4 text-[#D9A9C5]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "نوازش" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => triggerCare("feed", "Eat", `${cat.name} با اشتها غذا می‌خورد`, "happy"),
									className: "flex flex-col items-center gap-1 py-2 px-3 rounded-xl bg-[#222246] hover:bg-[#2d2d59] text-xs text-[#F1DCCB] whitespace-nowrap shrink-0 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Utensils, { className: "w-4 h-4 text-[#D6B875]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "غذا" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => triggerCare("drink", "Drink", `${cat.name} جرعه‌جرعه آب می‌نوشد`, "happy"),
									className: "flex flex-col items-center gap-1 py-2 px-3 rounded-xl bg-[#222246] hover:bg-[#2d2d59] text-xs text-[#F1DCCB] whitespace-nowrap shrink-0 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplets, { className: "w-4 h-4 text-[#8ecbe0]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "آب" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => triggerCare("play", "Play", void 0, "excited"),
									className: "flex flex-col items-center gap-1 py-2 px-3 rounded-xl bg-[#222246] hover:bg-[#2d2d59] text-xs text-[#F1DCCB] whitespace-nowrap shrink-0 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles$1, { className: "w-4 h-4 text-[#D6B875]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "بازی" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => triggerCare("bath", "Bath", void 0, "happy"),
									className: "flex flex-col items-center gap-1 py-2 px-3 rounded-xl bg-[#222246] hover:bg-[#2d2d59] text-xs text-[#F1DCCB] whitespace-nowrap shrink-0 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bath, { className: "w-4 h-4 text-[#A6BBAA]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "حمام" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => triggerCare("sleep", "Sleep", `${cat.name} آرام چشمانش را بسته و می‌خوابد`, "sleepy"),
									className: "flex flex-col items-center gap-1 py-2 px-3 rounded-xl bg-[#222246] hover:bg-[#2d2d59] text-xs text-[#F1DCCB] whitespace-nowrap shrink-0 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "w-4 h-4 text-[#7771A8]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "خواب" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => triggerCare("stretch", "Stretch", `${cat.name} یک کش‌وقوس آرامش‌بخش می‌آید`, "happy"),
									className: "flex flex-col items-center gap-1 py-2 px-3 rounded-xl bg-[#222246] hover:bg-[#2d2d59] text-xs text-[#F1DCCB] whitespace-nowrap shrink-0 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "w-4 h-4 text-[#eb8d3b]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "کش‌وقوس" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => triggerCare("yawn", "Yawn", void 0, "sleepy"),
									className: "flex flex-col items-center gap-1 py-2 px-3 rounded-xl bg-[#222246] hover:bg-[#2d2d59] text-xs text-[#F1DCCB] whitespace-nowrap shrink-0 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "w-4 h-4 text-[#D9A9C5]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "خمیازه" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => triggerCare("lick_paw", "LickPaw", `${cat.name} پنجه‌های تمیزش را لیس می‌زند`, "affectionate"),
									className: "flex flex-col items-center gap-1 py-2 px-3 rounded-xl bg-[#222246] hover:bg-[#2d2d59] text-xs text-[#F1DCCB] whitespace-nowrap shrink-0 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles$1, { className: "w-4 h-4 text-[#A6BBAA]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "لیسیدن پنجه" })]
								})
							]
						}),
						tab === "shop" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between text-[11px] text-[#D6B875]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
									"موجودی ستاره‌ها: ",
									toPersianDigits(starsCurrency),
									" ستاره"
								] }), shopNotice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#A6BBAA]",
									children: shopNotice
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2 overflow-x-auto pb-1",
								children: CAT_SHOP_ITEMS.map((item) => {
									const owned = cat.unlockedItems.includes(item.id);
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => handleBuyItem(item),
										className: `flex flex-col items-start gap-0.5 px-3 py-2 rounded-xl border text-right whitespace-nowrap shrink-0 cursor-pointer ${owned ? "bg-[#2a334d] border-[#A6BBAA]/60 text-[#F1DCCB]" : "bg-[#222246] border-[#7771A8]/35 text-[#F1DCCB] hover:border-[#D6B875]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1.5 text-xs font-semibold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[10px] text-[#D6B875]",
												children: owned ? "موجود ✓" : `${toPersianDigits(item.cost)} ستاره`
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[10px] text-[#D9A9C5]/80",
											children: item.desc
										})]
									}, item.id);
								})
							})]
						}),
						tab === "style" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 overflow-x-auto pb-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-[#D6B875] shrink-0",
										children: "حالت احساسی:"
									}), Object.entries(CAT_EMOTION_LABELS).map(([em, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setEmotionOverride(em),
										className: `px-2.5 py-1.5 rounded-xl text-xs whitespace-nowrap shrink-0 border cursor-pointer ${currentEmotion === em ? "bg-[#7771A8] border-[#D6B875] text-[#F1DCCB] font-semibold" : "bg-[#212142] border-transparent text-[#D9A9C5]"}`,
										children: label
									}, em))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 overflow-x-auto pb-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-[#D6B875] shrink-0",
											children: "رنگ خز:"
										}),
										BREEDS.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => updateCatProfile({
												breed: b.id,
												customFurColor: void 0
											}),
											className: `flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs whitespace-nowrap shrink-0 border cursor-pointer ${cat.breed === b.id && !cat.customFurColor ? "bg-[#7771A8]/45 border-[#D6B875] text-[#F1DCCB]" : "bg-[#212142] border-transparent text-[#D9A9C5]"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "w-3 h-3 rounded-full border border-white/20",
												style: { backgroundColor: b.color }
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: b.label })]
										}, b.id)),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs whitespace-nowrap shrink-0 bg-[#212142] border border-[#D6B875]/35 text-[#F1DCCB] cursor-pointer",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "color",
												value: cat.customFurColor || "#f47b16",
												onChange: (e) => updateCatProfile({
													breed: "honey",
													customFurColor: e.target.value
												}),
												className: "w-4 h-4 rounded border-0 bg-transparent cursor-pointer p-0"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "رنگ دلخواه" })]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 overflow-x-auto pb-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-[#D6B875] shrink-0",
										children: "اکسسوری:"
									}), ACCESSORIES.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => updateCatProfile({ accessory: a.id }),
										className: `px-2.5 py-1.5 rounded-xl text-xs whitespace-nowrap shrink-0 border cursor-pointer ${cat.accessory === a.id ? "bg-[#D9A9C5] border-[#D9A9C5] text-[#17172F] font-semibold" : "bg-[#212142] border-transparent text-[#F1DCCB]"}`,
										children: a.label
									}, a.id))]
								})
							]
						})
					]
				})]
			})
		]
	});
};
export { CatGameWorld };
