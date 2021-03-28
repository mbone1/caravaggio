
import React from 'react';
import { Line } from "@react-three/drei";
import { useActiveStore, ActiveContext } from "./store.js";
import * as THREE from "three/src/Three";


import { useSpring,  animated } from "react-spring/three";



export default function WayPoints() {

  const AnimatedLine = animated(Line);
  const [active] = useActiveStore(ActiveContext);
  
  const { ...spingus } = useSpring({
    scale: active ? [0, 20, 0] : [1, 1, 1],
    // color: active ? "white" : "black",
    // rotation: active ? [0, -13.16, THREE.Math.degToRad(1)] : [0, 0, 0],
    config: { mass: 1, tension: 280, friction: 60 },
  });
  
  //wall of points----------------------------------------------------
  
  const points = [
    [4.7, 4.7, -4.99],
    [6.7, 6.2, -4.1],
    [7.2, 6.2, -4.1],
  ];
  //  anchorX={-7.9}
  //         anchorY={-6.8}
  //         position-z={-4.8}
  //         text={text}
  //         maxWidth={5}
  //         fontSize={0.2}>

  const des2points = [
    [-3, 4, -4.68],
    // [7, , -4.1],
    // [7, 6.0, -4.1],
    [-5, 5.45, -4.1],
    [-6.5, 5.45, -4.1],
  ];

  // anchorX={13.7}
  //       anchorY={-5}
  //       position-z={-4.8}
  //       text={text2}
  //       maxWidth={6.8}
  //       fontSize={0.2}>

  const des3points = [
    [0.5, 1.8, -4.99],
    // [7, , -4.1],
    // [7, 6.0, -4.1],
    [1.0, 1.4, -4.1],
    [7.2, 1.8, -4.1],
  ];

  //  anchorX={-7.8}
  //         anchorY={-2}
  //         position-z={-4.8}
  //         text={text3}
  //         maxWidth={3.8}
  //         fontSize={0.2}>

  const des4points = [
    [-4, 2.7, -4.68],
    // [7, , -4.1],
    // [7, 6.0, -4.1],
    [-5, 3.45, -4.1],
    [-6.49, 3.55, -4.1],
  ];

  //  anchorX={11.8}
  //         anchorY={-4}
  //         position-z={-4.8}
  //         text={text4}

  //wall of points----------------------------------------------------------

  return (
    <>
      <AnimatedLine
        // {}
        // rotation={rotation}
        points={points}
        color="white"
        // lineWidth={0.6}
        {...spingus}
      />
      <AnimatedLine
        // rotation={rotation}
        points={des2points}
        color="white"
        // lineWidth={0.6}
        {...spingus}
      />
      <AnimatedLine
        // rotation={rotation}
        points={des3points}
        color="white"
        // lineWidth={0.6}
        {...spingus}
      />
      <AnimatedLine
        // rotation={rotation}
        points={des4points}
        color="white"
        // lineWidth={0.6}
        {...spingus}
      />
    </>
  );
}