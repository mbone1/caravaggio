import { useProgress, Html } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <h1>PLEASE WAIT</h1>
      <h2>{Math.trunc(progress)} % loaded</h2>
    </Html>
  );
}
