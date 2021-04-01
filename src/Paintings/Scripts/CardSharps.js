import React, { useState } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import cardsharps from "../3d Files/cardsharps.glb";
import saintjerome from '../3d Files/stjeromeframed.glb'
import { a, useSpring } from "react-spring/three";
import { useActiveStore, ActiveContext } from "../../store.js";

export default function CardSharps(props) {
  const gltf = useLoader(GLTFLoader, cardsharps);
  const jerome = useLoader(GLTFLoader, saintjerome);
  const [zoom, setZoom] = useState(false);
  const [active, setActive] = useActiveStore(ActiveContext);

  const zoomer = (e) => {
    setZoom(!zoom);
    if (!active) {
      setActive(!active);
    }
  };

  let defaultPosy = [0, -20, 0];

  let posy = (e) => {
    if (props.counter === 1) {
      return [0, 2.5, -4.9];
    } else {
      return defaultPosy;
    }
  };
  // let posy2 = (e) => {
  //   if (props.counter === 1) {
  //     return [0, 2.35, -4.9];
  //   } else {
  //     return defaultPosy;
  //   }
  // };

  const { ...zoomProps } = useSpring({
    scale: zoom ? [1, 1, 1] : [1, 1, 1],
    position: zoom ? [0, 0, 0] : posy(),
    // color: active ? "white" : "black",
    // rotation: active ? [0, 0, 0] : [0, 0, 0],
    config: { mass: 1, tension: 175, friction: 60 },
  });
  // const { ...zoomProps2 } = useSpring({
  //   scale: zoom ? [1, 2, 1] : [1, 1, 1],
  //   position: zoom ? [-2, -5, 0] : posy2(),
  //   // color: active ? "white" : "black",
  //   // rotation: active ? [0, 0, 0] : [0, 0, 0],
  //   config: { mass: 1, tension: 175, friction: 60 },
  // });

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

  return (<>
    <a.primitive
      {...zoomProps}
      object={gltf.scene}
      onClick={(e) => zoomer()}
      attach="geometry"
      args={[0, 0, 0]}
    />
    {/* <a.primitive
      {...zoomProps2}
      object={jerome.scene}
      onClick={(e) => zoomer()}
      attach="geometry"
      args={[0, 0, 0]}
    /> */}
    </>
  );
}
