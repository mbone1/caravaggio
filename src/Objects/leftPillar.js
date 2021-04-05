import React, { useRef } from "react";
import { animated, useSpring } from "react-spring/three";
import { useFrame } from "react-three-fiber";

import Texturizer from "./Texturizer";
import { Text } from "@react-three/drei";
import data from '../Paintings/data'
import { useCounterStore } from "../Stores/counterStore.js";
let font = "https://fonts.gstatic.com/s/quicksand/v7/6xKtdSZaM9iE8KbpRA_hK1QL.woff";



export default function LeftPillar(props) {
    const [counter, setCounter] = useCounterStore()


     function handleClick() {
       if (counter === data.length - 1) {
         setCounter(0);
       } else {
         setCounter(counter + 1);
       }
    }
    
const mesh = useRef();
    useFrame(() => {
   mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += -.007
    })
        

  const { ...raiseUp } = useSpring({
    position: props.raise ? [0, 0, 0] : [0, -3, 0],
    config: { mass: 20, tension: 280, friction: 200 },
  });

  return (
    <animated.group {...raiseUp}>
      <mesh
        ref={mesh}
        onClick={(e) => handleClick()}
        position={[-7.9, -1.9, -3]}>
        <sphereBufferGeometry args={[0.5, 8, 7]} />
        <meshStandardMaterial
          wireframe={true}
          wireframeLinewidth={10}
          // transparent={true}
          opacity={0.4}
          color={"grey"}
          // map={boxSkin}
        ></meshStandardMaterial>
      </mesh>

      <Text
        // {...fadeIn}
        onClick={() => handleClick()}
        text={"NEXT"}
        font={font}
        maxWidth={12}
        fontSize={0.4}
        anchorX={8.42}
        anchorY={1.6}
        position-z={-3}
      />

      <animated.mesh position={[-8.0, -4, -3]} onClick={() => handleClick()}>
        <boxBufferGeometry args={[1.5, 3, 0.5]} />
        <Texturizer />
      </animated.mesh>
    </animated.group>
  );
}
