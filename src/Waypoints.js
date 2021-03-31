
import React from 'react';
import { Line } from "@react-three/drei";
import { useActiveStore, ActiveContext } from "./store.js";
import data from './Paintings/data'
import { useSpring,  animated } from "react-spring/three";

export default function WayPoints() {
  const AnimatedLine = animated(Line); //spring to animate component
  const [active] = useActiveStore(ActiveContext);
  //determines if lines are visible or not
  const { ...spingus } = useSpring({
    scale: active ? [0, 20, 0] : [1, 1, 1],
    config: { mass: 1, tension: 280, friction: 60 },
  });
  console.log(data[0].points)
  //scales up y value so points float above, 'float down' animation
  //below maps over points for each painting, index will correlate with current painting
  return (
    <>
      {data[0].points.map((datapoints)=> (
        <AnimatedLine
        //  key={datapoints[0].toString}
          points={datapoints}
          color="white"
        {...spingus}/>
      ))}
    </>
  );
}


