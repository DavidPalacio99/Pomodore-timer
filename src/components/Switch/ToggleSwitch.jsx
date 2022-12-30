import React from "react";
import { Input, SwitchBar, SwitchIcon } from "./SwitchStyles";

const ToggleSwitch = () => {
  return (
    <label htmlFor="theme">
      <Input onChange={() => {}} />
      <SwitchBar className="switch__bar">
        <SwitchIcon className="switch__icon" />
      </SwitchBar>
    </label>
  );
};

export default ToggleSwitch;
