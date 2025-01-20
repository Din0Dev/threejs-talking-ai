import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { helpTalk, introductionTalk, TALK_TYPE, welcomeTalk } from "./const";
import { createContext, useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import TypeWriterEffect from "react-typewriter-effect";

export const TalkContext = createContext();

function App() {
  const [talk, setTalk] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [welcomeDone, setWelcomeDone] = useState(false);
  const [introductionDone, setIntroductionDone] = useState(false);
  const [helpDone, setHelpDone] = useState(false);
  const handleButtonClick = () => {
    setTalk(TALK_TYPE.WELCOME);
  };

  const handleChangeIntroduction = () => {
    setTalk(TALK_TYPE.INTRODUCTION);
  };

  const handleChangeHelp = () => {
    setTalk(TALK_TYPE.HELP);
  };

  // Track loading progress of GLB files
  const { progress } = useProgress();
  // Update isLoaded state when loading is complete
  if (progress === 100 && !isLoaded) {
    setIsLoaded(true);
  }

  useEffect(() => {
    if (talk === TALK_TYPE.WELCOME) {
      const timeout = setTimeout(() => setWelcomeDone(true), 16000);

      return () => clearTimeout(timeout);
    }
    if (talk === TALK_TYPE.INTRODUCTION) {
      const timeout = setTimeout(() => setIntroductionDone(true), 35000);

      return () => clearTimeout(timeout);
    }
    if (talk === TALK_TYPE.HELP) {
      const timeout = setTimeout(() => setHelpDone(true), 16000);

      return () => clearTimeout(timeout);
    }
  }, [talk]);

  return (
    <TalkContext.Provider value={{ talk, setTalk }}>
      <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
        <Canvas shadows camera={{ position: [0, 0, 8], fov: 30 }}>
          <color attach="background" args={["#ececec"]} />
          <Experience />
        </Canvas>
        {!talk && isLoaded && (
          <button
            onClick={handleButtonClick}
            style={{ position: "absolute", top: "50%", left: "60%" }}
          >
            Talk To Me
          </button>
        )}

        {talk === TALK_TYPE.WELCOME && isLoaded && (
          <div
            style={{
              width: "37%",
              position: "absolute",
              top: "31%",
              left: "58%",
              background: "white",
              padding: "10px",
              borderRadius: "30px",
              fontSize: "9px",
            }}
          >
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Red Hat Display",
                color: "#3F3D56",
                fontSize: "",
              }}
              startDelay={250}
              cursorColor="black"
              text={welcomeTalk}
              typeSpeed={50}
            />
            {welcomeDone && (
              <button className="button-54" onClick={handleChangeIntroduction}>Introduction</button>
            )}
          </div>
        )}

        {talk === TALK_TYPE.INTRODUCTION && isLoaded && (
          <div
            style={{
              width: "37%",
              position: "absolute",
              top: "31%",
              left: "58%",
              background: "white",
              padding: "10px",
              borderRadius: "30px",
              fontSize: "9px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Red Hat Display",
                color: "#3F3D56",
                fontSize: "",
              }}
              startDelay={250}
              cursorColor="black"
              text={introductionTalk}
              typeSpeed={50}
            />
            {introductionDone && (
              <button className="button-54" style={{ marginTop: 10 }} onClick={handleChangeHelp}>
                Next
              </button>
            )}
          </div>
        )}

        {talk === TALK_TYPE.HELP && isLoaded && (
          <div
            style={{
              width: "37%",
              position: "absolute",
              top: "31%",
              left: "58%",
              background: "white",
              padding: "10px",
              borderRadius: "30px",
              fontSize: "9px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Red Hat Display",
                color: "#3F3D56",
                fontSize: "",
              }}
              startDelay={250}
              cursorColor="black"
              text={helpTalk}
              typeSpeed={50}
            />
           
          </div>
        )}
      </div>
    </TalkContext.Provider>
  );
}

export default App;
