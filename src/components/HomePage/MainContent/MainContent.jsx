import React from "react";
import useLanguage from "../../../hooks/useLanguageContext";
import traduction from "../language.json";
import picture from "./img/picture.jpg";
import pictureW from "./img/picture.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./MainContent.scss";

const MainContent = () => {
  const { language } = useLanguage();

  return (
    <section className="main__wrapper">
      <div className="container">
        <div className="main__content">
          <div className="content__text">
            <h1 className="content__title">{traduction[language].heading}</h1>
            <p className="content__subtitle">
              {traduction[language].subheading}
            </p>
          </div>
          <div className="content__photo">
            <LazyLoadImage src={picture} />
           {/*  <picture>
              <source srcSet={pictureW} type="image/webp" />
              <img src={picture} alt="" />
            </picture> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
