import React, { useRef } from "react";
import { Text } from "@react-three/drei";
import { useLoader, useFrame } from "react-three-fiber";
import { useSpring, animated } from "react-spring/three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useCounterStore } from "../../Stores/counterStore";
import { useActiveStore, ActiveContext } from "../../Stores/store.js";
import data from '../data.js'









export default function Intro(props) {
  const [active] = useActiveStore(ActiveContext);
  const [counter] = useCounterStore()
  let thisIndex = props.index;
  let font =
    "https://fonts.gstatic.com/s/quicksand/v7/6xKtdSZaM9iE8KbpRA_hK1QL.woff";
  const AnimatedText = animated(Text);
  let model = data[thisIndex].threeDFile;
  let defaultPosition = [0, -20, 0];
  const gltf = useLoader(GLTFLoader, model);



   const mesh = useRef();
   useFrame(() => {
     mesh.current.rotation.y += -.02;
    });

 let posText = (e) => {
   if (counter === thisIndex) {
     return 1;
   } else {
     return 0;
   }
 };

    let posDown = (e) => {
      if (counter === thisIndex) {
        return 1;
      } else {
        return 50;
      }
  };
  
  let posY = () => {
    if (counter === thisIndex) {
      return [8, .5, -4.9];
    } else {
      return defaultPosition;
    }
  };

  const { ...fadeIn } = useSpring({
    from: { lineHeight: 50, fillOpacity: 0 },
    lineHeight: posDown(),
    fillOpacity: posText(),
    config: { mass: 1, tension: 280, friction: 60 },
  });

  const { ...infoFadeIn } = useSpring({
    from: { lineHeight: 50, fillOpacity: 0 },
    lineHeight: posDown(),
    fillOpacity: active ? 0 : posText(),
    config: { mass: 1, tension: 280, friction: 60 },
  });


    const { ...zoomProps } = useSpring({
      position: active ? [8, -20, 0] : posY(),
      config: { mass: 1, tension: 175, friction: 60 },
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

        {data[thisIndex].info.map((stuff) => (
          <AnimatedText
            {...infoFadeIn}
            font={font}
            text={stuff.text}
            maxWidth={5}
            fontSize={0.63}
            anchorX={stuff.pos.x}
            anchorY={stuff.pos.y}
            position-z={stuff.pos.z}
          />
        ))}

        <animated.primitive
        ref={mesh}
          {...zoomProps}
          object={gltf.scene}
          // onClick={(e) => zoomer()}
          attach="geometry"
          args={[0, 0, 0]}
        />
      </>
    );
    }
        
