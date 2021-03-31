import React from "react";
import { Text } from "@react-three/drei";
import { useSpring, animated } from "react-spring/three";
import { useActiveStore, ActiveContext } from "./store.js";
import data from './Paintings/data'

export default function Info(props) {
  const [active] = useActiveStore(ActiveContext);
  const AnimatedText = animated(Text)
  const { ...fadeIn } = useSpring({
    
    color: active ? "black" : "white",
    config: { mass: 1, tension: 280, friction: 60 },
    // from: { color: "black" },
    // to: {color: "white"}
  });
  console.log(data[props.counter])
  
  //animation for the descriptive text
  // const { ...spongus } = useSpring({
  //   color: active ? "black" : "white",
  //   config: { mass: 1, tension: 280, friction: 60 },
  // }); //animation for the title/overall description

//maps over the coordinates/text content for each datapoint
  return (
    <>
      {data[props.counter].info.map((stuff) => (
      <>
          <AnimatedText
            {...fadeIn}
            key={stuff.coords.x-stuff.coords.y}
            anchorX={stuff.coords.x}
            anchorY={stuff.coords.y}
            position-z={stuff.coords.z}
            maxWidth={stuff.maxWidth}
            text={stuff.text}
            fontSize={0.2}/>
           <meshPhongMaterial attach="material" />
          <AnimatedText/>
          </>
        ))}
       </>
    );
}


  
  
    
    







