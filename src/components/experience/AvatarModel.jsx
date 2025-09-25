import React, { useEffect, useRef } from 'react';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { angleToRadian } from '../../utils/angle';

export function AvatarModel(props) {
  const { nodes, materials } = useGLTF('/models/avatar.glb');
  const {animations:typingAnimation} = useFBX('animations/Typing.fbx')
  const animationGroup = useRef()

  // console.log(typingAnimation);

  typingAnimation[0].name = 'typing' // change name from mixamo.com

  const {actions} = useAnimations(typingAnimation, animationGroup) // create actions to be able to play animation

  //play action
  useEffect(()=>{
    actions['typing'].reset().play()
  },[])
  
  return (
    <group
      dispose={null}
      scale={4}
      position={[-.5, 0, 3]}
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
