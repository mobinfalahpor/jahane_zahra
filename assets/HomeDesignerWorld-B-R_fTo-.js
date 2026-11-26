import { a as __toESM } from "./rolldown-runtime-DQp2zzRu.js";
import { At as SphereGeometry, E as CylinderGeometry, H as LatheGeometry, It as Vector2, Lt as Vector3, O as DodecahedronGeometry, St as Raycaster, Vt as require_react, c as useThree, et as MathUtils, ht as Plane, l as require_jsx_runtime, n as Stars, ot as MeshStandardMaterial, r as OrbitControls, s as useFrame } from "./r3f-core-XgHUAlSk.js";
import { a as Heart, i as CatActor3D, n as deriveCatEmotion, o as Camera, r as pickCatHomeBehavior, t as CAT_EMOTION_LABELS } from "./catHomeBridge-Ci5De-Zu.js";
import { C as resolveSmartPlacement, S as isInsideCentralPool, _ as MANSION_CAMERA_PRESETS, b as getCatalogMeta, f as useUniverseStore, g as COURTYARD_GARDEN_BEDS, h as CATALOG_CATEGORIES, i as RotateCcw, l as toPersianDigits, m as POT_STYLES_INFO, o as createLucideIcon, p as PLANT_SPECIES_INFO, s as audioEngine, u as SceneCanvas, v as MANSION_CATALOG, w as getGraphicsProfile, x as getZoneMeta, y as clampScaleForKind } from "./entry-Br_QEXnh.js";
import { t as Eye } from "./eye-hkO0mNOO.js";
import { t as Moon } from "./moon-Bz-WB2TQ.js";
import { t as Plus } from "./plus-D8B-_I8e.js";
import { t as Sparkles } from "./sparkles-NkR5KE3G.js";
import { t as Sun } from "./sun-ByRizIWH.js";
import { a as getOrosiStainedGlassTexture, c as getTermehTexture, d as Sunset, i as getMiniaturePaintingTexture, l as getTurquoiseMosaicTexture, n as getCourtyardStoneTexture, o as getPersianBrickWallTexture, r as getGachboriStuccoTexture, s as getPersianCarpetByColor, t as getAinehKariTexture, u as getWaterRippleBumpTexture } from "./persianMansionTextures-DVNX_O6m.js";
import { t as Trash2 } from "./trash-2-BCdyRI2p.js";
import { a as createWoodTexture, i as createRugTexture } from "./proceduralTextures-CcJ_R3cZ.js";
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Check = createLucideIcon("check", [["path", {
	d: "M20 6 9 17l-5-5",
	key: "1gmf2c"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Copy = createLucideIcon("copy", [["rect", {
	width: "14",
	height: "14",
	x: "8",
	y: "8",
	rx: "2",
	ry: "2",
	key: "17jyea"
}], ["path", {
	d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
	key: "zix9uf"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var EyeOff = createLucideIcon("eye-off", [
	["path", {
		d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
		key: "ct8e1f"
	}],
	["path", {
		d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
		key: "151rxh"
	}],
	["path", {
		d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
		key: "13bj9a"
	}],
	["path", {
		d: "m2 2 20 20",
		key: "1ooewy"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Flower2 = createLucideIcon("flower-2", [
	["path", {
		d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",
		key: "3pnvol"
	}],
	["circle", {
		cx: "12",
		cy: "8",
		r: "2",
		key: "1822b1"
	}],
	["path", {
		d: "M12 10v12",
		key: "6ubwww"
	}],
	["path", {
		d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",
		key: "9hd38g"
	}],
	["path", {
		d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",
		key: "ufn41s"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Grid3x3 = createLucideIcon("grid-3x3", [
	["rect", {
		width: "18",
		height: "18",
		x: "3",
		y: "3",
		rx: "2",
		key: "afitv7"
	}],
	["path", {
		d: "M3 9h18",
		key: "1pudct"
	}],
	["path", {
		d: "M3 15h18",
		key: "5xshup"
	}],
	["path", {
		d: "M9 3v18",
		key: "fh3hqa"
	}],
	["path", {
		d: "M15 3v18",
		key: "14nvp0"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Layers = createLucideIcon("layers", [
	["path", {
		d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
		key: "zw3jo"
	}],
	["path", {
		d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
		key: "1wduqc"
	}],
	["path", {
		d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
		key: "kqbvx6"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Minus = createLucideIcon("minus", [["path", {
	d: "M5 12h14",
	key: "1ays0h"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Move = createLucideIcon("move", [
	["path", {
		d: "M12 2v20",
		key: "t6zp3m"
	}],
	["path", {
		d: "m15 19-3 3-3-3",
		key: "11eu04"
	}],
	["path", {
		d: "m19 9 3 3-3 3",
		key: "1mg7y2"
	}],
	["path", {
		d: "M2 12h20",
		key: "9i4pu4"
	}],
	["path", {
		d: "m5 9-3 3 3 3",
		key: "j64kie"
	}],
	["path", {
		d: "m9 5 3-3 3 3",
		key: "l8vdw6"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Palette = createLucideIcon("palette", [
	["path", {
		d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
		key: "e79jfc"
	}],
	["circle", {
		cx: "13.5",
		cy: "6.5",
		r: ".5",
		fill: "currentColor",
		key: "1okk4w"
	}],
	["circle", {
		cx: "17.5",
		cy: "10.5",
		r: ".5",
		fill: "currentColor",
		key: "f64h9f"
	}],
	["circle", {
		cx: "6.5",
		cy: "12.5",
		r: ".5",
		fill: "currentColor",
		key: "qy21gx"
	}],
	["circle", {
		cx: "8.5",
		cy: "7.5",
		r: ".5",
		fill: "currentColor",
		key: "fotxhn"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Pencil = createLucideIcon("pencil", [["path", {
	d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
	key: "1a8usu"
}], ["path", {
	d: "m15 5 4 4",
	key: "1mk7zo"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var RotateCw = createLucideIcon("rotate-cw", [["path", {
	d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",
	key: "1p45f6"
}], ["path", {
	d: "M21 3v5h-5",
	key: "1q7to0"
}]]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Save = createLucideIcon("save", [
	["path", {
		d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
		key: "1c8476"
	}],
	["path", {
		d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",
		key: "1ydtos"
	}],
	["path", {
		d: "M7 3v4a1 1 0 0 0 1 1h7",
		key: "t51u73"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Undo2 = createLucideIcon("undo-2", [["path", {
	d: "M9 14 4 9l5-5",
	key: "102s5s"
}], ["path", {
	d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",
	key: "f3b9sd"
}]]);
// src/worlds/HomeDesigner/MansionArchitecture.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var sharedFlowerResources = null;
function getSharedFlowerResources() {
	if (!sharedFlowerResources) {
		const leafGeo = new SphereGeometry(.075, 6, 6);
		const leafMat = new MeshStandardMaterial({
			color: "#3c6e46",
			roughness: .75
		});
		const stemGeo = new CylinderGeometry(.008, .012, 1, 5);
		const stemMat = new MeshStandardMaterial({
			color: "#427345",
			roughness: .75
		});
		const jasmineLeafGeo = new DodecahedronGeometry(.14, 0);
		const jasmineLeafMat = new MeshStandardMaterial({
			color: "#386b42",
			roughness: .8
		});
		const jasmineBloomGeo = new SphereGeometry(.042, 6, 6);
		const jasmineBloomMat = new MeshStandardMaterial({
			color: "#f7f1e3",
			roughness: .4
		});
		[
			leafGeo,
			leafMat,
			stemGeo,
			stemMat,
			jasmineLeafGeo,
			jasmineLeafMat,
			jasmineBloomGeo,
			jasmineBloomMat
		].forEach((res) => {
			res.userData.shared = true;
		});
		sharedFlowerResources = {
			leafGeo,
			leafMat,
			stemGeo,
			stemMat,
			jasmineLeafGeo,
			jasmineLeafMat,
			jasmineBloomGeo,
			jasmineBloomMat
		};
	}
	return sharedFlowerResources;
}
function CentralPersianPool({ isNight, enableTransmission, reducedMotion }) {
	const waterMatRef = (0, import_react.useRef)(null);
	const bumpTex = (0, import_react.useMemo)(() => getWaterRippleBumpTexture(), []);
	const mosaicTex = (0, import_react.useMemo)(() => getTurquoiseMosaicTexture(6, 1), []);
	const dropletsRef = (0, import_react.useRef)(null);
	const fishGroupRef = (0, import_react.useRef)(null);
	const fishData = (0, import_react.useMemo)(() => [
		{
			radiusX: 1.05,
			radiusZ: .65,
			speed: .62,
			phase: .2,
			color: "#ef5b25",
			size: 1
		},
		{
			radiusX: .85,
			radiusZ: .52,
			speed: -.54,
			phase: 1.7,
			color: "#f58427",
			size: .9
		},
		{
			radiusX: 1.28,
			radiusZ: .78,
			speed: .45,
			phase: 3.1,
			color: "#e84323",
			size: 1.1
		},
		{
			radiusX: .72,
			radiusZ: .44,
			speed: .78,
			phase: 4.5,
			color: "#f7a638",
			size: .85
		},
		{
			radiusX: 1.15,
			radiusZ: .68,
			speed: -.5,
			phase: 5.4,
			color: "#f06430",
			size: .95
		}
	], []);
	useFrame(({ clock }) => {
		if (reducedMotion) return;
		const t = clock.getElapsedTime();
		bumpTex.offset.set(t * .035, Math.sin(t * .4) * .025);
		if (dropletsRef.current) {
			const children = dropletsRef.current.children;
			for (let i = 0; i < children.length; i++) {
				const angle = i / children.length * Math.PI * 2;
				const phase = (t * 1.45 + i * .13) % 1;
				const r = phase * .55;
				const y = .78 + Math.sin(phase * Math.PI) * .45 - phase * .52;
				children[i].position.set(Math.cos(angle) * r, y, Math.sin(angle) * r);
				const s = .7 + (1 - phase) * .5;
				children[i].scale.setScalar(s);
			}
		}
		if (fishGroupRef.current) {
			const fishChildren = fishGroupRef.current.children;
			for (let idx = 0; idx < fishChildren.length; idx++) {
				const fish = fishChildren[idx];
				const fd = fishData[idx];
				const angle = t * fd.speed + fd.phase;
				const nx = Math.cos(angle) * fd.radiusX;
				const nz = Math.sin(angle) * fd.radiusZ;
				const dx = -Math.sin(angle) * fd.radiusX * fd.speed;
				const dz = Math.cos(angle) * fd.radiusZ * fd.speed;
				fish.position.set(nx, .14 + Math.sin(t * 2 + idx) * .02, nz);
				fish.rotation.y = Math.atan2(dx, dz);
				const tail = fish.children[1];
				if (tail) tail.rotation.y = Math.sin(t * 9 + idx) * .35;
			}
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			0,
			0,
			0
		],
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.17,
					-1.42
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					4.1,
					.34,
					.24
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: mosaicTex,
					roughness: .3
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.17,
					1.42
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					4.1,
					.34,
					.24
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: mosaicTex,
					roughness: .3
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-1.93,
					.17,
					0
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.24,
					.34,
					2.62
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: mosaicTex,
					roughness: .3
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					1.93,
					.17,
					0
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.24,
					.34,
					2.62
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: mosaicTex,
					roughness: .3
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.355,
					-1.42
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					4.2,
					.05,
					.29
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#e5d7be",
					roughness: .62
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.355,
					1.42
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					4.2,
					.05,
					.29
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#e5d7be",
					roughness: .62
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-1.93,
					.355,
					0
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.29,
					.05,
					2.62
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#e5d7be",
					roughness: .62
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					1.93,
					.355,
					0
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.29,
					.05,
					2.62
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#e5d7be",
					roughness: .62
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.02,
					0
				],
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [3.72, 2.68] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#145863",
					roughness: .35
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.25,
					0
				],
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [3.68, 2.64] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
					ref: waterMatRef,
					color: isNight ? "#1b7a85" : "#2fb7bd",
					roughness: .08,
					metalness: .05,
					transmission: enableTransmission ? .42 : 0,
					transparent: true,
					opacity: enableTransmission ? .78 : .74,
					ior: 1.33,
					bumpMap: bumpTex,
					bumpScale: .025,
					clearcoat: enableTransmission ? .9 : .45,
					clearcoatRoughness: .08
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: [
					0,
					.02,
					0
				],
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							.18,
							0
						],
						castShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
							.24,
							.34,
							.36,
							12
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#dfd1b8",
							roughness: .65
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							.42,
							0
						],
						castShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
							.52,
							.18,
							.16,
							16
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#1f7b83",
							roughness: .25
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							.62,
							0
						],
						castShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
							.1,
							.14,
							.32,
							12
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#dfd1b8",
							roughness: .6
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							.8,
							0
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
							.09,
							12,
							12
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#d4a84f",
							metalness: .75,
							roughness: .25
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
				ref: dropletsRef,
				children: Array.from({ length: 14 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.028,
					6,
					6
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
					color: "#cff8fc",
					roughness: .1,
					transparent: true,
					opacity: .82
				})] }, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
				ref: fishGroupRef,
				children: fishData.map((fd, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
					scale: fd.size,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						scale: [
							.7,
							.75,
							1.45
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
							.048,
							8,
							8
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: fd.color,
							roughness: .3
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							0,
							-.08
						],
						rotation: [
							Math.PI / 2,
							0,
							0
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
							.036,
							.06,
							4
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#ffd0a6",
							roughness: .35
						})]
					})]
				}, idx))
			}),
			isNight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
				position: [
					0,
					.6,
					0
				],
				color: "#4ad4db",
				intensity: 1.8,
				distance: 7.5,
				decay: 2
			})
		]
	});
}
var FLOWER_PALETTES = [
	{
		name: "rose",
		petal: "#b82841",
		center: "#f2c85b",
		height: .36,
		style: "rosette"
	},
	{
		name: "tulip",
		petal: "#e0533c",
		center: "#382419",
		height: .32,
		style: "cup"
	},
	{
		name: "lily",
		petal: "#f5efe6",
		center: "#e3a63b",
		height: .44,
		style: "star"
	},
	{
		name: "lavender",
		petal: "#7a5ba8",
		center: "#997bc7",
		height: .38,
		style: "spire"
	},
	{
		name: "peony",
		petal: "#d97b98",
		center: "#f3d06b",
		height: .35,
		style: "rosette"
	},
	{
		name: "marigold",
		petal: "#eb8d1f",
		center: "#8c3d0d",
		height: .28,
		style: "rosette"
	},
	{
		name: "hydrangea",
		petal: "#5fa4cc",
		center: "#dcecf5",
		height: .4,
		style: "cluster"
	},
	{
		name: "narcissus",
		petal: "#f7f1de",
		center: "#e8a225",
		height: .31,
		style: "star"
	},
	{
		name: "geranium",
		petal: "#cf344a",
		center: "#f5d9a6",
		height: .33,
		style: "cluster"
	},
	{
		name: "violet",
		petal: "#543e8a",
		center: "#e6c24c",
		height: .22,
		style: "star"
	}
];
function GardenFlowerClump({ x, y, z, variantIdx, scale }) {
	const f = FLOWER_PALETTES[variantIdx % FLOWER_PALETTES.length];
	const shared = getSharedFlowerResources();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: [
			x,
			y,
			z
		],
		scale,
		children: [[
			0,
			1,
			2,
			3
		].map((li) => {
			const a = li / 4 * Math.PI * 2 + variantIdx * .4;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				geometry: shared.leafGeo,
				material: shared.leafMat,
				position: [
					Math.cos(a) * .08,
					.05,
					Math.sin(a) * .08
				],
				rotation: [
					.45,
					a,
					0
				],
				scale: [
					.8,
					.35,
					1.35
				]
			}, li);
		}), [
			-.04,
			.04,
			0
		].map((ox, bi) => {
			const oz = bi === 2 ? .05 : -.03;
			const h = f.height * (.85 + bi * .12);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: [
					ox,
					0,
					oz
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
					geometry: shared.stemGeo,
					material: shared.stemMat,
					position: [
						0,
						h * .5,
						0
					],
					scale: [
						1,
						h,
						1
					]
				}), f.style === "spire" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						h,
						0
					],
					scale: [
						.7,
						1.6,
						.7
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dodecahedronGeometry", { args: [.052, 0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: f.petal,
						roughness: .45
					})]
				}) : f.style === "cluster" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
					position: [
						0,
						h,
						0
					],
					children: [
						0,
						1,
						2,
						3
					].map((ci) => {
						const ca = ci / 4 * Math.PI * 2;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								Math.cos(ca) * .03,
								ci % 2 * .02,
								Math.sin(ca) * .03
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
								.032,
								6,
								6
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: f.petal,
								roughness: .42
							})]
						}, ci);
					})
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
					position: [
						0,
						h,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.032,
						7,
						7
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: f.center,
						roughness: .4
					})] }), [
						0,
						1,
						2,
						3,
						4
					].map((pi) => {
						const pa = pi / 5 * Math.PI * 2;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								Math.cos(pa) * .04,
								0,
								Math.sin(pa) * .04
							],
							rotation: [
								f.style === "cup" ? -.4 : .25,
								pa,
								0
							],
							scale: [
								.8,
								.55,
								1.1
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
								.028,
								6,
								6
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: f.petal,
								roughness: .38
							})]
						}, pi);
					})]
				})]
			}, bi);
		})]
	});
}
function PersianGardenBeds({ season }) {
	const leafTint = season === "autumn" ? "#9e6b3b" : season === "winter" ? "#4d6357" : "#356642";
	const flowerInstances = (0, import_react.useMemo)(() => {
		const out = [];
		COURTYARD_GARDEN_BEDS.forEach((bed, bIdx) => {
			for (let i = 0; i < 12; i++) {
				const cols = 4;
				const row = Math.floor(i / cols);
				const col = i % cols;
				const spanX = bed.maxX - bed.minX - .55;
				const spanZ = bed.maxZ - bed.minZ - .55;
				const jitterX = Math.sin(i * 17.3 + bIdx * 3.1) * .22;
				const jitterZ = Math.cos(i * 13.7 + bIdx * 5.2) * .2;
				out.push({
					x: bed.minX + .3 + col / 3 * spanX + jitterX,
					z: bed.minZ + .3 + row / 2 * spanZ + jitterZ,
					variantIdx: i + bIdx * 3,
					scale: .85 + (i * 7 + bIdx) % 5 * .09
				});
			}
		});
		return out;
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		COURTYARD_GARDEN_BEDS.map((bed) => {
			const w = bed.maxX - bed.minX;
			const d = bed.maxZ - bed.minZ;
			const cx = (bed.minX + bed.maxX) / 2;
			const cz = (bed.minZ + bed.maxZ) / 2;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: [
					cx,
					0,
					cz
				],
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							.11,
							0
						],
						castShadow: true,
						receiveShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
							w + .22,
							.22,
							d + .22
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#b98a62",
							roughness: .78
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							.215,
							0
						],
						receiveShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
							w,
							.03,
							d
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#422e21",
							roughness: .95
						})]
					}),
					[
						[-w * .42, -d * .42],
						[w * .42, -d * .42],
						[-w * .42, d * .42],
						[w * .42, d * .42]
					].map(([sx, sz], si) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							sx,
							.34,
							sz
						],
						castShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dodecahedronGeometry", { args: [.24, 1] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: leafTint,
							roughness: .82
						})]
					}, si))
				]
			}, bed.id);
		}),
		flowerInstances.map((fl, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GardenFlowerClump, {
			x: fl.x,
			y: .22,
			z: fl.z,
			variantIdx: fl.variantIdx,
			scale: fl.scale
		}, idx)),
		(() => {
			const shared = getSharedFlowerResources();
			return [
				[-7.25, -3.5],
				[-7.25, 2.5],
				[7.25, -3.5],
				[7.25, 2.5]
			].map(([vx, vz], vi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
				position: [
					vx,
					0,
					vz
				],
				children: [
					.4,
					.95,
					1.5,
					2.05,
					2.6
				].map((vy, step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
					position: [
						Math.sin(step + vi) * .08,
						vy,
						Math.cos(step) * .08
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
						geometry: shared.jasmineLeafGeo,
						material: shared.jasmineLeafMat
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
						geometry: shared.jasmineBloomGeo,
						material: shared.jasmineBloomMat,
						position: [
							.08,
							.04,
							.08
						]
					})]
				}, step))
			}, vi));
		})()
	] });
}
function EyvanCarvedColumn({ position, woodTex }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.18,
					0
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.22,
					.27,
					.36,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#dfd1b8",
					roughness: .62
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					2.05,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.13,
					.16,
					3.38,
					16
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: woodTex,
					color: "#5e3721",
					roughness: .55
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					3.66,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.155,
					.155,
					.08,
					14
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#d4a84f",
					metalness: .75,
					roughness: .28
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					3.84,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.68,
					.24,
					.34
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: woodTex,
					color: "#4d2c19",
					roughness: .55
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					3.98,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.88,
					.12,
					.42
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#d4a84f",
					roughness: .45,
					metalness: .3
				})]
			})
		]
	});
}
function PersianChandelier({ position, isLit, enableTransmission }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.36,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.02,
					.02,
					.72,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#c99b42",
					metalness: .85,
					roughness: .25
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					.52,
					.032,
					8,
					28
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#d4a84f",
					metalness: .85,
					roughness: .22
				})]
			}),
			[
				0,
				1,
				2,
				3,
				4,
				5
			].map((i) => {
				const a = i / 6 * Math.PI * 2;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
					position: [
						Math.cos(a) * .52,
						.1,
						Math.sin(a) * .52
					],
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.045,
						.06,
						.12,
						8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#fff3d6",
						emissive: isLit ? "#ffca78" : "#000000",
						emissiveIntensity: isLit ? 1.5 : 0,
						roughness: .25
					})] })
				}, i);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					-.14,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("octahedronGeometry", { args: [.13, 0] }), enableTransmission ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
					color: "#eef6fa",
					roughness: .08,
					transmission: .5,
					emissive: isLit ? "#ffe0a3" : "#000000",
					emissiveIntensity: isLit ? .4 : 0
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#eef6fa",
					roughness: .12,
					metalness: .2,
					transparent: true,
					opacity: .78,
					emissive: isLit ? "#ffe0a3" : "#000000",
					emissiveIntensity: isLit ? .4 : 0
				})]
			}),
			isLit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
				position: [
					0,
					-.1,
					0
				],
				color: "#ffd591",
				intensity: 2.6,
				distance: 10,
				decay: 2
			})
		]
	});
}
var MansionArchitecture = ({ timeMode, season, wallColor, floorMaterial, lightWarmth, cutawayMode }) => {
	const quality = useUniverseStore((s) => s.environment.quality);
	const reducedMotion = useUniverseStore((s) => s.environment.reducedMotion);
	const profile = (0, import_react.useMemo)(() => getGraphicsProfile(quality, reducedMotion), [quality, reducedMotion]);
	const stoneTex = (0, import_react.useMemo)(() => getCourtyardStoneTexture(), []);
	const brickTex = (0, import_react.useMemo)(() => getPersianBrickWallTexture(), []);
	const mosaicTex = (0, import_react.useMemo)(() => getTurquoiseMosaicTexture(4, 1), []);
	const orosiTex = (0, import_react.useMemo)(() => getOrosiStainedGlassTexture(), []);
	const ainehTex = (0, import_react.useMemo)(() => getAinehKariTexture(), []);
	const gachTex = (0, import_react.useMemo)(() => getGachboriStuccoTexture(), []);
	const woodTex = (0, import_react.useMemo)(() => createWoodTexture("#6b4128", "#462815", 3), []);
	const lightWoodTex = (0, import_react.useMemo)(() => createWoodTexture("#9c714d", "#754e30", 3), []);
	const isNight = timeMode === "night";
	const isSunset = timeMode === "sunset";
	const floorTint = floorMaterial === "walnut" ? "#663e26" : floorMaterial === "oak" ? "#9d7452" : floorMaterial === "marble" ? "#eae1d4" : "#dfd2be";
	const interiorWallHex = wallColor || "#ebe0ce";
	const ambientColor = isNight ? "#586aa3" : isSunset ? "#ffd0a6" : "#fff5e4";
	const ambientInt = isNight ? .42 : isSunset ? .65 : .78;
	const sunColor = isNight ? "#96b4ff" : isSunset ? "#ff9f5a" : "#fff2d6";
	const sunPos = isNight ? [
		-12,
		18,
		10
	] : isSunset ? [
		-18,
		8.5,
		11
	] : [
		12,
		22,
		10
	];
	const sunInt = isNight ? .55 : isSunset ? 1.45 : 1.75;
	const isLampLit = isNight || isSunset || lightWarmth > .72;
	const starCount = Math.max(250, Math.round(1400 * profile.particleScale));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", {
			color: ambientColor,
			intensity: ambientInt
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
			isNight ? "#354980" : isSunset ? "#ffbf8a" : "#e8f4ff",
			"#6a5644",
			isNight ? .45 : .72
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: sunPos,
			color: sunColor,
			intensity: sunInt,
			castShadow: profile.shadowsEnabled,
			"shadow-mapSize": [profile.shadowMapSize, profile.shadowMapSize],
			"shadow-camera-left": -18,
			"shadow-camera-right": 18,
			"shadow-camera-top": 18,
			"shadow-camera-bottom": -18,
			"shadow-camera-near": 1,
			"shadow-camera-far": 55,
			"shadow-bias": -5e-4
		}),
		isNight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
			radius: 70,
			depth: 30,
			count: starCount,
			factor: 3.2,
			saturation: .4,
			fade: true,
			speed: profile.systemReducedMotion ? 0 : .4
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				0,
				3.2,
				-8.1
			],
			color: "#ffcf8a",
			intensity: isNight ? 2.4 : 1.1,
			distance: 9,
			decay: 2
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				10.5,
				3.1,
				-3.2
			],
			color: "#ffd496",
			intensity: isNight ? 2 : .9,
			distance: 10,
			decay: 2
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				10.5,
				3.1,
				3.2
			],
			color: "#ffd496",
			intensity: isNight ? 2 : .9,
			distance: 9,
			decay: 2
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				-10.5,
				3.1,
				-6.5
			],
			color: "#ffd496",
			intensity: isNight ? 2 : .9,
			distance: 10,
			decay: 2
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				-.05,
				-2
			],
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [76, 76] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: isNight ? "#1e2c24" : "#4a6345",
				roughness: .95
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				0,
				0
			],
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [15.2, 13.4] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				map: stoneTex,
				roughness: .78
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CentralPersianPool, {
			isNight,
			enableTransmission: profile.enableTransmission,
			reducedMotion: profile.systemReducedMotion
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersianGardenBeds, { season }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				0,
				0,
				6.75
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-5.1,
						1.55,
						0
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						5,
						3.1,
						.38
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: brickTex,
						roughness: .82
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						5.1,
						1.55,
						0
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						5,
						3.1,
						.38
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: brickTex,
						roughness: .82
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-5.1,
						3.14,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						5.05,
						.14,
						.44
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: mosaicTex,
						roughness: .35
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						5.1,
						3.14,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						5.05,
						.14,
						.44
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: mosaicTex,
						roughness: .35
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-1.85,
						2,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.6,
						4,
						.6
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: brickTex,
						roughness: .8
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						1.85,
						2,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.6,
						4,
						.6
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: brickTex,
						roughness: .8
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						3.6,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						5.3,
						1,
						.64
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: mosaicTex,
						roughness: .32
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
					position: [
						-1.02,
						1.45,
						.15
					],
					rotation: [
						0,
						-.78,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							.45,
							0,
							0
						],
						castShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
							.92,
							2.9,
							.1
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							map: woodTex,
							color: "#4d2d1b",
							roughness: .6
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							.72,
							.1,
							-.07
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
							.07,
							.015,
							6,
							16
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#d4a84f",
							metalness: .85,
							roughness: .25
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
					position: [
						1.02,
						1.45,
						.15
					],
					rotation: [
						0,
						.78,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							-.45,
							0,
							0
						],
						castShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
							.92,
							2.9,
							.1
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							map: woodTex,
							color: "#4d2d1b",
							roughness: .6
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							-.72,
							.1,
							-.07
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
							.07,
							.015,
							6,
							16
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#d4a84f",
							metalness: .85,
							roughness: .25
						})]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				0,
				0,
				0
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.12,
						-8.1
					],
					receiveShadow: true,
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						12.2,
						.24,
						3.2
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: stoneTex,
						color: "#e2d4bc",
						roughness: .68
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.06,
						-6.38
					],
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						4.4,
						.12,
						.36
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#d9cab1",
						roughness: .68
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyvanCarvedColumn, {
					position: [
						-4.8,
						.24,
						-6.72
					],
					woodTex
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyvanCarvedColumn, {
					position: [
						-1.75,
						.24,
						-6.72
					],
					woodTex
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyvanCarvedColumn, {
					position: [
						1.75,
						.24,
						-6.72
					],
					woodTex
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyvanCarvedColumn, {
					position: [
						4.8,
						.24,
						-6.72
					],
					woodTex
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						4.32,
						-6.72
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						12.2,
						.42,
						.45
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: mosaicTex,
						roughness: .34
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-6.7,
						2.25,
						-8.1
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.4,
						4.5,
						3.2
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: brickTex,
						roughness: .8
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						6.7,
						2.25,
						-8.1
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.4,
						4.5,
						3.2
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: brickTex,
						roughness: .8
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
					position: [
						0,
						.24,
						-9.65
					],
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								-3.7,
								2.05,
								0
							],
							castShadow: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
								4.4,
								3.3,
								.16
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								map: orosiTex,
								emissive: "#f7bc63",
								emissiveIntensity: isNight ? .52 : .18,
								roughness: .35
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								3.7,
								2.05,
								0
							],
							castShadow: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
								4.4,
								3.3,
								.16
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								map: orosiTex,
								emissive: "#f7bc63",
								emissiveIntensity: isNight ? .52 : .18,
								roughness: .35
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								0,
								3.65,
								0
							],
							castShadow: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
								3.2,
								1.15,
								.26
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								map: gachTex,
								roughness: .75
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								-1.55,
								2.1,
								0
							],
							castShadow: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
								.28,
								4.2,
								.34
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								map: woodTex,
								color: "#4d2c19",
								roughness: .58
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								1.55,
								2.1,
								0
							],
							castShadow: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
								.28,
								4.2,
								.34
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								map: woodTex,
								color: "#4d2c19",
								roughness: .58
							})]
						})
					]
				}),
				!cutawayMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						4.42,
						-8.1
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						12.4,
						.22,
						3.35
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: woodTex,
						color: "#4a2a18",
						roughness: .6
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersianChandelier, {
					position: [
						0,
						3.88,
						-8.1
					],
					isLit: isLampLit,
					enableTransmission: profile.enableTransmission
				})] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				0,
				0,
				0
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.12,
						-12.95
					],
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						15,
						.24,
						6.6
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: floorMaterial === "walnut" || floorMaterial === "oak" ? lightWoodTex : stoneTex,
						color: floorTint,
						roughness: floorMaterial === "marble" ? .28 : .58
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						2.35,
						-16.15
					],
					receiveShadow: true,
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						15.2,
						4.5,
						.32
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: interiorWallHex,
						roughness: .8
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						2.45,
						-15.96
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						4.4,
						3.2,
						.08
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: ainehTex,
						metalness: .82,
						roughness: .14
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-4.5,
						2.45,
						-15.96
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						3.4,
						3,
						.06
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: gachTex,
						roughness: .72
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						4.5,
						2.45,
						-15.96
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						3.4,
						3,
						.06
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: gachTex,
						roughness: .72
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.65,
						-15.95
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						14.8,
						.85,
						.08
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: woodTex,
						color: "#543320",
						roughness: .55
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-7.5,
						2.35,
						-14.8
					],
					receiveShadow: true,
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.3,
						4.5,
						2.7
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: interiorWallHex,
						roughness: .8
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-7.5,
						2.35,
						-10.5
					],
					receiveShadow: true,
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.3,
						4.5,
						1.8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: interiorWallHex,
						roughness: .8
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-7.5,
						3.85,
						-12.45
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.3,
						1.5,
						2.1
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: gachTex,
						roughness: .75
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						7.5,
						2.35,
						-14.8
					],
					receiveShadow: true,
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.3,
						4.5,
						2.7
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: interiorWallHex,
						roughness: .8
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						7.5,
						2.35,
						-10.5
					],
					receiveShadow: true,
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.3,
						4.5,
						1.8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: interiorWallHex,
						roughness: .8
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						7.5,
						3.85,
						-12.45
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.3,
						1.5,
						2.1
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: gachTex,
						roughness: .75
					})]
				}),
				!cutawayMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							4.55,
							-12.95
						],
						receiveShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
							15.2,
							.24,
							6.7
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							map: gachTex,
							color: "#ede2cf",
							roughness: .7
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							4.95,
							-12.95
						],
						castShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
							15.6,
							.55,
							7
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#b48a62",
							roughness: .82
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersianChandelier, {
						position: [
							0,
							4.02,
							-13
						],
						isLit: isLampLit,
						enableTransmission: profile.enableTransmission
					})
				] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				0,
				0,
				0
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						10.5,
						.12,
						-3.5
					],
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						6.1,
						.24,
						20.2
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: floorMaterial === "walnut" || floorMaterial === "oak" ? lightWoodTex : stoneTex,
						color: floorTint,
						roughness: .55
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						7.5,
						2.15,
						-7.2
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.32,
						4.2,
						1.9
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: brickTex,
						roughness: .8
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						7.5,
						2,
						-3.3
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.24,
						2.6,
						2.8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: orosiTex,
						emissive: "#f7bc63",
						emissiveIntensity: isNight ? .45 : .14
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						7.5,
						.48,
						-3.3
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.34,
						.96,
						3
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: brickTex,
						roughness: .8
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						7.5,
						3.75,
						-3.3
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.34,
						.95,
						3
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: mosaicTex,
						roughness: .35
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						7.5,
						2.15,
						-.05
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.34,
						4.2,
						3.5
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: brickTex,
						roughness: .8
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						7.5,
						2,
						3.25
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.24,
						2.5,
						2.4
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: orosiTex,
						emissive: "#f7bc63",
						emissiveIntensity: isNight ? .45 : .14
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						7.5,
						.48,
						3.25
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.34,
						.96,
						2.6
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: brickTex,
						roughness: .8
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						7.5,
						3.75,
						3.25
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.34,
						.95,
						2.6
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: mosaicTex,
						roughness: .35
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						7.5,
						2.15,
						5.5
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.34,
						4.2,
						2.1
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: brickTex,
						roughness: .8
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						13.45,
						2.15,
						-3.5
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.34,
						4.2,
						20.2
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: interiorWallHex,
						roughness: .82
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						10.5,
						2.15,
						-13.45
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						6.1,
						4.2,
						.32
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: interiorWallHex,
						roughness: .82
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						10.5,
						2.15,
						6.5
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						6.1,
						4.2,
						.34
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: brickTex,
						roughness: .82
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						11.6,
						2.15,
						-6.5
					],
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						3.7,
						4.2,
						.24
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: interiorWallHex,
						roughness: .8
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						8.6,
						3.65,
						-6.5
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						2.3,
						1.2,
						.24
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: gachTex,
						roughness: .75
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						11.6,
						2.15,
						0
					],
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						3.7,
						4.2,
						.24
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: interiorWallHex,
						roughness: .8
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						8.6,
						3.65,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						2.3,
						1.2,
						.24
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: gachTex,
						roughness: .75
					})]
				}),
				!cutawayMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						10.5,
						4.3,
						-3.5
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						6.3,
						.32,
						20.4
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#b48a62",
						roughness: .82
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PersianChandelier, {
					position: [
						10.5,
						3.85,
						3.2
					],
					isLit: isLampLit,
					enableTransmission: profile.enableTransmission
				})] })
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				0,
				0,
				0
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-10.5,
						.12,
						-5.8
					],
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						6.1,
						.24,
						15.6
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: floorMaterial === "walnut" || floorMaterial === "oak" ? lightWoodTex : stoneTex,
						color: floorTint,
						roughness: .55
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-7.5,
						2.15,
						-7.3
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.32,
						4.2,
						2.4
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: brickTex,
						roughness: .8
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-7.5,
						2,
						-2.2
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.24,
						2.5,
						2.8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: orosiTex,
						emissive: "#f7bc63",
						emissiveIntensity: isNight ? .45 : .16
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-7.5,
						.46,
						-2.2
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.34,
						.92,
						3
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: brickTex,
						roughness: .8
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-7.5,
						3.72,
						-2.2
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.34,
						.96,
						3
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: mosaicTex,
						roughness: .35
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-7.5,
						2.15,
						.7
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.34,
						4.2,
						2.9
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: brickTex,
						roughness: .8
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-7.5,
						1.55,
						4.4
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.36,
						3.1,
						4.8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: brickTex,
						roughness: .82
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-13.45,
						2.15,
						-5.8
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.34,
						4.2,
						15.6
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: interiorWallHex,
						roughness: .82
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-10.5,
						2.15,
						-13.45
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						6.1,
						4.2,
						.32
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: interiorWallHex,
						roughness: .82
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-10.5,
						2.15,
						1.9
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						6.1,
						4.2,
						.34
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: brickTex,
						roughness: .82
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-13.24,
						1.75,
						-9.8
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.06,
						1.6,
						5.2
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: mosaicTex,
						roughness: .28
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-11.6,
						2.15,
						-5.5
					],
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						3.7,
						4.2,
						.24
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: interiorWallHex,
						roughness: .8
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-8.6,
						3.65,
						-5.5
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						2.3,
						1.2,
						.24
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: gachTex,
						roughness: .75
					})]
				}),
				!cutawayMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-10.5,
						4.3,
						-5.8
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						6.3,
						.32,
						15.8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#b48a62",
						roughness: .82
					})]
				})
			]
		})
	] });
};
// src/worlds/HomeDesigner/MansionFurniture.tsx
var cachedVaseGeo = null;
function getVaseGeometry() {
	if (!cachedVaseGeo) {
		const pts = [
			new Vector2(0, 0),
			new Vector2(.09, .01),
			new Vector2(.14, .14),
			new Vector2(.15, .25),
			new Vector2(.06, .36),
			new Vector2(.095, .44),
			new Vector2(.08, .45)
		];
		cachedVaseGeo = new LatheGeometry(pts, 18);
		cachedVaseGeo.userData.shared = true;
	}
	return cachedVaseGeo;
}
var cachedSamovarGeo = null;
function getSamovarGeometry() {
	if (!cachedSamovarGeo) {
		const pts = [
			new Vector2(0, 0),
			new Vector2(.1, .02),
			new Vector2(.06, .09),
			new Vector2(.13, .18),
			new Vector2(.11, .32),
			new Vector2(.075, .38),
			new Vector2(.09, .42),
			new Vector2(0, .44)
		];
		cachedSamovarGeo = new LatheGeometry(pts, 18);
		cachedSamovarGeo.userData.shared = true;
	}
	return cachedSamovarGeo;
}
function FurnitureModel({ item, timeMode, lodLevel, enableTransmission }) {
	const isLit = timeMode === "night" || timeMode === "sunset";
	const getWood = () => createWoodTexture("#5e3721", "#3b2112", 2);
	switch (item.kind) {
		case "persian_sofa":
		case "sofa": {
			const isRoyal = item.kind === "persian_sofa";
			const woodTex = getWood();
			const termehTex = getTermehTexture(item.color);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.18,
						0
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						2.06,
						.16,
						.88
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: woodTex,
						color: "#52301c",
						roughness: .55
					})]
				}),
				[
					[
						-.92,
						.07,
						-.34
					],
					[
						.92,
						.07,
						-.34
					],
					[
						-.92,
						.07,
						.34
					],
					[
						.92,
						.07,
						.34
					]
				].map((lp, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: lp,
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.045,
						.032,
						.14,
						10
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: isRoyal ? "#c99b42" : "#4a2b18",
						roughness: .45,
						metalness: isRoyal ? .5 : 0
					})]
				}, idx)),
				[
					-.62,
					0,
					.62
				].map((cx, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						cx,
						.33,
						.04
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.6,
						.17,
						.72
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: item.color,
						roughness: .78
					})]
				}, idx)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.64,
						-.32
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.98,
						.56,
						.18
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: item.color,
						roughness: .78
					})]
				}),
				isRoyal && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.96,
						-.32
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.1,
						.42,
						.2,
						12
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#c99b42",
						metalness: .55,
						roughness: .35
					})]
				}),
				[-.95, .95].map((ax, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						ax,
						.46,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.16,
						.38,
						.84
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: item.color,
						roughness: .78
					})]
				}, i)),
				[-.65, .65].map((px, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						px,
						.52,
						-.14
					],
					rotation: [
						.2,
						i === 0 ? .3 : -.3,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.3,
						.26,
						.11
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: termehTex,
						roughness: .7
					})]
				}, i))
			] });
		}
		case "royal_chair":
		case "armchair": {
			const isArmchair = item.kind === "armchair";
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
				[
					[
						-.24,
						.21,
						-.22
					],
					[
						.24,
						.21,
						-.22
					],
					[
						-.24,
						.21,
						.22
					],
					[
						.24,
						.21,
						.22
					]
				].map((lp, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: lp,
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.03,
						.022,
						.42,
						8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#4e2e1b",
						roughness: .55
					})]
				}, idx)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.44,
						0
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						isArmchair ? .72 : .54,
						.12,
						isArmchair ? .66 : .52
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: item.color,
						roughness: .78
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.78,
						-.23
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						isArmchair ? .68 : .5,
						.6,
						.1
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: item.color,
						roughness: .78
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						1.1,
						-.23
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.075,
						10,
						10
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#c99b42",
						metalness: .6,
						roughness: .3
					})]
				}),
				isArmchair && [-.34, .34].map((ax, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						ax,
						.58,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.1,
						.24,
						.62
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: item.color,
						roughness: .75
					})]
				}, i))
			] });
		}
		case "coffee_table": {
			const woodTex = getWood();
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.43,
						0
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.18,
						.06,
						.76
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: woodTex,
						color: item.color,
						roughness: .38
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.39,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.1,
						.04,
						.68
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#c99b42",
						metalness: .45,
						roughness: .4
					})]
				}),
				[
					[
						-.48,
						.21,
						-.28
					],
					[
						.48,
						.21,
						-.28
					],
					[
						-.48,
						.21,
						.28
					],
					[
						.48,
						.21,
						.28
					]
				].map((lp, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: lp,
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.04,
						.025,
						.42,
						10
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#4a2b18",
						roughness: .5
					})]
				}, i))
			] });
		}
		case "dining_table":
		case "desk": {
			const isDesk = item.kind === "desk";
			const woodTex = getWood();
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.74,
						0
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						isDesk ? 1.38 : 1.72,
						.07,
						isDesk ? .74 : .96
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: woodTex,
						color: item.color,
						roughness: .42
					})]
				}),
				[
					[
						-.6,
						.36,
						-.34
					],
					[
						.6,
						.36,
						-.34
					],
					[
						-.6,
						.36,
						.34
					],
					[
						.6,
						.36,
						.34
					]
				].map((lp, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: lp,
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.045,
						.03,
						.72,
						10
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#4a2b18",
						roughness: .5
					})]
				}, i)),
				isDesk && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.42,
						.56,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.38,
						.32,
						.62
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#52311d",
						roughness: .55
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-.22,
						.79,
						.05
					],
					rotation: [
						0,
						.2,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.28,
						.03,
						.2
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#f2e6cf",
						roughness: .8
					})]
				})] })
			] });
		}
		case "nightstand": {
			const woodTex = getWood();
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.28,
						0
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.52,
						.52,
						.44
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: woodTex,
						color: item.color,
						roughness: .5
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.55,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.56,
						.04,
						.48
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#4d2c19",
						roughness: .4
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.38,
						.23
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.025,
						8,
						8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#d4a84f",
						metalness: .8,
						roughness: .25
					})]
				})
			] });
		}
		case "vanity": {
			const woodTex = getWood();
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.74,
						0
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.05,
						.06,
						.48
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: woodTex,
						color: item.color,
						roughness: .48
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-.36,
						.36,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.28,
						.7,
						.42
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: item.color,
						roughness: .55
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.36,
						.36,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.28,
						.7,
						.42
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: item.color,
						roughness: .55
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						1.24,
						-.18
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.36,
						.36,
						.05,
						24
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#d4a84f",
						metalness: .7,
						roughness: .3
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						1.24,
						-.15
					],
					rotation: [
						Math.PI / 2,
						0,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.31,
						.31,
						.02,
						24
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#dbe8f0",
						metalness: .95,
						roughness: .05
					})]
				})
			] });
		}
		case "bookshelf": {
			const bookColors = [
				"#8c2330",
				"#1d3663",
				"#2d634a",
				"#b88c3b",
				"#6e3d28",
				"#3c5f78"
			];
			const woodTex = getWood();
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					1.05,
					0
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.3,
					2.1,
					.38
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: woodTex,
					color: item.color,
					roughness: .58
				})]
			}), [
				.38,
				.84,
				1.3,
				1.76
			].map((sy, sIdx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				position: [
					0,
					sy,
					.06
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						-.16,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.18,
						.035,
						.32
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#462816",
						roughness: .6
					})]
				}), Array.from({ length: 9 }).map((_, bi) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-.48 + bi * .115,
						.02,
						.02
					],
					rotation: [
						0,
						0,
						bi === 8 && sIdx % 2 === 0 ? -.18 : 0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.078,
						.25 + (bi + sIdx) % 3 * .035,
						.22
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: bookColors[(bi * 3 + sIdx) % bookColors.length],
						roughness: .65
					})]
				}, bi))]
			}, sIdx))] });
		}
		case "bolster_set": {
			const termehTex = getTermehTexture(item.color);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.09,
						0
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.45,
						.16,
						.85
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: termehTex,
						roughness: .82
					})]
				}),
				[-.45, .45].map((bx, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						bx,
						.32,
						-.26
					],
					rotation: [
						0,
						0,
						Math.PI / 2
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.14,
						.14,
						.56,
						14
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: termehTex,
						roughness: .78
					})]
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.28,
						-.3
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.38,
						.32,
						.15
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: termehTex,
						roughness: .8
					})]
				})
			] });
		}
		case "persian_carpet_large": {
			const carpetTex = getPersianCarpetByColor(item.color);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.008,
					0
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					3.4,
					.016,
					2.3
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: carpetTex,
					roughness: .92
				})]
			}), [-1.74, 1.74].map((fx, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					fx,
					.005,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.08,
					.008,
					2.22
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#f2e6cf",
					roughness: .95
				})]
			}, i))] });
		}
		case "persian_carpet_runner": {
			const carpetTex = getPersianCarpetByColor(item.color);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.008,
					0
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					1.45,
					.016,
					2.65
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: carpetTex,
					roughness: .92
				})]
			});
		}
		case "rug_round": {
			const roundRugTex = createRugTexture(item.color);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.008,
					0
				],
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					1.15,
					1.15,
					.016,
					32
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: roundRugTex,
					roughness: .9
				})]
			});
		}
		case "lamp_floor": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.04,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.2,
					.24,
					.08,
					16
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: item.color,
					metalness: .78,
					roughness: .28
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.85,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.03,
					.04,
					1.56,
					10
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: item.color,
					metalness: .78,
					roughness: .28
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					1.65,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.18,
					.3,
					.34,
					18
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#f3e2be",
					emissive: isLit ? "#ffc870" : "#4a381f",
					emissiveIntensity: isLit ? .95 : .1,
					roughness: .5
				})]
			}),
			isLit && lodLevel !== "low" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
				position: [
					0,
					1.6,
					0
				],
				color: "#ffd085",
				intensity: 1.1,
				distance: 5,
				decay: 2
			})
		] });
		case "table_lamp": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.04,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.09,
					.11,
					.06,
					12
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#cfa146",
					metalness: .8,
					roughness: .25
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.18,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.022,
					.028,
					.24,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#cfa146",
					metalness: .8,
					roughness: .25
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.34,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.08,
					.16,
					.16,
					14
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: item.color,
					emissive: isLit ? item.color : "#000000",
					emissiveIntensity: isLit ? .85 : 0,
					roughness: .3
				})]
			}),
			isLit && (lodLevel === "high" || lodLevel === "ultra") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
				position: [
					0,
					.3,
					0
				],
				color: "#ffe0a6",
				intensity: .75,
				distance: 3.2,
				decay: 2
			})
		] });
		case "wall_sconce": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					0,
					.04
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.14,
					.28,
					.05
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: item.color,
					metalness: .75,
					roughness: .3
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.05,
					.16
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.07,
					.05,
					.2,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#ffe9bf",
					emissive: isLit ? "#ffbd59" : "#000000",
					emissiveIntensity: isLit ? 1.2 : 0
				})]
			}),
			isLit && (lodLevel === "high" || lodLevel === "ultra") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
				position: [
					0,
					.05,
					.22
				],
				color: "#ffcf80",
				intensity: .8,
				distance: 4,
				decay: 2
			})
		] });
		case "courtyard_lantern": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.08,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.16,
					.2,
					.16,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#d9cab1",
					roughness: .7
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.82,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.045,
					.06,
					1.35,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: item.color,
					metalness: .7,
					roughness: .4
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					1.62,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.16,
					.12,
					.32,
					6
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#ffebbf",
					emissive: isLit ? "#ffba52" : "#33291a",
					emissiveIntensity: isLit ? 1.35 : .1,
					roughness: .3
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					1.84,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
					.2,
					.16,
					6
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: item.color,
					metalness: .7,
					roughness: .35
				})]
			}),
			isLit && lodLevel !== "low" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
				position: [
					0,
					1.62,
					0
				],
				color: "#ffc76b",
				intensity: 1.8,
				distance: 7.5,
				decay: 2
			})
		] });
		case "persian_painting": {
			const paintingTex = getMiniaturePaintingTexture(item.variantSeed ?? 1);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					0,
					.03
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.92,
					1.18,
					.05
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: item.color,
					metalness: .55,
					roughness: .35
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					0,
					.06
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [.78, 1.02] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					map: paintingTex,
					roughness: .55
				})]
			})] });
		}
		case "wall_mirror": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				0,
				.03
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.92,
				1.35,
				.06
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: item.color,
				metalness: .75,
				roughness: .28
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				0,
				.065
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [.74, 1.16] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#d8e6f0",
				metalness: .96,
				roughness: .04
			})]
		})] });
		case "curtain": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				2.4,
				.04
			],
			rotation: [
				0,
				0,
				Math.PI / 2
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.025,
				.025,
				1.9,
				10
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#d4a84f",
				metalness: .75,
				roughness: .25
			})]
		}), [-.74, .74].map((cx, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				cx,
				1.18,
				.06
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.16,
				.22,
				2.38,
				10
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: item.color,
				roughness: .85
			})]
		}, i))] });
		case "turquoise_vase": {
			const vaseGeo = getVaseGeometry();
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				geometry: vaseGeo,
				castShadow: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
					color: item.color,
					roughness: .18,
					clearcoat: lodLevel === "low" ? 0 : .85,
					clearcoatRoughness: .1
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.44,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
					.088,
					.012,
					8,
					16
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#d4a84f",
					metalness: .8,
					roughness: .25
				})]
			})] });
		}
		case "brass_candlestick": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.04,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.07,
					.1,
					.06,
					12
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: item.color,
					metalness: .85,
					roughness: .25
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.18,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.02,
					.035,
					.24,
					10
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: item.color,
					metalness: .85,
					roughness: .25
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.34,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.022,
					.022,
					.12,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#fff3dc",
					roughness: .45
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.42,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.022,
					8,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#ffd269",
					emissive: isLit ? "#ffaa2b" : "#4a3519",
					emissiveIntensity: isLit ? 1.8 : .2
				})]
			})
		] });
		case "samovar_set": {
			const samovarGeo = getSamovarGeometry();
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.015,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.28,
						.26,
						.03,
						20
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#d4a84f",
						metalness: .82,
						roughness: .22
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
					position: [
						0,
						.03,
						0
					],
					geometry: samovarGeo,
					castShadow: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: item.color,
						metalness: .85,
						roughness: .22
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.49,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.068,
						12,
						12
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#f0e4d2",
						roughness: .25
					})]
				}),
				[.16, -.15].map((tx, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						tx,
						.06,
						.12
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.026,
						.02,
						.065,
						10
					] }), enableTransmission ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
						color: "#a83520",
						transmission: .3,
						roughness: .1
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#a83520",
						transparent: true,
						opacity: .78,
						roughness: .12,
						metalness: .1
					})]
				}, i))
			] });
		}
		case "copper_vessel": {
			const vaseGeo = getVaseGeometry();
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-.08,
					.12,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.14,
					14,
					14
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: item.color,
					metalness: .78,
					roughness: .28
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("mesh", {
				position: [
					.12,
					.09,
					.06
				],
				geometry: vaseGeo,
				scale: .55,
				castShadow: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#237a82",
					roughness: .22
				})
			})] });
		}
		case "bed": {
			const woodTex = getWood();
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.2,
						0
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.95,
						.28,
						2.25
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: woodTex,
						color: "#54311d",
						roughness: .52
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.78,
						-1.06
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						2.02,
						1.18,
						.12
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: woodTex,
						color: "#4d2c19",
						roughness: .52
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.4,
						.03
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.8,
						.2,
						2.08
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#f5ede0",
						roughness: .85
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.43,
						.34
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.84,
						.18,
						1.44
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: item.color,
						roughness: .76
					})]
				}),
				[-.44, .44].map((px, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						px,
						.56,
						-.76
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.65,
						.13,
						.42
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#f7efe2",
						roughness: .85
					})]
				}, i))
			] });
		}
		case "kitchen_counter": {
			const woodTex = getWood();
			const mosaicTex = getTurquoiseMosaicTexture(2, 1);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.45,
						0
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						2.25,
						.9,
						.72
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: woodTex,
						color: item.color,
						roughness: .55
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.92,
						0
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						2.32,
						.06,
						.78
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#ede3d3",
						roughness: .3
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.46,
						.37
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						2.12,
						.64,
						.02
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: mosaicTex,
						roughness: .3
					})]
				})
			] });
		}
		case "cat_basket": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.11,
				0
			],
			castShadow: true,
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.45,
				.38,
				.2,
				20
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#c4945e",
				roughness: .85
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.15,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.37,
				.35,
				.12,
				20
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: item.color,
				roughness: .9
			})]
		})] });
		case "cat_tower": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.04,
					0
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.72,
					.08,
					.62
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: item.color,
					roughness: .85
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-.16,
					.42,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.06,
					.06,
					.74,
					12
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#b99262",
					roughness: .92
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					.18,
					.28,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.18,
					.18,
					.38,
					16
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#8d2433",
					roughness: .85
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-.16,
					.81,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.25,
					.25,
					.06,
					16
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#f0e4d2",
					roughness: .85
				})]
			})
		] });
		case "cat_bowls": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.02,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.52,
				.03,
				.28
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#4e2e1b",
				roughness: .6
			})]
		}), [-.13, .13].map((bx, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				bx,
				.055,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.095,
					.075,
					.065,
					16
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: item.color,
					roughness: .28
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.025,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.08,
					.08,
					.01,
					14
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: i === 0 ? "#87c5d6" : "#a8673a",
					roughness: .35
				})]
			})]
		}, i))] });
		case "cat_toy": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.1,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.11,
				14,
				14
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: item.color,
				roughness: .9
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				.15,
				.04,
				.1
			],
			rotation: [
				0,
				.6,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				.055,
				10,
				10
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#cfc8c2",
				roughness: .85
			})]
		})] });
		case "courtyard_bench": {
			const woodTex = getWood();
			const termehTex = getTermehTexture(item.color);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.36,
						0
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.65,
						.1,
						.88
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: woodTex,
						color: item.color,
						roughness: .55
					})]
				}),
				[
					[
						-.72,
						.18,
						-.36
					],
					[
						.72,
						.18,
						-.36
					],
					[
						-.72,
						.18,
						.36
					],
					[
						.72,
						.18,
						.36
					]
				].map((lp, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: lp,
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.1,
						.36,
						.1
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#4a2a17",
						roughness: .6
					})]
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.425,
						0
					],
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.52,
						.03,
						.76
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: termehTex,
						roughness: .85
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.54,
						-.32
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.46,
						.24,
						.14
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						map: termehTex,
						roughness: .82
					})]
				})
			] });
		}
		case "tree_pomegranate":
		case "tree_orange": {
			const fruitColor = item.kind === "tree_pomegranate" ? "#b82128" : "#eb7d1c";
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.55,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.075,
						.12,
						1.1,
						10
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#593a27",
						roughness: .88
					})]
				}),
				[
					[
						0,
						1.38,
						0,
						.56
					],
					[
						-.28,
						1.18,
						.18,
						.38
					],
					[
						.3,
						1.24,
						-.15,
						.4
					],
					[
						.05,
						1.56,
						.15,
						.35
					]
				].map(([cx, cy, cz, r], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						cx,
						cy,
						cz
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dodecahedronGeometry", { args: [r, 1] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: i % 2 === 0 ? "#31613b" : "#3d7548",
						roughness: .82
					})]
				}, i)),
				[
					[
						.32,
						1.28,
						.26
					],
					[
						-.3,
						1.2,
						.28
					],
					[
						.12,
						1.52,
						-.25
					],
					[
						-.18,
						1.44,
						-.2
					],
					[
						.24,
						1.12,
						-.24
					]
				].map(([fx, fy, fz], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						fx,
						fy,
						fz
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.072,
						10,
						10
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: fruitColor,
						roughness: .42
					})]
				}, i))
			] });
		}
		case "tree_cypress": return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.45,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.08,
					.11,
					.9,
					10
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#4e3222",
					roughness: .9
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					1.9,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
					.48,
					2.5,
					12
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#234832",
					roughness: .85
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					1.25,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
					.56,
					1.5,
					12
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#2c593d",
					roughness: .85
				})]
			})
		] });
		case "flower_pot_clay":
		case "flower_pot_turquoise":
		case "greenhouse_planter": {
			const speciesMeta = item.plantSpecies ? PLANT_SPECIES_INFO[item.plantSpecies] : null;
			const potColor = (item.potStyle ? POT_STYLES_INFO.find((p) => p.id === item.potStyle) : null)?.color ?? item.color;
			const bloomColor = speciesMeta?.color ?? (item.kind === "flower_pot_turquoise" ? "#cf3c54" : "#e68c9e");
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.19,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.25,
						.17,
						.38,
						16
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: potColor,
						roughness: item.kind === "flower_pot_turquoise" ? .24 : .7,
						metalness: item.potStyle === "gold_trimmed" ? .55 : .05
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.37,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.22,
						.22,
						.03,
						14
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#453023",
						roughness: .95
					})]
				}),
				[
					0,
					1,
					2,
					3,
					4
				].map((li) => {
					const a = li / 5 * Math.PI * 2;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							Math.cos(a) * .13,
							.48,
							Math.sin(a) * .13
						],
						rotation: [
							.5,
							a,
							0
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
							.1,
							8,
							8
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#3c7348",
							roughness: .68
						})]
					}, li);
				}),
				[
					[
						0,
						.65,
						0,
						.095
					],
					[
						-.1,
						.58,
						.09,
						.072
					],
					[
						.11,
						.6,
						-.07,
						.075
					]
				].map(([bx, by, bz, br], bi) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						bx,
						by,
						bz
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dodecahedronGeometry", { args: [br, 0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: bloomColor,
						emissive: speciesMeta?.rare ? bloomColor : "#000000",
						emissiveIntensity: speciesMeta?.rare ? .4 : 0,
						roughness: .38
					})]
				}, bi))
			] });
		}
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.19,
				0
			],
			castShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.25,
				.18,
				.38,
				16
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#be724f",
				roughness: .72
			})]
		}), [
			0,
			1,
			2,
			3,
			4,
			5
		].map((i) => {
			const a = i / 6 * Math.PI * 2;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					Math.cos(a) * .18,
					.52 + i % 2 * .1,
					Math.sin(a) * .18
				],
				rotation: [
					.45,
					a,
					0
				],
				scale: [
					1,
					.4,
					1.4
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.16,
					8,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: item.color,
					roughness: .62
				})]
			}, i);
		})] });
	}
}
var MansionFurnitureItem = import_react.memo(({ item, selected, editMode, timeMode, lodLevel = "balanced", enableTransmission = false, onPointerStart }) => {
	const meta = getCatalogMeta(item.kind);
	const scale = item.scale ?? meta.defaultScale;
	const ringRadius = Math.max(.32, meta.radius * .92);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: item.position,
		rotation: [
			0,
			item.rotationY,
			0
		],
		scale,
		onPointerDown: (e) => {
			if (!editMode) return;
			e.stopPropagation();
			audioEngine.playSfx("click");
			onPointerStart(item.uid, e);
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FurnitureModel, {
			item,
			timeMode,
			lodLevel,
			enableTransmission
		}), selected && editMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				0,
				.03,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ringGeometry", { args: [
					ringRadius,
					ringRadius + .085,
					32
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: "#d9aa4e",
					side: 2
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [ringRadius, 32] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: "#d9aa4e",
					transparent: true,
					opacity: .14,
					side: 2
				})]
			})]
		})]
	});
});
// src/worlds/HomeDesigner/HomeDesignerWorld.tsx
function CatalogPreviewThumb({ category, color }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border border-white/15",
		style: { background: `linear-gradient(135deg, ${color}33, rgba(23,23,47,0.9))` },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 24 24",
			className: "w-5 h-5",
			fill: "none",
			stroke: "#f2e4cb",
			strokeWidth: "1.6",
			children: [
				category === "carpets" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "3",
						y: "5",
						width: "18",
						height: "14",
						rx: "1.5",
						fill: color,
						fillOpacity: "0.6"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "6",
						y: "8",
						width: "12",
						height: "8",
						stroke: "#d4a84f"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "12",
						cy: "12",
						r: "2",
						fill: "#d4a84f"
					})
				] }),
				category === "lighting" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M9 5h6l2 5H7l2-5z",
					fill: "#ffcf75",
					fillOpacity: "0.8"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 10v9M8 19h8" })] }),
				(category === "plants" || category === "greenhouse") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M8 14h8l-1 6H9l-1-6z",
					fill: color,
					fillOpacity: "0.7"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 14V7m0 3c-2-3-5-2-5 0s3 3 5 1m0-1c2-3 5-2 5 0s-3 3-5 1" })] }),
				category === "art" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "5",
					y: "3",
					width: "14",
					height: "18",
					rx: "1",
					stroke: "#d4a84f"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M8 15l3-4 2 2 3-4v8H8v-2z",
					fill: color,
					fillOpacity: "0.7"
				})] }),
				category === "cat" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M6 10l2-4 3 2h2l3-2 2 4v6a4 4 0 01-4 4h-4a4 4 0 01-4-4v-6z",
						fill: "#f47b16",
						fillOpacity: "0.7"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "10",
						cy: "13",
						r: "0.8",
						fill: "#fff"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "14",
						cy: "13",
						r: "0.8",
						fill: "#fff"
					})
				] }),
				category !== "carpets" && category !== "lighting" && category !== "plants" && category !== "greenhouse" && category !== "art" && category !== "cat" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "4",
					y: "10",
					width: "16",
					height: "6",
					rx: "1.5",
					fill: color,
					fillOpacity: "0.7"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 16v3m12-3v3M7 10V7h10v3" })] })
			]
		})
	});
}
var _camForward = new Vector3();
var _camRight = new Vector3();
var _camMove = new Vector3();
var _worldUp = new Vector3(0, 1, 0);
var _dragRaycaster = new Raycaster();
var _dragNdc = new Vector2();
var _dragHitPoint = new Vector3();
var _dragPlane = new Plane(new Vector3(0, 1, 0), 0);
function MansionCameraRig({ presetRequest, draggingUid, walkInputRef, onClearPresetTransition }) {
	const controlsRef = (0, import_react.useRef)(null);
	const { camera } = useThree();
	const keysRef = (0, import_react.useRef)({});
	const transitionRef = (0, import_react.useRef)({
		active: false,
		pos: new Vector3(.6, 8.9, 13.4),
		target: new Vector3(0, .9, -1.6)
	});
	(0, import_react.useEffect)(() => {
		if (!presetRequest) return;
		transitionRef.current.active = true;
		transitionRef.current.pos.set(...presetRequest.pos);
		transitionRef.current.target.set(...presetRequest.target);
	}, [presetRequest]);
	(0, import_react.useEffect)(() => {
		const onDown = (e) => {
			if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
			keysRef.current[e.code] = true;
		};
		const onUp = (e) => {
			keysRef.current[e.code] = false;
		};
		window.addEventListener("keydown", onDown);
		window.addEventListener("keyup", onUp);
		return () => {
			window.removeEventListener("keydown", onDown);
			window.removeEventListener("keyup", onUp);
		};
	}, []);
	useFrame((_, rawDelta) => {
		const controls = controlsRef.current;
		if (!controls) return;
		const dt = Math.min(.05, rawDelta);
		if (transitionRef.current.active) {
			const alpha = 1 - Math.exp(-5.2 * dt);
			camera.position.lerp(transitionRef.current.pos, alpha);
			controls.target.lerp(transitionRef.current.target, alpha);
			if (camera.position.distanceTo(transitionRef.current.pos) < .06 && controls.target.distanceTo(transitionRef.current.target) < .06) {
				transitionRef.current.active = false;
				onClearPresetTransition();
			}
		}
		const k = keysRef.current;
		let f = walkInputRef.current.forward;
		let r = walkInputRef.current.right;
		if (k.KeyW || k.ArrowUp) f += 1;
		if (k.KeyS || k.ArrowDown) f -= 1;
		if (k.KeyD || k.ArrowRight) r += 1;
		if (k.KeyA || k.ArrowLeft) r -= 1;
		if ((Math.abs(f) > .05 || Math.abs(r) > .05) && !draggingUid) {
			transitionRef.current.active = false;
			camera.getWorldDirection(_camForward);
			_camForward.y = 0;
			if (_camForward.lengthSq() > 1e-4) _camForward.normalize();
			_camRight.crossVectors(_camForward, _worldUp).normalize();
			const speed = 5.2 * dt;
			_camMove.set(0, 0, 0).addScaledVector(_camForward, f * speed).addScaledVector(_camRight, r * speed);
			const nextCamX = MathUtils.clamp(camera.position.x + _camMove.x, -16.5, 16.5);
			const nextCamZ = MathUtils.clamp(camera.position.z + _camMove.z, -16.2, 22);
			const dx = nextCamX - camera.position.x;
			const dz = nextCamZ - camera.position.z;
			camera.position.x = nextCamX;
			camera.position.z = nextCamZ;
			controls.target.x = MathUtils.clamp(controls.target.x + dx, -13.2, 13.2);
			controls.target.z = MathUtils.clamp(controls.target.z + dz, -15.8, 7.5);
		}
		camera.position.y = MathUtils.clamp(camera.position.y, 1.05, 28);
		controls.update();
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
		ref: controlsRef,
		enabled: !draggingUid,
		enableDamping: true,
		dampingFactor: .07,
		minDistance: 2.2,
		maxDistance: 32,
		maxPolarAngle: Math.PI * .48,
		onStart: () => {
			transitionRef.current.active = false;
		}
	});
}
function MansionDragController({ draggingUid, items, snapToGrid, onMoveItem, onStopDrag }) {
	const { camera, gl } = useThree();
	const itemsRef = (0, import_react.useRef)(items);
	itemsRef.current = items;
	(0, import_react.useEffect)(() => {
		if (!draggingUid) return;
		const dom = gl.domElement;
		const onPointerMove = (ev) => {
			const currentItem = itemsRef.current.find((i) => i.uid === draggingUid);
			if (!currentItem) return;
			const rect = dom.getBoundingClientRect();
			_dragNdc.x = (ev.clientX - rect.left) / rect.width * 2 - 1;
			_dragNdc.y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
			_dragPlane.constant = -getZoneMeta(currentItem.room).floorY;
			_dragRaycaster.setFromCamera(_dragNdc, camera);
			if (_dragRaycaster.ray.intersectPlane(_dragPlane, _dragHitPoint)) {
				const resolved = resolveSmartPlacement(currentItem, _dragHitPoint.x, _dragHitPoint.z, itemsRef.current, snapToGrid);
				onMoveItem(draggingUid, resolved.position, resolved.rotationY, resolved.room);
			}
		};
		const onPointerUp = () => {
			onStopDrag();
		};
		window.addEventListener("pointermove", onPointerMove);
		window.addEventListener("pointerup", onPointerUp);
		window.addEventListener("pointercancel", onPointerUp);
		return () => {
			window.removeEventListener("pointermove", onPointerMove);
			window.removeEventListener("pointerup", onPointerUp);
			window.removeEventListener("pointercancel", onPointerUp);
		};
	}, [
		draggingUid,
		camera,
		gl,
		snapToGrid,
		onMoveItem,
		onStopDrag
	]);
	return null;
}
function MansionLiveCat({ allItems, activeRoom, onStatusChange, onPet }) {
	const cat = useUniverseStore((s) => s.cat);
	const posRef = (0, import_react.useRef)(new Vector3(-2.3, 0, 2));
	const targetRef = (0, import_react.useRef)({
		position: [
			-2.35,
			0,
			.3
		],
		animation: "Sit",
		emotion: "curious",
		statusText: `${cat.name} کنار حوض فیروزه‌ای نشسته و ماهی‌های قرمز را تماشا می‌کند`,
		lookTarget: [
			0,
			.25,
			0
		]
	});
	const walkingRef = (0, import_react.useRef)(false);
	const rotYRef = (0, import_react.useRef)(.6);
	const groupRef = (0, import_react.useRef)(null);
	const [activeAnim, setActiveAnim] = (0, import_react.useState)("Sit");
	const [recentAction, setRecentAction] = (0, import_react.useState)(null);
	const petTimeoutRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		onStatusChange(targetRef.current.statusText, targetRef.current.emotion);
	}, [onStatusChange]);
	(0, import_react.useEffect)(() => {
		const chooseNext = () => {
			const next = pickCatHomeBehavior(cat, allItems, activeRoom);
			targetRef.current = next;
			walkingRef.current = true;
			setActiveAnim("Walk");
			onStatusChange(`${cat.name} در عمارت قدم می‌زند...`, next.emotion);
		};
		const id = window.setInterval(chooseNext, 9e3);
		return () => window.clearInterval(id);
	}, [
		cat,
		allItems,
		activeRoom,
		onStatusChange
	]);
	(0, import_react.useEffect)(() => {
		return () => {
			if (petTimeoutRef.current) window.clearTimeout(petTimeoutRef.current);
		};
	}, []);
	useFrame((_, rawDelta) => {
		const dt = Math.min(.05, rawDelta);
		const tPos = targetRef.current.position;
		const cur = posRef.current;
		if (walkingRef.current) {
			const dx = tPos[0] - cur.x;
			const dz = tPos[2] - cur.z;
			const distXZ = Math.hypot(dx, dz);
			if (distXZ < .08) {
				cur.set(tPos[0], tPos[1], tPos[2]);
				walkingRef.current = false;
				setActiveAnim(targetRef.current.animation);
				onStatusChange(targetRef.current.statusText, targetRef.current.emotion);
			} else {
				const speed = 1.35 * dt;
				let nx = cur.x + dx / distXZ * Math.min(speed, distXZ);
				let nz = cur.z + dz / distXZ * Math.min(speed, distXZ);
				if (isInsideCentralPool(nx, nz, .28)) {
					if (Math.abs(nx) < 2.28) nx = Math.sign(nx || 1) * 2.32;
				}
				const targetY = distXZ < .5 ? tPos[1] : Math.abs(nx) > 7.4 || nz < -6.5 ? .24 : 0;
				cur.x = nx;
				cur.z = nz;
				cur.y = MathUtils.lerp(cur.y, targetY, 8 * dt);
				let diff = Math.atan2(dx, dz) - rotYRef.current;
				while (diff > Math.PI) diff -= Math.PI * 2;
				while (diff < -Math.PI) diff += Math.PI * 2;
				rotYRef.current += diff * Math.min(1, 7 * dt);
			}
		} else if (targetRef.current.lookTarget) {
			const lx = targetRef.current.lookTarget[0] - cur.x;
			const lz = targetRef.current.lookTarget[2] - cur.z;
			let diff = Math.atan2(lx, lz) - rotYRef.current;
			while (diff > Math.PI) diff -= Math.PI * 2;
			while (diff < -Math.PI) diff += Math.PI * 2;
			rotYRef.current += diff * Math.min(1, 4 * dt);
		}
		if (groupRef.current) {
			groupRef.current.position.copy(cur);
			groupRef.current.rotation.y = rotYRef.current;
		}
	});
	const emotion = deriveCatEmotion(cat, recentAction);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		ref: groupRef,
		position: [
			-2.3,
			0,
			2
		],
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatActor3D, {
			breed: cat.breed,
			customFurColor: cat.customFurColor,
			accessory: cat.accessory,
			stage: cat.stage,
			animation: recentAction ?? activeAnim,
			emotion,
			lookTarget: targetRef.current.lookTarget ?? null,
			isPetting: recentAction === "Happy",
			onClick: () => {
				audioEngine.playSfx("purr");
				setRecentAction("Happy");
				onStatusChange(`${cat.name} با نوازش تو خرخر شیرینی می‌کند`, "affectionate");
				onPet();
				if (petTimeoutRef.current) window.clearTimeout(petTimeoutRef.current);
				petTimeoutRef.current = window.setTimeout(() => setRecentAction(null), 2600);
			}
		})
	});
}
var WALL_PALETTE = [
	{
		label: "کرم عاجی",
		hex: "#e9dcc8"
	},
	{
		label: "گچی گرم",
		hex: "#f2e8d9"
	},
	{
		label: "پسته‌ای ملایم",
		hex: "#d3dfd1"
	},
	{
		label: "فیروزه‌ای پودری",
		hex: "#cde2e3"
	},
	{
		label: "شنی کاشان",
		hex: "#dfc9ae"
	}
];
var FLOOR_MATERIALS = [
	{
		id: "walnut",
		label: "چوب گردو"
	},
	{
		id: "oak",
		label: "بلوط گرم"
	},
	{
		id: "cream_tile",
		label: "سنگ کرم"
	},
	{
		id: "marble",
		label: "مرمر یزد"
	}
];
var SEASONS = [
	{
		id: "spring",
		label: "بهار"
	},
	{
		id: "summer",
		label: "تابستان"
	},
	{
		id: "autumn",
		label: "پاییز"
	},
	{
		id: "winter",
		label: "زمستان"
	}
];
var HomeDesignerWorld = () => {
	const home = useUniverseStore((s) => s.home);
	const greenhouseSlots = useUniverseStore((s) => s.greenhouse.slots);
	const quality = useUniverseStore((s) => s.environment.quality);
	const reducedMotion = useUniverseStore((s) => s.environment.reducedMotion);
	const homeUndoStackLength = useUniverseStore((s) => s.homeUndoStack.length);
	const setActiveRoom = useUniverseStore((s) => s.setActiveRoom);
	const setHomeStyle = useUniverseStore((s) => s.setHomeStyle);
	const pushHomeUndoSnapshot = useUniverseStore((s) => s.pushHomeUndoSnapshot);
	const undoHomeChange = useUniverseStore((s) => s.undoHomeChange);
	const placeFurniture = useUniverseStore((s) => s.placeFurniture);
	const updateFurnitureTransform = useUniverseStore((s) => s.updateFurnitureTransform);
	const flushPersist = useUniverseStore((s) => s.flushPersist);
	const rotateFurniture = useUniverseStore((s) => s.rotateFurniture);
	const scaleFurniture = useUniverseStore((s) => s.scaleFurniture);
	const duplicateFurniture = useUniverseStore((s) => s.duplicateFurniture);
	const removeFurniture = useUniverseStore((s) => s.removeFurniture);
	const resetHomeLayout = useUniverseStore((s) => s.resetHomeLayout);
	const revertLastSavedHome = useUniverseStore((s) => s.revertLastSavedHome);
	const saveHomePreset = useUniverseStore((s) => s.saveHomePreset);
	const loadHomePreset = useUniverseStore((s) => s.loadHomePreset);
	const placeGreenhousePlantInHome = useUniverseStore((s) => s.placeGreenhousePlantInHome);
	const interactWithCat = useUniverseStore((s) => s.interactWithCat);
	const profile = (0, import_react.useMemo)(() => getGraphicsProfile(quality, reducedMotion), [quality, reducedMotion]);
	const [editMode, setEditMode] = (0, import_react.useState)(false);
	const [cutawayMode, setCutawayMode] = (0, import_react.useState)(false);
	const [selectedUid, setSelectedUid] = (0, import_react.useState)(null);
	const [draggingUid, setDraggingUid] = (0, import_react.useState)(null);
	const [dockOpen, setDockOpen] = (0, import_react.useState)(false);
	const [dockTab, setDockTab] = (0, import_react.useState)("catalog");
	const [activeCategory, setActiveCategory] = (0, import_react.useState)("furniture");
	const [presetName, setPresetName] = (0, import_react.useState)("");
	const [toastMsg, setToastMsg] = (0, import_react.useState)(null);
	const [catStatus, setCatStatus] = (0, import_react.useState)("");
	const [catEmotion, setCatEmotion] = (0, import_react.useState)("curious");
	const [activePresetId, setActivePresetId] = (0, import_react.useState)("overview_courtyard");
	const [cameraRequest, setCameraRequest] = (0, import_react.useState)({
		pos: MANSION_CAMERA_PRESETS[0].position,
		target: MANSION_CAMERA_PRESETS[0].target,
		nonce: 1
	});
	const walkInputRef = (0, import_react.useRef)({
		forward: 0,
		right: 0
	});
	const timeMode = home.timeMode ?? "day";
	const snapToGrid = home.snapToGrid ?? true;
	const showToast = (0, import_react.useCallback)((msg) => {
		setToastMsg(msg);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!toastMsg) return;
		const t = window.setTimeout(() => setToastMsg(null), 2600);
		return () => window.clearTimeout(t);
	}, [toastMsg]);
	const selectedItem = (0, import_react.useMemo)(() => home.items.find((i) => i.uid === selectedUid) ?? null, [home.items, selectedUid]);
	const selectedMeta = (0, import_react.useMemo)(() => selectedItem ? getCatalogMeta(selectedItem.kind) : null, [selectedItem]);
	const applyCameraPreset = (0, import_react.useCallback)((preset) => {
		audioEngine.playSfx("click");
		setActivePresetId(preset.id);
		if (preset.zone) setActiveRoom(preset.zone);
		if (preset.cutawayRecommended !== void 0) setCutawayMode(preset.cutawayRecommended);
		setCameraRequest((prev) => ({
			pos: preset.position,
			target: preset.target,
			nonce: (prev?.nonce ?? 0) + 1
		}));
	}, [setActiveRoom]);
	const handleToggleEditMode = () => {
		audioEngine.playSfx("click");
		const next = !editMode;
		setEditMode(next);
		if (next) {
			setDockOpen(true);
			setDockTab("catalog");
			showToast("حالت چیدمان فعال شد؛ روی هر وسیله بزنید و با کشیدن جابه‌جا کنید");
		} else {
			setSelectedUid(null);
			setDraggingUid(null);
		}
	};
	const handleStartItemDrag = (0, import_react.useCallback)((uid) => {
		setSelectedUid(uid);
		setDraggingUid(uid);
		pushHomeUndoSnapshot();
	}, [pushHomeUndoSnapshot]);
	const handleDragMove = (0, import_react.useCallback)((uid, position, rotationY, room) => {
		updateFurnitureTransform(uid, {
			position,
			rotationY,
			room
		}, false, false);
	}, [updateFurnitureTransform]);
	const handleStopDrag = (0, import_react.useCallback)(() => {
		setDraggingUid(null);
		flushPersist();
	}, [flushPersist]);
	const handleClearPresetTransition = (0, import_react.useCallback)(() => {}, []);
	const handlePetCat = (0, import_react.useCallback)(() => interactWithCat("pet"), [interactWithCat]);
	const handleAddCatalogItem = (kind) => {
		const meta = getCatalogMeta(kind);
		const zone = getZoneMeta(home.activeRoom);
		const basePos = [
			Number(((zone.minX + zone.maxX) / 2 + (Math.random() - .5) * 1.1).toFixed(2)),
			zone.floorY,
			Number(((zone.minZ + zone.maxZ) / 2 + (Math.random() - .5) * 1.1).toFixed(2))
		];
		const draft = {
			uid: "temp-place",
			kind,
			room: zone.id,
			position: basePos,
			rotationY: 0,
			color: meta.defaultColor,
			scale: meta.defaultScale,
			surface: meta.surface
		};
		const resolved = resolveSmartPlacement(draft, basePos[0], basePos[2], home.items, snapToGrid);
		const newUid = placeFurniture(kind, resolved.room, resolved.position, meta.defaultColor, {
			rotationY: resolved.rotationY,
			scale: meta.defaultScale,
			surface: meta.surface
		});
		setSelectedUid(newUid);
		setEditMode(true);
		audioEngine.playSfx("sparkle");
		showToast(`«${meta.label}» به ${getZoneMeta(resolved.room).label} اضافه شد`);
	};
	const handleAddGreenhousePlant = (slotIndex) => {
		const slot = greenhouseSlots.find((s) => s.slotIndex === slotIndex);
		if (!slot || !slot.species) return;
		const zone = getZoneMeta(home.activeRoom);
		const seedX = zone.id === "courtyard" ? -3.8 + slotIndex % 3 * .9 : (zone.minX + zone.maxX) / 2;
		const seedZ = zone.id === "courtyard" ? -3.4 + Math.floor(slotIndex / 3) * 6.5 : (zone.minZ + zone.maxZ) / 2;
		const newUid = placeGreenhousePlantInHome(slotIndex, zone.id, [
			seedX,
			zone.floorY,
			seedZ
		]);
		if (newUid) {
			const placed = useUniverseStore.getState().home.items.find((i) => i.uid === newUid);
			if (placed) {
				const resolved = resolveSmartPlacement(placed, seedX, seedZ, home.items, snapToGrid);
				updateFurnitureTransform(newUid, {
					position: resolved.position,
					room: resolved.room
				});
			}
			setSelectedUid(newUid);
			setEditMode(true);
			audioEngine.playSfx("sparkle");
			showToast(`«${PLANT_SPECIES_INFO[slot.species].label}» از گلخانه به عمارت آورده شد`);
		}
	};
	const handleCatStatusChange = (0, import_react.useCallback)((text, emotion) => {
		setCatStatus(text);
		setCatEmotion(emotion);
	}, []);
	const sceneBg = timeMode === "night" ? "#10162d" : timeMode === "sunset" ? "#c97b5d" : "#a9cfe2";
	const fogColor = timeMode === "night" ? "#151c38" : timeMode === "sunset" ? "#d98f6c" : "#cde2ed";
	const filteredCatalog = (0, import_react.useMemo)(() => MANSION_CATALOG.filter((item) => item.category === activeCategory), [activeCategory]);
	const grownGreenhouseSlots = (0, import_react.useMemo)(() => greenhouseSlots.filter((s) => s.species !== null), [greenhouseSlots]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full h-full select-none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SceneCanvas, {
				cameraPosition: [
					.6,
					8.9,
					13.4
				],
				fov: 48,
				bgColor: sceneBg,
				fogColor,
				fogNear: 26,
				fogFar: 78,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MansionArchitecture, {
						timeMode,
						season: home.season,
						wallColor: home.wallColor,
						floorMaterial: home.floorMaterial,
						lightWarmth: home.lightWarmth,
						cutawayMode
					}),
					home.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MansionFurnitureItem, {
						item,
						selected: selectedUid === item.uid,
						editMode,
						timeMode,
						lodLevel: profile.lodLevel,
						enableTransmission: profile.enableTransmission,
						onPointerStart: handleStartItemDrag
					}, item.uid)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MansionLiveCat, {
						allItems: home.items,
						activeRoom: home.activeRoom,
						onStatusChange: handleCatStatusChange,
						onPet: handlePetCat
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MansionDragController, {
						draggingUid,
						items: home.items,
						snapToGrid,
						onMoveItem: handleDragMove,
						onStopDrag: handleStopDrag
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MansionCameraRig, {
						presetRequest: cameraRequest,
						draggingUid,
						walkInputRef,
						onClearPresetTransition: handleClearPresetTransition
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed top-14 sm:top-16 inset-x-0 z-20 px-3 pointer-events-none flex flex-col gap-1.5 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto w-full max-w-5xl flex items-center justify-between gap-2 flex-wrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5 flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: handleToggleEditMode,
							className: `flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${editMode ? "bg-[#d4a84f] text-[#17172F] border-[#f2e4cb]" : "bg-[#17172F]/90 text-[#F1DCCB] border-[#d4a84f]/45 hover:bg-[#232346]"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: editMode ? "خروج از ویرایش" : "چیدمان خانه" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								audioEngine.playSfx("click");
								setCutawayMode((v) => !v);
							},
							className: `flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs border transition-all cursor-pointer ${cutawayMode ? "bg-[#257d82] text-[#F1DCCB] border-[#96e3e6]/60" : "bg-[#17172F]/90 text-[#F1DCCB] border-white/15 hover:bg-[#232346]"}`,
							title: "باز کردن سقف برای چیدمان و دید کل‌نگر",
							children: [cutawayMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-3.5 h-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cutawayMode ? "نمای باز (بدون سقف)" : "سقف کامل" })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1 bg-[#17172F]/90 border border-white/15 rounded-xl p-1",
						children: [
							[
								"day",
								"روز",
								Sun
							],
							[
								"sunset",
								"غروب",
								Sunset
							],
							[
								"night",
								"شب",
								Moon
							]
						].map(([modeId, label, Icon]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								audioEngine.playSfx("click");
								setHomeStyle({ timeMode: modeId });
							},
							className: `flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium cursor-pointer transition-colors ${timeMode === modeId ? "bg-[#d4a84f] text-[#17172F] font-bold" : "text-[#F1DCCB]/85 hover:bg-white/10"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
						}, modeId))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto w-full max-w-5xl flex items-center gap-1.5 overflow-x-auto pb-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[11px] text-[#d4a84f] shrink-0 flex items-center gap-1 bg-[#17172F]/85 px-2 py-1.5 rounded-xl border border-white/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "بخش‌های عمارت:" })]
					}), MANSION_CAMERA_PRESETS.map((preset) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => applyCameraPreset(preset),
						className: `px-2.5 py-1.5 rounded-xl text-[11px] whitespace-nowrap shrink-0 border cursor-pointer transition-all ${activePresetId === preset.id ? "bg-[#8a1e2b] text-[#f2e4cb] border-[#d4a84f]" : "bg-[#17172F]/85 text-[#F1DCCB] border-white/15 hover:bg-[#232346]"}`,
						children: preset.label
					}, preset.id))]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed top-36 sm:top-38 right-3 sm:right-5 z-20 pointer-events-none flex flex-col gap-1.5 max-w-[235px]",
				children: [catStatus && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-[#17172F]/88 border border-[#d4a84f]/35 px-2.5 py-1.5 shadow-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 text-[10px] text-[#d4a84f] font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["حس گربه: ", CAT_EMOTION_LABELS[catEmotion]] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-[#F1DCCB] leading-snug mt-0.5",
						children: catStatus
					})]
				}), toastMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-xl bg-[#257d82]/95 border border-white/25 px-3 py-1.5 text-[11px] text-white shadow-xl",
					children: toastMsg
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed left-3 top-38 z-20 pointer-events-auto hidden md:flex flex-col items-center gap-1 bg-[#17172F]/80 border border-white/15 rounded-xl p-1.5 text-[10px] text-[#F1DCCB]/80",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "حرکت: W A S D" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-3 gap-0.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onPointerDown: () => walkInputRef.current.forward = 1,
							onPointerUp: () => walkInputRef.current.forward = 0,
							onPointerLeave: () => walkInputRef.current.forward = 0,
							className: "w-6 h-6 rounded bg-white/10 hover:bg-white/20 cursor-pointer",
							children: "▲"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onPointerDown: () => walkInputRef.current.right = -1,
							onPointerUp: () => walkInputRef.current.right = 0,
							onPointerLeave: () => walkInputRef.current.right = 0,
							className: "w-6 h-6 rounded bg-white/10 hover:bg-white/20 cursor-pointer",
							children: "◀"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onPointerDown: () => walkInputRef.current.forward = -1,
							onPointerUp: () => walkInputRef.current.forward = 0,
							onPointerLeave: () => walkInputRef.current.forward = 0,
							className: "w-6 h-6 rounded bg-white/10 hover:bg-white/20 cursor-pointer",
							children: "▼"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onPointerDown: () => walkInputRef.current.right = 1,
							onPointerUp: () => walkInputRef.current.right = 0,
							onPointerLeave: () => walkInputRef.current.right = 0,
							className: "w-6 h-6 rounded bg-white/10 hover:bg-white/20 cursor-pointer",
							children: "▶"
						})
					]
				})]
			}),
			editMode && selectedItem && selectedMeta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed bottom-52 sm:bottom-56 inset-x-0 z-30 flex justify-center px-3 pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto w-full max-w-2xl rounded-2xl bg-[#17172F]/95 border border-[#d4a84f]/65 px-3 py-2.5 shadow-2xl space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2 flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-bold text-[#d4a84f]",
									children: selectedMeta.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-[#F1DCCB]/75 bg-white/10 px-2 py-0.5 rounded-lg",
									children: getZoneMeta(selectedItem.room).label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] text-[#9be0dc] flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Move, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "بکشید تا جابه‌جا شود" })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1.5",
							children: selectedMeta.colorOptions.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => updateFurnitureTransform(selectedItem.uid, { color: c.hex }, true),
								className: `w-5 h-5 rounded-full border-2 cursor-pointer ${selectedItem.color === c.hex ? "border-white scale-110" : "border-transparent"}`,
								style: { backgroundColor: c.hex },
								title: c.label
							}, c.hex))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-1.5 flex-wrap",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										audioEngine.playSfx("click");
										rotateFurniture(selectedItem.uid, -Math.PI / 12);
									},
									className: "px-2 py-1 rounded-lg bg-[#232645] hover:bg-[#313661] text-[11px] text-[#F1DCCB] flex items-center gap-1 cursor-pointer",
									title: "چرخش ۱۵ درجه چپ",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "۱۵°" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										audioEngine.playSfx("click");
										rotateFurniture(selectedItem.uid, Math.PI / 12);
									},
									className: "px-2 py-1 rounded-lg bg-[#232645] hover:bg-[#313661] text-[11px] text-[#F1DCCB] flex items-center gap-1 cursor-pointer",
									title: "چرخش ۱۵ درجه راست",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCw, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "۱۵°" })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1 bg-[#232645] px-2 py-1 rounded-lg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											const cur = selectedItem.scale ?? selectedMeta.defaultScale;
											scaleFurniture(selectedItem.uid, clampScaleForKind(selectedItem.kind, cur - .08));
										},
										className: "p-0.5 rounded hover:bg-white/10 text-[#F1DCCB] cursor-pointer",
										title: "کوچک‌تر",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "w-3.5 h-3.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-[11px] text-[#d4a84f] min-w-[42px] text-center tabular-nums",
										children: [toPersianDigits(Math.round((selectedItem.scale ?? selectedMeta.defaultScale) * 100)), "٪"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											const cur = selectedItem.scale ?? selectedMeta.defaultScale;
											scaleFurniture(selectedItem.uid, clampScaleForKind(selectedItem.kind, cur + .08));
										},
										className: "p-0.5 rounded hover:bg-white/10 text-[#F1DCCB] cursor-pointer",
										title: "بزرگ‌تر",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3.5 h-3.5" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								children: [
									selectedMeta.allowMultiple && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											const copyUid = duplicateFurniture(selectedItem.uid);
											if (copyUid) {
												setSelectedUid(copyUid);
												audioEngine.playSfx("sparkle");
												showToast("یک نسخه مشابه اضافه شد");
											}
										},
										className: "px-2 py-1 rounded-lg bg-[#257d82] text-white text-[11px] flex items-center gap-1 cursor-pointer",
										title: "تکرار",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "تکرار" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											updateFurnitureTransform(selectedItem.uid, {
												scale: selectedMeta.defaultScale,
												rotationY: 0
											}, true);
											showToast("اندازه و زاویه به حالت اولیه برگشت");
										},
										className: "px-2 py-1 rounded-lg bg-[#232645] text-[#F1DCCB] text-[11px] cursor-pointer",
										children: "اندازه اصلی"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											removeFurniture(selectedItem.uid);
											setSelectedUid(null);
											audioEngine.playSfx("click");
										},
										className: "p-1.5 rounded-lg bg-[#7a2232] text-white cursor-pointer",
										title: "حذف وسیله",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3.5 h-3.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											setSelectedUid(null);
											audioEngine.playSfx("click");
										},
										className: "px-2.5 py-1 rounded-lg bg-[#d4a84f] text-[#17172F] text-[11px] font-bold flex items-center gap-1 cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "تأیید" })]
									})
								]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed bottom-2.5 inset-x-0 z-20 flex flex-col items-center px-3 pointer-events-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto flex items-center gap-1.5 mb-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setDockOpen((v) => !v),
						className: "px-3.5 py-1 rounded-t-xl bg-[#17172F]/92 border border-b-0 border-[#d4a84f]/45 text-[11px] font-medium text-[#F1DCCB] cursor-pointer",
						children: dockOpen ? "جمع کردن منوی چیدمان" : "باز کردن کاتالوگ و چیدمان عمارت"
					}), homeUndoStackLength > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							if (undoHomeChange()) {
								audioEngine.playSfx("click");
								showToast("آخرین تغییر بازگردانده شد");
							}
						},
						className: "px-2.5 py-1 rounded-t-xl bg-[#2a2748]/95 border border-b-0 border-[#d4a84f]/40 text-[11px] text-[#d4a84f] flex items-center gap-1 cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Undo2, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "لغو" })]
					})]
				}), dockOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto w-full max-w-4xl rounded-2xl bg-[#17172F]/94 border border-[#d4a84f]/45 p-3 shadow-2xl space-y-2.5 max-h-[44vh] overflow-y-auto",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2 border-b border-white/10 pb-2 flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setDockTab("catalog"),
								className: `flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs cursor-pointer ${dockTab === "catalog" ? "bg-[#8a1e2b] text-[#f2e4cb] font-bold" : "bg-[#222542] text-[#F1DCCB]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "وسایل، فرش و گل‌ها" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setDockTab("style"),
								className: `flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs cursor-pointer ${dockTab === "style" ? "bg-[#8a1e2b] text-[#f2e4cb] font-bold" : "bg-[#222542] text-[#F1DCCB]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Palette, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "معماری و ذخیره چیدمان" })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setHomeStyle({ snapToGrid: !snapToGrid }),
								className: `flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[11px] border cursor-pointer ${snapToGrid ? "bg-[#257d82] text-white border-[#8fdcdf]/50" : "bg-[#222542] text-[#F1DCCB]/80 border-white/10"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid3x3, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: snapToGrid ? "چسبندگی شبکه: روشن" : "آزاد" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[11px] text-[#d4a84f] hidden sm:inline",
								children: ["فضای فعال: ", getZoneMeta(home.activeRoom).label]
							})]
						})]
					}), dockTab === "catalog" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1.5 overflow-x-auto pb-1",
							children: CATALOG_CATEGORIES.map((catMeta) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setActiveCategory(catMeta.id),
								className: `px-2.5 py-1.5 rounded-xl text-[11px] whitespace-nowrap shrink-0 cursor-pointer transition-colors ${activeCategory === catMeta.id ? "bg-[#d4a84f] text-[#17172F] font-bold" : "bg-[#222542] text-[#F1DCCB] hover:bg-[#2d3258]"}`,
								children: catMeta.label
							}, catMeta.id))
						}), activeCategory === "greenhouse" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-[#9be0dc]",
								children: "گیاهان و گل‌هایی که در «گلخانه جادویی» کاشته‌اید، اینجا مستقیماً به باغچه و اتاق‌های عمارت منتقل می‌شوند:"
							}), grownGreenhouseSlots.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-3 rounded-xl bg-[#222542] text-xs text-[#F1DCCB]/80",
								children: "فعلاً در گلخانه بذری کاشته نشده است؛ می‌توانید از دنیای «گلخانه جادویی» بذر بکارید و به عمارت بیاورید."
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-2 overflow-x-auto pb-1",
								children: grownGreenhouseSlots.map((slot) => {
									const spInfo = PLANT_SPECIES_INFO[slot.species];
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => handleAddGreenhousePlant(slot.slotIndex),
										className: "flex items-center gap-2 px-3 py-2 rounded-xl bg-[#222542] hover:bg-[#2e355b] border border-[#9be0dc]/35 text-right shrink-0 cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flower2, {
											className: "w-5 h-5 shrink-0",
											style: { color: spInfo.color }
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs font-semibold text-[#F1DCCB]",
											children: [
												spInfo.label,
												" (گلدان ",
												toPersianDigits(slot.slotIndex + 1),
												")"
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-[10px] text-[#9be0dc]",
											children: [
												"رشد ",
												toPersianDigits(slot.growthProgress),
												"٪ · افزودن به عمارت"
											]
										})] })]
									}, slot.slotIndex);
								})
							})]
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2 overflow-x-auto pb-1",
							children: filteredCatalog.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => handleAddCatalogItem(item.kind),
								className: "flex items-center gap-2 px-2.5 py-2 rounded-xl bg-[#222542] hover:bg-[#2f345a] border border-white/10 text-right shrink-0 cursor-pointer transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatalogPreviewThumb, {
									category: item.category,
									color: item.defaultColor
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs font-medium text-[#F1DCCB] whitespace-nowrap",
									children: item.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] text-[#d4a84f]",
									children: item.surface === "table" ? "رومیزی (چسبان به میز)" : item.surface === "wall" ? "دیواری (چسبان به دیوار)" : item.surface === "rug" ? "فرش زیر مبلمان" : item.surface === "garden" ? "مناسب باغچه و حیاط" : "چیدمان روی زمین"
								})] })]
							}, item.kind))
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3 flex-wrap",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1.5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] text-[#d4a84f]",
											children: "رنگ گچ دیوارها:"
										}), WALL_PALETTE.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setHomeStyle({ wallColor: w.hex }),
											className: `w-6 h-6 rounded-full border-2 cursor-pointer ${home.wallColor === w.hex ? "border-[#d4a84f] scale-110" : "border-white/25"}`,
											style: { backgroundColor: w.hex },
											title: w.label
										}, w.hex))]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] text-[#d4a84f]",
											children: "کف‌پوش:"
										}), FLOOR_MATERIALS.map((fm) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setHomeStyle({ floorMaterial: fm.id }),
											className: `px-2 py-1 rounded-lg text-[11px] cursor-pointer ${home.floorMaterial === fm.id ? "bg-[#d4a84f] text-[#17172F] font-bold" : "bg-[#222542] text-[#F1DCCB]"}`,
											children: fm.label
										}, fm.id))]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[11px] text-[#d4a84f]",
											children: "فصل باغ:"
										}), SEASONS.map((se) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setHomeStyle({ season: se.id }),
											className: `px-2 py-1 rounded-lg text-[11px] cursor-pointer ${home.season === se.id ? "bg-[#257d82] text-white font-bold" : "bg-[#222542] text-[#F1DCCB]"}`,
											children: se.label
										}, se.id))]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2 pt-1 border-t border-white/10 flex-wrap",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: presetName,
										onChange: (e) => setPresetName(e.target.value),
										placeholder: "نام چیدمان (مثلاً شب یلدا)...",
										className: "px-2.5 py-1.5 rounded-xl bg-[#222542] border border-white/15 text-xs text-[#F1DCCB] w-44 focus:outline-none"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											saveHomePreset(presetName);
											setPresetName("");
											audioEngine.playSfx("sparkle");
											showToast("چیدمان فعلی در حافظه مرورگر ذخیره شد");
										},
										className: "flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#d4a84f] text-[#17172F] text-xs font-bold cursor-pointer",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Save, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "ذخیره" })]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1.5 flex-wrap",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											if (revertLastSavedHome()) {
												audioEngine.playSfx("click");
												showToast("به آخرین چیدمان ذخیره‌شده برگشتید");
											}
										},
										className: "px-2.5 py-1.5 rounded-xl bg-[#222542] hover:bg-[#2d3258] text-[11px] text-[#F1DCCB] cursor-pointer",
										children: "بازگشت به آخرین ذخیره"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											resetHomeLayout();
											setSelectedUid(null);
											audioEngine.playSfx("click");
											showToast("عمارت به چیدمان اصیل پیش‌فرض بازگردانی شد");
										},
										className: "px-2.5 py-1.5 rounded-xl bg-[#7a2232] hover:bg-[#912b3d] text-[11px] text-white cursor-pointer",
										children: "بازنشانی پیش‌فرض"
									})]
								})]
							}),
							home.savedPresets.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 overflow-x-auto pb-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[11px] text-[#d4a84f] shrink-0 flex items-center gap-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "چیدمان‌های ذخیره‌شده:" })]
								}), home.savedPresets.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => {
										loadHomePreset(p.id);
										audioEngine.playSfx("click");
										showToast(`چیدمان «${p.name}» بارگذاری شد`);
									},
									className: `px-2.5 py-1 rounded-xl text-[11px] shrink-0 cursor-pointer ${home.activePresetId === p.id ? "bg-[#257d82] text-white font-semibold" : "bg-[#222542] text-[#F1DCCB]"}`,
									children: p.name
								}, p.id))]
							})
						]
					})]
				})]
			})
		]
	});
};
export { HomeDesignerWorld };
