import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import useLanguage from "../../../hooks/useLanguageContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { imageList } from "./imageList";
import blogs from "./blogs.json";
import traduction from "./language.json";
import buttonLang from "../../../common/buttonLang/buttonLang.json";

import "./Blog.scss";
const Blog = () => {
  const { language } = useLanguage();
  const { title } = traduction[language];
  const { more } = buttonLang[language];
  return (
    <section className="blog">
      <div className="container">
        <h2 className="blog__title title">{title}</h2>
        <div className="blog__wrapper">
          {blogs.map((blog) => (
            <div className="blog__item" key={blog.id}>
              <div className="item__photo">
                <LazyLoadImage
                  src={imageList.plantsFestival}
                  loading="lazy"
                  effect="blur"
                />
              </div>
              <div className="item__info">
                <div className="item__title">
                  <h3>{blog.title}</h3>
                </div>
                <div className="item__description">
                  <p>{blog.description}</p>
                </div>
                <div className="item__more more">
                  <NavLink>
                    <span>{more}</span>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
