import React from "react";
import AosEffect from "../../../shared/AosEffect/AosEffect";
import useLanguage from "../../../hooks/useLanguageContext";
import traduction from "../../../Data.json";
import "./MainContent.scss";

const MainContent = () => {
  const { language } = useLanguage();
  AosEffect();

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
            <img
              src="https://bustourma.com/uploads/product/lg/befdf309-1569-4a37-b586-618d2f7c49bb.jpg"
              alt="gif nature"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContent;
