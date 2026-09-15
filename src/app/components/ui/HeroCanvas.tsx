import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Optimized floating 3D shape
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

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float
      speed={1.2}
      rotationIntensity={0.8}
      floatIntensity={1.5}
      floatingRange={[-0.15, 0.15]}
    >
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        {geometry === 'torus' && <torusKnotGeometry args={[1, 0.3, 32, 16]} />}
        {geometry === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
        {geometry === 'sphere' && <sphereGeometry args={[1, 16, 16]} />}
        
        <meshStandardMaterial
          color={color}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
    </Float>
  );
}

export function HeroCanvas() {
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // On mobile or before client mount, render a fast CSS gradient background
  if (!isMounted || isMobile) {
    return (
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-60">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#C9A96E]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-[#1A1A1A] rounded-full blur-[120px]" />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none opacity-60">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ powerPreference: 'low-power', antialias: false }}
      >
        <color attach="background" args={['#0F0F0F']} />
        
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={1.0} color="#C9A96E" />

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

        <Sparkles count={20} scale={8} size={2} speed={0.3} color="#C9A96E" opacity={0.4} />
      </Canvas>
    </div>
  );
}
