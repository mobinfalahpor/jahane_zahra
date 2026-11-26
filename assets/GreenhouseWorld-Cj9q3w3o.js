import { a as __toESM } from "./rolldown-runtime-DQp2zzRu.js";
import { Vt as require_react, l as require_jsx_runtime, r as OrbitControls, s as useFrame, t as Sparkles } from "./r3f-core-XgHUAlSk.js";
import { t as Droplets } from "./droplets-B5qo1LiR.js";
import { f as useUniverseStore, l as toPersianDigits, o as createLucideIcon, s as audioEngine, u as SceneCanvas, w as getGraphicsProfile } from "./entry-Br_QEXnh.js";
import { t as Trash2 } from "./trash-2-BCdyRI2p.js";
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Sprout = createLucideIcon("sprout", [
	["path", {
		d: "M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3",
		key: "139s4v"
	}],
	["path", {
		d: "M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4",
		key: "1dlkgp"
	}],
	["path", {
		d: "M5 21h14",
		key: "11awu3"
	}]
]);
// src/worlds/Greenhouse/GreenhouseWorld.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var SPECIES_INFO = {
	dream_rose: {
		label: "رز رؤیایی",
		color: "#D9A9C5"
	},
	moon_lavender: {
		label: "اسطوخودوس مهتاب",
		color: "#7771A8"
	},
	crystal_lotus: {
		label: "نیلوفر بلورین",
		color: "#a8e0e8",
		rare: true
	},
	golden_sun: {
		label: "آفتابگردان طلایی",
		color: "#D6B875"
	},
	night_orchid: {
		label: "ارکیده شب",
		color: "#c486d9",
		rare: true
	},
	star_cactus: {
		label: "کاکتوس ستاره‌ای",
		color: "#A6BBAA"
	}
};
var POT_STYLES = [
	{
		id: "terracotta",
		label: "سفال گرم",
		color: "#c97e5d"
	},
	{
		id: "rose_ceramic",
		label: "سرامیک رز",
		color: "#D9A9C5"
	},
	{
		id: "gold_trimmed",
		label: "طلاکوب",
		color: "#D6B875"
	},
	{
		id: "mossy_stone",
		label: "سنگ خزه‌دار",
		color: "#8a9c8e"
	}
];
var SLOT_COORDS = [
	[
		-2.2,
		.72,
		-1
	],
	[
		0,
		.72,
		-1
	],
	[
		2.2,
		.72,
		-1
	],
	[
		-2.2,
		.72,
		1.2
	],
	[
		0,
		.72,
		1.2
	],
	[
		2.2,
		.72,
		1.2
	]
];
var PlantPot3D = import_react.memo(function PlantPot3D({ slot, position, selected, watering, reducedMotion, onSelect }) {
	const plantRef = (0, import_react.useRef)(null);
	const dropsRef = (0, import_react.useRef)(null);
	const potColor = POT_STYLES.find((p) => p.id === slot.potStyle)?.color || "#c97e5d";
	const flowerMeta = slot.species ? SPECIES_INFO[slot.species] : null;
	const stageFactor = Math.max(.15, slot.growthProgress / 100);
	useFrame(({ clock }) => {
		if (reducedMotion) return;
		const t = clock.getElapsedTime();
		if (plantRef.current) plantRef.current.rotation.z = Math.sin(t * 1.4 + slot.slotIndex) * .04;
		if (dropsRef.current && watering) {
			const children = dropsRef.current.children;
			for (let i = 0; i < children.length; i++) children[i].position.y = 1.4 - (t * 2.2 + i * .25) % 1.1;
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		onClick: (e) => {
			e.stopPropagation();
			audioEngine.playSfx("click");
			onSelect(slot.slotIndex);
		},
		children: [
			selected && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
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
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ringGeometry", { args: [
					.52,
					.62,
					24
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
					color: "#D6B875",
					side: 2
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.22,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.36,
					.26,
					.44,
					18
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: potColor,
					roughness: slot.potStyle === "gold_trimmed" ? .25 : .65,
					metalness: slot.potStyle === "gold_trimmed" ? .65 : .05
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.43,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.32,
					.32,
					.04,
					16
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#4a3428",
					roughness: .95
				})]
			}),
			slot.species && flowerMeta && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				ref: plantRef,
				position: [
					0,
					.45,
					0
				],
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							.32 * stageFactor,
							0
						],
						castShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
							.025,
							.04,
							.65 * stageFactor,
							8
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#6e9674",
							roughness: .7
						})]
					}),
					slot.growthProgress >= 20 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							.14 * stageFactor,
							.25 * stageFactor,
							0
						],
						rotation: [
							0,
							0,
							-.6
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
							.14 * stageFactor,
							10,
							10
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#87b08e",
							roughness: .6
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							-.14 * stageFactor,
							.32 * stageFactor,
							0
						],
						rotation: [
							0,
							0,
							.6
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
							.14 * stageFactor,
							10,
							10
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#87b08e",
							roughness: .6
						})]
					})] }),
					slot.growthProgress >= 50 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
						position: [
							0,
							.68 * stageFactor,
							0
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dodecahedronGeometry", { args: [.18 * stageFactor, 0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: flowerMeta.color,
							emissive: flowerMeta.rare ? flowerMeta.color : "#000000",
							emissiveIntensity: flowerMeta.rare ? .55 : 0,
							roughness: .35
						})] }), slot.growthProgress >= 82 && [
							0,
							1,
							2,
							3,
							4,
							5
						].map((p) => {
							const a = p / 6 * Math.PI * 2;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
								position: [
									Math.cos(a) * .19,
									.02,
									Math.sin(a) * .19
								],
								rotation: [
									.4,
									a,
									0
								],
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
									.11,
									10,
									10
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
									color: flowerMeta.color,
									roughness: .35
								})]
							}, p);
						})]
					})
				]
			}),
			watering && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
				ref: dropsRef,
				children: [
					0,
					1,
					2,
					3,
					4
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						(i - 2) * .08,
						1.2,
						i % 2 * .06
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.035,
						8,
						8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", { color: "#9ae0f5" })]
				}, i))
			})
		]
	});
});
function GreenhouseSceneContent({ selectedSlot, onSelectSlot, wateringSlot }) {
	const slots = useUniverseStore((s) => s.greenhouse.slots);
	const theme = useUniverseStore((s) => s.greenhouse.theme);
	const quality = useUniverseStore((s) => s.environment.quality);
	const reducedMotion = useUniverseStore((s) => s.environment.reducedMotion);
	const profile = (0, import_react.useMemo)(() => getGraphicsProfile(quality, reducedMotion), [quality, reducedMotion]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", {
			intensity: theme === "firefly" ? .35 : .55,
			color: "#F1DCCB"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
			"#e6f5ea",
			"#273830",
			.7
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				5,
				10,
				4
			],
			intensity: theme === "firefly" ? .8 : 1.35,
			color: "#fff2d6",
			castShadow: profile.shadowsEnabled,
			"shadow-mapSize": [profile.shadowMapSize, profile.shadowMapSize]
		}),
		theme === "firefly" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
			count: Math.max(15, Math.round(75 * profile.particleScale)),
			scale: [
				9,
				5,
				8
			],
			size: 3.2,
			speed: profile.systemReducedMotion ? 0 : .4,
			color: "#D6B875"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [8.5, 36] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#58695c",
				roughness: .88
			})]
		}),
		[
			0,
			1,
			2,
			3
		].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				0,
				i / 4 * Math.PI,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
				6.8,
				.08,
				8,
				40,
				Math.PI
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#A6BBAA",
				metalness: .5,
				roughness: .35
			})]
		}, i)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
			6.75,
			24,
			16,
			0,
			Math.PI * 2,
			0,
			Math.PI / 2
		] }), profile.enablePhysicalSheen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
			color: "#dff2e7",
			transparent: true,
			opacity: .18,
			roughness: .1,
			side: 2
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			color: "#dff2e7",
			transparent: true,
			opacity: .18,
			roughness: .12,
			side: 2
		})] }),
		[-1, 1.2].map((bz, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				0,
				0,
				bz
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.68,
					0
				],
				castShadow: true,
				receiveShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					6.2,
					.1,
					1.25
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#9c7353",
					roughness: .68
				})]
			}), [-2.8, 2.8].map((lx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					lx,
					.34,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.14,
					.68,
					1.05
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#6e4e37",
					roughness: .75
				})]
			}, lx))]
		}, idx)),
		slots.map((slot, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlantPot3D, {
			slot,
			position: SLOT_COORDS[idx],
			selected: selectedSlot === slot.slotIndex,
			watering: wateringSlot === slot.slotIndex,
			reducedMotion: profile.systemReducedMotion,
			onSelect: onSelectSlot
		}, slot.slotIndex)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
			enableDamping: true,
			dampingFactor: .05,
			minDistance: 3.2,
			maxDistance: 10,
			maxPolarAngle: Math.PI * .46,
			target: [
				0,
				.9,
				.1
			]
		})
	] });
}
var GreenhouseWorld = () => {
	const greenhouse = useUniverseStore((s) => s.greenhouse);
	const plantSeed = useUniverseStore((s) => s.plantSeed);
	const waterPlant = useUniverseStore((s) => s.waterPlant);
	const changePotStyle = useUniverseStore((s) => s.changePotStyle);
	const clearPlantSlot = useUniverseStore((s) => s.clearPlantSlot);
	const setGreenhouseTheme = useUniverseStore((s) => s.setGreenhouseTheme);
	const tickGreenhouseGrowth = useUniverseStore((s) => s.tickGreenhouseGrowth);
	const [selectedSlotIdx, setSelectedSlotIdx] = (0, import_react.useState)(0);
	const [wateringSlot, setWateringSlot] = (0, import_react.useState)(null);
	const [dockOpen, setDockOpen] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		tickGreenhouseGrowth();
		const id = window.setInterval(tickGreenhouseGrowth, 1e4);
		return () => window.clearInterval(id);
	}, [tickGreenhouseGrowth]);
	const activeSlot = greenhouse.slots[selectedSlotIdx];
	const stageText = !activeSlot.species ? "گلدان خالی" : activeSlot.growthProgress >= 82 ? "شکوفه کامل" : activeSlot.growthProgress >= 50 ? "غنچه" : activeSlot.growthProgress >= 20 ? "جوانه" : "بذر تازه‌کاشته";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneCanvas, {
				cameraPosition: [
					0,
					3.6,
					6.2
				],
				fov: 46,
				bgColor: greenhouse.theme === "firefly" ? "#141e21" : "#263834",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GreenhouseSceneContent, {
					selectedSlot: selectedSlotIdx,
					onSelectSlot: setSelectedSlotIdx,
					wateringSlot
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed top-16 sm:top-20 right-3 sm:right-5 z-20 w-56 sm:w-64 rounded-2xl bg-[#17172F]/92 border border-[#A6BBAA]/45 p-3.5 shadow-xl space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-bold text-sm text-[#F1DCCB]",
							children: ["گلدان شماره ", toPersianDigits(selectedSlotIdx + 1)]
						}), activeSlot.species && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => clearPlantSlot(selectedSlotIdx),
							className: "p-1.5 rounded-lg bg-[#2f2338] text-[#D9A9C5] cursor-pointer",
							title: "خالی کردن گلدان",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3.5 h-3.5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs text-[#A6BBAA]",
						children: [
							activeSlot.species ? SPECIES_INFO[activeSlot.species].label : "آماده کاشت بذر جدید",
							" · ",
							stageText
						]
					}),
					activeSlot.species && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5 pt-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[11px] text-[#F1DCCB]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "رشد گیاه" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums",
									children: [toPersianDigits(activeSlot.growthProgress), "٪"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1.5 rounded-full bg-[#242942] overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-[#A6BBAA] transition-all",
									style: { width: `${activeSlot.growthProgress}%` }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-[11px] text-[#F1DCCB]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "رطوبت خاک" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums",
									children: [toPersianDigits(activeSlot.hydration), "٪"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-1.5 rounded-full bg-[#242942] overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-[#77b6d4] transition-all",
									style: { width: `${activeSlot.hydration}%` }
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed bottom-3 inset-x-0 z-20 flex flex-col items-center px-3 pointer-events-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setDockOpen((v) => !v),
					className: "pointer-events-auto mb-1.5 px-3 py-1 rounded-t-xl bg-[#17172F]/90 border border-b-0 border-[#A6BBAA]/40 text-[11px] text-[#F1DCCB] cursor-pointer",
					children: dockOpen ? "جمع کردن ابزار باغبانی" : "باز کردن کاشت و آبیاری"
				}), dockOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto w-full max-w-3xl rounded-2xl bg-[#17172F]/92 border border-[#A6BBAA]/40 p-3 shadow-2xl space-y-2.5",
					children: [!activeSlot.species ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 overflow-x-auto pb-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-[#D6B875] shrink-0 flex items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sprout, { className: "w-3.5 h-3.5" }), "کاشت بذر:"]
						}), Object.keys(SPECIES_INFO).map((sp) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								plantSeed(selectedSlotIdx, sp);
								audioEngine.playSfx("sparkle");
							},
							className: "px-3 py-1.5 rounded-xl bg-[#222940] hover:bg-[#2c3852] border border-[#A6BBAA]/35 text-xs text-[#F1DCCB] whitespace-nowrap shrink-0 cursor-pointer",
							children: [
								SPECIES_INFO[sp].label,
								" ",
								SPECIES_INFO[sp].rare ? "(کمیاب)" : ""
							]
						}, sp))]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2 flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								waterPlant(selectedSlotIdx);
								setWateringSlot(selectedSlotIdx);
								audioEngine.playSfx("water");
								window.setTimeout(() => setWateringSlot(null), 1600);
							},
							className: "flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#A6BBAA] text-[#17172F] text-xs font-bold cursor-pointer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Droplets, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "آبیاری گیاه" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-[#D6B875]",
								children: "گلدان:"
							}), POT_STYLES.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => changePotStyle(selectedSlotIdx, p.id),
								className: `px-2.5 py-1.5 rounded-xl text-xs cursor-pointer ${activeSlot.potStyle === p.id ? "bg-[#D9A9C5] text-[#17172F] font-bold" : "bg-[#212142] text-[#F1DCCB]"}`,
								children: p.label
							}, p.id))]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2 border-t border-[#7771A8]/25 pt-2 flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-[#D6B875]",
							children: "فضای گلخانه:"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1.5",
							children: [
								["sunny", "آفتاب بهاری"],
								["misty", "مه صبحگاهی"],
								["firefly", "شب کرم‌شب‌تاب"]
							].map(([tId, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setGreenhouseTheme(tId),
								className: `px-3 py-1.5 rounded-xl text-xs cursor-pointer ${greenhouse.theme === tId ? "bg-[#7771A8] text-[#F1DCCB] font-semibold" : "bg-[#212142] text-[#D9A9C5]"}`,
								children: label
							}, tId))
						})]
					})]
				})]
			})
		]
	});
};
export { GreenhouseWorld };
