import {
  Environment,
  Html,
  OrbitControls,
  PerspectiveCamera,
  useTexture,
} from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Suspense, useMemo, useRef } from 'react';
import { angleToRadian } from '../../utils/angle';
import { BackSide, MeshBasicMaterial } from 'three';

const minPolarAngle = angleToRadian(15);
const maxPolarAngle = angleToRadian(89);

const Cube = () => {
  const textures = useTexture([
    '/cubemap/px.jpg',
    '/cubemap/nx.jpg',
    '/cubemap/py.jpg',
    '/cubemap/ny.jpg',
    '/cubemap/pz.jpg',
    '/cubemap/nz.jpg',
  ]);

  const materials = useMemo(() => {
    return textures.map(
      (texture) => new MeshBasicMaterial({ map: texture, side: BackSide })
    );
  }, [textures]);

  return (
    <mesh scale={[-2, 1, 2]} material={materials} position={[0, 5, 0]}>
      <boxGeometry args={[10, 10, 15]} />
    </mesh>
  );
};

const Floor = () => {
  return (
    <mesh rotation={[-angleToRadian(90), 0, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial transparent opacity={0.4} />
    </mesh>
  );
};
const Room = () => {
  return (
    // <mesh rotation-x={-Math.PI/2}>
    <mesh rotation={[-angleToRadian(90), 0, 0]} position={[9.35, 3.75 , 2.85]}>
      <boxGeometry args={[1.25, 3.58,7.5]} />
      <meshStandardMaterial color='brown' />
    </mesh>
  );
};

function R3fDemo() {
  return (
    <div className='h-screen w-full'>
      <Canvas shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[-10,0, 10]} />
          <ambientLight intensity={Math.PI / 2} />
          {/* <ambientLight args={["white",1]}  /> */}

          {/* <pointLight position={[0, 10, 10]} decay={0} />/ */}
          {/* <directionalLight intensity={1} position={[2, 5, 2]} /> */}

          <OrbitControls enablePan={true} minDistance={3} maxDistance={10}  minPolarAngle={minPolarAngle} maxPolarAngle={maxPolarAngle}/>
          {/* <gridHelper args={[20, 20]} position={[0, 0, 0]} /> */}


          <Cube />
          {/* <Floor /> */}
          <Room />
        </Suspense>
      </Canvas>
    </div>
  );
}
export default R3fDemo;
