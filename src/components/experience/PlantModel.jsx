import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function PlantModel(props) {
  const { nodes, materials } = useGLTF('/models/lowpoly_plant_pot.glb');
  return (
    <group dispose={null}>
      <group scale={0.06} position={[8.5,0,-13.5]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plant_Palette_0.geometry}
          material={materials.Palette}
          position={[0, 16.533, 0]}
          rotation={[-Math.PI, 0.208, 0]}
          scale={[-0.005, 0.005, 0.005]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/lowpoly_plant_pot.glb');
