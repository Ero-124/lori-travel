import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import introVideo from "./y2mate.com - Lori Province Armenia  The ancient soul of Nature_360p.mp4";
import "react-html5video/dist/styles.css";
import "./Video.scss";

const ReactVideo = ({ setSkipVideo }) => {
  // const [activeClass, setActiveClass] = useState(false);

  const handleSkipVideo = () => {
    // setActiveClass(true);
    setSkipVideo(true);
  };

  return (
    <>
      <Video autoPlay loop muted controls={[]}>
        <source src={introVideo} type="video/webm" />
      </Video>
      <button
        /* className={activeClass && "active"} */ onClick={handleSkipVideo}
      >
        Skip
      </button>
    </>
  );
};

export default ReactVideo;
