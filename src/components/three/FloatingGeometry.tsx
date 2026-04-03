"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.08;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.12;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 3]} />
        <MeshDistortMaterial
          color="#7c3aed"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          wireframe={false}
        />
      </mesh>
    </Float>
  );
}

function RingOrbit() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x = Math.PI / 3;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <torusGeometry args={[2.5, 0.015, 16, 100]} />
        <meshBasicMaterial color="#06b6d4" opacity={0.4} transparent />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 3]}>
        <torusGeometry args={[3.2, 0.01, 16, 100]} />
        <meshBasicMaterial color="#7c3aed" opacity={0.25} transparent />
      </mesh>
    </group>
  );
}

function Particles() {
  const count = 60;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
  }

  const particlesRef = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (!particlesRef.current) return;
    particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#06b6d4"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function FloatingGeometry() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#7c3aed" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
        <AnimatedSphere />
        <RingOrbit />
        <Particles />
      </Canvas>
    </div>
  );
}
