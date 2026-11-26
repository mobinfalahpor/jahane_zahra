import { a as __toESM } from "./rolldown-runtime-DQp2zzRu.js";
import { Vt as require_react, et as MathUtils, l as require_jsx_runtime, n as Stars, r as OrbitControls, s as useFrame, t as Sparkles } from "./r3f-core-XgHUAlSk.js";
import { t as Plus } from "./plus-D8B-_I8e.js";
import { t as Trash2 } from "./trash-2-BCdyRI2p.js";
import { c as formatPersianDate, f as useUniverseStore, l as toPersianDigits, s as audioEngine, t as X, u as SceneCanvas, w as getGraphicsProfile } from "./entry-Br_QEXnh.js";
// src/worlds/WishSky/WishSkyWorld.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
	{
		id: "all",
		label: "همه آرزوها"
	},
	{
		id: "love",
		label: "عشق و باهم‌بودن"
	},
	{
		id: "travel",
		label: "سفر و ماجراجویی"
	},
	{
		id: "dreams",
		label: "رویاهای آینده"
	},
	{
		id: "peace",
		label: "آرامش و سلامتی"
	},
	{
		id: "moments",
		label: "لحظه‌های کوچک"
	}
];
var STAR_COLORS = [
	{
		hex: "#D6B875",
		label: "طلایی"
	},
	{
		hex: "#D9A9C5",
		label: "رز"
	},
	{
		hex: "#7771A8",
		label: "اسطوخودوس"
	},
	{
		hex: "#F1DCCB",
		label: "کرم مهتابی"
	},
	{
		hex: "#A6BBAA",
		label: "سبز مریم‌گلی"
	}
];
var WishStarMesh = import_react.memo(function WishStarMesh({ wish, selected, reducedMotion, onSelect }) {
	const starRef = (0, import_react.useRef)(null);
	const offset = (0, import_react.useMemo)(() => Math.random() * 6, []);
	useFrame(({ clock }) => {
		if (!starRef.current) return;
		if (reducedMotion) {
			starRef.current.scale.setScalar(selected ? 1.45 : 1);
			return;
		}
		const t = clock.getElapsedTime() + offset;
		starRef.current.rotation.y = t * .6;
		const pulse = selected ? 1.45 : 1 + Math.sin(t * 2.2) * .12;
		starRef.current.scale.setScalar(pulse);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: starRef,
		position: wish.position,
		onClick: (e) => {
			e.stopPropagation();
			audioEngine.playSfx("sparkle");
			onSelect(wish);
		},
		onPointerOver: (e) => {
			e.stopPropagation();
			document.body.style.cursor = "pointer";
		},
		onPointerOut: () => {
			document.body.style.cursor = "default";
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("octahedronGeometry", { args: [.45, 0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: wish.color,
				emissive: wish.color,
				emissiveIntensity: selected ? 2.6 : 1.65
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					0,
					Math.PI / 4,
					Math.PI / 4
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("octahedronGeometry", { args: [.36, 0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#ffffff",
					emissive: wish.color,
					emissiveIntensity: 1.25
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
				.72,
				.02,
				8,
				24
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", {
				color: wish.color,
				transparent: true,
				opacity: selected ? .9 : .35
			})] }),
			selected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
				color: wish.color,
				intensity: 3,
				distance: 6
			})
		]
	});
});
function ShootingStar({ trigger }) {
	const meshRef = (0, import_react.useRef)(null);
	const progress = (0, import_react.useRef)(1);
	const lastTrigger = (0, import_react.useRef)(trigger);
	useFrame((_, delta) => {
		if (trigger !== lastTrigger.current) {
			lastTrigger.current = trigger;
			progress.current = 0;
		}
		if (meshRef.current) {
			if (progress.current < 1) {
				progress.current += delta * 1.1;
				const p = progress.current;
				meshRef.current.visible = true;
				meshRef.current.position.set(MathUtils.lerp(-18, 18, p), MathUtils.lerp(14, 4, p), -14);
			} else meshRef.current.visible = false;
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		ref: meshRef,
		visible: false,
		rotation: [
			0,
			0,
			-.45
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
			.04,
			.14,
			2.2,
			8
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", { color: "#ffe8ad" })]
	});
}
function WishSkySceneContent({ wishes, selectedWish, onSelectWish, shootingTrigger }) {
	const quality = useUniverseStore((s) => s.environment.quality);
	const reducedMotion = useUniverseStore((s) => s.environment.reducedMotion);
	const profile = (0, import_react.useMemo)(() => getGraphicsProfile(quality, reducedMotion), [quality, reducedMotion]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", {
			intensity: .35,
			color: "#7771A8"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
			"#D9A9C5",
			"#17172F",
			.5
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				10,
				14,
				6
			],
			intensity: .9,
			color: "#F1DCCB"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
			radius: 70,
			depth: 45,
			count: Math.max(350, Math.round(2400 * profile.particleScale)),
			factor: 4.5,
			saturation: .5,
			fade: true,
			speed: profile.systemReducedMotion ? 0 : .4
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
			count: Math.max(18, Math.round(90 * profile.particleScale)),
			scale: [
				26,
				16,
				26
			],
			size: 3,
			speed: profile.systemReducedMotion ? 0 : .25,
			color: "#D6B875"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
			position: [
				-11,
				10,
				-24
			],
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				2.3,
				28,
				28
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#F1DCCB",
				emissive: "#D6B875",
				emissiveIntensity: .75,
				roughness: .6
			})] })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				13,
				8,
				-26
			],
			rotation: [
				.4,
				.2,
				-.3
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				2,
				24,
				24
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#D9A9C5",
				roughness: .55
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				rotation: [
					Math.PI / 2,
					0,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ringGeometry", { args: [
					2.6,
					3.8,
					40
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#D6B875",
					transparent: true,
					opacity: .65,
					side: 2
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				-2.5,
				2
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				6.5,
				4.5,
				1.2,
				24
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#252445",
				roughness: .85
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShootingStar, { trigger: shootingTrigger }),
		wishes.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishStarMesh, {
			wish: w,
			selected: selectedWish?.id === w.id,
			reducedMotion: profile.systemReducedMotion,
			onSelect: onSelectWish
		}, w.id)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
			enableDamping: true,
			dampingFactor: .05,
			minDistance: 4,
			maxDistance: 24,
			target: [
				0,
				5,
				-10
			]
		})
	] });
}
var WishSkyWorld = () => {
	const wishes = useUniverseStore((s) => s.wishes);
	const addWish = useUniverseStore((s) => s.addWish);
	const removeWish = useUniverseStore((s) => s.removeWish);
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [selectedWish, setSelectedWish] = (0, import_react.useState)(wishes[0] ?? null);
	const [modalOpen, setModalOpen] = (0, import_react.useState)(false);
	const [shootingTrigger, setShootingTrigger] = (0, import_react.useState)(0);
	const [title, setTitle] = (0, import_react.useState)("");
	const [text, setText] = (0, import_react.useState)("");
	const [category, setCategory] = (0, import_react.useState)("love");
	const [color, setColor] = (0, import_react.useState)("#D6B875");
	const filteredWishes = (0, import_react.useMemo)(() => filter === "all" ? wishes : wishes.filter((w) => w.category === filter), [wishes, filter]);
	const handleCreateWish = (e) => {
		e.preventDefault();
		if (!title.trim() || !text.trim()) return;
		const created = addWish(title, text, category, color);
		setSelectedWish(created);
		setShootingTrigger((n) => n + 1);
		audioEngine.playSfx("portal");
		setTitle("");
		setText("");
		setModalOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full h-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneCanvas, {
				cameraPosition: [
					0,
					3.2,
					8
				],
				fov: 52,
				bgColor: "#121229",
				fogNear: 24,
				fogFar: 85,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WishSkySceneContent, {
					wishes: filteredWishes,
					selectedWish,
					onSelectWish: setSelectedWish,
					shootingTrigger
				})
			}),
			selectedWish && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed top-16 sm:top-20 right-3 sm:right-5 z-20 w-[calc(100%-1.5rem)] max-w-xs rounded-2xl bg-[#17172F]/92 border border-[#D6B875]/45 p-4 shadow-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-2 mb-1.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm sm:text-base font-bold text-[#F1DCCB]",
						children: selectedWish.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[11px] text-[#D9A9C5] mt-0.5",
						children: [
							CATEGORIES.find((c) => c.id === selectedWish.category)?.label,
							" · ",
							formatPersianDate(selectedWish.createdAt)
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								removeWish(selectedWish.id);
								setSelectedWish(null);
							},
							"aria-label": "حذف آرزو",
							className: "p-1.5 rounded-lg bg-[#2a213d] text-[#D9A9C5] hover:text-white cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-3.5 h-3.5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSelectedWish(null),
							"aria-label": "بستن",
							className: "p-1.5 rounded-lg bg-[#232346] text-[#F1DCCB] cursor-pointer",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-3.5 h-3.5" })
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs sm:text-sm text-[#F1DCCB]/90 leading-relaxed mt-2",
					children: selectedWish.text
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed bottom-3 inset-x-0 z-20 flex justify-center px-3 pointer-events-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto w-full max-w-3xl rounded-2xl bg-[#17172F]/92 border border-[#7771A8]/40 p-3 shadow-2xl flex flex-wrap items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full sm:max-w-[70%]",
						children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setFilter(c.id),
							className: `px-3 py-1.5 rounded-xl text-xs whitespace-nowrap shrink-0 cursor-pointer ${filter === c.id ? "bg-[#7771A8] text-[#F1DCCB] font-semibold" : "bg-[#212142] text-[#D9A9C5]"}`,
							children: c.label
						}, c.id))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setModalOpen(true),
						className: "flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-l from-[#D6B875] to-[#D9A9C5] text-[#17172F] text-xs font-bold whitespace-nowrap cursor-pointer",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"ثبت آرزو (",
							toPersianDigits(wishes.length),
							")"
						] })]
					})]
				})
			}),
			modalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 bg-[#0d0d1f]/80 flex items-center justify-center p-4",
				onClick: () => setModalOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleCreateWish,
					onClick: (e) => e.stopPropagation(),
					className: "w-full max-w-md rounded-3xl bg-[#17172F] border border-[#D6B875]/45 p-6 shadow-2xl space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-bold text-[#F1DCCB]",
								children: "تبدیل آرزو به ستاره"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setModalOpen(false),
								className: "p-2 rounded-xl bg-[#242447] text-[#F1DCCB] cursor-pointer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs text-[#D9A9C5] mb-1.5",
							children: "عنوان آرزو"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							value: title,
							onChange: (e) => setTitle(e.target.value),
							placeholder: "مثلاً: یک سفر دونفره به شمال",
							className: "w-full rounded-xl bg-[#212142] border border-[#7771A8]/45 px-3 py-2.5 text-sm text-[#F1DCCB] outline-none focus:border-[#D6B875]"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs text-[#D9A9C5] mb-1.5",
							children: "متن آرزو"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							rows: 3,
							value: text,
							onChange: (e) => setText(e.target.value),
							placeholder: "آرزوی قشنگت را اینجا بنویس...",
							className: "w-full rounded-xl bg-[#212142] border border-[#7771A8]/45 px-3 py-2.5 text-sm text-[#F1DCCB] outline-none focus:border-[#D6B875]"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs text-[#D9A9C5] mb-1.5",
							children: "دسته‌بندی"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: CATEGORIES.filter((c) => c.id !== "all").map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setCategory(c.id),
								className: `px-2.5 py-1.5 rounded-xl text-xs cursor-pointer ${category === c.id ? "bg-[#7771A8] text-[#F1DCCB] font-semibold" : "bg-[#212142] text-[#D9A9C5]"}`,
								children: c.label
							}, c.id))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs text-[#D9A9C5] mb-1.5",
							children: "رنگ ستاره"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center gap-2.5",
							children: STAR_COLORS.map((sc) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setColor(sc.hex),
								title: sc.label,
								className: `w-8 h-8 rounded-full border-2 cursor-pointer transition-transform ${color === sc.hex ? "border-white scale-110" : "border-transparent"}`,
								style: { backgroundColor: sc.hex }
							}, sc.hex))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "w-full py-3 rounded-2xl bg-gradient-to-l from-[#D6B875] to-[#D9A9C5] text-[#17172F] font-bold text-sm cursor-pointer",
							children: "درخشش ستاره آرزو ✨"
						})
					]
				})
			})
		]
	});
};
export { WishSkyWorld };
