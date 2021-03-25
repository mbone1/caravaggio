import React, { useState, Suspense } from "react";
import { Canvas, useLoader } from "react-three-fiber";
import "./index.css";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import taking from "./takingofchristframed.glb";
import {
  useProgress,
  Html
} from "@react-three/drei";
import {  ActiveProvider} from './store.js';
import BigBox from './Box'
import Waypoints from './Waypoints'
import GlassFloor from './GlassFloor'
import Info from './Info'
import { a } from "react-spring/three";





export default function App() {
  const [rotate, setRotate] = useState([0, 0, 0]);
  const onMouseMove = (e) => {
    e.stopPropagation()
    setRotate([
      ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI) / 50,
      ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 50,
      0,
    ]);
  };
  const gltf = useLoader(GLTFLoader, taking);
  
  function Painting() {
    return (
      <Suspense fallback={<Loader />}>
        <a.primitive
          // onMouseMove={onMouseMove}
          object={gltf.scene}
          rotation={rotate}
          attach="geometry"
          args={[0, 0, 0]}
          position={[0, 2.5, -4.9]}
          scale={[1, 1, 1]}
        />
       </Suspense>
    );
  }

  function Loader() {
    const { progress } = useProgress();
    return (
      <Html center>
        <h1>{Math.trunc(progress)} % loaded</h1>
      </Html>
    );
  }
  
  

  
  return (
      <Canvas onMouseMove={onMouseMove}>
        <Suspense fallback={<Loader />}>
          <ActiveProvider>
            <ambientLight intensity={0.83} />
            <pointLight
              position={[0, 20, 10]}
              angle={0.7}
              penumbra={2}
              intensity={0.7}
            />
            <Painting />
            <BigBox position={[0, 0, -4.7]} />
            <Waypoints />
            <Info />
            <GlassFloor />
          </ActiveProvider>
        </Suspense>
      </Canvas>
  );
}


  
 
  
    
  



     
   
  
  
  
  

 

  