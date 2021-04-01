import React, {useState} from 'react'
import BigBox from "./Box";
import Waypoints from "./Waypoints";
import GlassFloor from "./GlassFloor";
import Info from "./Info";
// import { a } from "react-spring/three";
import TheTakingofChrist from "./Paintings/Scripts/TheTakingofChrist";
import SaintJerome from "./Paintings/Scripts/SaintJerome";
import DavidWiththeHeadofGoliath from "./Paintings/Scripts/DavidWiththeHeadofGoliath";
import CardSharps from "./Paintings/Scripts/CardSharps";
import TheIncredulityofStThomas from "./Paintings/Scripts/TheIncredulityofStThomas";
import data from "./Paintings/data";
import { useActiveStore, ActiveContext } from "./store.js";


export default function Contents(props) {
  let [counter, setCounter] = useState(0);
  const [currentPainting, setCurrentPainting] = useState(data[counter]);
    const [active, setActive] = useActiveStore(ActiveContext);
    
    const checker = () => {
        if (!active) {
            setActive(!active)
        }
    }

  function handleClick() {
      if (counter === data.length - 1) {
        
          checker();
      setCounter(0);
        setCurrentPainting(data[counter]);
        
    } else {
          checker();
      setCounter(counter + 1);
      setCurrentPainting(data[counter]);
      console.log(currentPainting);
      console.log(data[counter]);
    }
  }

  return (<>
      <ambientLight intensity={0.83} />
      <pointLight
        position={[0, 20, 10]}
        angle={0.7}
        penumbra={2}
        intensity={0.7}
      />
      {/* <Suspense fallback={<Loader />}> */}
      <TheTakingofChrist counter={counter} rotation={props.rotate}/>
      <CardSharps counter={counter} />
      <DavidWiththeHeadofGoliath counter={counter} />
      <SaintJerome counter={counter} />
      <TheIncredulityofStThomas counter={counter} />
      <BigBox position={[0, 0, -4.7]} />
      <Waypoints counter={counter} />
      <Info counter={counter} />
      <GlassFloor />
      {/* </Suspense> */}
      <mesh onClick={(e) => handleClick()} position={[-8, -1.4, -3]}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={"darkgrey"}
          transparent></meshStandardMaterial>
      </mesh>
      </>
  );
}
