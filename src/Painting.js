import React from "react";
import {useLoader} from "react-three-fiber";
import "./index.css";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import taking from "./takingofchristframed.glb";
import { a } from "react-spring/three";
import { useRotateStore, RotateContext, RotateProvider } from "./store2.js";
// import {
//   useProgress,
//   Html,
//   Reflector,
//   useTexture,
//   Line,
// } from "@react-three/drei";



export default function Painting() {
  const [rotate, setRotate] = useRotateStore();
  const gltf = useLoader(GLTFLoader, taking);
  return (
    // <RotateProvider>
      <a.primitive
        object={gltf.scene}
        rotation={rotate}
        attach="geometry"
        args={[0, 0, 0]}
        position={[0, 2.5, -4.9]}
        scale={[1, 1, 1]}
      />
    // </RotateProvider>
  );
}

  
  
  
    
