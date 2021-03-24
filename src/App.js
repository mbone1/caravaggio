import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader, extend } from "react-three-fiber";
import "./index.css";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import taking from "./takingofchristframed.glb";
import {
  useProgress,
  Html,
  Reflector,
  useTexture,
  Line,
} from "@react-three/drei";
import marble from "./marble.jpg";
import { Text } from "troika-three-text";
import { useSpring, a, animated } from "react-spring/three";
import { useActiveStore, ActiveProvider, ActiveContext } from './store.js';
import BigBox from './Box'


extend({ Text });


  function GlassFloor() {
    const distortionMap = useTexture(marble);
    return (
      <Reflector
        args={[40, 10]}
        resolution={1024}
        mirror={1.0}
        position={[-0.0, -4.1, -2]}
        rotation={[-1.32, 0, 0]}
        mixStrength={0.7}
        depthToBlurRatioBias={0.7}
        depthScale={0.6}
        distortion={0.019}
        distortionMap={distortionMap}
      />
    );
  }

export default function App() {
  const [rotation, setRotation] = useState([0, 0, 0, 0]);
  const [hovered, setHover] = useState(false);
  // const [active, setActive] = useActiveStore(ActiveContext);
  // const [hovered, setHover] = useState(false);
  
  function Loader() {
    const { progress } = useProgress();
    return (
      <Html center>
        <h1>{Math.trunc(progress)} % loaded</h1>
      </Html>
    );
  }
  
    
  



      //wall of points----------------------------------------------------
      const points = [
        [4.7, 4.7, -4.99],
        // [7, , -4.1],
        // [7, 6.0, -4.1],
        [6.7, 6.2, -4.1],
        [7.2, 6.2, -4.1],
      ];
      
      //  anchorX={-7.9}
      //         anchorY={-6.8}
      //         position-z={-4.8}
      //         text={text}
      //         maxWidth={5}
      //         fontSize={0.2}>
      
      const des2points = [
        [-3, 4, -4.68],
        // [7, , -4.1],
        // [7, 6.0, -4.1],
        [-5, 5.45, -4.1],
        [-6.5, 5.45, -4.1],
      ];
      
      // anchorX={13.7}
      //       anchorY={-5}
      //       position-z={-4.8}
      //       text={text2}
      //       maxWidth={6.8}
      //       fontSize={0.2}>
      
      const des3points = [
        [0.5, 1.8, -4.99],
        // [7, , -4.1],
        // [7, 6.0, -4.1],
        [1.0, 1.4, -4.1],
        [7.2, 1.8, -4.1],
      ];
      
      //  anchorX={-7.8}
      //         anchorY={-2}
      //         position-z={-4.8}
      //         text={text3}
      //         maxWidth={3.8}
      //         fontSize={0.2}>
      
      const des4points = [
        [-4, 2.7, -4.68],
        // [7, , -4.1],
        // [7, 6.0, -4.1],
        [-5, 3.45, -4.1],
        [-6.49, 3.55, -4.1],
      ];
      
      //  anchorX={11.8}
      //         anchorY={-4}
      //         position-z={-4.8}
      //         text={text4}
      
      //wall of points----------------------------------------------------------
      
      const { ...spingus } = useSpring({
        // points: active ? points :  [0, 3.5, -4.9],
        // position: active? [0, 2.5, -4.9] : [0, 3.5, -4.9],
        // color: active ? "green" : "red",
        // lineWidth: active ? 5 : 0,
        lineWidth: 1,
        config: {
          duration: 3000
    }
    // config: {
    //     mass: 1500,
    //     tension: 9000,
    //     friction: 3000,
    //   },
  })
  
  
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

  const onMouseMove = (e) => {
    // e.preventDefault()
    e.stopPropagation()
    setRotation([
      ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI) / 50,
      ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 50,
      0,
    ]);
  };

  


  function Picture() {
    const gltf = useLoader(GLTFLoader, taking);
    return (
      // <Suspense fallback={<Loader />}>
        <a.primitive
        object={gltf.scene}
        rotation={rotation}
        attach="geometry"
        args={[0, 0, 0]}
        position={[0, 2.5, -4.9]}
        scale={[1, 1, 1]}
        // onClick={(e) =>
        //   setActive(!active)}
        // {...spingus}
        />
      // {/* </Suspense> */}
    
    );
  }

  const AnimatedLine = animated(Line)

  
 

  return (
    <Canvas onMouseMove={onMouseMove}>
      {/* // <Canvas> */}
        <Suspense fallback={<Loader />}>
          <Picture />
        <ActiveProvider>
          <ambientLight intensity={0.83} />
          <pointLight
            position={[0, 20, 10]}
            angle={0.7}
            penumbra={2}
            intensity={0.7}
          />
          {/* <pointLight position={[-10, -10, -10]} /> */}
          <BigBox position={[0, 0, -4.7]} />

          <group>
            <AnimatedLine
              // {}
              // rotation={rotation}
              points={points}
              color="white"
              // lineWidth={0.6}
              {...spingus}
            />
            <AnimatedLine
              // rotation={rotation}
              points={des2points}
              color="white"
              // lineWidth={0.6}
              {...spingus}
            />
            <AnimatedLine
              // rotation={rotation}
              points={des3points}
              color="white"
              // lineWidth={0.6}
              {...spingus}
            />
            <AnimatedLine
              // rotation={rotation}
              points={des4points}
              color="white"
              // lineWidth={0.6}
              {...spingus}
            />
          </group>
          <text
            anchorX={-7.9}
            // rotation={rotation}
            anchorY={-6.8}
            position-z={-4.8}
            text={text}
            maxWidth={5}
            fontSize={0.2}>
            <meshPhongMaterial attach="material" />
          </text>
          <text
            anchorX={13.9}
            // rotation={rotation}
            anchorY={-0.8}
            position-z={-4.8}
            text={title}
            maxWidth={7}
            fontSize={0.7}>
            <meshPhongMaterial attach="material" />
          </text>
          <text
            anchorX={13.7}
            // rotation={rotation}
            anchorY={-0.0}
            position-z={-4.8}
            text={description}
            maxWidth={6.8}
            fontSize={0.2}>
            <meshPhongMaterial attach="material" />
          </text>
          <text
            anchorX={9.8}
            // rotation={rotation}
            anchorY={-6}
            position-z={-4.8}
            text={text2}
            maxWidth={2.8}
            fontSize={0.2}>
            <meshPhongMaterial attach="material" />
          </text>
          <text
            // rotation={rotation}
            anchorX={-7.8}
            anchorY={-2.1}
            position-z={-4.8}
            text={text3}
            maxWidth={6.8}
            fontSize={0.2}>
            <meshPhongMaterial attach="material" />
          </text>
          <text
            // rotation={rotation}
            anchorX={11.8}
            anchorY={-4}
            position-z={-4.8}
            text={text4}
            maxWidth={4.8}
            fontSize={0.2}>
            <meshPhongMaterial attach="material" />
          </text>

          <GlassFloor />
    </ActiveProvider>
        </Suspense>
      </Canvas>
  );
}
