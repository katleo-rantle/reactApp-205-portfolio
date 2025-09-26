import React, { useEffect, useRef } from 'react';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { angleToRadian } from '../../utils/angle';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function AvatarModel(props) {
  const { nodes, materials } = useGLTF('/models/avatar.glb');
  // const {animations:typiAnimation} = useFBX('animations/Happy Idle.fbx')
  // const {animations:typingAnimation} = useFBX('animations/Happy Idle.fbx')
  const { animations: wavingAnimation } = useFBX('animations/Waving low.fbx');
  const { animations: typingAnimation } = useFBX('animations/Typing.fbx');
  const animationGroup = useRef();

  // console.log(typingAnimation);

  wavingAnimation[0].name = 'waving'; // change name from mixamo.com
  typingAnimation[0].name = 'typing';

  const { actions, mixer } = useAnimations(
    [wavingAnimation[0], typingAnimation[0]],
    animationGroup
  ); // create actions to be able to play animation

  //look at camera
  let clipName = ''
  useFrame((state) => {
    Object.values(actions).forEach((action) => {
      if (action.isRunning()) {
        console.log(action._clip.name)
        clipName = action._clip.name;
      };
    });
    if(clipName === 'typing') return; // do not look at camera when typing
    animationGroup.current
      .getObjectByName('Head')
      .lookAt(state.camera.position);
  });

  //play action
  // useEffect(() => {
  //   actions['waving'].reset().play();
  //   actions['typing'].reset().play();
  // }, []);

 

  useEffect(() => {
    if (!actions['waving'] || !actions['typing']) return;

    // Play waving first
    actions['waving'].reset().setLoop(THREE.LoopOnce, 1).play()

    
    mixer.addEventListener("finished", (e)=>{
      // When waving finishes, play typing
      if (e.action._clip.name === 'waving') {
        
        actions['waving'].reset().fadeOut(0.5)
        actions['typing'].reset().fadeIn(0.5).play();
      }
        
    })
    

    // Cleanup event listener on unmount
    return () => {
      mixer.removeEventListener()
    };
  }, [actions]);

  return (
    <group
      dispose={null}
      scale={4}
      position={[-0.5, 0, 3]}
      ref={animationGroup}
      rotation={[0, angleToRadian(135), angleToRadian(2.5)]}
    >
      <primitive object={nodes.Hips} />
      <skinnedMesh
        geometry={nodes.Body_Mesh.geometry}
        material={materials.Body}
        skeleton={nodes.Body_Mesh.skeleton}
      />
      <skinnedMesh
        name='Eye_Mesh'
        geometry={nodes.Eye_Mesh.geometry}
        material={materials.Eyes}
        skeleton={nodes.Eye_Mesh.skeleton}
        morphTargetDictionary={nodes.Eye_Mesh.morphTargetDictionary}
        morphTargetInfluences={nodes.Eye_Mesh.morphTargetInfluences}
      />
      <skinnedMesh
        name='EyeAO_Mesh'
        geometry={nodes.EyeAO_Mesh.geometry}
        material={materials.EyeAO}
        skeleton={nodes.EyeAO_Mesh.skeleton}
        morphTargetDictionary={nodes.EyeAO_Mesh.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeAO_Mesh.morphTargetInfluences}
      />
      <skinnedMesh
        name='Eyelash_Mesh'
        geometry={nodes.Eyelash_Mesh.geometry}
        material={materials.Eyelash}
        skeleton={nodes.Eyelash_Mesh.skeleton}
        morphTargetDictionary={nodes.Eyelash_Mesh.morphTargetDictionary}
        morphTargetInfluences={nodes.Eyelash_Mesh.morphTargetInfluences}
      />
      <skinnedMesh
        name='Head_Mesh'
        geometry={nodes.Head_Mesh.geometry}
        material={materials.Head}
        skeleton={nodes.Head_Mesh.skeleton}
        morphTargetDictionary={nodes.Head_Mesh.morphTargetDictionary}
        morphTargetInfluences={nodes.Head_Mesh.morphTargetInfluences}
      />
      <skinnedMesh
        name='Teeth_Mesh'
        geometry={nodes.Teeth_Mesh.geometry}
        material={materials.Teeth}
        skeleton={nodes.Teeth_Mesh.skeleton}
        morphTargetDictionary={nodes.Teeth_Mesh.morphTargetDictionary}
        morphTargetInfluences={nodes.Teeth_Mesh.morphTargetInfluences}
      />
      <skinnedMesh
        name='Tongue_Mesh'
        geometry={nodes.Tongue_Mesh.geometry}
        material={materials.Teeth}
        skeleton={nodes.Tongue_Mesh.skeleton}
        morphTargetDictionary={nodes.Tongue_Mesh.morphTargetDictionary}
        morphTargetInfluences={nodes.Tongue_Mesh.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.avaturn_hair_0.geometry}
        material={materials.avaturn_hair_0_material}
        skeleton={nodes.avaturn_hair_0.skeleton}
      />
      <skinnedMesh
        geometry={nodes.avaturn_shoes_0.geometry}
        material={materials.avaturn_shoes_0_material}
        skeleton={nodes.avaturn_shoes_0.skeleton}
      />
      <skinnedMesh
        geometry={nodes.avaturn_look_0.geometry}
        material={materials.avaturn_look_0_material}
        skeleton={nodes.avaturn_look_0.skeleton}
      />
    </group>
  );
}

useGLTF.preload('/models/avatar.glb');