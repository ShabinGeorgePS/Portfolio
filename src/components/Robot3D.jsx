import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

function RobotMesh({ mousePosition }) {
  const groupRef = useRef();
  const headRef = useRef();
  const time = useRef(0);

  useFrame((state, delta) => {
    time.current += delta;

    // Floating animation
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(time.current * 2) * 0.1;
      groupRef.current.rotation.y = Math.sin(time.current * 0.5) * 0.1;
    }

    // Head follows mouse
    if (headRef.current && mousePosition) {
      const targetX = mousePosition.x * 0.5;
      const targetY = -mousePosition.y * 0.3;
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        targetX,
        0.1
      );
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        targetY,
        0.1
      );
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={1.2}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1.5, 0.8]} />
        <meshStandardMaterial color="#ef4444" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Head */}
      <group ref={headRef} position={[0, 1.2, 0]}>
        <mesh>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial color="#dc2626" metalness={0.6} roughness={0.3} />
        </mesh>

        {/* Eyes with glow */}
        <mesh position={[-0.2, 0.1, 0.41]}>
          <circleGeometry args={[0.1, 32]} />
          <meshStandardMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={3}
            toneMapped={false}
          />
        </mesh>
        <mesh position={[0.2, 0.1, 0.41]}>
          <circleGeometry args={[0.1, 32]} />
          <meshStandardMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={3}
            toneMapped={false}
          />
        </mesh>

        {/* Antenna */}
        <mesh position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.3]} />
          <meshStandardMaterial color="#fbbf24" metalness={1} roughness={0} />
        </mesh>
        <mesh position={[0, 0.7, 0]}>
          <sphereGeometry args={[0.08]} />
          <meshStandardMaterial
            color="#fbbf24"
            emissive="#fbbf24"
            emissiveIntensity={2}
            toneMapped={false}
          />
        </mesh>
      </group>

      {/* Arms */}
      <group position={[-0.7, 0.3, 0]} rotation={[0, 0, Math.sin(time.current * 3) * 0.3]}>
        <mesh>
          <cylinderGeometry args={[0.15, 0.15, 1]} />
          <meshStandardMaterial color="#991b1b" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, -0.6, 0]}>
          <sphereGeometry args={[0.2]} />
          <meshStandardMaterial color="#dc2626" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      <group position={[0.7, 0.3, 0]} rotation={[0, 0, -Math.sin(time.current * 3) * 0.3]}>
        <mesh>
          <cylinderGeometry args={[0.15, 0.15, 1]} />
          <meshStandardMaterial color="#991b1b" metalness={0.7} roughness={0.3} />
        </mesh>
        <mesh position={[0, -0.6, 0]}>
          <sphereGeometry args={[0.2]} />
          <meshStandardMaterial color="#dc2626" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>

      {/* Legs */}
      <mesh position={[-0.3, -1.2, 0]}>
        <cylinderGeometry args={[0.2, 0.15, 0.8]} />
        <meshStandardMaterial color="#7f1d1d" metalness={0.6} roughness={0.4} />
      </mesh>
      <mesh position={[0.3, -1.2, 0]}>
        <cylinderGeometry args={[0.2, 0.15, 0.8]} />
        <meshStandardMaterial color="#7f1d1d" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* Feet */}
      <mesh position={[-0.3, -1.7, 0.15]}>
        <boxGeometry args={[0.3, 0.1, 0.5]} />
        <meshStandardMaterial color="#450a0a" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh position={[0.3, -1.7, 0.15]}>
        <boxGeometry args={[0.3, 0.1, 0.5]} />
        <meshStandardMaterial color="#450a0a" metalness={0.8} roughness={0.3} />
      </mesh>
    </group>
  );
}

export default function Robot3D() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="w-full h-full">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#ef4444" />
        <pointLight position={[5, -5, -5]} intensity={0.3} color="#00ffff" />

        <RobotMesh mousePosition={mousePosition} />

        {/* Post-processing effects */}
        <EffectComposer>
          <Bloom
            intensity={1.5}
            luminanceThreshold={0.5}
            luminanceSmoothing={0.9}
            height={300}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}