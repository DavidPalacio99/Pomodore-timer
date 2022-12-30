import { useState, useEffect } from "react";
import { GlobalStyles } from "./components/globalStyles";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/theme";
import Card from "./components/Card/Card";
import { Wrapper } from "./components/wrapper";
import ToggleSwitch from "./components/Switch/ToggleSwitch";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Wrapper>
        <ToggleSwitch />
        <Card />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
