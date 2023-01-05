import { useState, useEffect } from "react";
import { GlobalStyles } from "./components/globalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/theme";
import Card from "./components/Card/Card";
import Counter from "./components/Counter/Counter";
import { Wrapper } from "./components/wrapper";
import ToggleSwitch from "./components/Switch/ToggleSwitch";
import Settings from "./components/Settings/Settings";
import startSfx from "../src/sounds/startTimer.mp3";
import pauseSfx from "../src/sounds/pauseTimer.mp3";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const mode = window.localStorage.getItem("theme");
    setTheme(mode);
  }, []);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div className="waves">
        {/* <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ECDFC8"
            fill-opacity="1"
            d="M0,128L48,149.3C96,171,192,213,288,208C384,203,480,149,576,117.3C672,85,768,75,864,90.7C960,107,1056,149,1152,176C1248,203,1344,213,1392,218.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg> */}
        {/* <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ECDFC8"
            fill-opacity="1"
            d="M0,128L60,106.7C120,85,240,43,360,26.7C480,11,600,21,720,37.3C840,53,960,75,1080,85.3C1200,96,1320,96,1380,96L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg> */}
        {/* <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#141C27"
            fill-opacity="1"
            d="M0,128L60,117.3C120,107,240,85,360,69.3C480,53,600,43,720,48C840,53,960,75,1080,85.3C1200,96,1320,96,1380,96L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg> */}
        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill={theme === "dark" ? "#141C27" : "#ECDFC8"}
            fill-opacity="1"
            d="M0,64L60,74.7C120,85,240,107,360,101.3C480,96,600,64,720,42.7C840,21,960,11,1080,26.7C1200,43,1320,85,1380,106.7L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <Wrapper>
          {/* <Counter /> */}
          <ToggleSwitch setTheme={setTheme} theme={theme} />
          <Card />
          {/* <Settings /> */}
        </Wrapper>
        <svg
          className="wave2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill={theme === "dark" ? "#141C27" : "#ECDFC8"}
            fill-opacity="1"
            d="M0,288L60,272C120,256,240,224,360,218.7C480,213,600,235,720,256C840,277,960,299,1080,277.3C1200,256,1320,192,1380,160L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </ThemeProvider>
  );
}

export default App;
