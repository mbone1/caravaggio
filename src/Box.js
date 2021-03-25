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
import { useSpring, a, animated } from "react-spring/three";
import { useActiveStore, ActiveProvider, ActiveContext } from "./store.js";

export default function BigBox() {
  const [active, setActive] = useActiveStore(ActiveContext);


  const handleClick = (e) => {
    // e.stopPropagation()
    setActive(!active)
  }

  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += 0.1;
  });
  return (
    <mesh
      // {...props}
      //   {...spongus}
      ref={mesh}
      // scale={ ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => handleClick()}
      // onPointerOver={(e) => setHover(true)}
      // onPointerOut={(e) => setHover(false)}
      position={[8, -1.4, -3]}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"darkgrey"} transparent></meshStandardMaterial>
    </mesh>
  );
}
