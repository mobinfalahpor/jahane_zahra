import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { getGraphicsProfile } from '../core/graphicsProfile';
import { useUniverseStore } from '../core/store';

function StudioEnvironment({
  bgColor,
  fogColor,
  fogNear = 18,
  fogFar = 65,
}: {
  bgColor: string;
  fogColor?: string;
  fogNear?: number;
  fogFar?: number;
}) {
  const { gl, scene } = useThree();

  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const roomEnv = new RoomEnvironment();
    const envTex = pmrem.fromScene(roomEnv, 0.04).texture;
    scene.environment = envTex;
    roomEnv.dispose();
    pmrem.dispose();

    return () => {
      scene.environment = null;
      envTex.dispose();
    };
  }, [gl, scene]);

  useEffect(() => {
    const targetBg = new THREE.Color(bgColor);
    if (scene.background && (scene.background as THREE.Color).isColor) {
      (scene.background as THREE.Color).copy(targetBg);
    } else {
      scene.background = targetBg;
    }

    const effectiveFogColor = fogColor ?? bgColor;
    if (scene.fog && (scene.fog as THREE.Fog).isFog) {
      const fog = scene.fog as THREE.Fog;
      fog.color.set(effectiveFogColor);
      fog.near = fogNear;
      fog.far = fogFar;
    } else {
      scene.fog = new THREE.Fog(effectiveFogColor, fogNear, fogFar);
    }
  }, [scene, bgColor, fogColor, fogNear, fogFar]);

  useEffect(() => {
    const win = window as unknown as {
      __OLU_RENDERER_INFO__?: () => {
        calls: number;
        triangles: number;
        points: number;
        lines: number;
        geometries: number;
        textures: number;
        programs: number;
      };
    };
    win.__OLU_RENDERER_INFO__ = () => ({
      calls: gl.info.render.calls,
      triangles: gl.info.render.triangles,
      points: gl.info.render.points,
      lines: gl.info.render.lines,
      geometries: gl.info.memory.geometries,
      textures: gl.info.memory.textures,
      programs: gl.info.programs?.length ?? 0,
    });
    return () => {
      if (win.__OLU_RENDERER_INFO__) {
        delete win.__OLU_RENDERER_INFO__;
      }
    };
  }, [gl]);

  return null;
}

interface SceneCanvasProps {
  children: React.ReactNode;
  cameraPosition?: [number, number, number];
  fov?: number;
  bgColor?: string;
  fogColor?: string;
  fogNear?: number;
  fogFar?: number;
  frameloop?: 'always' | 'demand';
  className?: string;
}

export const SceneCanvas: React.FC<SceneCanvasProps> = ({
  children,
  cameraPosition = [0, 4, 10],
  fov = 45,
  bgColor = '#17172F',
  fogColor,
  fogNear = 18,
  fogFar = 65,
  frameloop = 'always',
  className = '',
}) => {
  const quality = useUniverseStore((s) => s.environment.quality);
  const reducedMotion = useUniverseStore((s) => s.environment.reducedMotion);
  const [contextLost, setContextLost] = useState(false);
  const [pagePaused, setPagePaused] = useState(false);
  const canvasCleanupRef = useRef<(() => void) | null>(null);

  const profile = useMemo(
    () => getGraphicsProfile(quality, reducedMotion),
    [quality, reducedMotion]
  );

  useEffect(() => {
    const onVis = () => setPagePaused(document.hidden);
    const onPageHide = () => setPagePaused(true);
    const onPageShow = () => setPagePaused(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    window.addEventListener('pagehide', onPageHide);
    window.addEventListener('pageshow', onPageShow);
    return () => {
      document.removeEventListener('visibilitychange', onVis);
      window.removeEventListener('pagehide', onPageHide);
      window.removeEventListener('pageshow', onPageShow);
    };
  }, []);

  useEffect(() => {
    return () => {
      canvasCleanupRef.current?.();
      canvasCleanupRef.current = null;
    };
  }, []);

  if (contextLost) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#17172F] text-[#F1DCCB] p-6 text-center">
        <p className="text-lg font-semibold mb-2">نمایشگر سه‌بعدی در حال بازیابی است</p>
        <p className="text-sm text-[#D9A9C5]/80 mb-4">لطفاً چند لحظه صبر کنید یا صفحه را تازه‌سازی کنید.</p>
        <button
          type="button"
          onClick={() => setContextLost(false)}
          className="px-5 py-2.5 rounded-xl bg-[#7771A8] text-[#F1DCCB] text-sm font-medium hover:bg-[#8a83be] transition-colors cursor-pointer"
        >
          تلاش مجدد
        </button>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-full touch-none ${className}`}>
      <Canvas
        key={profile.antialias ? 'aa' : 'noaa'}
        dpr={profile.maxDpr}
        shadows={profile.shadowsEnabled ? (profile.lodLevel === 'balanced' ? 'basic' : 'soft') : false}
        frameloop={pagePaused ? 'demand' : frameloop}
        camera={{ position: cameraPosition, fov, near: 0.1, far: 180 }}
        gl={{
          antialias: profile.antialias,
          powerPreference: 'high-performance',
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.08,
        }}
        onCreated={({ gl }) => {
          gl.outputColorSpace = THREE.SRGBColorSpace;
          const canvas = gl.domElement;
          const onLost = (e: Event) => {
            e.preventDefault();
            setContextLost(true);
          };
          const onRestored = () => setContextLost(false);
          canvasCleanupRef.current?.();
          canvas.addEventListener('webglcontextlost', onLost, false);
          canvas.addEventListener('webglcontextrestored', onRestored, false);
          canvasCleanupRef.current = () => {
            canvas.removeEventListener('webglcontextlost', onLost, false);
            canvas.removeEventListener('webglcontextrestored', onRestored, false);
          };
        }}
      >
        <StudioEnvironment bgColor={bgColor} fogColor={fogColor} fogNear={fogNear} fogFar={fogFar} />
        {children}
      </Canvas>
    </div>
  );
};
