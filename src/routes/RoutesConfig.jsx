import React from "react";
import { Route, Routes } from "react-router-dom";

import Preloader from "../components/Preloader/Preloader";


const HomePage = React.lazy(() => import("../pages/HomePage/HomePage"));
const SightsPage = React.lazy(() => import("../pages/SightsPage/SightsPage"));
const TouresPage = React.lazy(() => import("../pages/TouresPage/TouresPage"));
const BlogPage = React.lazy(() => import("../pages/BlogPage/BlogPage"));
const AboutPage = React.lazy(() => import("../pages/AboutPage/AboutPage"));

const RoutesConfig = () => {
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
      <Route
        path="sights"
        element={
          <React.Suspense>
            <SightsPage />
          </React.Suspense>
        }
      />
      <Route
        path="toures"
        element={
          <React.Suspense>
            <TouresPage />
          </React.Suspense>
        }
      />
      <Route
        path="blog"
        element={
          <React.Suspense>
            <BlogPage />
          </React.Suspense>
        }
      />
      <Route
        path="about"
        element={
          <React.Suspense>
            <AboutPage />
          </React.Suspense>
        }
      />
    </Routes>
  );
};

export default RoutesConfig;
