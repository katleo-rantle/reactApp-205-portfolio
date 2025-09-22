import {
  Environment,
  Html,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { angleToRadian } from '../../utils/angle';
import { HDRLoader } from 'three/examples/jsm/Addons.js';
import { BackSide, EquirectangularReflectionMapping } from 'three';

const Cube = () => {
  const texture = useLoader(HDRLoader, '/hdri/house.exr')
  texture.mapping = EquirectangularReflectionMapping
  return (
    <mesh scale={[-1,1,1]}>
      <boxGeometry args={[10, 10, 10]} />
      <meshStandardMaterial map={texture} side={BackSide} />
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
          <Environment
            files={'/hdri/house.exr'}
            background
          />
          <Cube />
          {/* <Floor /> */}
          {/* <Room /> */}
        </Suspense>
      </Canvas>
    </div>
  );
}
export default R3fDemo;
