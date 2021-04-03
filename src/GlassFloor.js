
import React, { useState, useEffect }from "react";
import {Reflector, useTexture} from "@react-three/drei";
import marble from "./marble.jpg";
import marblefloor from './water.jpg'

export default function GlassFloor(props) {
  let maxDistortion = .015
  let minDistortion = 0
  let maxHeight = -4.4
  let minHeight = -4.8
  const distortionMap = useTexture(marble);
  const floor = useTexture(marblefloor)
  let [distortion, setDistortion] = useState(0.00);
  let [waterHeight, setWaterHeight] = useState(minHeight)
  let [flow, setFlow]=useState('receding')
  //min distortion .00
  //max distortion .09

  useEffect(() => {

    const flowState = (() => {
      if (distortion > maxDistortion) {
        setFlow('receding')
      } else if (distortion < minDistortion) {
        setFlow('advancing')
      }
    })
    
    const heightState = (() => {
      if (waterHeight > maxHeight) {
        setFlow('receding')
      } else if (waterHeight < minHeight) {
        setFlow('advancing')
      }
    })
    
    const waterEffect = setInterval(() => {
      if (flow === 'advancing') {
        flowState()
        heightState()
        // console.log(flow)
        setDistortion(distortion + 0.000001)
        setWaterHeight(waterHeight + 0.00009)
      }
      else if (flow === 'receding') {
        flowState()
        heightState()
        setDistortion(distortion - 0.000001)
        setWaterHeight(waterHeight - 0.00009)
      }
      // else if (distortion > maxDistortion) {
        
      //   setDistortion(distortion - 0.0005)
      // }
      
    }, 1
    )
    return () => clearInterval(waterEffect)
  })

    

        

    

  //   distortionLevelRef.current = setInterval(() => {
  //     // // if (distortion < maxDistortion) {
  //       setDistortion(distortion+0.0005)
  //     // }
  //     // else if (distortion > maxDistortion) {
  //     //   setDistortion(distortion-0.0005)
  //     // }  
      
  //   }
  //   , 500)

  // }

  // console.log(distortion)

  return (<>
    <Reflector
      args={[40, 10]}
      resolution={1024}
      mirror={1}
      position={[-0.0, waterHeight, -1]}
      rotation={[-1.26, 0, 0]}
      mixStrength={0.75}
      depthToBlurRatioBias={0.7}
      depthScale={0.5}
      distortion={distortion}
      distortionMap={distortionMap}>
      {(Material, props) => (
        <Material
          normalMap={floor}
        // distortion={20}
          // color="#a0a0a0"
          // metalness={0}
          // distortion={distorter}
          // roughnessMap={floor}
          // normalMap={normal}
          // normalScale={[1, 1]}
          {...props}
        />
      )}
    </Reflector>
      {/* <mesh onClick={(e) => waterEffect()} position={[-8, -3.4, -3]}>
            <boxBufferGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color={"darkgrey"}
              transparent></meshStandardMaterial>
          </mesh> */}
          </>
  );
}


