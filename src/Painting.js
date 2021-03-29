import React, {useState} from "react";
import {useLoader} from "react-three-fiber";
import "./index.css";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import taking from "./takingofchristframed.glb";
import { a, useSpring } from "react-spring/three";
import { useActiveStore, ActiveContext } from "./store.js";

// import { useRotateStore, RotateContext, RotateProvider } from "./store2.js";
// import {
//   useProgress,
//   Html,
//   Reflector,
//   useTexture,
//   Line,
// } from "@react-three/drei";



export default function Painting() {
  //   const [rotate, setRotate] = useRotateStore();
    const gltf = useLoader(GLTFLoader, taking);
    const [rotate, setRotate] = useState([0, 0, 0]);
    const [zoom, setZoom] = useState()
    const [active, setActive] = useActiveStore(ActiveContext);
    
    const zoomer = (e) => {
        setZoom(!zoom)
        if (!active) {
            setActive(!active)
        } 
    }

    
    
  const { ...props } = useSpring({
      scale: zoom ? [1, 1, 1] : [1, 1, 1],
      position: zoom ? [0, 2.5, -4.9] : [0, .36, 0],
    // color: active ? "white" : "black",
    // rotation: active ? [0, 0, 0] : [0, 0, 0],
    config: { mass: 1, tension: 280, friction: 60 },
  });
  

    //  const onMouseMove = (e) => {
    //    setRotate([
    //      ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI) / 50,
    //      ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 50,
    //      0,
    //    ]);
    //  };

    // const handleClick = (e) => {
    //     setZoom(!zoom)
    // }

  return (
      <a.primitive
          {...props}
      object={gltf.scene}
        rotation={rotate}
     onClick={(e) => zoomer()}

      attach="geometry"
      args={[0, 0, 0]}
      />
      );
    }


  
  
  
    
