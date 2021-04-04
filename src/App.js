import React, { useState, Suspense, useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import "./index.css";
import GlassFloor from './GlassFloor'
import { useProgress, Html, Text } from "@react-three/drei";
import { animated, useSpring } from "react-spring/three";
import concrete from './conrete.jpg'
import Texturizer from './Texturizer'
// const boxSkin = useTexture(concrete);

import {  ActiveProvider } from './store.js';
import BigBox from './Box'
import data from './Paintings/data'
import Painting from './Paintings/Scripts/Painting.js'
import Intro from './Paintings/Scripts/Intro.js'
let font =
"https://fonts.gstatic.com/s/quicksand/v7/6xKtdSZaM9iE8KbpRA_hK1QL.woff"; 


export default function App() {
  const AnimatedText = animated(Text);
  let [counter, setCounter] = useState(0)
  let [raise, setRaise] = useState(false)
  // const boxSkin = useTexture(concrete);
  // const mesh = useRef();
  // useFrame(() => {
  //   mesh.current.rotation.y += 0.01;
  // });

  function Loader() {
    const { progress } = useProgress();
    return (
      <Html center>
        <h1>PLEASE WAIT</h1>
        <h2>{Math.trunc(progress)} % loaded</h2>
      </Html>
    );
  }

   let posText = (e) => {
     if (raise === false) {
       return 1;
     } else {
       return 0;
     }
   };

  
  function handleClick() {
    if (counter === data.length - 1) {
      setCounter(0)
      // setDistorter(distorter+0.01)
    } else {
      setCounter(counter+1);
    }
  }

  function handleBegin() {
    setCounter(1)
    setRaise(true)
  }

    const { ...fadeIn } = useSpring({
      from: { fillOpacity: 0 },
      fillOpacity: raise ? 0 : posText(),
      config: { mass: 1, tension: 280, friction: 60 },
    });

    const { ...raiseUp } = useSpring({
      // from: { position: [-8, , -3] },
      position: raise ? [0, 0, 0] : [0, -3, 0],
      config: { mass: 20, tension: 280, friction: 200 },
    });
    // const { ...unWire } = useSpring({
    //   // from: { position: [-8, , -3] },
    //   // position: raise ? [-8, -6.4, -3] : [-8, -10, -3],
    //   wireframe: raise ? true : false,
    //   config: { mass: 20, tension: 280, friction: 200 },
    // });

   
  return (
    <Canvas
      concurrent
      style={{ color: "white" }}
      camera={{ position: [0, 0, 5] }}>
      <Suspense fallback={<Loader />}>
        <ActiveProvider>
          <ambientLight intensity={0.83} />
          <pointLight
            position={[0, 20, 10]}
            angle={0.7}
            penumbra={2}
            intensity={0.7}
          />

          <AnimatedText
            {...fadeIn}
            onClick={() => handleBegin()}
            text={"BEGIN"}
            font={font}
            maxWidth={12}
            fontSize={1}
            anchorX={"center"}
            anchorY={1}
            position-z={-6.9}
          />

          <Intro counter={counter} index={0} />
          <Painting counter={counter} index={1} />
          <Painting counter={counter} index={2} />
          <Painting counter={counter} index={3} />
          <Painting counter={counter} index={4} />
          <Painting counter={counter} index={5} />

          <BigBox raise={raise} />

          <GlassFloor />

          <animated.group {...raiseUp}>
            <mesh
              // ref={mesh}
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
            <AnimatedText
              // {...fadeIn}
              onClick={() => handleClick()}
              text={"NEXT"}
              font={font}
              maxWidth={12}
              fontSize={0.4}
              anchorX={8.45}
              anchorY={1.6}
              position-z={-3}
            />

            <animated.mesh
              position={[-8.0, -4, -3]}
              onClick={() => handleClick()}>
              <boxBufferGeometry args={[1.5, 3, 0.5]} />

              <Texturizer />

              {/* <animated.meshStandardMaterial color={"darkgrey"}
           
            ></animated.meshStandardMaterial> */}
            </animated.mesh>
          </animated.group>
        </ActiveProvider>
      </Suspense>
    </Canvas>
  );
}
     
      
      





  




 


          








  
 
  
    
  



     
   
  
  
  
  

 

  