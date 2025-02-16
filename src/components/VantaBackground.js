import React, { useEffect, useRef } from "react";
import * as THREE from "three"; // Ensure Three.js is installed
import NET from "vanta/dist/vanta.net.min"; // You can replace this with different effects

const VantaBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const effect = NET({
      el: vantaRef.current,
      THREE, // Required for Vanta.js
      color: 0xFFD700, // Purple color for the effect
      backgroundColor: 0x0D0D2B, // Dark background
      points: 15, // Number of points in the net
      maxDistance: 20, // Distance between points
      spacing: 18, // Adjust for density
    });

    return () => effect.destroy(); // Cleanup on unmount
  }, []);

  return <div ref={vantaRef} style={{ position: "fixed", width: "100vw", height: "100vh", zIndex: -1 }}></div>;
};

export default VantaBackground;
