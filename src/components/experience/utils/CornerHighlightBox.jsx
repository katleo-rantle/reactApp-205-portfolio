import React, { useState, useMemo, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Text3D } from '@react-three/drei';
import * as THREE from 'three'; // Needed for Color

export function CornerHighlightBox({
  boxArgs,
  position,
  rotation,
  cornerCubeSize = 10,
  hoverColor = 'red',
  defaultColor = 'gray',
  labelText = 'Click Here',
  linkHref,
  onBoxClick,
  textScale = 60,
  textDepth = 5,
  fontUrl = '/fonts/BoldPixels_BoldPixels.json',
  textColor = 'red',
  children,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cornerRefs = useRef([]);
  const textRef = useRef();

  // Calculate the final target position for the text label (default position)
  const [L, H] = boxArgs;
  // Position text above the box: H/2 (top of box) + textScale (half text height) + textDepth/2
  const textYTarget = H / 2 + textScale * 0.5 + textDepth * 0.5;

  const cornerData = useMemo(() => {
    // ... (Corner calculation logic remains the same)
    const halfL = L / 2;
    const halfH = H / 2;
    const halfD = boxArgs[2] / 2;
    const data = [];
    for (const signX of [1, -1]) {
      for (const signY of [1, -1]) {
        for (const signZ of [1, -1]) {
          data.push({ x: halfL * signX, y: halfH * signY, z: halfD * signZ });
        }
      }
    }
    return data;
  }, [L, H, boxArgs, textScale, textDepth]);

  // Animation for corner cubes and text
  useEffect(() => {
    const cornerTl = gsap.timeline({
      defaults: { duration: 0.3, ease: 'power2.out' },
    });
    const textTl = gsap.timeline({
      defaults: { duration: 0.35, ease: 'back.out(1.7)' },
    });

    // --- 1. Corner Cube Animation (Remains the same) ---
    cornerRefs.current.forEach((mesh, index) => {
      if (!mesh) return;
      const targetPos = cornerData[index];
      const target = isHovered ? targetPos : { x: 0, y: 0, z: 0 };

      cornerTl.to(mesh.position, target, index * 0.01);
    });

    // --- 2. Text Animation (New Logic) ---
    if (textRef.current) {
      const textMaterial = Array.isArray(textRef.current.material)
        ? textRef.current.material[0]
        : textRef.current.material;

      // Kill any ongoing animation before starting a new one
      gsap.killTweensOf([
        textRef.current.position,
        textRef.current.scale,
        textMaterial,
      ]);

      if (isHovered) {
        // ON HOVER: Float out from center (0,0,0) to target position, and scale up
        textTl.to(textMaterial, { opacity: 1, duration: 0.15 }, 0);
        textTl.to(textRef.current.position, { y: textYTarget, z: 0, x: 0 }, 0);
        textTl.to(
          textRef.current.scale,
          { x: 1, y: 1, z: 1, duration: 0.35 },
          0
        );
      } else {
        // ON LEAVE: Move back to center (y=0) and scale down to zero, then fade out
        textTl.to(
          textRef.current.scale,
          { x: 0.001, y: 0.001, z: 0.001, duration: 0.35 },
          0
        );
        textTl.to(
          textRef.current.position,
          { y: 0, z: 0, x: 0, duration: 0.35 },
          0
        );
        textTl.to(textMaterial, { opacity: 0, duration: 0.15 }, 0.3); // Fade after scaling down
      }
    }

    return () => {
      cornerTl.kill();
      textTl.kill();
      // Clean up any remaining text tweens
      if (textRef.current) {
        gsap.killTweensOf([textRef.current.position, textRef.current.scale]);
      }
    };
  }, [isHovered, cornerData, textYTarget]);

  // Click Handler (remains the same)
  const handleClick = (event) => {
    if (linkHref) {
      window.open(linkHref, '_blank');
    }
    if (onBoxClick) {
      onBoxClick(event);
    }
  };

  return (
    <group position={position} rotation={rotation}>
      {/* The transparent hitbox for pointer events and clicks */}
      <mesh
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <boxGeometry args={boxArgs} />
        <meshBasicMaterial opacity={0} transparent />
      </mesh>

      {/* Render the Eight Corner Cubes */}
      {cornerData.map((data, index) => (
        <mesh
          key={index}
          ref={(el) => (cornerRefs.current[index] = el)}
          position={[0, 0, 0]} // Start at the center
        >
          <boxGeometry
            args={[cornerCubeSize, cornerCubeSize, cornerCubeSize]}
          />
          <meshBasicMaterial color={isHovered ? hoverColor : defaultColor} />
        </mesh>
      ))}

      {/* The Floating Text3D Label */}
      <Text3D
        ref={textRef}
        position={[0, 0, 0]} // Start position is the center (0, 0, 0)
        scale={[0.001, 0.001, 0.001]} // Start scale is near zero (invisible)
        size={textScale}
        font={fontUrl}
        height={textDepth}
        anchorX='middle'
        anchorY='center'
      >
        {labelText}
        <meshBasicMaterial color={textColor} transparent opacity={0} />
      </Text3D>

      {/* Render the children */}
      {children}
    </group>
  );
}
