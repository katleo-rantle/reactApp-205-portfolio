import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { angleToRadian } from '../../utils/angle';

export function BikeModel(props) {
  const { nodes, materials } = useGLTF(
    '/models/bicycle_low-poly_minimalistic.glb'
  );
  return (
    <group dispose={null}>
      <group scale={0.03} position={[7,0,9]} rotation={[angleToRadian(30), angleToRadian(90), 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bike_body_dummyProp_0.geometry}
            material={materials.dummyProp}
          />
          <group position={[0.11, 8.879, 25.775]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bike_pedal_dummyProp_0.geometry}
              material={materials.dummyProp}
              position={[-7.001, 0.674, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bike_pedalFootR_dummyProp_0.geometry}
              material={materials.dummyProp}
              position={[-8.02, 0.262, -20.199]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bike_pedalFootL_dummyProp_0.geometry}
              material={materials.dummyProp}
              position={[7.797, 0.172, 20.199]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
          </group>
          <group position={[0, -31.561, 85.706]} rotation={[-0.383, 0, 0]}>
            <group position={[0, 61.285, -67.719]} rotation={[0.383, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bike_fork_dummyProp_0.geometry}
                material={materials.dummyProp}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.bike_tyre1_dummyProp_0.geometry}
                material={materials.dummyProp}
                position={[0, -55.274, 29.845]}
                rotation={[1.379, -Math.PI / 2, 0]}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bike_handleBar_dummyProp_0.geometry}
              material={materials.dummyProp}
              position={[0, 61.285, -67.719]}
              rotation={[0.383, 0, 0]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.bike_tyre2_dummyProp_0.geometry}
            material={materials.dummyProp}
            position={[0, 49.528, 29.845]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models/bicycle_low-poly_minimalistic.glb');
