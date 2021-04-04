import React, { useState } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { a, useSpring, animated } from "react-spring/three";
import { useActiveStore, ActiveContext } from "../../store.js";
import data from "../data.js";
import { Line, Text } from "@react-three/drei";
import { v4 as uuidv4 } from "uuid";



export default function Intro(props) {
  let thisIndex = props.index;
  let font =
    "https://fonts.gstatic.com/s/quicksand/v7/6xKtdSZaM9iE8KbpRA_hK1QL.woff";
  const AnimatedText = animated(Text);
//   const gltf = useLoader(GLTFLoader, model);
  let defaultPosition = [0, -20, 0];

 let posText = (e) => {
   if (props.counter === thisIndex) {
     return 1;
   } else {
     return 0;
   }
 };

    let posDown = (e) => {
      if (props.counter === thisIndex) {
        return 1;
      } else {
        return 50;
      }
    };

  const { ...fadeIn } = useSpring({
    from: { lineHeight: 50, fillOpacity: 0 },
    lineHeight: posDown(),
    // lineHeight: 1,
    fillOpacity: posText(),
    config: { mass: 1, tension: 280, friction: 60 },
  });

    return (
      <>
        <AnimatedText
                {...fadeIn}
                font={font}
          text={"SELECTED WORKS OF MICHELANGELO MERISI DA CARAVAGGIO"}
          maxWidth={12}
          fontSize={1.5}
          anchorX={6}
          anchorY={-8}
          position-z={-6.9}
        />
    
        {/* <AnimatedText
          {...fadeIn}
          text={
            "Arrogant, rebellious and a murderer, Caravaggio's short and tempestuous life matched the drama of his works. Characterised by their dramatic, almost theatrical lighting, Caravaggio's paintings were controversial, popular, and hugely influential on succeeding generations of painters all over Europe."
          }
          maxWidth={12}
          fontSize={0.7}
          anchorX={6}
          anchorY={-4.2}
          position-z={-6.9}
        /> */}
      </>
    );
    }
        
