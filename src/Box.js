import React, { useRef } from "react";
import {useFrame } from "react-three-fiber";

import { useActiveStore, ActiveContext } from "./store.js";

export default function BigBox() {
  const [active, setActive] = useActiveStore(ActiveContext);


  const handleClick = (e) => {
    setActive(!active)
  }

  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y = mesh.current.rotation.z += 0.1;
  });
  return (
    <mesh
      ref={mesh}
      onClick={(e) => handleClick()}
      position={[8, -1.4, -3]}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"darkgrey"} transparent></meshStandardMaterial>
    </mesh>
  );
}
