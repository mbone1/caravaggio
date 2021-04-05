import React from "react";


export default function Lights() {
    return ( <>
        <ambientLight intensity={0.83} />
          <pointLight
            position={[0, 20, 10]}
            angle={0.7}
            penumbra={2}
            intensity={0.7}
          />
</>
    )

}