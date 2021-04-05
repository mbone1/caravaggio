import concrete from "./texture/concrete.jpg";
import { useTexture } from "@react-three/drei";

export default function Texturizer() {
    const boxSkin = useTexture(concrete)
    return (
        <meshPhongMaterial
            map={boxSkin}>
            </meshPhongMaterial>
    )
}
            

