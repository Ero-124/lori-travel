import React, { memo } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { EffectCoverflow, Navigation, Pagination } from "swiper";
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
import "./Places.scss";

const Places = memo(() => {
  AosEffect();
  const { language } = useLanguage();

  const getPlaceName = (place) => {
    switch (language) {
      case "en":
        return place.nameEn;
      case "am":
        return place.nameAm;
      case "ru":
        return place.nameRu;
      default:
        return place.nameEn;
    }
  };

  const getPlaceDesc = (place) => {
    switch (language) {
      case "en":
        return place.descEn;
      case "am":
        return place.descAm;
      case "ru":
        return place.descRu;
      default:
        return place.nameEn;
    }
  };

  return (
    <section className="popular-places">
      <div className="container">
        <h2 className="popular-places__title">{traduction[language].title}</h2>
        <Swiper
          modules={[Pagination, Navigation, EffectCoverflow]}
          grabCursor={true}
          effect="coverflow"
          loop={true}
          pagination={{
            clickable: true,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
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
                <div className="place__img">
                  <LazyLoadImage src={place.img} />
                </div>
                <div className="place__info">
                  <div className="info__head">
                    <h3 className="info__title">{getPlaceName(place)}</h3>
                    <span>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  </div>
                  <p className="place__desc">{getPlaceDesc(place)}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="place__more">
          <Link to="/popular-places">
            <span>{traduction[language].more}</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </section>
  );
});

export default Places;
