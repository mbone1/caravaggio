

import React from "react";


import {
  useProgress,
  Html,
} from "@react-three/drei";



export default function Loader() {

  const { progress } = useProgress();
  return (
    <Html center>
      <h1 style={{color: "white"}}>{Math.trunc(progress)} % loaded</h1>
    </Html>
  );
}
