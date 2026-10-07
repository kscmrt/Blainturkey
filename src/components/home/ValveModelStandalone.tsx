"use client";

import { useEffect, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { VALVE_MATERIALS, type MaterialId, type ValveId } from "./valveCatalog";

const PIVOT_OFFSETS: Record<string, [number, number, number]> = {
  "EV100_1_5_2": [0, 0.5, 0],
  EV100_3_4: [-0.6, 0.5, 0],
  KV1P: [0.4, 0.5, 0],
};

const BASE_SCALE: Record<string, number> = {
  EV100_3_4: 10,
  "EV100_1_5_2": 11,
  KV1P: 11,
};

type ValveModelStandaloneProps = {
  valveId: ValveId;
  materialId: MaterialId;
};

export default function ValveModelStandalone({ valveId, materialId }: ValveModelStandaloneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(`/${valveId}.glb`);

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

  useEffect(() => () => material.dispose(), [material]);

  const modelScale = BASE_SCALE[valveId] ?? 11;
  const initialRotationY = valveId.startsWith("EV") ? 0 : -Math.PI / 2;

  return (
    <group ref={groupRef} rotation={[0, initialRotationY, 0]}>
      <group position={PIVOT_OFFSETS[valveId] ?? [0, 0.5, 0]}>
        <primitive object={scene} scale={modelScale} />
      </group>
    </group>
  );
}
