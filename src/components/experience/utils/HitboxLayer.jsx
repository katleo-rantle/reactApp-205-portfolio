// HitboxLayer.jsx

import React, { useEffect, useRef } from 'react';
// Assuming angleToRadian is available via props or an import
// NOTE: We need the angleToRadian utility function here!
// Let's assume you pass it as a prop or import it like this:


// Import the reusable component

import { angleToRadian } from '../../../utils/angle';
import { CornerHighlightBox } from './CornerHighlightBox';
import gsap from 'gsap';

// Create refs for each index text
  



const HitboxLayer = () => {
  // --- 1. Define all object properties ---

  const indexTextRefs = [useRef(), useRef(), useRef()];
  const scaleup = { x: 0.5, y: 0.5, z: 0.5 };
  const scaledown = { x: 1.0, y: 1.0, z: 1.0 };

    useEffect(() => {
      // Animate each index text in sequence
      const tl = gsap.timeline({ repeat: -1});
      indexTextRefs.forEach((ref, i) => {
        tl
        .to(ref.current.scale, { ...scaleup, duration: 0.25 })
        // .to(ref.current.rotation, {
        //   y: '+=' + Math.PI * 2, // Rotate 360 degrees relative to current rotation
        //   duration: 2.5,
        //   ease: 'none',
        // }, "<")
          .to(ref.current.scale, { ...scaledown, duration: 0.25 })
          .to({}, { duration: 3 }); // Pause for 3 seconds
      });
      return () => tl.kill();
    }, []);

  const screenProjectsHitbox = {
    boxArgs: [500, 300, 100],
    position: [-740, 410.812, 92.657],
    rotation: [0, angleToRadian(45), 0],
    cornerCubeSize: 15,
    hoverColor: 'black',
    defaultColor: 'black',
    labelText: 'Projects',
    linkHref: 'https://example.com',
    textScale: 80,
    url: '/projects',
    index: 0, // 👈 Added index prop
  };
  const screenAboutHitbox = {
    boxArgs: [500, 300, 100],
    position: [0, 350, -115],
    rotation: [-angleToRadian(13), 0, 0],
    cornerCubeSize: 15,
    hoverColor: 'black',
    defaultColor: 'black',
    labelText: 'About',
    linkHref: 'https://example.com',
    textScale: 80,
    url: '/about',
    index: 1, // 👈 Added index prop
  };
  const phoneHitbox = {
    boxArgs: [200, 50, 200],
    position: [680, 50, 10],
    rotation: [0, angleToRadian(15), 0],
    cornerCubeSize: 8,
    hoverColor: 'black',
    defaultColor: 'black',
    labelText: 'Contact',
    linkHref: 'https://example.com',
    textScale: 80,
    url: '/contact',
    index: 2, // 👈 Added index prop
  };

  // --- 2. Render the components ---
  return (
    <>
      <CornerHighlightBox
        {...screenProjectsHitbox}
        indexTextRef={indexTextRefs[0]}
      />
      <CornerHighlightBox
        {...screenAboutHitbox}
        indexTextRef={indexTextRefs[1]}
      />
      <CornerHighlightBox {...phoneHitbox} indexTextRef={indexTextRefs[2]} />
    </>
  );
};

export default HitboxLayer; // Use default export for easier use
