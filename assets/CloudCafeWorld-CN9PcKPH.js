import { a as __toESM } from "./rolldown-runtime-DQp2zzRu.js";
import { Vt as require_react, l as require_jsx_runtime, r as OrbitControls, s as useFrame, t as Sparkles } from "./r3f-core-XgHUAlSk.js";
import { f as useUniverseStore, o as createLucideIcon, r as Volume2, s as audioEngine, u as SceneCanvas, w as getGraphicsProfile } from "./entry-Br_QEXnh.js";
import { t as CloudRain } from "./cloud-rain-f5UU80Ru.js";
import { t as Sun } from "./sun-ByRizIWH.js";
import { a as createWoodTexture } from "./proceduralTextures-CcJ_R3cZ.js";
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Coffee = createLucideIcon("coffee", [
	["path", {
		d: "M10 2v2",
		key: "7u0qdc"
	}],
	["path", {
		d: "M14 2v2",
		key: "6buw04"
	}],
	["path", {
		d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",
		key: "pwadti"
	}],
	["path", {
		d: "M6 2v2",
		key: "colzsn"
	}]
]);
/**
* @license lucide-react v0.546.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
var Snowflake = createLucideIcon("snowflake", [
	["path", {
		d: "m10 20-1.25-2.5L6 18",
		key: "18frcb"
	}],
	["path", {
		d: "M10 4 8.75 6.5 6 6",
		key: "7mghy3"
	}],
	["path", {
		d: "m14 20 1.25-2.5L18 18",
		key: "1chtki"
	}],
	["path", {
		d: "m14 4 1.25 2.5L18 6",
		key: "1b4wsy"
	}],
	["path", {
		d: "m17 21-3-6h-4",
		key: "15hhxa"
	}],
	["path", {
		d: "m17 3-3 6 1.5 3",
		key: "11697g"
	}],
	["path", {
		d: "M2 12h6.5L10 9",
		key: "kv9z4n"
	}],
	["path", {
		d: "m20 10-1.5 2 1.5 2",
		key: "1swlpi"
	}],
	["path", {
		d: "M22 12h-6.5L14 15",
		key: "1mxi28"
	}],
	["path", {
		d: "m4 10 1.5 2L4 14",
		key: "k9enpj"
	}],
	["path", {
		d: "m7 21 3-6-1.5-3",
		key: "j8hb9u"
	}],
	["path", {
		d: "m7 3 3 6h4",
		key: "1otusx"
	}]
]);
// src/worlds/CloudCafe/CloudCafeWorld.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var MENU_DRINKS = [
	{
		id: "hot_choc",
		label: "هات‌چاکلت مارشمالو",
		desc: "شکلات داغ غلیظ با مارشمالوی نرم",
		liquidColor: "#5c331d",
		foamColor: "#fff5ee"
	},
	{
		id: "heart_latte",
		label: "لاته قلبی",
		desc: "اسپرسوی ملایم با شیر بخارداده‌شده",
		liquidColor: "#a66f46",
		foamColor: "#f7ece1"
	},
	{
		id: "espresso",
		label: "اسپرسو کلاسیک",
		desc: "عطر تازه دانه قهوه برشته",
		liquidColor: "#361f12",
		foamColor: "#c99768"
	},
	{
		id: "honey_tea",
		label: "چای لیمو و عسل",
		desc: "دمنوش گرم و آرام‌بخش کنار ابرها",
		liquidColor: "#d6a44b",
		foamColor: "#f5dc93"
	},
	{
		id: "matcha",
		label: "ماچا لاته",
		desc: "چای سبز ژاپنی با کف شیر لطیف",
		liquidColor: "#7ea37d",
		foamColor: "#e8f2e6"
	}
];
function CloudCafeScene({ selectedDrink, brewProgress }) {
	const cafeWeather = useUniverseStore((s) => s.environment.cafeWeather);
	const cafeTheme = useUniverseStore((s) => s.environment.cafeTheme);
	const cafeTime = useUniverseStore((s) => s.environment.cafeTime);
	const quality = useUniverseStore((s) => s.environment.quality);
	const reducedMotion = useUniverseStore((s) => s.environment.reducedMotion);
	const addStars = useUniverseStore((s) => s.addStars);
	const profile = (0, import_react.useMemo)(() => getGraphicsProfile(quality, reducedMotion), [quality, reducedMotion]);
	const deckTex = (0, import_react.useMemo)(() => createWoodTexture("#a67f5f", "#7d593e", 4), []);
	const streamRef = (0, import_react.useRef)(null);
	const steamRef = (0, import_react.useRef)(null);
	const weatherRef = (0, import_react.useRef)(null);
	const weatherCount = (0, import_react.useMemo)(() => Math.max(60, Math.round(200 * profile.particleScale)), [profile.particleScale]);
	const weatherCoords = (0, import_react.useMemo)(() => {
		const arr = new Float32Array(weatherCount * 3);
		for (let i = 0; i < weatherCount; i++) {
			arr[i * 3] = (Math.random() - .5) * 14;
			arr[i * 3 + 1] = Math.random() * 8;
			arr[i * 3 + 2] = (Math.random() - .5) * 12;
		}
		return arr;
	}, [weatherCount]);
	useFrame(({ clock }, delta) => {
		if (profile.systemReducedMotion) return;
		const t = clock.getElapsedTime();
		if (steamRef.current && brewProgress > .4) {
			const children = steamRef.current.children;
			for (let idx = 0; idx < children.length; idx++) {
				const p = children[idx];
				p.position.y = 1.25 + (t * .7 + idx * .25) % .85;
				p.position.x = .2 + Math.sin(t * 2 + idx) * .06;
				p.scale.setScalar(.7 + (t * .6 + idx * .2) % .6);
			}
		}
		if (weatherRef.current && cafeWeather !== "sunny") {
			const pos = weatherRef.current.geometry.attributes.position;
			const speed = cafeWeather === "rainy" ? 6.5 : 1.5;
			for (let i = 0; i < weatherCount; i++) {
				let y = pos.getY(i) - delta * speed;
				if (y < -.5) y = 7.5;
				pos.setY(i, y);
			}
			pos.needsUpdate = true;
		}
	});
	const awningColor = cafeTheme === "rose_romantic" ? "#D9A9C5" : cafeTheme === "starry_night" ? "#7771A8" : "#F1DCCB";
	const isNight = cafeTime === "night";
	const isSunset = cafeTime === "sunset";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", {
			intensity: isNight ? .32 : .52,
			color: isSunset ? "#ffd1b8" : "#F1DCCB"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
			isSunset ? "#D9A9C5" : "#ffe9d6",
			"#17172F",
			.65
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				6,
				10,
				6
			],
			intensity: isNight ? .6 : 1.3,
			color: isSunset ? "#ffb997" : "#fff5e6",
			castShadow: profile.shadowsEnabled,
			"shadow-mapSize": [profile.shadowMapSize, profile.shadowMapSize]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				0,
				2.8,
				.5
			],
			color: "#D6B875",
			intensity: 2.2,
			distance: 12
		}),
		isNight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
			count: Math.max(15, Math.round(60 * profile.particleScale)),
			scale: [
				12,
				6,
				12
			],
			size: 2.8,
			speed: profile.systemReducedMotion ? 0 : .4,
			color: "#D6B875"
		}),
		[
			[
				-4.2,
				-.5,
				-2.5,
				1.5
			],
			[
				4.5,
				-.4,
				-1.8,
				1.6
			],
			[
				-3.5,
				-.6,
				3.2,
				1.4
			],
			[
				3.8,
				-.5,
				3.5,
				1.5
			],
			[
				0,
				-.9,
				-4.5,
				1.8
			]
		].map(([cx, cy, cz, cs], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				cx,
				cy,
				cz
			],
			scale: cs,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				1.3,
				14,
				14
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#F1DCCB",
				roughness: .95,
				transparent: true,
				opacity: .9
			})]
		}, i)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				-.05,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				4.8,
				4.9,
				.25,
				32
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				map: deckTex,
				roughness: .68
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				0,
				0,
				-1.6
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.55,
						0
					],
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						3.4,
						1,
						1
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#4e372d",
						roughness: .65
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						1.08,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						3.55,
						.08,
						1.12
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#F1DCCB",
						roughness: .35
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-1.55,
						2,
						-.38
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.05,
						.05,
						2.8,
						10
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#D6B875",
						metalness: .7,
						roughness: .3
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						1.55,
						2,
						-.38
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.05,
						.05,
						2.8,
						10
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#D6B875",
						metalness: .7,
						roughness: .3
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						3.25,
						.15
					],
					rotation: [
						.25,
						0,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						3.9,
						.12,
						1.8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: awningColor,
						roughness: .75
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
					position: [
						-.55,
						1.12,
						-.1
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							.32,
							0
						],
						castShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
							.72,
							.64,
							.55
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#D6B875",
							metalness: .85,
							roughness: .2
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							.45,
							.32
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
							.06,
							.05,
							.14,
							12
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#2c2a3e",
							metalness: .6,
							roughness: .3
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
					position: [
						.2,
						1.12,
						.18
					],
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								0,
								.14,
								0
							],
							castShadow: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
								.13,
								.1,
								.26,
								18
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: "#F1DCCB",
								roughness: .25
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								.13,
								.14,
								0
							],
							rotation: [
								0,
								0,
								Math.PI / 2
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
								.06,
								.018,
								8,
								16,
								Math.PI
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: "#F1DCCB",
								roughness: .25
							})]
						}),
						brewProgress > .05 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								0,
								.06 + Math.min(1, brewProgress) * .16,
								0
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
								.115,
								.1,
								.04,
								16
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: selectedDrink.liquidColor,
								roughness: .2
							})]
						}),
						brewProgress > .72 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								0,
								.25,
								0
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
								.115,
								.115,
								.04,
								16
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: selectedDrink.foamColor,
								roughness: .85
							})]
						}),
						brewProgress > .05 && brewProgress < .75 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							ref: streamRef,
							position: [
								0,
								.38,
								0
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
								.018,
								.014,
								.45,
								8
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { color: selectedDrink.liquidColor })]
						})
					]
				}),
				brewProgress > .4 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
					ref: steamRef,
					children: [
						0,
						1,
						2,
						3
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							.2,
							1.3 + i * .15,
							.18
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
							.05,
							8,
							8
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#ffffff",
							transparent: true,
							opacity: .45
						})]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
					position: [
						1.1,
						1.12,
						.05
					],
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								0,
								.03,
								0
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
								.32,
								.32,
								.05,
								18
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: "#D6B875",
								metalness: .7,
								roughness: .25
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								0,
								.14,
								0
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
								.18,
								.2,
								.15,
								16
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: "#D9A9C5",
								roughness: .6
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								0,
								.18,
								0
							],
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
								.28,
								16,
								12,
								0,
								Math.PI * 2,
								0,
								Math.PI / 2
							] }), profile.enablePhysicalSheen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
								color: "#ffffff",
								transparent: true,
								opacity: .35,
								roughness: .05,
								clearcoat: 1
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: "#ffffff",
								transparent: true,
								opacity: .35,
								roughness: .08
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				-1.4,
				0,
				1.4
			],
			onClick: () => addStars(2),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.75,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.62,
						.62,
						.06,
						22
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#F1DCCB",
						roughness: .5
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.38,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.06,
						.08,
						.75,
						10
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#D6B875",
						metalness: .7,
						roughness: .3
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.85,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.04,
						.04,
						.16,
						8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#D9A9C5",
						emissive: "#D6B875",
						emissiveIntensity: 1.2
					})]
				})
			]
		}),
		cafeWeather !== "sunny" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("points", {
			ref: weatherRef,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("bufferGeometry", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("bufferAttribute", {
				attach: "attributes-position",
				args: [weatherCoords, 3]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointsMaterial", {
				color: cafeWeather === "rainy" ? "#9fd0f0" : "#ffffff",
				size: cafeWeather === "rainy" ? .06 : .1,
				transparent: true,
				opacity: .8
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
			enableDamping: true,
			dampingFactor: .05,
			minDistance: 3.5,
			maxDistance: 11,
			maxPolarAngle: Math.PI * .48,
			target: [
				0,
				1.1,
				-.4
			]
		})
	] });
}
var CloudCafeWorld = () => {
	const cafeWeather = useUniverseStore((s) => s.environment.cafeWeather);
	const cafeTime = useUniverseStore((s) => s.environment.cafeTime);
	const setEnvironmentSettings = useUniverseStore((s) => s.setEnvironmentSettings);
	const addStars = useUniverseStore((s) => s.addStars);
	const [selectedDrink, setSelectedDrink] = (0, import_react.useState)(MENU_DRINKS[0]);
	const [brewProgress, setBrewProgress] = (0, import_react.useState)(0);
	const [brewing, setBrewing] = (0, import_react.useState)(false);
	const [cafeAmbientOn, setCafeAmbientOn] = (0, import_react.useState)(false);
	const [dockOpen, setDockOpen] = (0, import_react.useState)(true);
	const startBrew = () => {
		if (brewing) return;
		setBrewing(true);
		setBrewProgress(.08);
		audioEngine.playSfx("water");
		const start = performance.now();
		const duration = 2600;
		const step = (now) => {
			const p = Math.min(1, (now - start) / duration);
			setBrewProgress(p);
			if (p < 1) requestAnimationFrame(step);
			else {
				setBrewing(false);
				setBrewProgress(1.1);
				addStars(10);
				audioEngine.playSfx("sparkle");
			}
		};
		requestAnimationFrame(step);
	};
	const toggleCafeAmbient = () => {
		const next = !cafeAmbientOn;
		setCafeAmbientOn(next);
		audioEngine.setAmbient(next ? "cafe" : "none");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneCanvas, {
				cameraPosition: [
					.6,
					2.8,
					5.8
				],
				fov: 46,
				bgColor: cafeTime === "night" ? "#13132b" : cafeTime === "sunset" ? "#4f3a5c" : "#5e739e",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudCafeScene, {
					selectedDrink,
					brewProgress
				})
			}),
			brewProgress > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed top-16 sm:top-20 right-3 sm:right-5 z-20 rounded-2xl bg-[#17172F]/92 border border-[#D6B875]/45 px-4 py-2.5 text-xs sm:text-sm text-[#F1DCCB] shadow-xl",
				children: [selectedDrink.label, " آماده شد و با عشق سرو شد! (+۱۰ ستاره)"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed bottom-3 inset-x-0 z-20 flex flex-col items-center px-3 pointer-events-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setDockOpen((v) => !v),
					className: "pointer-events-auto mb-1.5 px-3 py-1 rounded-t-xl bg-[#17172F]/90 border border-b-0 border-[#D6B875]/40 text-[11px] text-[#F1DCCB] cursor-pointer",
					children: dockOpen ? "جمع کردن منوی کافه" : "باز کردن منو و حال‌وهوای کافه"
				}), dockOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto w-full max-w-3xl rounded-2xl bg-[#17172F]/92 border border-[#D6B875]/35 p-3 shadow-2xl space-y-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2 flex-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full sm:max-w-[70%]",
							children: MENU_DRINKS.map((drink) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setSelectedDrink(drink);
									setBrewProgress(0);
								},
								className: `px-3 py-1.5 rounded-xl text-xs whitespace-nowrap shrink-0 border cursor-pointer ${selectedDrink.id === drink.id ? "bg-[#7771A8]/50 border-[#D6B875] text-[#F1DCCB] font-semibold" : "bg-[#212142] border-transparent text-[#D9A9C5]"}`,
								children: drink.label
							}, drink.id))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							disabled: brewing,
							onClick: startBrew,
							className: "flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-l from-[#D6B875] to-[#D9A9C5] text-[#17172F] text-xs font-bold whitespace-nowrap cursor-pointer disabled:opacity-60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Coffee, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: brewing ? "در حال آماده‌سازی..." : "آماده‌سازی نوشیدنی" })]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-2 flex-wrap border-t border-[#7771A8]/25 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setEnvironmentSettings({ cafeWeather: "sunny" }),
									className: `p-1.5 px-2.5 rounded-xl text-xs flex items-center gap-1 cursor-pointer ${cafeWeather === "sunny" ? "bg-[#D6B875] text-[#17172F] font-bold" : "bg-[#212142] text-[#F1DCCB]"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "صاف" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setEnvironmentSettings({ cafeWeather: "rainy" }),
									className: `p-1.5 px-2.5 rounded-xl text-xs flex items-center gap-1 cursor-pointer ${cafeWeather === "rainy" ? "bg-[#7771A8] text-[#F1DCCB] font-bold" : "bg-[#212142] text-[#F1DCCB]"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudRain, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "بارانی" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => setEnvironmentSettings({ cafeWeather: "snowy" }),
									className: `p-1.5 px-2.5 rounded-xl text-xs flex items-center gap-1 cursor-pointer ${cafeWeather === "snowy" ? "bg-[#D9A9C5] text-[#17172F] font-bold" : "bg-[#212142] text-[#F1DCCB]"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Snowflake, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "برفی" })]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-1.5",
							children: [[
								["morning", "صبح"],
								["sunset", "غروب"],
								["night", "شب"]
							].map(([tId, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setEnvironmentSettings({ cafeTime: tId }),
								className: `px-2.5 py-1.5 rounded-xl text-xs cursor-pointer ${cafeTime === tId ? "bg-[#7771A8] text-[#F1DCCB]" : "bg-[#212142] text-[#D9A9C5]"}`,
								children: label
							}, tId)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: toggleCafeAmbient,
								className: `flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs cursor-pointer ${cafeAmbientOn ? "bg-[#A6BBAA] text-[#17172F] font-bold" : "bg-[#212142] text-[#F1DCCB]"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "w-3.5 h-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "صدای کافه" })]
							})]
						})]
					})]
				})]
			})
		]
	});
};
export { CloudCafeWorld };
