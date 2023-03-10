import React from "react";
import { Route, Routes } from "react-router-dom";

import Preloader from "../components/Preloader/Preloader";
const HomePage = React.lazy(() => import("../pages/HomePage/HomePage"));
const TouresPage = React.lazy(() => import("../pages/TouresPage/TouresPage"));
const BlogPage = React.lazy(() => import("../pages/BlogPage/BlogPage"));
const AboutPage = React.lazy(() => import("../pages/AboutPage/AboutPage"));

const RoutesConfig = React.memo(() => {
  return (
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
      <Route path="info">
        <Route path="foods" element={"Foods"}/>
        <Route path="transport" element={"Transport"}/>
        <Route path="gazebos" element={"Gazebos"}/>
      </Route>
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
  );
});

export default RoutesConfig;
