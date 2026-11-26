import { a as __toESM } from "./rolldown-runtime-DQp2zzRu.js";
import { Vt as require_react, et as MathUtils, l as require_jsx_runtime, r as OrbitControls, s as useFrame, t as Sparkles } from "./r3f-core-XgHUAlSk.js";
import { f as useUniverseStore, l as toPersianDigits, o as createLucideIcon, s as audioEngine, u as SceneCanvas, w as getGraphicsProfile } from "./entry-Br_QEXnh.js";
import { t as Plus } from "./plus-D8B-_I8e.js";
import { t as Sparkles$1 } from "./sparkles-NkR5KE3G.js";
import { t as Trash2 } from "./trash-2-BCdyRI2p.js";
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Fish = createLucideIcon("fish", [
	["path", {
		d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",
		key: "15baut"
	}],
	["path", {
		d: "M18 12v.5",
		key: "18hhni"
	}],
	["path", {
		d: "M16 17.93a9.77 9.77 0 0 1 0-11.86",
		key: "16dt7o"
	}],
	["path", {
		d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",
		key: "l9di03"
	}],
	["path", {
		d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",
		key: "1kjonw"
	}],
	["path", {
		d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",
		key: "1zlm23"
	}]
]);
// src/worlds/Aquarium/AquariumWorld.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var FISH_CATALOG = [
	{
		species: "clown",
		label: "دلقک‌ماهی",
		color: "#eb7d4b",
		accent: "#ffffff"
	},
	{
		species: "angelfish",
		label: "فرشته‌ماهی طلایی",
		color: "#D6B875",
		accent: "#F1DCCB"
	},
	{
		species: "betta",
		label: "بتای اسطوخودوسی",
		color: "#7771A8",
		accent: "#D9A9C5"
	},
	{
		species: "neon",
		label: "ماهی نئون",
		color: "#6fd0e8",
		accent: "#D9A9C5"
	},
	{
		species: "turtle",
		label: "لاک‌پشت کوچولو",
		color: "#8ba88e",
		accent: "#627d65"
	}
];
var DECOR_CATALOG = [
	{
		kind: "coral_pink",
		label: "مرجان صورتی"
	},
	{
		kind: "coral_lavender",
		label: "مرجان بنفش"
	},
	{
		kind: "shell_pearl",
		label: "صدف مروارید"
	},
	{
		kind: "sea_rock",
		label: "صخره دریایی"
	},
	{
		kind: "kelp_clump",
		label: "گیاه دریایی"
	}
];
var SwimmingFish3D = import_react.memo(function SwimmingFish3D({ fish, index, feeding, reducedMotion }) {
	const groupRef = (0, import_react.useRef)(null);
	const tailRef = (0, import_react.useRef)(null);
	const meta = FISH_CATALOG.find((f) => f.species === fish.species) || FISH_CATALOG[0];
	const swimParams = (0, import_react.useMemo)(() => ({
		rx: 1.6 + index % 3 * .85,
		rz: 1.1 + index % 2 * .7,
		speed: .45 + index % 4 * .12,
		yBase: -.6 + index % 4 * .55,
		phase: index * 1.4
	}), [index]);
	useFrame(({ clock }) => {
		if (!groupRef.current) return;
		if (reducedMotion) {
			if (groupRef.current.position.lengthSq() === 0) groupRef.current.position.set(Math.cos(swimParams.phase) * swimParams.rx, swimParams.yBase, Math.sin(swimParams.phase) * swimParams.rz);
			return;
		}
		const t = clock.getElapsedTime();
		const a = t * swimParams.speed + swimParams.phase;
		const x = Math.cos(a) * swimParams.rx;
		const z = Math.sin(a * 1.2) * swimParams.rz;
		const targetY = feeding ? .85 + Math.sin(t * 2 + index) * .25 : swimParams.yBase + Math.sin(t * 1.5 + index) * .2;
		const prevX = groupRef.current.position.x;
		const prevZ = groupRef.current.position.z;
		groupRef.current.position.x = MathUtils.lerp(prevX, x, .08);
		groupRef.current.position.z = MathUtils.lerp(prevZ, z, .08);
		groupRef.current.position.y = MathUtils.lerp(groupRef.current.position.y, targetY, .04);
		const dx = groupRef.current.position.x - prevX;
		const dz = groupRef.current.position.z - prevZ;
		if (Math.hypot(dx, dz) > .001) groupRef.current.rotation.y = Math.atan2(dx, dz);
		if (tailRef.current) tailRef.current.rotation.y = Math.sin(t * 9 + index) * .4;
	});
	if (fish.species === "turtle") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: groupRef,
		scale: fish.size,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				scale: [
					1,
					.55,
					1.2
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.32,
					16,
					16
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: meta.accent,
					roughness: .6
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					-.02,
					.34
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.12,
					12,
					12
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: meta.color,
					roughness: .55
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				ref: tailRef,
				position: [
					0,
					-.04,
					-.35
				],
				rotation: [
					.2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
					.06,
					.16,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { color: meta.color })]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: groupRef,
		scale: fish.size,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				scale: [
					.7,
					.95,
					1.45
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.2,
					16,
					16
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: meta.color,
					roughness: .3,
					metalness: .1
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.18,
					0
				],
				rotation: [
					.3,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
					.08,
					.22,
					6
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: meta.accent,
					roughness: .4
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				ref: tailRef,
				position: [
					0,
					0,
					-.32
				],
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
					.16,
					.24,
					6
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: meta.accent,
					roughness: .35
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					.1,
					.05,
					.18
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.032,
					8,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", { color: "#17172F" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					-.1,
					.05,
					.18
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.032,
					8,
					8
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", { color: "#17172F" })]
			})
		]
	});
});
var CoralAndDecor3D = import_react.memo(function CoralAndDecor3D({ dec, selected, enablePhysicalSheen, reducedMotion, onSelect }) {
	const kelpRef = (0, import_react.useRef)(null);
	useFrame(({ clock }) => {
		if (reducedMotion || !kelpRef.current) return;
		kelpRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 1.6 + dec.position[0]) * .12;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position: dec.position,
		rotation: [
			0,
			dec.rotationY,
			0
		],
		scale: dec.scale,
		onClick: (e) => {
			e.stopPropagation();
			onSelect(dec.id);
		},
		children: [
			selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.06,
					0
				],
				rotation: [
					-Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ringGeometry", { args: [
					.5,
					.6,
					20
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: "#D6B875",
					side: 2
				})]
			}),
			(dec.kind === "coral_pink" || dec.kind === "coral_lavender") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", { children: [
				0,
				1,
				2,
				3
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					(i - 1.5) * .15,
					.35 + i % 2 * .15,
					(i % 3 - 1) * .1
				],
				rotation: [
					.2 * (i - 1),
					0,
					.18 * (i - 1.5)
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
					.08,
					.45,
					6,
					10
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: dec.kind === "coral_pink" ? "#D9A9C5" : "#7771A8",
					roughness: .65
				})]
			}, i)) }),
			dec.kind === "shell_pearl" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					.15,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.42,
					.18,
					.12,
					12
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#F1DCCB",
					roughness: .4
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.16,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.14,
					16,
					16
				] }), enablePhysicalSheen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
					color: "#fff8f2",
					roughness: .1,
					clearcoat: 1
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#fff8f2",
					roughness: .15,
					metalness: .2
				})]
			})] }),
			dec.kind === "sea_rock" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.25,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dodecahedronGeometry", { args: [.45, 0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#585a78",
					roughness: .9,
					flatShading: true
				})]
			}),
			dec.kind === "kelp_clump" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
				ref: kelpRef,
				children: [
					-.12,
					0,
					.12
				].map((kx, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						kx,
						.75 + i * .1,
						(i - 1) * .08
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("capsuleGeometry", { args: [
						.06,
						1.35,
						6,
						10
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#7da886",
						roughness: .65
					})]
				}, i))
			})
		]
	});
});
function AquariumSceneContent({ feeding, selectedDecorId, onSelectDecor }) {
	const fish = useUniverseStore((s) => s.aquarium.fish);
	const decor = useUniverseStore((s) => s.aquarium.decor);
	const lightMode = useUniverseStore((s) => s.aquarium.lightMode);
	const waterClarity = useUniverseStore((s) => s.aquarium.waterClarity);
	const moveAquariumDecor = useUniverseStore((s) => s.moveAquariumDecor);
	const quality = useUniverseStore((s) => s.environment.quality);
	const reducedMotion = useUniverseStore((s) => s.environment.reducedMotion);
	const profile = (0, import_react.useMemo)(() => getGraphicsProfile(quality, reducedMotion), [quality, reducedMotion]);
	const bubblesRef = (0, import_react.useRef)(null);
	const foodRef = (0, import_react.useRef)(null);
	const bubbleIndices = (0, import_react.useMemo)(() => {
		const count = profile.lodLevel === "low" ? 8 : profile.lodLevel === "balanced" ? 12 : 18;
		return Array.from({ length: count }, (_, i) => i);
	}, [profile.lodLevel]);
	const handleToggleDecor = (0, import_react.useCallback)((id) => {
		onSelectDecor(selectedDecorId === id ? null : id);
	}, [onSelectDecor, selectedDecorId]);
	useFrame(({ clock }) => {
		if (profile.systemReducedMotion) return;
		const t = clock.getElapsedTime();
		if (bubblesRef.current) {
			const children = bubblesRef.current.children;
			for (let i = 0; i < children.length; i++) children[i].position.y = -1.6 + (t * (.65 + i % 3 * .15) + i * .45) % 3.4;
		}
		if (foodRef.current && feeding) {
			const children = foodRef.current.children;
			for (let i = 0; i < children.length; i++) children[i].position.y = 1.6 - (t * .8 + i * .2) % 2.4;
		}
	});
	const lightTint = lightMode === "deep_moon" ? "#4b5591" : lightMode === "coral_glow" ? "#b57ba6" : "#6bc4d6";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", {
			intensity: .48,
			color: lightTint
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
			lightTint,
			"#17172F",
			.75
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				2,
				8,
				4
			],
			intensity: 1.3,
			color: "#d4f4ff",
			castShadow: profile.shadowsEnabled,
			"shadow-mapSize": [profile.shadowMapSize, profile.shadowMapSize]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
			count: Math.max(10, Math.round(40 * profile.particleScale)),
			scale: [
				8,
				4,
				5
			],
			size: 2,
			speed: profile.systemReducedMotion ? 0 : .2,
			color: "#b8f0ff"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				-1.75,
				0
			],
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			receiveShadow: true,
			onClick: (e) => {
				if (selectedDecorId) {
					e.stopPropagation();
					moveAquariumDecor(selectedDecorId, [
						MathUtils.clamp(e.point.x, -3.5, 3.5),
						-1.65,
						MathUtils.clamp(e.point.z, -1.8, 1.8)
					]);
				}
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [8.4, 4.8] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#e0cbb3",
				roughness: .95
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.15,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				8.5,
				3.85,
				4.9
			] }), profile.enablePhysicalSheen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: lightTint,
				transparent: true,
				opacity: .14 + (100 - waterClarity) * .003,
				roughness: .08,
				side: 1
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: lightTint,
				transparent: true,
				opacity: .14 + (100 - waterClarity) * .003,
				roughness: .1,
				side: 1
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
			ref: bubblesRef,
			children: bubbleIndices.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					(i % 6 - 2.5) * 1.2,
					-1.5,
					(i % 3 - 1) * 1.1
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.045 + i % 3 * .02,
					10,
					10
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#ffffff",
					transparent: true,
					opacity: .55,
					roughness: .08
				})]
			}, i))
		}),
		feeding && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
			ref: foodRef,
			children: Array.from({ length: 10 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					(i - 4.5) * .45,
					1.4,
					i % 3 * .4 - .4
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.06,
					.03,
					.06
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { color: "#D6B875" })]
			}, i))
		}),
		decor.map((dec) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoralAndDecor3D, {
			dec,
			selected: selectedDecorId === dec.id,
			enablePhysicalSheen: profile.enablePhysicalSheen,
			reducedMotion: profile.systemReducedMotion,
			onSelect: handleToggleDecor
		}, dec.id)),
		fish.map((f, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwimmingFish3D, {
			fish: f,
			index: idx,
			feeding,
			reducedMotion: profile.systemReducedMotion
		}, f.id)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
			enableDamping: true,
			dampingFactor: .05,
			minDistance: 4.2,
			maxDistance: 11,
			maxPolarAngle: Math.PI * .6,
			target: [
				0,
				-.2,
				0
			]
		})
	] });
}
var AquariumWorld = () => {
	const aquarium = useUniverseStore((s) => s.aquarium);
	const addFish = useUniverseStore((s) => s.addFish);
	const removeFish = useUniverseStore((s) => s.removeFish);
	const addAquariumDecor = useUniverseStore((s) => s.addAquariumDecor);
	const removeAquariumDecor = useUniverseStore((s) => s.removeAquariumDecor);
	const cleanAquarium = useUniverseStore((s) => s.cleanAquarium);
	const setAquariumLight = useUniverseStore((s) => s.setAquariumLight);
	const addStars = useUniverseStore((s) => s.addStars);
	const [feeding, setFeeding] = (0, import_react.useState)(false);
	const [selectedDecorId, setSelectedDecorId] = (0, import_react.useState)(null);
	const [tab, setTab] = (0, import_react.useState)("care");
	const [dockOpen, setDockOpen] = (0, import_react.useState)(true);
	const handleFeed = () => {
		setFeeding(true);
		addStars(5);
		audioEngine.playSfx("water");
		window.setTimeout(() => setFeeding(false), 3800);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneCanvas, {
				cameraPosition: [
					0,
					1.2,
					7.6
				],
				fov: 46,
				bgColor: aquarium.lightMode === "deep_moon" ? "#101533" : "#182b45",
				fogNear: 10,
				fogFar: 32,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AquariumSceneContent, {
					feeding,
					selectedDecorId,
					onSelectDecor: setSelectedDecorId
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed top-16 sm:top-20 right-3 sm:right-5 z-20 rounded-2xl bg-[#17172F]/90 border border-[#A6BBAA]/40 px-4 py-2.5 text-xs text-[#F1DCCB] space-y-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["تعداد آبزیان: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-bold text-[#D6B875] tabular-nums",
					children: toPersianDigits(aquarium.fish.length)
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["شفافیت آب: ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-bold text-[#A6BBAA] tabular-nums",
					children: [toPersianDigits(aquarium.waterClarity), "٪"]
				})] })]
			}),
			selectedDecorId && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed top-16 sm:top-20 left-3 sm:left-5 z-20 flex items-center gap-2 rounded-2xl bg-[#17172F]/92 border border-[#D6B875]/50 px-3 py-2 text-xs text-[#F1DCCB]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "روی کف شنی کلیک کن تا جابه‌جا شود" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => {
						removeAquariumDecor(selectedDecorId);
						setSelectedDecorId(null);
					},
					className: "p-1.5 rounded-lg bg-[#38233a] text-[#D9A9C5] cursor-pointer",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3.5 h-3.5" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed bottom-3 inset-x-0 z-20 flex flex-col items-center px-3 pointer-events-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setDockOpen((v) => !v),
					className: "pointer-events-auto mb-1.5 px-3 py-1 rounded-t-xl bg-[#17172F]/90 border border-b-0 border-[#A6BBAA]/40 text-[11px] text-[#F1DCCB] cursor-pointer",
					children: dockOpen ? "جمع کردن ابزار آکواریوم" : "باز کردن مراقبت و چیدمان آکواریوم"
				}), dockOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto w-full max-w-3xl rounded-2xl bg-[#17172F]/92 border border-[#7771A8]/40 p-3 shadow-2xl space-y-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1.5",
							children: [
								["care", "مراقبت و نور"],
								["fish", "ماهی‌ها"],
								["decor", "مرجان و چیدمان"]
							].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setTab(id),
								className: `px-3 py-1.5 rounded-xl text-xs cursor-pointer ${tab === id ? "bg-[#7771A8] text-[#F1DCCB] font-semibold" : "bg-[#212142] text-[#D9A9C5]"}`,
								children: label
							}, id))
						}),
						tab === "care" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2 flex-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: handleFeed,
									className: "flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#D6B875] text-[#17172F] text-xs font-bold cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fish, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "غذا دادن به ماهی‌ها" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										cleanAquarium();
										audioEngine.playSfx("sparkle");
									},
									className: "flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#A6BBAA] text-[#17172F] text-xs font-bold cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles$1, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "شفاف‌سازی آب" })]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-1.5",
								children: [
									["lagoon", "تالاب آبی"],
									["deep_moon", "اعماق شب"],
									["coral_glow", "درخشش مرجان"]
								].map(([mId, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setAquariumLight(mId),
									className: `px-2.5 py-1.5 rounded-xl text-xs cursor-pointer ${aquarium.lightMode === mId ? "bg-[#D9A9C5] text-[#17172F] font-bold" : "bg-[#212142] text-[#F1DCCB]"}`,
									children: label
								}, mId))
							})]
						}),
						tab === "fish" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 overflow-x-auto pb-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-[#D6B875] shrink-0",
									children: "افزودن:"
								}), FISH_CATALOG.map((fc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										addFish(fc.species, fc.label);
										audioEngine.playSfx("water");
									},
									className: "flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-[#222246] text-xs text-[#F1DCCB] whitespace-nowrap shrink-0 cursor-pointer",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3.5 h-3.5 text-[#D6B875]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: fc.label })]
								}, fc.species))]
							}), aquarium.fish.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 overflow-x-auto",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] text-[#D9A9C5] shrink-0",
									children: "موجود:"
								}), aquarium.fish.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => removeFish(f.id),
									className: "px-2 py-1 rounded-lg bg-[#2a2240] text-[11px] text-[#F1DCCB] whitespace-nowrap shrink-0 hover:text-[#D9A9C5] cursor-pointer",
									title: "حذف از آکواریوم",
									children: [f.name, " ×"]
								}, f.id))]
							})]
						}),
						tab === "decor" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2 overflow-x-auto pb-1",
							children: DECOR_CATALOG.map((dc) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									addAquariumDecor(dc.kind, [
										(Math.random() - .5) * 5,
										-1.65,
										(Math.random() - .5) * 2.5
									]);
									audioEngine.playSfx("click");
								},
								className: "flex items-center gap-1 px-3 py-1.5 rounded-xl bg-[#222246] border border-[#7771A8]/35 text-xs text-[#F1DCCB] whitespace-nowrap shrink-0 cursor-pointer",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-3.5 h-3.5 text-[#A6BBAA]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: dc.label })]
							}, dc.kind))
						})
					]
				})]
			})
		]
	});
};
export { AquariumWorld };
