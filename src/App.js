import React, { useState, Suspense } from "react";
import { Canvas } from "react-three-fiber";
import "./index.css";
import Contents from './Contents'
import { ActiveProvider } from "./store.js";

// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import taking from "./takingofchristframed.glb";
import { useProgress, Html } from "@react-three/drei";

// import { useActiveStore, ActiveContext } from "./store.js";



export default function App() {
  // const paintings = ["ST", "TOC", "DT", "DG", "CS"]
  // const [active, setActive] = useActiveStore(ActiveContext);
  const [rotate, setRotate] = useState([0, 0, 0]);
  // const [currentPainting, setCurrentPainting] = useState(paintings[counter]);
   

  const onMouseMove = (e) => {
    // e.stopPropagation()
    setRotate([
      ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI) / 50,
      ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 50,
      0,
    ]);
  };

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
  


  // console.log(data.length)

  return (
    <Canvas
      // onMouseMove={onMouseMove}
      concurrent
      style={{ color: "white" }}
      camera={{ position: [0, 0, 5] }}>
      <Suspense fallback={<Loader />}>
        <ActiveProvider>
          <Contents rotate={rotate}/>
        </ActiveProvider>
        {/* <Loader/> */}
      </Suspense>
    </Canvas>
  );
}







  
 
  
    
  



     
   
  
  
  
  

 

  