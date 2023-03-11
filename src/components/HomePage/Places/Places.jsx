import React, { memo } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useLanguage from "../../../hooks/useLanguageContext";
import AosEffect from "../../../shared/AosEffect/AosEffect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { places } from "./placeList";
import traduction from "./content.json";

import "react-lazy-load-image-component/src/effects/blur.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../styles/common.scss";

const Places = memo(() => {
  AosEffect();
  const { language } = useLanguage();
  const { title, more } = traduction[language];

  return (
    <section className="popular-places slider">
      <div className="container">
        <h2 className="popular-places__title title">{title}</h2>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          grabCursor={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          centeredSlidesBounds={true}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            991: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="swiper_container"
        >
          {places.map((place) => {
            return (
              <SwiperSlide key={place.id}>
                <div className="place__img slider__img">
                  <LazyLoadImage
                    src={place.img}
                    loading="lazy"
                    effect="blur"
                    alt={place.nameEn}
                  />
                </div>
                <div className="place__info slider__info">
                  <div className="info__head slider__head">
                    <h3 className="info__title slider__title">
                      {place.placeName[language]}
                    </h3>
                    <span>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  </div>
                  <p className="place__desc slider__desc">
                    {place.description[language]}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="place__more more">
          <Link to="/popular-places">
            <span>{more}</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </section>
  );
});

export default Places;
