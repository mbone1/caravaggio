

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
import BigBox from "./Box";
import Waypoints from "./Waypoints";


export default function Loader() {

  const { progress } = useProgress();
  return (
    <Html center>
      <h1>{Math.trunc(progress)} % loaded</h1>
    </Html>
  );
}
