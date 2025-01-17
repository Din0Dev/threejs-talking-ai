import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { useTalk } from "./context/TalkContext";

function App() {
  const { updateTalk } = useTalk();

  const handleButtonClick = () => {
    updateTalk("Welcome");
  };


  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
      <button onClick={handleButtonClick} style={{ position: "absolute", top: "50%", left: "60%" }}>
        Talk To Me
      </button>
    </div>
  );
}

export default App;
