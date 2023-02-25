import React from "react";
import "./MainContent.scss";

const MainContent = () => {
  return (
    <section className="main__wrapper">
      <div className="container">
        <div className="main__content">
          <div className="content__text">
            <h1 className="content__title">
              Let's discover the beautiful corners of Lori togheter
            </h1>
            <p className="content__subtitle">
              Lets Start Your Journey With Us. Let Your Dream Will Come True
              With Amazing Travel Destinations, Activities And More...
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
