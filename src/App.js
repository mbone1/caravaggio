import React, { useState, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import "./index.css";
import GlassFloor from './GlassFloor'
import { useProgress, Html } from "@react-three/drei";
import {  ActiveProvider} from './store.js';
import BigBox from './Box'
import data from './Paintings/data'
import Painting from './Paintings/Scripts/Painting.js'
// import { v4 as uuidv4 } from "uuid";

export default function App() {
  let [counter, setCounter] = useState(0)
  const [currentPainting, setCurrentPainting] = useState(data[counter]);

  function Loader() {
    const { progress } = useProgress();
    return (
      <Html center>
        <h1>CARAVAGGIO</h1>
        {/* <span>{currentPainting}</span> */}
        <h2>{Math.trunc(progress)} % loaded</h2>
      </Html>
    );
  }
  
  function handleClick() {
    if (counter === data.length - 1) {
      setCounter(0)
      setCurrentPainting(data[counter])
    } else {
      setCounter(counter+1);
      setCurrentPainting(data[counter]);
    }
  }
   
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
          <Painting counter={counter} index={0} />
          <Painting counter={counter} index={1} />
          <Painting counter={counter}  index={2} />
          <Painting counter={counter}  index={3} />
          <Painting counter={counter} currentpainting={currentPainting} index={4} />
          <BigBox position={[0, 0, -4.7]} />
          <GlassFloor />
          <mesh onClick={(e) => handleClick()} position={[-8, -1.4, -3]}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color={"darkgrey"}
              transparent></meshStandardMaterial>
          </mesh>
        </ActiveProvider>
      </Suspense>
    </Canvas>
  );
}




  




 


          








  
 
  
    
  



     
   
  
  
  
  

 

  