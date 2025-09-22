import {
  Environment,
  Html,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { angleToRadian } from '../../utils/angle';

const Cube = () => {
  const meshRef = useRef(null);
  useFrame(() => {
    if (!meshRef.current) {
      return;
    }
    meshRef.current.rotation.x += 0.01;
    meshRef.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={meshRef} position={[0, 2, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color='hotpink' />
    </mesh>
  );
};

const Floor = () => {
  return (
    <mesh rotation={[-angleToRadian(90), 0, 0]}>
      <planeGeometry args={[7, 7]} />
      <meshStandardMaterial color='lightGreen' />
    </mesh>
  );
};
const Room = () => {
  return (
    <mesh rotation={[-angleToRadian(90), 0, 0]}>
      <boxGeometry args={[7, 7]} />
      <meshStandardMaterial color='red' />
    </mesh>
  );
};

function R3fDemo() {
  return (
    <div className='h-screen w-full'>
      <Canvas shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 1, 6.5]} />
          {/* <ambientLight intensity={Math.PI / 2} /> */}
          {/* <ambientLight args={["white",1]}  /> */}

          {/* <pointLight position={[0, 10, 10]} decay={0} />/ */}
          <directionalLight intensity={1} position={[2, 5, 2]} />

          <OrbitControls enablePan={true} minDistance={1} maxDistance={50} />
          <Environment files={'/hdri/house.exr'} background />
          <Cube />
          <Floor />
          <Room />
        </Suspense>
      </Canvas>
    </div>
  );
}
export default R3fDemo;
