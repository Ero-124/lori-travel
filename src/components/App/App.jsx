import { Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import HomePage from "../../pages/HomePage/HomePage";
import SightsPage from "../../pages/SightsPage/SightsPage";
import TouresPage from "../../pages/TouresPage/TouresPage";
import BlogPage from "../../pages/BlogPage/BlogPage";
import AboutPage from "../../pages/AboutPage/AboutPage";

import "./App.scss";
import Footer from "../Footer/Footer";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="main">
          <Routes>
            <Route index path="/" element={<HomePage />} />
            <Route path="sights" element={<SightsPage />} />
            <Route path="toures" element={<TouresPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
