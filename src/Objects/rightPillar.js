import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { Text } from "@react-three/drei";
import { useSpring, animated } from "react-spring/three";
import Texturizer from './Texturizer'
import { useActiveStore, ActiveContext } from "../Stores/store.js";



export default function RightPillar(props) {
  const [active, setActive] = useActiveStore(ActiveContext);
  let font =
    "https://fonts.gstatic.com/s/quicksand/v7/6xKtdSZaM9iE8KbpRA_hK1QL.woff"; 


  const handleClick = (e) => {
    setActive(!active);
  };

   const { ...raiseUp } = useSpring({
     from: {position: [0, -3, 0]},
     position: props.raise ? [0, 0, 0] : [0, -3, 0],
     config: { mass: 20, tension: 280, friction: 200 },
   });

  const mesh = useRef();
  useFrame(() => {
    function spingus() {
      if (active === true) {
        return -0.007
      }
      else {
        return 0.02
      }
    }
    mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += spingus();
  });
  return (
    <animated.group
      {...raiseUp}
      // position={[0,0,0]}
    >
      <mesh onClick={(e) => handleClick()} position={[8.2, -4, -3]}>
        <boxBufferGeometry args={[1.5, 3, 0.5]} />
        <Texturizer/>
        {/* <meshPhongMaterial
          // color={"darkgrey"}
          map={boxSkin}></meshPhongMaterial> */}
      </mesh>
      
        <mesh
        ref={mesh}
          onClick={(e) => handleClick()}
          position={[8.1, -1.9, -3]}>
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
          onClick={(e) => handleClick()}
          // ref={mesh}
          font={font}
          // onClick={() => handleBegin()}
          color={"white"}
          text={"INFO"}
          maxWidth={12}
          fontSize={0.4}
          anchorX={-7.65}
          anchorY={1.6}
          position-z={-3}
        />
    
    </animated.group>
  );
}
