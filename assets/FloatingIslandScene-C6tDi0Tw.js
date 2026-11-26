import { a as __toESM } from "./rolldown-runtime-DQp2zzRu.js";
import { C as Color, Lt as Vector3, Vt as require_react, a as Html, c as useThree, et as MathUtils, ft as Object3D, l as require_jsx_runtime, n as Stars, r as OrbitControls, s as useFrame, t as Sparkles } from "./r3f-core-XgHUAlSk.js";
import { d as WORLDS_META, f as useUniverseStore, s as audioEngine, u as SceneCanvas, w as getGraphicsProfile } from "./entry-Br_QEXnh.js";
// src/components/FloatingIslandScene.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var _flyTargetPos = new Vector3();
var _flyCamGoal = new Vector3();
function StylizedTrees({ shadowsEnabled }) {
	const trunkRef = (0, import_react.useRef)(null);
	const crownRef = (0, import_react.useRef)(null);
	const treeCoords = (0, import_react.useMemo)(() => [
		[
			-9.2,
			.9,
			-1.2,
			1
		],
		[
			-8.5,
			.9,
			2.2,
			.85
		],
		[
			-3.5,
			1.05,
			-8.5,
			1.1
		],
		[
			4.5,
			1.05,
			-7.8,
			.95
		],
		[
			8.8,
			.95,
			-.6,
			1.05
		],
		[
			8.2,
			.95,
			5.2,
			.88
		],
		[
			-2.8,
			1,
			8.2,
			.92
		],
		[
			1.8,
			.95,
			8.6,
			1
		],
		[
			-6.4,
			.95,
			-6.4,
			.9
		],
		[
			5.4,
			.95,
			6.2,
			.8
		],
		[
			-4.2,
			1.1,
			1.2,
			.78
		],
		[
			3.5,
			1.1,
			-1.2,
			.84
		]
	], []);
	(0, import_react.useEffect)(() => {
		const dummy = new Object3D();
		const color = new Color();
		if (trunkRef.current) {
			for (let idx = 0; idx < treeCoords.length; idx++) {
				const [x, y, z, s] = treeCoords[idx];
				dummy.position.set(x, y + .45 * s, z);
				dummy.scale.set(s, s, s);
				dummy.rotation.set(0, idx * .7, 0);
				dummy.updateMatrix();
				trunkRef.current.setMatrixAt(idx, dummy.matrix);
			}
			trunkRef.current.instanceMatrix.needsUpdate = true;
			trunkRef.current.computeBoundingSphere();
		}
		if (crownRef.current) {
			for (let idx = 0; idx < treeCoords.length; idx++) {
				const [x, y, z, s] = treeCoords[idx];
				dummy.position.set(x, y + 1.15 * s, z);
				dummy.scale.set(s * 1.05, s * 1.2, s * 1.05);
				dummy.rotation.set(0, idx * 1.1, 0);
				dummy.updateMatrix();
				crownRef.current.setMatrixAt(idx, dummy.matrix);
				color.set(idx % 3 === 0 ? "#D9A9C5" : idx % 2 === 0 ? "#A6BBAA" : "#8ea894");
				crownRef.current.setColorAt(idx, color);
			}
			crownRef.current.instanceMatrix.needsUpdate = true;
			if (crownRef.current.instanceColor) crownRef.current.instanceColor.needsUpdate = true;
			crownRef.current.computeBoundingSphere();
		}
	}, [treeCoords]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("instancedMesh", {
		ref: trunkRef,
		args: [
			void 0,
			void 0,
			treeCoords.length
		],
		castShadow: shadowsEnabled,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
			.1,
			.16,
			.95,
			8
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			color: "#7b5a46",
			roughness: .9
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("instancedMesh", {
		ref: crownRef,
		args: [
			void 0,
			void 0,
			treeCoords.length
		],
		castShadow: shadowsEnabled,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dodecahedronGeometry", { args: [.68, 1] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", { roughness: .82 })]
	})] });
}
function SoaringBirds({ reducedMotion }) {
	const groupRef = (0, import_react.useRef)(null);
	const birds = (0, import_react.useMemo)(() => [
		0,
		1.4,
		2.8,
		4.1,
		5.2
	], []);
	useFrame(({ clock }) => {
		if (!groupRef.current) return;
		const t = reducedMotion ? 0 : clock.getElapsedTime();
		const children = groupRef.current.children;
		for (let idx = 0; idx < children.length; idx++) {
			const bird = children[idx];
			const angle = t * .28 + birds[idx];
			const radius = 8.5 + idx % 2 * 2.4;
			bird.position.set(Math.cos(angle) * radius, 5.2 + Math.sin(t * 1.2 + idx) * .45, Math.sin(angle) * radius);
			bird.rotation.y = -angle;
			const wingL = bird.children[0];
			const wingR = bird.children[1];
			if (wingL && wingR) {
				const flap = reducedMotion ? .1 : Math.sin(t * 7 + idx * 2) * .45;
				wingL.rotation.z = flap;
				wingR.rotation.z = -flap;
			}
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		ref: groupRef,
		children: birds.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				-.14,
				0,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.26,
				.03,
				.1
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#F1DCCB",
				roughness: .6
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				.14,
				0,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
				.26,
				.03,
				.1
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#F1DCCB",
				roughness: .6
			})]
		})] }, i))
	});
}
function DriftingClouds({ reducedMotion }) {
	const groupRef = (0, import_react.useRef)(null);
	const clouds = (0, import_react.useMemo)(() => [
		{
			pos: [
				-16,
				-2.2,
				-10
			],
			scale: 1.5,
			speed: .25
		},
		{
			pos: [
				17,
				-1.5,
				-8
			],
			scale: 1.7,
			speed: .18
		},
		{
			pos: [
				-14,
				3.8,
				-16
			],
			scale: 1.3,
			speed: .22
		},
		{
			pos: [
				12,
				4.5,
				14
			],
			scale: 1.4,
			speed: .16
		},
		{
			pos: [
				0,
				-3.4,
				16
			],
			scale: 1.8,
			speed: .2
		},
		{
			pos: [
				-18,
				1.2,
				8
			],
			scale: 1.25,
			speed: .24
		}
	], []);
	useFrame(({ clock }) => {
		if (reducedMotion || !groupRef.current) return;
		const t = clock.getElapsedTime();
		const children = groupRef.current.children;
		for (let i = 0; i < children.length; i++) {
			const cloud = children[i];
			const cfg = clouds[i];
			cloud.position.x = cfg.pos[0] + Math.sin(t * cfg.speed + i) * 2.2;
			cloud.position.y = cfg.pos[1] + Math.cos(t * .35 + i) * .35;
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
		ref: groupRef,
		children: clouds.map((c, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: c.pos,
			scale: c.scale,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					1.1,
					14,
					14
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#F1DCCB",
					roughness: .95,
					transparent: true,
					opacity: .85
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.95,
						-.2,
						.15
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.85,
						12,
						12
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#D9A9C5",
						roughness: .95,
						transparent: true,
						opacity: .82
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-.9,
						-.25,
						-.1
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.8,
						12,
						12
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#F1DCCB",
						roughness: .95,
						transparent: true,
						opacity: .82
					})]
				})
			]
		}, idx))
	});
}
function WaterfallAndLagoon({ reducedMotion, enablePhysicalSheen }) {
	const streamRef = (0, import_react.useRef)(null);
	const mistRef = (0, import_react.useRef)(null);
	useFrame(({ clock }) => {
		if (reducedMotion) return;
		const t = clock.getElapsedTime();
		if (streamRef.current) {
			streamRef.current.position.y = -1.6 + Math.sin(t * 6) * .04;
			const mat = streamRef.current.material;
			mat.emissiveIntensity = .25 + Math.sin(t * 3) * .08;
		}
		if (mistRef.current) {
			const children = mistRef.current.children;
			for (let i = 0; i < children.length; i++) {
				const m = children[i];
				m.position.y = -4.2 + (t * .9 + i * .4) % 1.4;
				m.scale.setScalar(.5 + (t * .7 + i * .3) % 1 * .7);
			}
		}
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				3.2,
				1.02,
				5.1
			],
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			receiveShadow: true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [2.35, 28] }), enablePhysicalSheen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
				color: "#6fa6b8",
				roughness: .1,
				metalness: .1,
				clearcoat: 1,
				transparent: true,
				opacity: .86
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#6fa6b8",
				roughness: .15,
				metalness: .15,
				transparent: true,
				opacity: .86
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			ref: streamRef,
			position: [
				4.8,
				-1.6,
				7.6
			],
			rotation: [
				.14,
				-.5,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.55,
				.78,
				5.4,
				14
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#8ec7d8",
				emissive: "#4a7c96",
				emissiveIntensity: .25,
				roughness: .2,
				transparent: true,
				opacity: .78
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("group", {
			ref: mistRef,
			position: [
				5.1,
				0,
				8.1
			],
			children: [
				0,
				1,
				2,
				3
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					(i - 1.5) * .4,
					-4.1,
					i % 2 * .3
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
					.45,
					10,
					10
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#F1DCCB",
					transparent: true,
					opacity: .45,
					roughness: 1
				})]
			}, i))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			position: [
				1.7,
				1.15,
				5.5
			],
			rotation: [
				0,
				-.45,
				0
			],
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					castShadow: true,
					receiveShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						2.1,
						.18,
						.85
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#d8c3b3",
						roughness: .85
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.28,
						.38
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						2.1,
						.35,
						.08
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#b39c8c",
						roughness: .85
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.28,
						-.38
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						2.1,
						.35,
						.08
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#b39c8c",
						roughness: .85
					})]
				})
			]
		})
	] });
}
var BuildingMesh = import_react.memo(function BuildingMesh({ meta, hovered, enablePhysicalSheen, onHover, onSelect }) {
	const groupRef = (0, import_react.useRef)(null);
	useFrame((_, delta) => {
		if (!groupRef.current) return;
		const targetScale = hovered ? 1.08 : 1;
		if (Math.abs(groupRef.current.scale.x - targetScale) > 5e-4) groupRef.current.scale.setScalar(MathUtils.damp(groupRef.current.scale.x, targetScale, 8, delta));
	});
	const warmGlow = /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
		color: "#ffe2a8",
		emissive: "#D6B875",
		emissiveIntensity: hovered ? 2.1 : 1.2
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		ref: groupRef,
		position: meta.islandPosition,
		onPointerOver: (e) => {
			e.stopPropagation();
			document.body.style.cursor = "pointer";
			onHover(meta.id);
		},
		onPointerOut: (e) => {
			e.stopPropagation();
			document.body.style.cursor = "default";
			onHover(null);
		},
		onClick: (e) => {
			e.stopPropagation();
			onSelect(meta);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					-.15,
					0
				],
				receiveShadow: true,
				castShadow: true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
					1.35,
					1.5,
					.25,
					16
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#c9baa9",
					roughness: .85
				})]
			}),
			meta.id === "museum" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.55,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						1.05,
						1.1,
						1.1,
						8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#F1DCCB",
						roughness: .6
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						1.2,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.92,
						18,
						12,
						0,
						Math.PI * 2,
						0,
						Math.PI / 2
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#7771A8",
						roughness: .35,
						metalness: .3
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						2.2,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("octahedronGeometry", { args: [.2, 0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#D6B875",
						emissive: "#D6B875",
						emissiveIntensity: .8,
						metalness: .8,
						roughness: .2
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.5,
						1.06
					],
					children: [warmGlow, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.42,
						.65,
						.08
					] })]
				})
			] }),
			meta.id === "music" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.5,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.55,
						1,
						1.35
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#e6cbb7",
						roughness: .7
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						1.3,
						0
					],
					rotation: [
						0,
						Math.PI / 4,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
						1.25,
						.85,
						4
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#D9A9C5",
						roughness: .55
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.45,
						1.45,
						.25
					],
					rotation: [
						.4,
						0,
						-.5
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
						.38,
						.6,
						16,
						1,
						true
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#D6B875",
						metalness: .85,
						roughness: .2,
						side: 2
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.45,
						.69
					],
					children: [warmGlow, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [.22, 16] })]
				})
			] }),
			meta.id === "cat" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.48,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.45,
						.95,
						1.35
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#F1DCCB",
						roughness: .75
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						1.25,
						0
					],
					rotation: [
						0,
						Math.PI / 4,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
						1.18,
						.78,
						4
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#D9A9C5",
						roughness: .6
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-.42,
						1.48,
						.25
					],
					rotation: [
						0,
						0,
						.2
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
						.22,
						.48,
						8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#D9A9C5",
						roughness: .6
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.42,
						1.48,
						.25
					],
					rotation: [
						0,
						0,
						-.2
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
						.22,
						.48,
						8
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#D9A9C5",
						roughness: .6
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.42,
						.69
					],
					children: [warmGlow, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.36,
						.55,
						.06
					] })]
				})
			] }),
			meta.id === "home" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.65,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						2,
						1.3,
						1.6
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#f5e3d3",
						roughness: .72
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						1.68,
						0
					],
					rotation: [
						0,
						Math.PI / 4,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
						1.65,
						1,
						4
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#7771A8",
						roughness: .55
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.55,
						1.85,
						-.35
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.28,
						.7,
						.28
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#a98a7c",
						roughness: .85
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-.45,
						.72,
						.81
					],
					children: [warmGlow, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.35,
						.4,
						.06
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.45,
						.72,
						.81
					],
					children: [warmGlow, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.35,
						.4,
						.06
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.36,
						.81
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.38,
						.7,
						.08
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#8b5f4d",
						roughness: .7
					})]
				})
			] }),
			meta.id === "wishes" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
				[
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
							Math.cos(a) * .85,
							.6,
							Math.sin(a) * .85
						],
						castShadow: true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
							.07,
							.09,
							1.2,
							10
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#F1DCCB",
							roughness: .5
						})]
					}, i);
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						1.45,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
						1.15,
						.75,
						12
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#7771A8",
						roughness: .45
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						2.05,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("octahedronGeometry", { args: [.25, 0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#D6B875",
						emissive: "#D6B875",
						emissiveIntensity: 1.5
					})]
				})
			] }),
			meta.id === "greenhouse" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.22,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.7,
						.44,
						1.3
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#9bb39f",
						roughness: .75
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.85,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						1.56,
						.9,
						1.16
					] }), enablePhysicalSheen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
						color: "#d8f0e2",
						transparent: true,
						opacity: .48,
						roughness: .1,
						clearcoat: 1
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#d8f0e2",
						transparent: true,
						opacity: .48,
						roughness: .12
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						1.5,
						0
					],
					rotation: [
						0,
						Math.PI / 4,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
						1.18,
						.65,
						4
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#c4e6d2",
						transparent: true,
						opacity: .55,
						roughness: .12
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.75,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dodecahedronGeometry", { args: [.35, 0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#A6BBAA",
						emissive: "#A6BBAA",
						emissiveIntensity: .6
					})]
				})
			] }),
			meta.id === "cafe" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.5,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.95,
						1,
						1,
						12
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#f1dccb",
						roughness: .65
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
						1.3,
						.65,
						12
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#D9A9C5",
						roughness: .55
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						1.72,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.22,
						.16,
						.3,
						12
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#D6B875",
						metalness: .6,
						roughness: .25
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.5,
						.96
					],
					children: [warmGlow, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
						.55,
						.45,
						.08
					] })]
				})
			] }),
			meta.id === "aquarium" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.55,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						1.05,
						1.15,
						.9,
						16
					] }), enablePhysicalSheen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshPhysicalMaterial", {
						color: "#7ac2d6",
						transparent: true,
						opacity: .65,
						roughness: .1,
						clearcoat: 1
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#7ac2d6",
						transparent: true,
						opacity: .65,
						roughness: .12
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						1.08,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("torusGeometry", { args: [
						1.02,
						.09,
						10,
						24
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#D6B875",
						metalness: .7,
						roughness: .25
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.55,
						0
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.32,
						12,
						12
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#D9A9C5",
						emissive: "#7ac2d6",
						emissiveIntensity: .7
					})]
				})
			] }),
			meta.id === "observatory" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.75,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.92,
						1.05,
						1.5,
						16
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#2a2b52",
						roughness: .6
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						1.55,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
						.95,
						18,
						14,
						0,
						Math.PI * 2,
						0,
						Math.PI / 2
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#D6B875",
						metalness: .72,
						roughness: .28
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						.6,
						1.95,
						.4
					],
					rotation: [
						.5,
						.4,
						-.6
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						.12,
						.16,
						.95,
						12
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#F1DCCB",
						metalness: .7,
						roughness: .25
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.85,
						.95
					],
					children: [warmGlow, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [.2, 12] })]
				})
			] }),
			hovered && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Html, {
				position: [
					0,
					2.75,
					0
				],
				center: true,
				distanceFactor: 14,
				style: { pointerEvents: "none" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-3.5 py-2 rounded-2xl bg-[#17172F]/95 border border-[#D6B875]/60 text-center shadow-xl whitespace-nowrap",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm font-bold text-[#F1DCCB]",
						children: meta.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] text-[#D9A9C5] mt-0.5",
						children: "کلیک برای ورود"
					})]
				})
			})
		]
	});
});
function IslandWorldContent({ onSelectWorld }) {
	const timeOfDay = useUniverseStore((s) => s.environment.timeOfDay);
	const quality = useUniverseStore((s) => s.environment.quality);
	const reducedMotion = useUniverseStore((s) => s.environment.reducedMotion);
	const profile = (0, import_react.useMemo)(() => getGraphicsProfile(quality, reducedMotion), [quality, reducedMotion]);
	const [hoveredId, setHoveredId] = (0, import_react.useState)(null);
	const [flyingTo, setFlyingTo] = (0, import_react.useState)(null);
	const controlsRef = (0, import_react.useRef)(null);
	const islandGroupRef = (0, import_react.useRef)(null);
	const { camera } = useThree();
	const handleSelectBuilding = (0, import_react.useCallback)((meta) => {
		audioEngine.playSfx("sparkle");
		setFlyingTo(meta);
		window.setTimeout(() => {
			onSelectWorld(meta.id);
		}, 650);
	}, [onSelectWorld]);
	useFrame(({ clock }, delta) => {
		const t = clock.getElapsedTime();
		if (islandGroupRef.current && !flyingTo && !profile.systemReducedMotion) islandGroupRef.current.position.y = Math.sin(t * .55) * .14;
		if (flyingTo && controlsRef.current) {
			const [bx, by, bz] = flyingTo.islandPosition;
			_flyTargetPos.set(bx, by + 1.2, bz);
			_flyCamGoal.set(bx * 1.15, by + 3.5, bz + 4.5);
			controlsRef.current.target.lerp(_flyTargetPos, Math.min(1, delta * 5));
			camera.position.lerp(_flyCamGoal, Math.min(1, delta * 4));
			controlsRef.current.update();
		}
	});
	const isNight = timeOfDay === "night";
	const isDay = timeOfDay === "day";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ambientLight", {
			intensity: isDay ? .55 : .35,
			color: isNight ? "#7771A8" : "#F1DCCB"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
			isDay ? "#ffe8d6" : "#D9A9C5",
			"#2a2a4f",
			isDay ? .85 : .6
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				14,
				18,
				12
			],
			intensity: isDay ? 1.55 : isNight ? .85 : 1.25,
			color: isNight ? "#a7b0e6" : "#ffe3bd",
			castShadow: profile.shadowsEnabled,
			"shadow-mapSize": [profile.shadowMapSize, profile.shadowMapSize],
			"shadow-camera-left": -14,
			"shadow-camera-right": 14,
			"shadow-camera-top": 14,
			"shadow-camera-bottom": -14,
			"shadow-bias": -4e-4
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				0,
				4,
				0
			],
			color: "#D6B875",
			intensity: 1.4,
			distance: 22
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				-16,
				16,
				-24
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
				2.2,
				24,
				24
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshBasicMaterial", { color: isNight ? "#F1DCCB" : "#D6B875" })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
			radius: 65,
			depth: 40,
			count: Math.max(200, Math.round((isDay ? 400 : 1800) * profile.particleScale)),
			factor: 4,
			saturation: .4,
			fade: true,
			speed: profile.systemReducedMotion ? 0 : .5
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, {
			count: Math.max(15, Math.round(70 * profile.particleScale)),
			scale: [
				22,
				9,
				22
			],
			size: 3,
			speed: profile.systemReducedMotion ? 0 : .35,
			color: "#D6B875"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
			ref: islandGroupRef,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						.55,
						0
					],
					receiveShadow: true,
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						10.8,
						9.6,
						1,
						28
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#83a38a",
						roughness: .88
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						1.12,
						-1.2
					],
					receiveShadow: true,
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
						4.4,
						5.2,
						.45,
						22
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#96b39c",
						roughness: .85
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						0,
						-1.95,
						0
					],
					castShadow: true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
						9.6,
						4.3,
						14
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#4e4b73",
						roughness: .92,
						flatShading: true
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						-2.5,
						-2.5,
						1.5
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("coneGeometry", { args: [
						4.2,
						3.6,
						9
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: "#3c3a5e",
						roughness: .95,
						flatShading: true
					})]
				}),
				[
					[
						-3.2,
						-3.5,
						1.2
					],
					[
						2.4,
						-3.8,
						-1.5
					],
					[
						.2,
						-4.4,
						.4
					]
				].map(([x, y, z], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
					position: [
						x,
						y,
						z
					],
					rotation: [
						.2 * i,
						.4,
						.15
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("octahedronGeometry", { args: [.65, 0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
						color: i === 1 ? "#D6B875" : "#D9A9C5",
						emissive: i === 1 ? "#D6B875" : "#7771A8",
						emissiveIntensity: 1.1,
						roughness: .2
					})]
				}, i)),
				WORLDS_META.map((w, idx) => {
					const [bx, , bz] = w.islandPosition;
					return Array.from({ length: 4 }).map((_, s) => {
						const frac = (s + 1) / 5;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
							position: [
								bx * frac,
								1.07,
								bz * frac
							],
							rotation: [
								-Math.PI / 2,
								0,
								s * .6
							],
							receiveShadow: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [.32, 8] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
								color: "#d8c6b8",
								roughness: .9
							})]
						}, `${idx}-${s}`);
					});
				}),
				[
					[
						-3.4,
						1.1,
						-1.8
					],
					[
						3.2,
						1.1,
						-1.6
					],
					[
						-2.8,
						1.05,
						3.5
					],
					[
						2.6,
						1.05,
						3.2
					]
				].map(([x, y, z], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
					position: [
						x,
						y,
						z
					],
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							.35,
							0
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
							.04,
							.06,
							.7,
							8
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#3c3a5e",
							metalness: .5,
							roughness: .4
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
						position: [
							0,
							.75,
							0
						],
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sphereGeometry", { args: [
							.14,
							10,
							10
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
							color: "#ffe4a3",
							emissive: "#D6B875",
							emissiveIntensity: 1.8
						})]
					})]
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaterfallAndLagoon, {
					reducedMotion: profile.systemReducedMotion,
					enablePhysicalSheen: profile.enablePhysicalSheen
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StylizedTrees, { shadowsEnabled: profile.shadowsEnabled }),
				WORLDS_META.map((meta) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuildingMesh, {
					meta,
					hovered: hoveredId === meta.id,
					enablePhysicalSheen: profile.enablePhysicalSheen,
					onHover: setHoveredId,
					onSelect: handleSelectBuilding
				}, meta.id))
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SoaringBirds, { reducedMotion: profile.systemReducedMotion }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DriftingClouds, { reducedMotion: profile.systemReducedMotion }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
			ref: controlsRef,
			enableDamping: true,
			dampingFactor: .05,
			minDistance: 8,
			maxDistance: 28,
			minPolarAngle: .25,
			maxPolarAngle: Math.PI * .48,
			target: [
				0,
				1.2,
				0
			]
		})
	] });
}
var FloatingIslandScene = () => {
	const setActiveWorld = useUniverseStore((s) => s.setActiveWorld);
	const timeOfDay = useUniverseStore((s) => s.environment.timeOfDay);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "w-full h-full relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SceneCanvas, {
			cameraPosition: [
				0,
				9.5,
				19.5
			],
			fov: 44,
			bgColor: timeOfDay === "day" ? "#4a5687" : timeOfDay === "night" ? "#0e0e22" : "#17172F",
			fogNear: 24,
			fogFar: 72,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IslandWorldContent, { onSelectWorld: setActiveWorld })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute bottom-4 inset-x-0 flex justify-center px-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "px-4 py-2 rounded-2xl bg-[#17172F]/85 border border-[#7771A8]/35 text-xs sm:text-sm text-[#F1DCCB] text-center",
				children: "روی هر ساختمان کلیک کن یا از نقشه بالا دنیاها را انتخاب کن"
			})
		})]
	});
};
export { FloatingIslandScene };
