import React from "react";
import { Text } from "@react-three/drei";
import { useSpring, animated } from "react-spring/three";
import { useActiveStore, ActiveContext } from "./store.js";
import * as THREE from "three/src/Three";







export default function Info() {
  
  const [active] = useActiveStore(ActiveContext);
  
  const AnimatedText = animated(Text)
    
  const text =
    "The figure holding the lantern is believed to be a self-portrait of Caravaggio; also, presumably, representing St Peter, who would first betray Jesus by denying him, and then go on to bring 'the light of Christ' to the world.";
  const text2 =
    "One puzzling detail, the heads of Jesus and St. John seem to visually meld together.";
  const text3 =
    "In the very centre and foremost plane is the arresting officer's highly polished, metal-clad arm. It has been suggested that it was meant by the artist to serve as a mirror, a mirror of self-reflection and examination of conscience. In a sense, the artist may be 'inviting his viewers to see themselves reflected in the behaviour of Judas' through their own daily acts of betrayal of Jesus, that is, through their sin";
  const text4 =
    "At the far left, St. John is fleeing; his arms are raised, his mouth is open in a gasp, his cloak is flying and being snatched back by a soldier. The flight of the terrified John contrasts with the entrance of the artists: scholars claim that Caravaggio is making the point that even a sinner one thousand years after the resurrection has a better understanding of Christ than does his friend";
  const title = "The Taking of Christ";
  const description =
    "Commisioned by Roman nobleman Ciriaco Mattei in 1602, this painting depicts the arrest of Jesus.There are seven figures in the painting: from left to right they are John, Jesus, Judas, three soldiers (the one farthest to the right barely visible in the rear), and a man holding a lantern to the scene. They are standing, and only the upper three-quarters of their bodies are depicted. Judas has just kissed Jesus to identify him for the soldiers.  ";
    
  const { ...spingus } = useSpring({
    // scale: active ? [0, 20, 0] : [1, 1, 1],
    color: active ? "black" : "white",
    delay: 250,
    // rotation: active ? [0, 0, 0] : [0, 0, 0],
    // config: { mass: 1, tension: 280, friction: 60 },
  });
  const { ...spongus } = useSpring({
    // scale: active ? [0, 20, 0] : [1, 1, 1],
    color: active ? "black" : "white",
    // rotation: active ? [0, 0, 0] : [0, 0, 0],
    config: { mass: 1, tension: 280, friction: 60 },
  });


  
    return (
      <>
        <AnimatedText
          {...spingus}
          anchorX={-7.9}
          anchorY={-6.8}
          position-z={-4.8}
          text={text}
          maxWidth={5}
          // rotation={props.rotate}
          fontSize={0.2}>
          <meshPhongMaterial  attach="material" />
           
        </AnimatedText>
        <AnimatedText
          {...spongus}
          anchorX={13.9}
          anchorY={-0.8}
          position-z={-4.8}
          text={title}
          maxWidth={7}
          fontSize={0.7}>
          <meshPhongMaterial attach="material" />
        </AnimatedText>
        <AnimatedText
          {...spongus}
          anchorX={13.7}
          anchorY={-0.0}
          position-z={-4.8}
          text={description}
          maxWidth={6.8}
          fontSize={0.2}>
          <meshPhongMaterial attach="material" />
        </AnimatedText>
        <AnimatedText
          {...spingus}
          anchorX={9.8}
          anchorY={-6}
          position-z={-4.8}
          text={text2}
          maxWidth={2.8}
          fontSize={0.2}>
          <meshPhongMaterial attach="material" />
        </AnimatedText>
        <AnimatedText
          {...spingus}
          anchorX={-7.8}
          anchorY={-2.1}
          position-z={-4.8}
          text={text3}
          maxWidth={6.8}
          fontSize={0.2}>
          <meshPhongMaterial attach="material" />
        </AnimatedText>
        <AnimatedText
          {...spingus}
          anchorX={11.8}
          anchorY={-4}
          position-z={-4.8}
          text={text4}
          maxWidth={4.8}
          fontSize={0.2}>
          <meshPhongMaterial attach="material" />
        </AnimatedText>
      </>
    );
}









