import GlassFloor from './Objects/GlassFloor'
import React, { useState, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import "./index.css";
import { Text } from "@react-three/drei";
import { animated, useSpring } from "react-spring/three";
import Loader from './Objects/loader'
import Lights from './Objects/lights'
import {  ActiveProvider } from './Stores/store.js';
import RightPillar from './Objects/rightPillar'
import LeftPillar from './Objects/leftPillar'
import Painting from './Paintings/Scripts/Painting.js'
import Intro from './Paintings/Scripts/Intro.js'
import {CounterProvider} from './Stores/counterStore.js'
let font = "https://fonts.gstatic.com/s/quicksand/v7/6xKtdSZaM9iE8KbpRA_hK1QL.woff"; 




export default function App() {
  const AnimatedText = animated(Text);
  // let [counter, setCounter] = useState(0)
  let [raise, setRaise] = useState(false)
  
  let posText = (e) => {
    if (raise === false) {
      return 1;
    } else {
      return 0;
    }
  };

  // function handleClick() {
  //   if (counter === data.length - 1) {
  //     setCounter(0)
  //   } else {
  //     setCounter(counter+1);
  //   }
  // }
  
  function handleBegin() {
    // setCounter(1)
    setRaise(true)
  }

  const { ...fadeIn } = useSpring({
    from: { fillOpacity: 0 },
    fillOpacity: raise ? 0 : posText(),
    config: { mass: 1, tension: 280, friction: 60 },
  });

  return (
    <Canvas
      concurrent
      style={{ color: "white" }}
      camera={{ position: [0, 0, 5] }}>
      <Suspense fallback={<Loader />}>
        <CounterProvider>
          <ActiveProvider>
            <Lights />
            <GlassFloor />
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
            <Intro index={0} />
            <Painting index={1} />
            <Painting index={2} />
            <Painting index={3} />
            <Painting index={4} />
            <Painting index={5} />
            <RightPillar raise={raise} />
            <LeftPillar raise={raise} />
          </ActiveProvider>
        </CounterProvider>
      </Suspense>
    </Canvas>
  );
}
      
        

          




            
  
   
     
      
      





  




 


          








  
 
  
    
  



     
   
  
  
  
  

 

  