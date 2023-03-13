import React, { lazy, useState } from "react";
import AosEffect from "../../shared/AosEffect/AosEffect";
import "./App.scss";
const Header = lazy(() => import("../Header/Header"));
const Footer = lazy(() => import("../Footer/Footer"));
const MemoizedIntroVideo = lazy(() => import("../IntroVideo/IntroVideo"));
const RoutesConfig = lazy(() => import("../../routes/RoutesConfig"));

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
