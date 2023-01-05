import React from "react";
import { Input, SwitchBar, SwitchIcon } from "./SwitchStyles";
import clickSfx from "../../sounds/slide.mp3";
import useSound from "use-sound";

const ToggleSwitch = ({ setTheme, theme }) => {
  const [playSfx] = useSound(clickSfx, { volume: 4 });

  return (
    <label htmlFor="theme">
      <Input
        id={"theme"}
        type={"checkbox"}
        checked={theme === "dark" ? true : false}
        onChange={() => {
          playSfx();
          window.localStorage.setItem(
            "theme",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      />
      <SwitchBar className="switch__bar">
        <SwitchIcon className="switch__icon" />
      </SwitchBar>
    </label>
  );
};

export default ToggleSwitch;
