// HitboxLayer.jsx

import React from 'react';
// Assuming angleToRadian is available via props or an import
// NOTE: We need the angleToRadian utility function here!
// Let's assume you pass it as a prop or import it like this:


// Import the reusable component

import { angleToRadian } from '../../../utils/angle';
import { CornerHighlightBox } from './CornerHighlightBox';

const HitboxLayer = () => {
  // --- 1. Define all object properties ---
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
      <CornerHighlightBox {...screenProjectsHitbox} />
      <CornerHighlightBox {...screenAboutHitbox} />
      <CornerHighlightBox {...phoneHitbox} />
    </>
  );
};

export default HitboxLayer; // Use default export for easier use
