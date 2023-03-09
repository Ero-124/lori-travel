import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import useLanguage from "../../hooks/useLanguageContext";
import introVideo2 from "./video/videoplayback.webm";
import traduction from "./language.json";
import "./IntroVideo.scss";
const MemoizedIntroVideo = React.memo(({ skipVideo, setSkipVideo }) => {
  const { language } = useLanguage();
  const [activeClass, setActiveClass] = useState();

  function MyVideoComponent() {
    const videoRef = useRef(null);
    useEffect(() => {
      if (videoRef) {
        videoRef.current.play();
      }
    }, []);
    return (
      <>
        <video ref={videoRef} autoPlay loop muted>
          <source src={introVideo2} type="video/webm" />
        </video>
      </>
    );
  }

  setTimeout(() => {
    setActiveClass("active");
  }, 5000);

  const handleSkipVideo = () => {
    setTimeout(() => {
      setSkipVideo(true);
      sessionStorage.clear();
      sessionStorage.setItem("video", "1");
      document.body.style.overflowY = "scroll";
    }, 100);
  };

  return (
    <>
      {!skipVideo && (
        <div className="video__wrapper">
          {MyVideoComponent()}
          <a
            href="#home"
            onClick={handleSkipVideo}
            className={`skip__btn ${activeClass}`}
            /*  className={activeClass && "active"} */
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {traduction[language].skip}
          </a>
        </div>
      )}
    </>
  );
});

MemoizedIntroVideo.propTypes = {
  skipVideo: PropTypes.bool,
  setSkipVideo: PropTypes.func,
};

export default MemoizedIntroVideo;
