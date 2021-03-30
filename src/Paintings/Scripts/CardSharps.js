import React, { useState } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import cardsharps from "../3d Files/cardsharps.glb";
import { a, useSpring } from "react-spring/three";
import { useActiveStore, ActiveContext } from "../../store.js";

export default function CardSharps(props) {
  const gltf = useLoader(GLTFLoader, cardsharps);
  const [rotate, setRotate] = useState([0, 0, 0]);
  const [zoom, setZoom] = useState(false);
  const [active, setActive] = useActiveStore(ActiveContext);

  const zoomer = (e) => {
    setZoom(!zoom);
    if (!active) {
      setActive(!active);
    }
  };

  let defaultPosy = [0, 0, -200];

  let posy = (e) => {
    if (props.currentPainting === "CS") {
      return [0, 2.5, -4.9];
    } else {
      return defaultPosy;
    }
  };

  const { ...zoomProps } = useSpring({
    scale: zoom ? [1, 1, 1] : [1, 1, 1],
    position: zoom ? [0, 0, 0] : posy(),
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
      {...zoomProps}
      object={gltf.scene}
      rotation={rotate}
      onClick={(e) => zoomer()}
      attach="geometry"
      args={[0, 0, 0]}
    />
  );
}
