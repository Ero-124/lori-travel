import React, { useState } from "react";
import AosEffect from "../../shared/AosEffect/AosEffect";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RoutesConfig from "../../routes/RoutesConfig";
import MemoizedIntroVideo from "../IntroVideo/IntroVideo";
import "./App.scss";

function App() {
  AosEffect();

  const [skipVideo, setSkipVideo] = useState(false);

  if (sessionStorage.getItem("video")) {
    return (
      <>
        <div className="wrapper">
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
      return (
        <MemoizedIntroVideo skipVideo={skipVideo} setSkipVideo={setSkipVideo} />
      );
    }
  }
}
export default App;
