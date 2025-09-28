import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { angleToRadian } from '../../utils/angle';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export function RobotModel(props) {
  const robotRef = useRef();
  const robotRightArmRef = useRef();
  const { nodes, materials } = useGLTF('/models/ai_robot.glb');

  useGSAP(() => {
    const tl = gsap.timeline();
    
  
    tl.to(robotRef.current.position, {
      x: -4,
      y: 2,
      z: 5,
      duration: 1,
      ease: 'power3.out',
    })
    .to(robotRef.current.position, {
      x: -2,
      y: 2,
      z: 1,
      duration: 2,
      ease: 'sine.inOut',
    })
      .to(
        robotRef.current.position,
        { x: -1, y: 1.45, z: 0, duration: 2, ease: 'sine.out' },
        '-=0.1'
      )
      
      .to(robotRef.current.rotation, { y: angleToRadian(180), duration: 3 })
      .to(robotRightArmRef.current.rotation, {
        x: -Math.PI,
        duration: 3,
        repeat: 2,
        ease: 'power1.inOut',
        yoyo: true,
      })
      .to(robotRightArmRef.current.rotation, {
        y: -angleToRadian(90),
        duration: 1,
        repeat: 3,
        yoyo: true,
        ease: 'power1.inOut',
      })
      .to(robotRightArmRef.current.rotation, {
        z: Math.PI/2,
        duration: 1,
        repeat: 3,
        yoyo: true,
        ease: 'power1.inOut',
      })
      
  }, [])
  return (
    <group ref={robotRef} dispose={null} scale={5} position={[2, 0, 10]} rotation={[0, angleToRadian(180), 0]}>
      <group position={[0, 0.24, 0.012]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Head_Head_0.geometry}
          material={materials.Head}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Head_EyeBorder_0.geometry}
          material={materials.EyeBorder}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Head_Ears_0.geometry}
          material={materials.Ears}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Head_Eyes_0.geometry}
          material={materials.Eyes}
        />
        <group position={[0, -0.001, 0.094]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Antenna_Antenna_0.geometry}
            material={materials.Antenna}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Antenna_Holder_0.geometry}
            material={materials.Holder}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Antenna_light_0.geometry}
            material={materials.light}
          />
        </group>
      </group>
      {/* <group position={[-0.049, 0.047, -0.003]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RightWheel_Wheelmat_0.geometry}
          material={materials.Wheelmat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RightWheel_wheelHolderMAt_0.geometry}
          material={materials.wheelHolderMAt}
        />
      </group> */}
      <group position={[-0.054, 0.145, -0.002]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LeftArm_HandCircleMat_0.geometry}
          material={materials.HandCircleMat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LeftArm_AfterCircleMat_0.geometry}
          material={materials.AfterCircleMat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LeftArm_ForeArmMat_0.geometry}
          material={materials.ForeArmMat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LeftArm_FingersMAt_0.geometry}
          material={materials.FingersMAt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LeftArm_HandMad_0.geometry}
          material={materials.HandMad}
        />
      </group>
      {/* <group position={[0.049, 0.047, -0.003]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LeftWheel_Wheelmat_0.geometry}
          material={materials.Wheelmat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LeftWheel_wheelHolderMAt_0.geometry}
          material={materials.wheelHolderMAt}
        />
      </group> */}
      <group position={[0.054, 0.145, -0.002]} rotation={[-Math.PI / 2, 0, 0]}  ref={robotRightArmRef}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RightArm_HandCircleMat_0.geometry}
          material={materials.HandCircleMat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RightArm_AfterCircleMat_0.geometry}
          material={materials.AfterCircleMat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RightArm_ForeArmMat_0.geometry}
          material={materials.ForeArmMat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RightArm_FingersMAt_0.geometry}
          material={materials.FingersMAt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RightArm_HandMad_0.geometry}
          material={materials.HandMad}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chest_chestMat_0.geometry}
        material={materials.chestMat}
        position={[0, 0.135, 0.006]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hips_hipsMat_0.geometry}
        material={materials.hipsMat}
        position={[0, 0.065, 0.009]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Neck_Neck_0.geometry}
        material={materials.Neck}
        position={[0.001, 0.174, 0.006]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MidSpine_midSpineMat_0.geometry}
        material={materials.midSpineMat}
        position={[0, 0.096, 0.01]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={1.053}
      />
    </group>
  );
}

useGLTF.preload('/models/ai_robot.glb');
