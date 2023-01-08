import React from "react";
import "../Waves/wavesStyles.css";

const Waves = ({ theme, isUpper }) => {
  if (isUpper) {
    return (
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
    );
  }
  return (
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
  );
};

export default Waves;
