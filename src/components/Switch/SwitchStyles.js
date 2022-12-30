import styled from "styled-components";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";

export const SwitchIcon = styled.div`
  position: absolute;
  top: 50%;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #df7861;
  transform: translate(0%, -50%);
  background-image: url(${sun});
  background-repeat: no-repeat;
  background-position: center;
  transition: all 250ms linear;
`;

export const SwitchBar = styled.div`
  width: 60px;
  height: 15px;
  cursor: pointer;
  // border: 1px solid red;

  border-radius: 15px;
  position: relative;
  background: #c8c6c6;
`;

export const Input = styled.input.attrs({
  type: "checkbox",
  id: "theme",
})`
  display: none;
  &:checked ~ .switch__bar {
    background: #334257;
  }

  &:checked ~ .switch__bar > .switch__icon {
    transform: translate(150%, -50%);
    background: #141c27;
    background-image: url(${moon});
    background-repeat: no-repeat;
    background-position: center;
  }
`;
