import React, { useMemo, useRef, useState } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { angleToRadian } from '../../utils/angle';

import { useFetchProjects } from '../../utils/fectchProjects';
import { CornerHighlightBox } from './utils/CornerHighlightBox';

export function LaptopModel(props) {
  // box on edges
  // end of box on edges
  const { nodes, materials } = useGLTF(
    '/models/sci_-_fi_computer_game_ready.glb'
  );
  const groupRef = useRef();
  const hitboxRef = useRef();

  // // Handle hover animation with Gasp
  // const handlePointerEnter = () => {
  //   gsap.to(groupRef.current.scale, {
  //     x: 110, // Scale up slightly
  //     y: 110,
  //     z: 110,
  //     duration: 0.3,
  //     ease: 'power2.out',
  //   });
  // };

  // const handlePointerLeave = () => {
  //   gsap.to(groupRef.current.scale, {
  //     x: 100, // Return to original scale
  //     y: 100,
  //     z: 100,
  //     duration: 0.3,
  //     ease: 'power2.out',
  //   });
  // };
  // Define properties for the first object (your original specs)

  const object1Props = {
    boxArgs: [500, 380, 100],
    position: [-740, 410.812, 92.657],
    rotation: [0, 7, 0], // Again, 7 radians is ~401 degrees. Maybe Math.PI/2, etc.
    cornerCubeSize: 15,
    hoverColor: 'black',
    defaultColor: 'white',
    labelText: 'Projects', // Text to show
    linkHref: 'https://example.com', // Link to open on click
    textScale: 80, // Larger text
  };

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
        {/*  screen loop > grid */}
        {/* Hitbox: Transparent Box mesh */}
        <CornerHighlightBox {...object1Props}>
          <mesh ref={hitboxRef}></mesh>
        </CornerHighlightBox>
        <group
          ref={groupRef}
          name='Plane003'
          position={[-740, 520.812, 92.657]}
          rotation={[0, 7, 0]}
          scale={100}
        >
          <mesh
            name='Plane003_digital_displays_0'
            castShadow
            receiveShadow
            geometry={nodes.Plane001_digital_displays_0.geometry}
            material={materials.digital_displays}
          />

          <mesh
            name='Plane003_digital_display_sides_0'
            castShadow
            receiveShadow
            geometry={nodes.Plane001_digital_display_sides_0.geometry}
            material={materials.digital_display_sides}
          />
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
