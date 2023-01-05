import styled from "styled-components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 244px;
  height: 424px;
  background: ${({ theme }) => theme.backgroundCard};
  padding: 3rem 3rem;
  border-radius: 0.5rem;
`;

export const CardTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colorText};
  font: ${({ theme }) => theme.typographyTitle};
`;

export const CardButton = styled.button`
  display: flex;
  z-index: 1000;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: ${({ theme, disabled }) =>
    disabled ? theme.colorDisabled : theme.colorText};
  font: ${({ theme }) => theme.typographyButton};

  background: ${(props) => {
    return props.disabled
      ? props.theme.backgroundButtonDisabled
      : props.theme.backgroundButton;
  }};

  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  &:hover {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
  &:active {
    transform: scale(0.96);
  }
`;
export const Progress = styled(CircularProgressbar)`
  .CircularProgressbar-path {
    stroke: ${({ theme, isBreak }) =>
      isBreak ? theme.pathColorBreak : theme.pathColor};
  }
  .CircularProgressbar-trail {
    stroke: ${({ theme, isBreak }) =>
      isBreak ? theme.trailColorBreak : theme.trailColor};
  }
  .CircularProgressbar-text {
    fill: ${({ theme }) => theme.colorText};
  }
  .CircularProgressbar-background {
    fill: green;
  }
`;
