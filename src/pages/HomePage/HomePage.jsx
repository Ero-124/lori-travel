import React from "react";
import Blog from "../../components/HomePage/Blog/Blog";
import MainContent from "../../components/HomePage/MainContent/MainContent";
import Places from "../../components/HomePage/Places/Places";
import Toures from "../../components/HomePage/Toures/Toures";

const HomePage = () => {
  return (
    <>
      <MainContent />
      <Places />
      <Blog />
      <Toures />
    </>
  );
};

export default HomePage;
