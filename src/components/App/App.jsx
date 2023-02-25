import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import ReactVideo from "../Video/ReactVideo";
import "./App.scss";

const HomePage = React.lazy(() => import("../../pages/HomePage/HomePage"));
const SightsPage = React.lazy(() =>
  import("../../pages/SightsPage/SightsPage")
);
const TouresPage = React.lazy(() =>
  import("../../pages/TouresPage/TouresPage")
);
const BlogPage = React.lazy(() => import("../../pages/BlogPage/BlogPage"));
const AboutPage = React.lazy(() => import("../../pages/AboutPage/AboutPage"));

function App() {
  const [skipVideo, setSkipVideo] = useState(false);

  return (
    <>
      {!skipVideo ? (
        <ReactVideo setSkipVideo={setSkipVideo} />
      ) : (
        <div className="wrapper">
          <Header />
          <main className="main">
            <Routes>
              <Route
                index
                path="/"
                element={
                  <React.Suspense fallback={<Preloader />}>
                    <HomePage />
                  </React.Suspense>
                }
              />
              <Route
                path="sights"
                element={
                  <React.Suspense fallback={<Preloader />}>
                    <SightsPage />
                  </React.Suspense>
                }
              />
              <Route
                path="toures"
                element={
                  <React.Suspense fallback={<Preloader />}>
                    <TouresPage />
                  </React.Suspense>
                }
              />
              <Route
                path="blog"
                element={
                  <React.Suspense fallback={<Preloader />}>
                    <BlogPage />
                  </React.Suspense>
                }
              />
              <Route
                path="about"
                element={
                  <React.Suspense fallback={<Preloader />}>
                    <AboutPage />
                  </React.Suspense>
                }
              />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
