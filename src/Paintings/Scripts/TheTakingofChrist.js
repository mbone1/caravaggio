import React, {useState} from "react";
import {useLoader} from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import taking from "../3d Files/takingofchristframed.glb";
import { a, useSpring } from "react-spring/three";
import { useActiveStore, ActiveContext } from "../../store.js";





export default function TheTakingofChrist(props) {
    const gltf = useLoader(GLTFLoader, taking);
    const [zoom, setZoom] = useState(false)
    const [active, setActive] = useActiveStore(ActiveContext);
    let defaultPosition = [0, -20, 0]
    
    const zoomer = (e) => {
        setZoom(!zoom)
        if (!active) {
            setActive(!active)
        } 
    }

    let posy = (e) => {
        if (props.counter === 0) { return [0, 2.8, -4.9] } else {
            return defaultPosition
        }
    }

        
    const { ...zoomProps } = useSpring({
        scale: zoom ? [1, 1, 1] : [1, 1, 1],
      position: zoom ? [0, .36, 0] : posy(),
        // onRest: {position: spings},
      // color: active ? "white" : "black",
      // rotation: active ? [0, 0, 0] : [0, 0, 0],
      config: { mass: 1, tension: 175, friction: 60 },
    });
  
  
    

    return (
        <a.primitive
            {...zoomProps}
        object={gltf.scene}
       onClick={(e) => zoomer()}
        attach="geometry"
        rotation={props.rotate}
       args={[0, 0, 0]}
       />
  
        );
      }

    
    


  
  
  
    
