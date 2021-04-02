import React, { useState } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { a, useSpring, animated } from "react-spring/three";
import { useActiveStore, ActiveContext } from "../../store.js";
import data from "../data.js";
import { Line, Text } from "@react-three/drei";
import fonts from './fonts'

//this script creates a painting for each object in the data file
//

export default function Painting(props) {
  let thisIndex = props.index 
  let model = data[thisIndex].threeDFile
  const AnimatedLine = animated(Line);
  const AnimatedText = animated(Text);
  const gltf = useLoader(GLTFLoader, model);
  const [zoom, setZoom] = useState(false);
  const [active, setActive] = useActiveStore(ActiveContext);
  let defaultPosition = [0, -20, 0];
  const defaultScale = [0, -3, -20];
    
  const zoomer = (e) => {
    setZoom(!zoom);
    if (!active) {
      setActive(!active);
    }
  };

  let posy = (e) => {
    if (props.counter === thisIndex) {
      return [0, 2.5, -4.9];
    } else {
      return defaultPosition;
    }
  };

  let posLines = (e) => {
    if (props.counter === thisIndex) {
      return [1, 1, 1];
    } else {
      return defaultScale;
    }
  };
  let posText = (e) => {
    if (props.counter === thisIndex) {
      return 1;
    } else {
      return 0;
    }
  };
  let posDown = (e) => {
    if (props.counter === thisIndex) {
      return 1;
    } else {
      return 50;
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
      scale: active ? [0, -3, -10] : posLines(),
        //   lineWidth: active ? number;

    // config: { duration: 1000 },
    config: { mass: 1, tension: 280, friction: 60 },
  });

  const { ...fadeIn } = useSpring({
    // color: active ? "black" : posText(),
    // scale: active ? [0, -3, 0] : [1, 1, 1],
    // outlineWidth: active ? 0 : 0.001,
    // outlineColor: active ? "white" : "black",
    // depthOffset: active ? 2 : 0,
    lineHeight: active ? 50 : posDown(),
    fillOpacity: active ? 0 : posText(),
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

      {data[thisIndex].points.map((datapoints) => (
        <AnimatedLine points={datapoints} color="white" {...spingus} />
      ))}

      {data[thisIndex].info.map((stuff) => (
        <>
          <AnimatedText
            {...fadeIn}
            key={stuff.coords.x - stuff.coords.y}
            anchorX={stuff.coords.x}
            anchorY={stuff.coords.y}
            position-z={stuff.coords.z}
            maxWidth={stuff.maxWidth}
            text={stuff.text}
            fontSize={0.23}
            font="https://fonts.gstatic.com/s/quicksand/v7/6xKtdSZaM9iE8KbpRA_hK1QL.woff"
          />
          <meshPhongMaterial attach="material" />
          <AnimatedText />
        </>
      ))}

      <AnimatedText
        {...fadeIn}
        key={data[thisIndex].name.text}
        anchorX={data[thisIndex].name.coords.x}
        anchorY={data[thisIndex].name.coords.y}
        position-z={data[thisIndex].name.coords.z}
        maxWidth={data[thisIndex].name.maxWidth}
        text={data[thisIndex].name.text.toUpperCase()}
        fontSize={data[thisIndex].name.size}
        font="https://fonts.gstatic.com/s/quicksand/v7/6xKtdSZaM9iE8KbpRA_hK1QL.woff"
      />
      <meshPhongMaterial attach="material" />
      <AnimatedText />
      <AnimatedText
        {...fadeIn}
        key={data[thisIndex].description.text}
        anchorX={data[thisIndex].description.coords.x}
        anchorY={data[thisIndex].description.coords.y}
        position-z={data[thisIndex].description.coords.z}
        maxWidth={data[thisIndex].description.maxWidth}
        text={data[thisIndex].description.text}
        fontSize={data[thisIndex].description.size}
        font="https://fonts.gstatic.com/s/quicksand/v7/6xKtdSZaM9iE8KbpRA_hK1QL.woff"
      />
      <meshPhongMaterial attach="material" />
      <AnimatedText />
    </>
  );
}
