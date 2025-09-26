import {
  Environment,
  Float,
  Html,
  OrbitControls,
  PerspectiveCamera,
  useTexture,
} from '@react-three/drei';
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { Suspense, useEffect, useMemo, useRef } from 'react';
import { angleToRadian } from '../../utils/angle';
import { BackSide, MeshBasicMaterial } from 'three';
import { RobotModel } from './RobotModel';
import { ConsoleModel } from './ConsoleModel';
import { DeskModel } from './DeskModel';
import { LaptopModel } from './LaptopModel';
import { BikeModel } from './BikeModel';
import { PlantModel } from './PlantModel';
import { AvatarModel } from './AvatarModel';
import { ChairModel } from './ChairModel';
import { MouseModel } from './MouseModel';
import { LightModel } from './LightModel';

const minPolarAngle = angleToRadian(80);
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
      <boxGeometry args={[10, 10, 12]} />
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
    <mesh rotation={[-angleToRadian(90), 0, 0]} position={[9.35, 3.75, 2.85]}>
      <boxGeometry args={[1.5, 3.58, 7.5]} />
      <meshStandardMaterial color='#B19981' />
    </mesh>
  );
};

function R3fDemo() {
  // const orbitControlsRef = useRef();

  // useEffect(() => {
  //   if (orbitControlsRef.current) {
  //     orbitControlsRef.current.target.set(0, 2, 0);
  //     orbitControlsRef.current.update();
  //     console.log(orbitControlsRef.current.target)
  //   }
  // }, []);
  const targetPosition = [0,6,2]
  // const targetPosition = [0,0,0]

  return (
    <div className='h-screen w-full'>
      <Canvas shadows>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[4, 2, -10]} />
          <ambientLight intensity={Math.PI / 2} />
          {/* <ambientLight args={["white",1]}  /> */}

          {/* <pointLight position={[0, 10, 10]} decay={0} />/ */}
          {/* <directionalLight intensity={1} position={[2, 5, 2]} /> */}

          <OrbitControls
            target={targetPosition}
            enablePan={true}
            minDistance={7}
            maxDistance={10}
            minPolarAngle={minPolarAngle}
            maxPolarAngle={maxPolarAngle}
          />

          {/* <gridHelper args={[20, 20]} position={[0, 0, 0]} /> */}

          <Cube />
          {/* <Floor /> */}
          {/* <Room /> */}
          <Float speed={0.5} floatingRange={[1,2]}>
            <RobotModel />
          </Float>
          <ConsoleModel />
          <DeskModel />
          <LaptopModel />
          <BikeModel />
          <PlantModel />
          <AvatarModel />
          <ChairModel />
          <MouseModel />
          <LightModel />
        </Suspense>
      </Canvas>
    </div>
  );
}
export default R3fDemo;
