import React, { useState } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ReactVideo from "../IntroVideo/IntroVideo";
import RoutesConfig from "../../routes/RoutesConfig";
import AosEffect from "../../shared/AosEffect/AosEffect";
import "./App.scss";

function App() {
  AosEffect();

  const [skipVideo, setSkipVideo] = useState(false);

  if (sessionStorage.getItem("video")) {
    return (
      <>
        <div
          className="wrapper"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
        >
          <Header />
          <main className="main">
            <RoutesConfig />
          </main>
          <Footer />
        </div>
      </>
    );
  } else {
    if (!skipVideo) {
      return <ReactVideo skipVideo={skipVideo} setSkipVideo={setSkipVideo} />;
    }
  }
}

export default App;



 /*   return (
    <>
      {!skipVideo && (
        <ReactVideo skipVideo={skipVideo} setSkipVideo={setSkipVideo} />
      )}
      <div className="wrapper">
        <Header />
        <main className="main">
          <RoutesConfig />
        </main>
        <Footer />
      </div>
    </>
  ); */