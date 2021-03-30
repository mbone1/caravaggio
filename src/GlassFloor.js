
import React from "react";
import {Reflector, useTexture} from "@react-three/drei";
import marble from "./marble.jpg";

export default function GlassFloor() {
  const distortionMap = useTexture(marble);
  return (
    <Reflector
      args={[40, 10]}
      resolution={1024}
      mirror={1}
      position={[-0.0, -4.1, -1]}
      rotation={[-1.26, 0, 0]}
      mixStrength={.75}
      depthToBlurRatioBias={0.7}
      depthScale={0.6}
      distortion={0.019}
      distortionMap={distortionMap}
    />
  );
}


