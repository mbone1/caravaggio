import React, { useState } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { a, useSpring, animated } from "react-spring/three";
import { useActiveStore, ActiveContext } from "../../store.js";
import data from "../data.js";
import { Line, Text } from "@react-three/drei";
import { v4 as uuidv4 } from 'uuid';

//this script creates a painting for each object in the data file
//

export default function Painting(props) {
    let thisIndex = props.index
    let font =
      "https://fonts.gstatic.com/s/quicksand/v7/6xKtdSZaM9iE8KbpRA_hK1QL.woff"; 
  let model = data[thisIndex].threeDFile
  const AnimatedLine = animated(Line);
  const AnimatedText = animated(Text);
  const gltf = useLoader(GLTFLoader, model);
  const [zoom, setZoom] = useState(false);
  const [active, setActive] = useActiveStore(ActiveContext);
  let defaultPosition = [0, -20, 0];
  const defaultScale = [0, -3, -10];
    
    
    
  const zoomer = (e) => {
    setZoom(!zoom);
    if (!active) {
      setActive(!active);
    }
    };
    
    // const coolSetZoom = (zoom, active) => {
    //     let active = currentActive
    //     if (!zoom | !active) {

    //     } else if (!zoom )
    //     setZoom(!zoom)
    //     if (!active)
    // }


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
//   let posDown = (e) => {
//     if (props.counter === thisIndex) {
//       return 1;
//     } else {
//       return 50;
//     }
//   };

    const { ...zoomProps } = useSpring({
    from : {position : [0,-20,0]},
    // scale: zoom ? [1, 1, 1] : [1, 1, 1],
    position: zoom ? [0, 0, 0] : posy(),
    config: { mass: 1, tension: 175, friction: 60 },
  });

    const { ...spingus } = useSpring({
    from : {scale:[ 0, -3, -10]},
    scale: active ? [0, -3, -10] : posLines(),
    config: { mass: 1, tension: 280, friction: 60 },
  });

    const { ...fadeIn } = useSpring({
    from: {lineHeight : 50, fillOpacity: 0},
    // lineHeight: active ? 50 : posDown(),
    lineHeight: 1,
    fillOpacity: active ? 0 : posText(),
    config: { mass: 1, tension: 280, friction: 60 },
    });
    
    // console.log(uuidv4())

  return (
    <>
      <a.primitive
        {...zoomProps}
        // key={data[thisIndex].description.text}
        object={gltf.scene}
        onClick={(e) => zoomer()}
        attach="geometry"
        args={[0, 0, 0]}
      />

      {data[thisIndex].points.map((datapoints) => (
          <AnimatedLine key={uuidv4()} points={datapoints} color="white" {...spingus} />
      ))}

      {data[thisIndex].info.map((stuff, index) => (
        <>
          <AnimatedText
            {...fadeIn}
            key={uuidv4()}
            anchorX={stuff.coords.x}
            anchorY={stuff.coords.y}
            position-z={stuff.coords.z}
            maxWidth={stuff.maxWidth}
            text={stuff.text}
            fontSize={0.25}
            font={font}
          />
          <meshPhongMaterial attach="material" />
          <AnimatedText />
        </>
      ))}

      <AnimatedText
        {...fadeIn}
        // key={data[thisIndex].name.text}
        anchorX={data[thisIndex].name.coords.x}
        anchorY={data[thisIndex].name.coords.y}
        position-z={data[thisIndex].name.coords.z}
        maxWidth={data[thisIndex].name.maxWidth}
        text={data[thisIndex].name.text.toUpperCase()}
        fontSize={data[thisIndex].name.size}
        font={font}
      />
      <meshPhongMaterial attach="material" />
      <AnimatedText />
      <AnimatedText
        {...fadeIn}
        // key={data[thisIndex].description.text}
        anchorX={data[thisIndex].description.coords.x}
        anchorY={data[thisIndex].description.coords.y}
        position-z={data[thisIndex].description.coords.z}
        maxWidth={data[thisIndex].description.maxWidth}
        text={data[thisIndex].description.text}
        fontSize={data[thisIndex].description.size}
        font={font}
      />
      <meshPhongMaterial attach="material" />
      <AnimatedText />
    </>
  );
}
