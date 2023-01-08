import { useState, useEffect } from "react";
import { GlobalStyles } from "./components/globalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/theme";
import Card from "./components/Card/Card";
import { Wrapper } from "./components/wrapper";
import ToggleSwitch from "./components/Switch/ToggleSwitch";
import Waves from "./components/Waves/Waves";

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
        <Waves theme={theme} isUpper />
        <Wrapper>
          <ToggleSwitch setTheme={setTheme} theme={theme} />
          <Card />
        </Wrapper>
        <Waves theme={theme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
