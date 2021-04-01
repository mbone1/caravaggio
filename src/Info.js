import React, {useState} from "react";
import { Text } from "@react-three/drei";
import { useSpring, useTransition, animated } from "react-spring/three";
import { useActiveStore, ActiveContext } from "./store.js";
import data from './Paintings/data'
// import { useTransition } from "react-spring";

export default function Info(props) {
  const [active] = useActiveStore(ActiveContext);
  const AnimatedText = animated(Text)
  // const [items, set] = useState(data)
  const { ...fadeIn } = useSpring({
    color: active ? "black" : "white",
    reverse: active,
    reset: !active,
    from: {
      color: "black",
      fontSize: 1,
      scale: [20, 0, 0]
    },
    to: {
      color: "white",
      fontSize: 20,
      scale: [1, 1, 1]
    },
    config: { duration: 1000 }
    
    // from: { color: "black" },
    // enter: { color: "black" },
    // leave: {color: "black"},
    
    // to: {color: "white"},
    // config: { mass: 1, tension: 280, friction: 60 },
    // from: { color: "black" },
    // to: {color: "white"}
  });

  const transitions = useTransition(data[props.counter].info.map((item) => ({ ...item })),
    (d) => d.name,
    {
      color: active ? "black" : "white",
      // from: { color: "green" },
      // enter: { color: "black" },
      // leave: { color: "green" }
    }
    )
    

  // console.log(items)
    
  
  
  //animation for the descriptive text
  // const { ...spongus } = useSpring({
  //   color: active ? "black" : "white",
  //   config: { mass: 1, tension: 280, friction: 60 },
  // }); //animation for the title/overall description

  //maps over the coordinates/text content for each datapoint
  return (
    // transitions.map(({ item, props, key }) => {
    //     <AnimatedText
    //       key={key}
    //       style={props}
    //       anchorX={item.coords.x}
    //       anchorY={-6.8}
    //       position-z={-4.8}
    //       maxWidth={7}
    //       text={items.text}
    //       fontSize={0.2} />
    //   })
    <>
    {transitions.map(({ item, props, key }) =>
      {
      return (
        <AnimatedText
          
          {...props}
          key={key}
          // style={props}
          anchorX={item.coords.x}
                anchorY={item.coords.y}
                position-z={item.coords.z}
                maxWidth={item.maxWidth}
                text={item.text}
                fontSize={0.2}
        ></AnimatedText>
      );
    })
      }
      </>
    
  )
}

