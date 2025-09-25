import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { angleToRadian } from '../../utils/angle';

export function LaptopModel(props) {
  const { nodes, materials } = useGLTF(
    '/models/sci_-_fi_computer_game_ready.glb'
  );
  const screenTexture = useTexture('/cubemap/nx.jpg');
  return (
    <group
      {...props}
      dispose={null}
      scale={0.4}
      position={[1.5, 2.85, 0.5]}
      rotation={[0, -angleToRadian(45), 0]}
    >
      <group name='e9b7f83138d74896be663b0d70f0f6fdfbx' scale={0.01}>
        {/* keyboard */}
        <group
          name='Plane002'
          position={[0, 28.869, 312.193]}
          rotation={[-1.469, 0, 0]}
          scale={100}
        >
          <mesh
            name='Plane002_digital_displays_0'
            castShadow
            receiveShadow
            geometry={nodes.Plane002_digital_displays_0.geometry}
            material={materials.digital_displays}
          />

          <mesh
            name='Plane002_digital_display_sides_0'
            castShadow
            receiveShadow
            geometry={nodes.Plane002_digital_display_sides_0.geometry}
            material={materials.digital_display_sides}
          />
        </group>
        {/* screens */}
        <group
          name='Plane001'
          position={[0, 381.812, -82.657]}
          rotation={[-0.229, 0, 0]}
          scale={100}
        >
          <mesh
            name='Plane001_digital_displays_0'
            castShadow
            receiveShadow
            geometry={nodes.Plane001_digital_displays_0.geometry}
            material={materials.digital_displays}
          />
            {/* <meshBasicMaterial map={screenTexture} />
          </mesh> */}
          <mesh
            name='Plane001_digital_display_sides_0'
            castShadow
            receiveShadow
            geometry={nodes.Plane001_digital_display_sides_0.geometry}
            material={materials.digital_display_sides}
          />
            {/* <meshBasicMaterial map={screenTexture} />
          </mesh>   */}
        </group>
        {/* 2nd screen */}
        <group
          name='Plane0012'
          position={[440, 420.812, 82.657]}
          rotation={[-0.229, 15, 0]}
          scale={100}
        >
          <mesh
            name='Plane001_digital_displays_0'
            castShadow
            receiveShadow
            geometry={nodes.Plane001_digital_displays_0.geometry}
            material={materials.digital_displays}
          />
            {/* <meshBasicMaterial map={screenTexture} />
          </mesh> */}
          <mesh
            name='Plane001_digital_display_sides_0'
            castShadow
            receiveShadow
            geometry={nodes.Plane001_digital_display_sides_0.geometry}
            material={materials.digital_display_sides}
          />
            {/* <meshBasicMaterial map={screenTexture} />
          </mesh>   */}
        </group>
        {/* <group
          name='Circle'
          position={[0, 0, -94.762]}
          rotation={[0, Math.PI / 2, 0]}
          scale={123.801}
        >
          <mesh
            name='Circle_metal_2_0'
            castShadow
            receiveShadow
            geometry={nodes.Circle_metal_2_0.geometry}
            material={materials.metal_2}
          />
          <mesh
            name='Circle_metal_1_0'
            castShadow
            receiveShadow
            geometry={nodes.Circle_metal_1_0.geometry}
            material={materials.metal_1}
          />
        </group> */}
      </group>
    </group>
  );
}

useGLTF.preload('/models/sci_-_fi_computer_game_ready.glb');
