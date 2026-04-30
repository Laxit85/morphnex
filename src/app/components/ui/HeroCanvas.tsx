import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Lightformer, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// An individual floating 3D shape
function FloatingShape({
  position,
  rotation,
  scale = 1,
  color,
  geometry,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: number;
  color: string;
  geometry: 'torus' | 'icosahedron' | 'sphere';
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Slowly rotate the mesh
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <Float
      speed={1.5} // Animation speed
      rotationIntensity={1} // XYZ rotation intensity
      floatIntensity={2} // Up/down float intensity
      floatingRange={[-0.2, 0.2]} // Range of y-axis values
    >
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        {geometry === 'torus' && <torusKnotGeometry args={[1, 0.3, 128, 32]} />}
        {geometry === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
        {geometry === 'sphere' && <sphereGeometry args={[1, 64, 64]} />}
        
        <meshPhysicalMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  );
}

export function HeroCanvas() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <color attach="background" args={['#0F0F0F']} />
        
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1.5} color="#C9A96E" />

        {/* Floating elements */}
        <group position={[3, 0, -2]}>
          <FloatingShape
            position={[1, 1, 0]}
            rotation={[0.5, 0, 0]}
            scale={1.2}
            color="#C9A96E"
            geometry="torus"
          />
          <FloatingShape
            position={[-3, -2, -4]}
            rotation={[0, 0.5, 0]}
            scale={1.5}
            color="#1A1A1A"
            geometry="icosahedron"
          />
          <FloatingShape
            position={[4, -1, -2]}
            rotation={[0.2, 0.4, 0]}
            scale={0.8}
            color="#121212"
            geometry="sphere"
          />
        </group>

        <Sparkles count={50} scale={10} size={2} speed={0.4} color="#C9A96E" opacity={0.5} />

        {/* Environment map for reflections */}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
