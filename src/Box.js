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

  // const mesh = useRef();
  // const [hovered, setHover] = useState(false);
  // const [size, setSize] = useState(false);
  // useFrame(() => {
  //   mesh.current.rotation.x = mesh.current.rotation.y += 0.05;
  // });
  return (
    <mesh
    //   {...spongus}
      // ref={mesh}
      // scale={ ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      // onPointerOver={(e) => setHover(true)}
      // onPointerOut={(e) => setHover(false)}
      position={[8, -1.4, -3]}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"purple"}></meshStandardMaterial>
    </mesh>
  );
}
