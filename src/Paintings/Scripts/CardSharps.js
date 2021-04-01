import React, { useState } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import cardsharps from "../3d Files/cardsharps.glb";
import { a, useSpring, animated } from "react-spring/three";
import { useActiveStore, ActiveContext } from "../../store.js";
import data from "../data.js";
import { Line, Text } from "@react-three/drei";

export default function CardSharps(props) {
  const AnimatedLine = animated(Line);
  const AnimatedText = animated(Text);
  const gltf = useLoader(GLTFLoader, cardsharps);
  const [zoom, setZoom] = useState(false);
  const [active, setActive] = useActiveStore(ActiveContext);
  let defaultPosition = [0, -20, 0];
  const defaultScale = [0, -3, 0];

  const zoomer = (e) => {
    setZoom(!zoom);
    if (!active) {
      setActive(!active);
    }
  };

  let posy = (e) => {
    if (props.counter === 1) {
      return [0, 2.5, -4.9];
    } else {
      return defaultPosition;
    }
  };

  let posLines = (e) => {
    if (props.counter === 1) {
      return [1, 1, 1];
    } else {
      return defaultScale;
    }
  };
  let posText = (e) => {
    if (props.counter === 1) {
      return "white";
    } else {
      return "black";
    }
  };


  const { ...zoomProps } = useSpring({
    scale: zoom ? [1, 1, 1] : [1, 1, 1],
    position: zoom ? [0, 0, 0] : posy(),
    // color: active ? "white" : "black",
    // rotation: active ? [0, 0, 0] : [0, 0, 0],
    config: { mass: 1, tension: 175, friction: 60 },
  });

  const { ...spingus } = useSpring({
    scale: active ? [0, -3, 0] : posLines(),
    // config: { duration: 1000 },
    config: { mass: 1, tension: 280, friction: 60 },
  });

  const { ...fadeIn } = useSpring({
    color: active ? "black" : posText(),
    // opacity: active ? 0 : 0,
    config: { mass: 1, tension: 280, friction: 60 },
    // from: { color: "black" },
    // to: {color: "white"}
  });





  return (
    <>
    <a.primitive
      {...zoomProps}
      object={gltf.scene}
      onClick={(e) => zoomer()}
      attach="geometry"
      args={[0, 0, 0]}
      />
      
    {data[1].points.map((datapoints) => (
        <AnimatedLine points={datapoints} color="white" {...spingus} />
    ))}
      
      {data[1].info.map((stuff) => (
        <>
          <AnimatedText
            {...fadeIn}
            key={stuff.coords.x - stuff.coords.y}
            anchorX={stuff.coords.x}
            anchorY={stuff.coords.y}
            position-z={stuff.coords.z}
            maxWidth={stuff.maxWidth}
            text={stuff.text}
            fontSize={0.2}
          />
          <meshPhongMaterial attach="material" />
          <AnimatedText />
        </>
      ))}

      </>
  );
}
