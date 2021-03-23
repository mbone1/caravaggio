import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader, extend } from "react-three-fiber";
import './index.css'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import taking from './example.glb'
import { useProgress, Html, Reflector, useTexture, Line} from "@react-three/drei";
import marble from './marble.jpg'
import {Text} from 'troika-three-text'
// import { GeometryUtils } from "three/examples/jsm/utils/GeometryUtils";
// import { Vector3 } from "three";


extend({Text})

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.05;
  });
  
  return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        onClick={(e) => setActive(!active)}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={active ? "green" : "purple"}></meshStandardMaterial>
      </mesh>
  );
}


function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <h1>{Math.trunc(progress)} % loaded</h1>
    </Html>
  );
}



function GlassFloor() {
  const distortionMap = useTexture(marble);

  return (
    <Suspense fallback={<Loader />}>
      <Reflector
        args={[30, 10]}
        resolution={1024}
        mirror={.99}
        position={[-0.1, -6.3, -3]}
        rotation={[-1.3, 0, 0]}
        mixStrength={0.9}
        depthToBlurRatioBias={0.6}
        depthScale={0.7}
        distortion={0.04}
        distortionMap={distortionMap}
      />
    </Suspense>
  );

}

export default function App() {
  const [rotation, setRotation] = useState([0, 0, 0, 0]);
  const [active, setActive] = useState(false);
  const [hovered, setHover] = useState(false);
  const primitive = useRef();
  const points = [
    [9.1, 7.2, -8.4],
    [10, 8, -8.5],
    [10.9, 8, -8.5],
  ];
  const text = "this guys like, dude what's goin on over there";
  
  // useFrame(() => {
    //   primitive.current.rotation.y += 0.00000001;
    // });
    
    
    function TESTER() {
      setActive(!active);
      console.log(points);
    }
    
    const onMouseMove = (e) => {
      setRotation([
        ((e.clientY / e.target.offsetHeight - 0.5) * -Math.PI) / 200,
        ((e.clientX / e.target.offsetWidth - 0.5) * -Math.PI) / 200,
        0,
      ]);
    };
 
    const gltf = useLoader(GLTFLoader, taking);
    

    
    
  return (
    <Canvas
    onMouseMove={onMouseMove}>
      <Suspense fallback={<Loader />}>
      <ambientLight intensity={1.3} />
      <spotLight position={[0, 20, ]} angle={0.6} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
        <Box position={[0, 0, -7.7]} /> 
           <primitive
             ref={primitive}
          object={gltf.scene}
          rotation={rotation}
             onClick={(e) => TESTER()}
             onPointerOver={(e) => setHover(true)}
             onPointerOut={(e) => setHover(false)}
             attach="geometry"
             args={[0, 0, 0]}
             position={[0, 2.5, -8.9]}
            //  rotation={[0.0, 0, 0.015]}
             scale={[1.03, 1.03, 0.1]}
           />
       
    
       
        <Line
          rotation={rotation}points={points} color="white" lineWidth={0.5} />
           <text
             anchorX={-11}
             rotation={rotation}
             anchorY={-8.2}
             position-z={-8.5}
             text={text}
             fontSize={0.3}>
             <meshPhongMaterial attach="material" />
           </text> 
       
       
     
        <GlassFloor /> 
        
      </Suspense>
    </Canvas>
  );
}
