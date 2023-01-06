import React, { useState, useRef } from "react";
import { CardContent, CardTitle, CardButton, Progress } from "./CardStyles";
import startSfx from "../../sounds/startTimer.mp3";
import pauseSfx from "../../sounds/pauseTimer.mp3";
import useSound from "use-sound";
import timesUpSfx from "../../sounds/timesUp.mp3";
import "animate.css";

const Card = () => {
  const [play] = useSound(startSfx, {
    interrupt: true,
    volume: 4,
  });

  const [pause] = useSound(pauseSfx, {
    interupt: true,
    volume: 4,
  });

  const [timesUp] = useSound(timesUpSfx, {
    volume: 4,
  });

  const MinutesPomodore = 25;
  const MinutesBreak = 5;

  const [time, setTime] = useState(MinutesPomodore * 60);
  const [currentTime, setCurrentTime] = useState(0);
  const [isStart, setStart] = useState(false);
  const [isPaused, setPaused] = useState(true);
  const [isBreak, setBreak] = useState(false);
  const [resume, setResume] = useState(false);
  const timerRef = useRef(99999);
  const [isReset, setIsReset] = useState(true);
  if (currentTime === time) {
    clearInterval(timerRef.current);
    timesUp();
    setCurrentTime(0);
    setStart(false);
    setPaused(true);
    setResume(false);
    setBreak((prev) => {
      return !prev;
    });
    setTime((prev) => {
      return prev === MinutesPomodore * 60
        ? MinutesBreak * 60
        : MinutesPomodore * 60;
    });
  }

  const startPomodoro = () => {
    setStart(true);
    setPaused(false);
    play();
    setIsReset(false);
    timerRef.current = setInterval(() => {
      setCurrentTime((prev) => prev + 1);
    }, 1000);
  };

  const pausePomodoro = () => {
    setPaused(true);
    setStart(false);
    setResume(true);
    pause();
    clearInterval(timerRef.current);
  };

  const resetPomodore = () => {
    setCurrentTime(0);
    clearInterval(timerRef.current);
    setStart(false);
    setPaused(true);
    setResume(false);
    setIsReset(true);
  };

  const convertToMinutes = () => {
    const minutes = Math.floor((time - currentTime) / 60);
    const seconds = (time - currentTime) % 60;

    const minutesString = minutes.toString();
    const secondsString = seconds.toString();

    const minutesWithZero = minutesString.padStart(2, "0");
    const secondsWithZero = secondsString.padStart(2, "0");
    const minutesAndSeconds = `${minutesWithZero}:${secondsWithZero}`;

    return minutesAndSeconds;
  };

  return (
    <div>
      <CardContent>
        <CardTitle className="animate__animated animate__zoomIn">
          Pomodoro timer
        </CardTitle>
        <Progress
          minValue={0}
          maxValue={time}
          value={currentTime}
          text={convertToMinutes()}
          isBreak={false}
        />
        <>
          <CardButton disabled={isStart} onClick={startPomodoro}>
            {resume ? "Resume" : "Start"} {isBreak ? "Break" : "Pomodoro"}
          </CardButton>
          <CardButton disabled={isPaused} onClick={pausePomodoro}>
            Pause {isBreak ? "Break" : "Pomodoro"}
          </CardButton>
          <CardButton onClick={resetPomodore} disabled={isReset}>
            Reset {isBreak ? "Break" : "Pomodoro"}
          </CardButton>
        </>
      </CardContent>
    </div>
  );
};

export default Card;
