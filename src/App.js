import React, { useState, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import "./index.css";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import taking from "./takingofchristframed.glb";
import { useProgress, Html } from "@react-three/drei";
import {  ActiveProvider} from './store.js';
import BigBox from './Box'
import Waypoints from './Waypoints'
import GlassFloor from './GlassFloor'
import Info from './Info'
// import { a } from "react-spring/three";
import TheTakingofChrist from './Paintings/Scripts/TheTakingofChrist'
import SaintJerome from './Paintings/Scripts/SaintJerome'
import DavidWiththeHeadofGoliath from './Paintings/Scripts/DavidWiththeHeadofGoliath'
import CardSharps from './Paintings/Scripts/CardSharps'
import TheIncredulityofStThomas from "./Paintings/Scripts/TheIncredulityofStThomas";

export default function App() {
  const paintings = ["ST", "TOC", "DT", "DG", "CS"]
  let [counter, setCounter] = useState(0)
  // const [rotate, setRotate] = useState([0, 0, 0]);
  const [currentPainting, setCurrentPainting] = useState(paintings[counter]);


  // const onMouseMove = (e) => {
  //   // e.stopPropagation()
  //   setRotate([
  //     ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI) / 50,
  //     ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 50,
  //     0,
  //   ]);
  // };

  // useFrame((state) => {
  //   if (ref.current) {
  //     ref.current.position.x = lerp(
  //       ref.current.position.x,
  //       mouse.current[0] / aspect / 10,
  //       0.1
  //     );
  //     ref.current.rotation.x = lerp(
  //       ref.current.rotation.x,
  //       0 + mouse.current[1] / aspect / 50,
  //       0.1
  //     );
  //     ref.current.rotation.y = 0.8;
  //   }
  // });


  // const gltf = useLoader(GLTFLoader, taking);
  
  // function Painting() {

  //   return (
  //       <a.primitive
  //       object={gltf.scene}
  //       rotation={rotate}
  //       onClick={(e) => {
  //         setRotate([
  //           ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI) / 200,
  //           ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 200,
  //           0,
  //           // 0,
  //           // 0,
  //         ]);

  // }}
  //       attach="geometry"
  //       args={[0, 0, 0]}
  //       position={[0, 2.5, -4.9]}
  //       scale={[1, 1, 1]}
  //     />
  //     );
  //   }
          


  function Loader() {
    const { progress } = useProgress();
    return (
      <Html center>
        <h1>{Math.trunc(progress)} % loaded</h1>
      </Html>
    );
  }
  
  function handleClick() {
    if (counter === paintings.length - 1) {
      setCounter(0)
      setCurrentPainting(paintings[counter])
    } else {
      setCounter(counter++);
      setCurrentPainting(paintings[counter]);
      console.log(counter);
    }
  }

  
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Suspense fallback={<Loader />}>
        <ActiveProvider>
          <ambientLight intensity={0.83} />
          <pointLight
            position={[0, 20, 10]}
            angle={0.7}
            penumbra={2}
            intensity={0.7}
          />
          <TheTakingofChrist currentPainting={currentPainting} />
          <SaintJerome currentPainting={currentPainting} />
          <DavidWiththeHeadofGoliath currentPainting={currentPainting} />
          <CardSharps currentPainting={currentPainting} />
          <TheIncredulityofStThomas currentPainting={currentPainting}/>
          <BigBox position={[0, 0, -4.7]} />
          <Waypoints/>
          <Info/>
          <GlassFloor />
        <mesh
          onClick={(e) => handleClick()}
          position={[-8, -1.4, -3]}>
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color={"darkgrey"}
            transparent></meshStandardMaterial>
        </mesh>
        </ActiveProvider>
      </Suspense>
    </Canvas>
  );
}







  
 
  
    
  



     
   
  
  
  
  

 

  