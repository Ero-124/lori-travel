import React, { useState } from "react";
import { DefaultPlayer as Video } from "react-html5video";
import introVideo2 from "./video/vanadzor.mp4";
import "react-html5video/dist/styles.css";
import "./IntroVideo.scss";

const IntroVideo = ({ skipVideo, setSkipVideo }) => {
  //const [video, setVideo] = useState(false);
  const [activeClass, setActiveClass] = useState();

  setTimeout(() => {
    setActiveClass("active");
  }, 5000);

  const handleSkipVideo = () => {
    setTimeout(() => {
      setSkipVideo(true);
      document.body.style.overflowY = "scroll";
    }, 1000);
  };

  return (
    <div className="video__wrapper">
      {!skipVideo && (
        <Video autoPlay loop muted controls={[]}>
          <source src={introVideo2} type="video/webm" />
        </Video>
      )}

      <div className="skip__btn">
        <a
          href="#home"
          onClick={handleSkipVideo}
          className={activeClass}
          /*  className={activeClass && "active"} */
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Skip
        </a>
      </div>
    </div>
  );
};

export default IntroVideo;
