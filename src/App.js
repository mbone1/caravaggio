import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import './index.css'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import taking from './example.glb'
import { useProgress, Html, Reflector, useTexture, Text} from "@react-three/drei";
import water from './water.jpg'
import marble from './marble.jpg'


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
     

function Art() {

  const [active, setActive] = useState(false)
    const [hovered, setHover] = useState(false);

  const primitive = useRef()  
  useFrame(() => {
    primitive.current.rotation.y += 0.00000001;
  })
  
      const gltf = useLoader(GLTFLoader, taking);
      return (
        <group>
          <primitive
            ref={primitive}
            object={gltf.scene}
            onClick={(e) => setActive(!active)}
            onPointerOver={(e) => setHover(true)}
            onPointerOut={(e) => setHover(false)}
            attach="geometry"
            args={[0, 0, 0]}
            position={[0, 2.5, -8.9]}
            rotation={[0.0, 0, 0.01]}
            scale={[1.03, 1.03, 0.4]}
          />
        </group>
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

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <h1>{Math.trunc(progress)} % loaded</h1>
    </Html>
  );
}

export default function App() {







  return (
    <Canvas>
      <ambientLight intensity={1.3} />
      {/* <spotLight position={[0, 20, ]} angle={0.6} penumbra={1} /> */}
      {/* <pointLight position={[-10, -10, -10]} /> */}
      <Suspense fallback={<Loader />}>
        <Box position={[0, 0, -7.7]} />
        <Art />
        <Text
          color="white" // default
          anchorX={-4} // default
          anchorY={-3} // default
          position-Y={10}
          letterSpacing={.6}
          fontSize={.1}
        >
          The Taking of Christ - 1620
        </Text>
        <GlassFloor />
        
      </Suspense>
    </Canvas>
  );
}
