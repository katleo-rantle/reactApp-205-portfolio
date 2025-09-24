import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { angleToRadian } from '../../utils/angle';

export function DeskModel(props) {
  const { nodes, materials } = useGLTF('/models/lowpoly_desk_and_monitor.glb');
  return (
    <group  dispose={null}>
      <group scale={0.03} position={[0, 0, 2]} rotation={[0, -angleToRadian(45), 0]}> 
        <group position={[-8.412, 40.581, -48.956]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Table1_Palette_0.geometry}
            material={materials.Palette}
          />
          {/* <mesh
            castShadow
            receiveShadow
            geometry={nodes.Headphones_Palette_0.geometry}
            material={materials.Palette}
            position={[59.264, 60.42, -33.211]}
            rotation={[-Math.PI, -0.96, -Math.PI]}
            scale={[0.44, 1, 1]}
          /> */}
          {/* <mesh
            castShadow
            receiveShadow
            geometry={nodes.Triple_Monitor_Palette_0.geometry}
            material={materials.Palette}
            position={[-0.251, 54.356, -43.196]}
          /> */}
          {/* <mesh
            castShadow
            receiveShadow
            geometry={nodes.White_Keyboard_Palette_0.geometry}
            material={materials.Palette}
            position={[-40.064, 38.591, 29.178]}
          /> */}
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.White_Mouse_Palette_0.geometry}
            material={materials.Palette}
            position={[55.287, 39.724, 33.793]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Seat2_Palette001_0.geometry}
          material={materials['Palette.001']}
          position={[-26.871, 8.702, 58.969]}
          rotation={[-3.128, -0.392, -2.972]}
          scale={[0.68, 0.68, 0.604]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/lowpoly_desk_and_monitor.glb');
