import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader, extend } from "react-three-fiber";
import "./index.css";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import taking from "./takingofchristframed.glb";
import {
  useProgress,
  Html,
  Reflector,
  useTexture,
  Line,
} from "@react-three/drei";
import marble from "./marble.jpg";
import { Text } from "troika-three-text";
// import { useSpring, a, animated } from "react-spring/three";
import {  ActiveProvider} from './store.js';
import { RotateContext, useRotateStore, RotateProvider } from './store2.js';
import BigBox from './Box'
// import Loader from './Loader'
import Waypoints from './Waypoints'
import GlassFloor from './GlassFloor'
import Info from './Info'
import { a } from "react-spring/three";





export default function App() {
  const [rotate, setRotate] = useState([]);
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
            <Painting/>
            <BigBox position={[0, 0, -4.7]} />
            <Waypoints />
            <Info />
            <GlassFloor />
          </ActiveProvider>
      </Suspense>
    </Canvas>
);
}


  
 
  
    
  



     
   
  
  
  
  

 

  