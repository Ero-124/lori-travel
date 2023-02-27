import React, { useState } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ReactVideo from "../IntroVideo/IntroVideo";
import "./App.scss";
import RoutesConfig from "../../routes/RoutesConfig";

function App() {
  const [skipVideo, setSkipVideo] = useState(false);
  return (
    <>
      <div className="wrapper">
        {!skipVideo && (
          <ReactVideo skipVideo={skipVideo} setSkipVideo={setSkipVideo} />
        )}
        <Header />
        <main className="main">
          <RoutesConfig />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
