import React from "react";
import { Input, SwitchBar, SwitchIcon } from "./SwitchStyles";

const ToggleSwitch = ({ setTheme, theme }) => {
  return (
    <label htmlFor="theme">
      <Input
        id={"theme"}
        type={"checkbox"}
        checked={theme === "dark" ? true : false}
        onChange={() => {
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
