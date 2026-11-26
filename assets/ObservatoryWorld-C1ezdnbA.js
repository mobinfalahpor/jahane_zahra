import { a as __toESM } from "./rolldown-runtime-DQp2zzRu.js";
import { Lt as Vector3, Vt as require_react, c as useThree, et as MathUtils, i as Line, l as require_jsx_runtime, n as Stars, r as OrbitControls, s as useFrame } from "./r3f-core-XgHUAlSk.js";
import { t as Eye } from "./eye-hkO0mNOO.js";
import { f as useUniverseStore, o as createLucideIcon, s as audioEngine, u as SceneCanvas, w as getGraphicsProfile } from "./entry-Br_QEXnh.js";
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Telescope = createLucideIcon("telescope", [
	["path", {
		d: "m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",
		key: "k4qptu"
	}],
	["path", {
		d: "m13.56 11.747 4.332-.924",
		key: "19l80z"
	}],
	["path", {
		d: "m16 21-3.105-6.21",
		key: "7oh9d"
	}],
	["path", {
		d: "M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",
		key: "m7xp4m"
	}],
	["path", {
		d: "m6.158 8.633 1.114 4.456",
		key: "74o979"
	}],
	["path", {
		d: "m8 21 3.105-6.21",
		key: "1fvxut"
	}],
	["circle", {
		cx: "12",
		cy: "13",
		r: "2",
		key: "1c1ljs"
	}]
]);
// src/worlds/Observatory/ObservatoryWorld.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var _obsTargetPos = new Vector3();
var _obsDir = new Vector3();
var _obsCamGoal = new Vector3();
var _obsDefaultTarget = new Vector3(0, 1.8, -1);
var TARGETS = [
	{
		id: "moon",
		name: "ماه نقره‌ای",
		kind: "planet",
		note: "درخشش آرام ماه، نور نقره‌ای‌اش را بر سقف رصدخانه می‌پاشد؛ همیشه ثابت و وفادار در آسمان شب.",
		position: [
			-10,
			12,
			-26
		],
		azimuth: -.36,
		elevation: .42,
		color: "#F1DCCB"
	},
	{
		id: "saturn",
		name: "سیاره زحل",
		kind: "planet",
		note: "حلقه‌های طلایی زحل از میان عدسی تلسکوپ مثل جواهری معلق در مخمل سرمه‌ای آسمان می‌درخشند.",
		position: [
			12,
			13,
			-28
		],
		azimuth: .4,
		elevation: .42,
		color: "#D6B875"
	},
	{
		id: "jupiter",
		name: "سیاره مشتری",
		kind: "planet",
		note: "بزرگ‌ترین سیاره منظومه با نوارهای کرم و رز که با قمرهای کوچکش در تاریکی می‌رقصد.",
		position: [
			2,
			17,
			-30
		],
		azimuth: .06,
		elevation: .52,
		color: "#D9A9C5"
	},
	{
		id: "mars",
		name: "مریخ سرخ",
		kind: "planet",
		note: "نگین گرم و نارنجی شب که در میان اقیانوس ستاره‌های دوردست می‌درخشد.",
		position: [
			-17,
			9,
			-22
		],
		azimuth: -.65,
		elevation: .32,
		color: "#d98a6c"
	},
	{
		id: "ursa",
		name: "صورت فلکی دب اکبر",
		kind: "constellation",
		note: "هفت ستاره راهنما که از دیرباز جهت شمال و ستاره قطبی را به مسافران شب نشان می‌دادند.",
		position: [
			-5,
			16,
			-24
		],
		azimuth: -.2,
		elevation: .58,
		color: "#D6B875"
	},
	{
		id: "orion",
		name: "صورت فلکی شکارچی",
		kind: "constellation",
		note: "سه ستاره هم‌ردیف کمربند شکارچی که در شب‌های سرد زمستان روشن‌ترین جلوه آسمان است.",
		position: [
			9,
			9,
			-24
		],
		azimuth: .35,
		elevation: .34,
		color: "#A6BBAA"
	},
	{
		id: "heart",
		name: "صورت فلکی قلب آسمان",
		kind: "constellation",
		note: "صورت فلکی اختصاصی جهان کوچولوی ما؛ نقش‌گرفته از شش ستاره درخشان به شکل یک قلب.",
		position: [
			0,
			11,
			-24
		],
		azimuth: 0,
		elevation: .42,
		color: "#D9A9C5"
	}
];
var ConstellationGroup = import_react.memo(function ConstellationGroup({ points, color, position, highlighted }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		children: [points.map((pt, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: pt,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				highlighted ? .22 : .14,
				10,
				10
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", { color })]
		}, i)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
			points,
			color,
			lineWidth: highlighted ? 2.2 : 1.1,
			transparent: true,
			opacity: highlighted ? .95 : .45
		})]
	});
});
function ObservatorySceneContent({ azimuth, elevation, eyepieceMode, selectedTarget, onSelectTarget }) {
	const quality = useUniverseStore((s) => s.environment.quality);
	const reducedMotion = useUniverseStore((s) => s.environment.reducedMotion);
	const profile = (0, import_react.useMemo)(() => getGraphicsProfile(quality, reducedMotion), [quality, reducedMotion]);
	const telescopeYawRef = (0, import_react.useRef)(null);
	const telescopePitchRef = (0, import_react.useRef)(null);
	const controlsRef = (0, import_react.useRef)(null);
	const { camera } = useThree();
	const ursaPts = (0, import_react.useMemo)(() => [
		[
			-2.2,
			.8,
			0
		],
		[
			-1.3,
			1,
			0
		],
		[
			-.5,
			.7,
			0
		],
		[
			.3,
			.5,
			0
		],
		[
			.5,
			-.3,
			0
		],
		[
			1.5,
			-.2,
			0
		],
		[
			1.7,
			.6,
			0
		],
		[
			.3,
			.5,
			0
		]
	], []);
	const orionPts = (0, import_react.useMemo)(() => [
		[
			-1.1,
			1.4,
			0
		],
		[
			1,
			1.3,
			0
		],
		[
			.3,
			.2,
			0
		],
		[
			0,
			.1,
			0
		],
		[
			-.3,
			0,
			0
		],
		[
			-.9,
			-1.2,
			0
		],
		[
			1.1,
			-1.1,
			0
		],
		[
			.3,
			.2,
			0
		]
	], []);
	const heartPts = (0, import_react.useMemo)(() => [
		[
			0,
			-1.2,
			0
		],
		[
			-1.2,
			.1,
			0
		],
		[
			-.8,
			1,
			0
		],
		[
			0,
			.5,
			0
		],
		[
			.8,
			1,
			0
		],
		[
			1.2,
			.1,
			0
		],
		[
			0,
			-1.2,
			0
		]
	], []);
	useFrame((_, delta) => {
		if (telescopeYawRef.current) telescopeYawRef.current.rotation.y = MathUtils.damp(telescopeYawRef.current.rotation.y, -azimuth, 6, delta);
		if (telescopePitchRef.current) telescopePitchRef.current.rotation.x = MathUtils.damp(telescopePitchRef.current.rotation.x, elevation, 6, delta);
		if (eyepieceMode && controlsRef.current) {
			const [tx, ty, tz] = selectedTarget.position;
			_obsTargetPos.set(tx, ty, tz);
			_obsDir.copy(_obsTargetPos).normalize();
			_obsCamGoal.copy(_obsTargetPos).addScaledVector(_obsDir, -7.5);
			camera.position.lerp(_obsCamGoal, Math.min(1, delta * 3.5));
			controlsRef.current.target.lerp(_obsTargetPos, Math.min(1, delta * 4.5));
			controlsRef.current.update();
		} else if (!eyepieceMode && controlsRef.current) {
			controlsRef.current.target.lerp(_obsDefaultTarget, Math.min(1, delta * 3));
			controlsRef.current.update();
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", {
			intensity: .3,
			color: "#7771A8"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
			"#a5a0e0",
			"#121226",
			.55
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				2.2,
				2.2,
				1.5
			],
			color: "#D6B875",
			intensity: 1.8,
			distance: 9
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
			radius: 75,
			depth: 45,
			count: Math.max(350, Math.round(2800 * profile.particleScale)),
			factor: 4.5,
			saturation: .45,
			fade: true,
			speed: profile.systemReducedMotion ? 0 : .35
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [5.5, 36] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#1f1f3d",
				roughness: .75
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				0,
				.02,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ringGeometry", { args: [
				2.5,
				2.65,
				48
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#D6B875",
				metalness: .8,
				roughness: .25
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.85,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				5.4,
				5.4,
				1.7,
				32,
				1,
				true
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#27274d",
				roughness: .8,
				side: 2
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				0,
				0,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					.75,
					0
				],
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					.18,
					.35,
					1.5,
					14
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#302d54",
					metalness: .4,
					roughness: .5
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
				ref: telescopeYawRef,
				position: [
					0,
					1.55,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.22,
					14,
					14
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#D6B875",
					metalness: .88,
					roughness: .22
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
					ref: telescopePitchRef,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								0,
								.1,
								-.45
							],
							rotation: [
								Math.PI / 2,
								0,
								0
							],
							castShadow: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
								.16,
								.12,
								2.1,
								20
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: "#D6B875",
								metalness: .85,
								roughness: .2
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								0,
								.1,
								-1.52
							],
							rotation: [
								Math.PI / 2,
								0,
								0
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
								.19,
								.17,
								.16,
								20
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: "#F1DCCB",
								metalness: .7,
								roughness: .25
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								0,
								.1,
								.65
							],
							rotation: [
								Math.PI / 2,
								0,
								0
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
								.06,
								.08,
								.25,
								14
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: "#262545",
								metalness: .7,
								roughness: .3
							})]
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: TARGETS[0].position,
			onClick: (e) => {
				e.stopPropagation();
				onSelectTarget(TARGETS[0]);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				1.65,
				24,
				24
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#F1DCCB",
				emissive: "#F1DCCB",
				emissiveIntensity: .45,
				roughness: .8
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: TARGETS[1].position,
			rotation: [
				.4,
				.2,
				-.25
			],
			onClick: (e) => {
				e.stopPropagation();
				onSelectTarget(TARGETS[1]);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				1.3,
				24,
				24
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#D6B875",
				emissive: "#8f7236",
				emissiveIntensity: .3,
				roughness: .5
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ringGeometry", { args: [
					1.7,
					2.6,
					36
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#F1DCCB",
					transparent: true,
					opacity: .78,
					side: 2
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: TARGETS[2].position,
			onClick: (e) => {
				e.stopPropagation();
				onSelectTarget(TARGETS[2]);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				1.55,
				24,
				24
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#D9A9C5",
				emissive: "#7771A8",
				emissiveIntensity: .25,
				roughness: .55
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: TARGETS[3].position,
			onClick: (e) => {
				e.stopPropagation();
				onSelectTarget(TARGETS[3]);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				1.05,
				22,
				22
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#d98a6c",
				emissive: "#7a3520",
				emissiveIntensity: .3,
				roughness: .7
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConstellationGroup, {
			points: ursaPts,
			color: "#D6B875",
			position: TARGETS[4].position,
			highlighted: selectedTarget.id === "ursa"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConstellationGroup, {
			points: orionPts,
			color: "#A6BBAA",
			position: TARGETS[5].position,
			highlighted: selectedTarget.id === "orion"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConstellationGroup, {
			points: heartPts,
			color: "#D9A9C5",
			position: TARGETS[6].position,
			highlighted: selectedTarget.id === "heart"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
			ref: controlsRef,
			enableDamping: true,
			dampingFactor: .05,
			minDistance: 2.5,
			maxDistance: 12,
			maxPolarAngle: Math.PI * .55
		})
	] });
}
var ObservatoryWorld = () => {
	const [selectedTarget, setSelectedTarget] = (0, import_react.useState)(TARGETS[1]);
	const [azimuth, setAzimuth] = (0, import_react.useState)(TARGETS[1].azimuth);
	const [elevation, setElevation] = (0, import_react.useState)(TARGETS[1].elevation);
	const [eyepieceMode, setEyepieceMode] = (0, import_react.useState)(false);
	const [dockOpen, setDockOpen] = (0, import_react.useState)(true);
	const selectCelestial = (t) => {
		setSelectedTarget(t);
		setAzimuth(t.azimuth);
		setElevation(t.elevation);
		audioEngine.playSfx("sparkle");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneCanvas, {
				cameraPosition: [
					0,
					2.5,
					5.6
				],
				fov: 48,
				bgColor: "#0d0d22",
				fogNear: 35,
				fogFar: 110,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ObservatorySceneContent, {
					azimuth,
					elevation,
					eyepieceMode,
					selectedTarget,
					onSelectTarget: selectCelestial
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed top-16 sm:top-20 right-3 sm:right-5 z-20 w-[calc(100%-1.5rem)] max-w-xs rounded-2xl bg-[#17172F]/90 border border-[#D6B875]/40 p-4 shadow-xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-[#D6B875] mb-0.5",
						children: selectedTarget.kind === "planet" ? "جرم آسمانی" : "صورت فلکی"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-bold text-[#F1DCCB] mb-1.5",
						children: selectedTarget.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs sm:text-sm text-[#D9A9C5]/90 leading-relaxed",
						children: selectedTarget.note
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed bottom-3 inset-x-0 z-20 flex flex-col items-center px-3 pointer-events-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setDockOpen((v) => !v),
					className: "pointer-events-auto mb-1.5 px-3 py-1 rounded-t-xl bg-[#17172F]/90 border border-b-0 border-[#7771A8]/40 text-[11px] text-[#F1DCCB] cursor-pointer",
					children: dockOpen ? "جمع کردن کنترل تلسکوپ" : "باز کردن تلسکوپ و آسمان"
				}), dockOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto w-full max-w-3xl rounded-2xl bg-[#17172F]/92 border border-[#7771A8]/40 p-3 shadow-2xl space-y-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1.5 overflow-x-auto pb-1",
						children: TARGETS.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => selectCelestial(t),
							className: `px-3 py-1.5 rounded-xl text-xs whitespace-nowrap shrink-0 border cursor-pointer ${selectedTarget.id === t.id ? "bg-[#7771A8]/50 border-[#D6B875] text-[#F1DCCB] font-semibold" : "bg-[#212142] border-transparent text-[#D9A9C5]"}`,
							children: t.name
						}, t.id))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3 flex-wrap border-t border-[#7771A8]/25 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 flex-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-xs text-[#F1DCCB]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#D6B875]",
									children: "چرخش افقی:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: -1.2,
									max: 1.2,
									step: .04,
									value: azimuth,
									onChange: (e) => setAzimuth(parseFloat(e.target.value)),
									className: "w-24 accent-[#D6B875]"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-xs text-[#F1DCCB]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#D6B875]",
									children: "زاویه ارتفاع:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "range",
									min: .1,
									max: .85,
									step: .03,
									value: elevation,
									onChange: (e) => setElevation(parseFloat(e.target.value)),
									className: "w-24 accent-[#D9A9C5]"
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								setEyepieceMode((v) => !v);
								audioEngine.playSfx("click");
							},
							className: `flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold cursor-pointer ${eyepieceMode ? "bg-[#D6B875] text-[#17172F]" : "bg-[#7771A8] text-[#F1DCCB]"}`,
							children: [eyepieceMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "w-4 h-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Telescope, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: eyepieceMode ? "بازگشت به رصدخانه" : "نگاه از چشمی تلسکوپ" })]
						})]
					})]
				})]
			})
		]
	});
};
export { ObservatoryWorld };
