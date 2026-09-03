"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import type { MotionValue } from "motion/react";
import * as THREE from "three";

import { TOTAL_TURNS, valvePosition, valveScale } from "./valveMotion";
import { VALVE_MATERIALS, type MaterialId, type ValveId } from "./valveCatalog";
import ValveHotspots from "./ValveHotspots";

/** Modele özgü pivot düzeltmeleri — döküm gövdelerin merkezleri farklı. */
const PIVOT_OFFSETS: Record<string, [number, number, number]> = {
  "EV100_1_5_2": [0, 0, 0],
  EV100_3_4: [-0.6, 0, 0],
  KV1P: [0.4, 0, 0],
};

const BASE_SCALE: Record<string, { mobile: number; desktop: number }> = {
  EV100_3_4: { mobile: 6.5, desktop: 11.5 },
};
const DEFAULT_SCALE = { mobile: 7.5, desktop: 13 };

type ValveModelProps = {
  valveId: ValveId;
  materialId: MaterialId;
  progress: MotionValue<number>;
  reduceMotion: boolean;
  showHotspots?: boolean;
};

export default function ValveModel({
  valveId,
  materialId,
  progress,
  reduceMotion,
  showHotspots = false,
}: ValveModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(`/${valveId}.glb`);
  const { viewport } = useThree();

  const isMobile = viewport.width < 5;

  /* Materyal örneği yalnızca seçim değişince kurulur; her karede değil. */
  const material = useMemo(() => {
    const preset = VALVE_MATERIALS[materialId];
    return new THREE.MeshStandardMaterial({
      color: preset.color,
      metalness: preset.metalness,
      roughness: preset.roughness,
      envMapIntensity: 1.5,
      side: THREE.DoubleSide,
    });
  }, [materialId]);

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        (child as THREE.Mesh).material = material;
      }
    });
  }, [scene, material]);

  /* GPU kaynağını serbest bırak — model/materyal değişimlerinde sızıntı olmasın. */
  useEffect(() => () => material.dispose(), [material]);

  /* Başlangıç açısı: KV1P önden görünsün diye 90°, EV serisi 0°. */
  const initialRotationY = valveId.startsWith("EV") ? 0 : -Math.PI / 2;

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group) return;

    /* MotionValue doğrudan okunur: React render döngüsüne hiç dokunmuyoruz. */
    const p = progress.get();

    /* İmleç mikro-hareketi: modele "canlı" his verir, hareket hassasiyeti
       açıksa devre dışı kalır. */
    const pointerX = reduceMotion ? 0 : state.pointer.x * 0.8;
    const pointerY = reduceMotion ? 0 : state.pointer.y * 0.4;

    const targetRotationY =
      initialRotationY + p * Math.PI * 2 * TOTAL_TURNS + pointerX;
    const targetRotationX = (p * Math.PI) / 6 - pointerY;
    const { x, y } = valvePosition(p, isMobile);

    /* `damp` kare hızından bağımsız yumuşatma sağlar: 144 Hz ekranda da
       60 Hz'de de aynı hızda yerine oturur. */
    group.rotation.y = THREE.MathUtils.damp(group.rotation.y, targetRotationY, 4, delta);
    group.rotation.x = THREE.MathUtils.damp(group.rotation.x, targetRotationX, 4, delta);
    group.position.x = THREE.MathUtils.damp(group.position.x, x, 4, delta);
    group.position.y = THREE.MathUtils.damp(group.position.y, y, 4, delta);

    const targetScale = valveScale(p);
    const eased = THREE.MathUtils.damp(group.scale.x, targetScale, 4, delta);
    group.scale.setScalar(eased);
  });

  const base = BASE_SCALE[valveId] ?? DEFAULT_SCALE;
  const modelScale = isMobile ? base.mobile : base.desktop;

  return (
    <group ref={groupRef}>
      <group position={PIVOT_OFFSETS[valveId] ?? [0, 0, 0]}>
        <primitive object={scene} scale={modelScale} />
        <ValveHotspots valveId={valveId} showHotspots={showHotspots} />
      </group>
    </group>
  );
}
