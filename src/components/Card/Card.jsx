import React from "react";
import { CardContent, CardTitle, CardButton } from "./CardStyles";

const Card = () => {
  return (
    <div>
      <CardContent>
        <CardTitle>Pomodore timer</CardTitle>
        <>
          <CardButton>Start Pomodore</CardButton>

          <CardButton>Pause Pomodore</CardButton>
        </>
      </CardContent>
    </div>
  );
};

export default Card;
