import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";
import traduction from "./content.json";
import useLanguage from "../../../hooks/useLanguageContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { toures } from "./tourList";

const Toures = () => {
  const { language } = useLanguage();
  const { title, more } = traduction[language];

  const getTourName = useMemo(() => {
   switch (language) {
     case "en":
       return (place) => place.nameEn;
     case "am":
       return (place) => place.nameAm;
     case "ru":
       return (place) => place.nameRu;
     default:
       return (place) => place.nameEn;
   }
 }, [language]);

 const getTourDesc = useMemo(() => {
   switch (language) {
     case "en":
       return (place) => place.descEn;
     case "am":
       return (place) => place.descAm;
     case "ru":
       return (place) => place.descRu;
     default:
       return (place) => place.descEn;
   }
 }, [language]);

  return (
    <section className="toures slider">
      <div className="container">
        <h2 className="toures__title title">{title}</h2>
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
          {toures.map((tour) => {
            return (
              <SwiperSlide key={tour.id}>
                <div className="tour__img slider__img">
                  <LazyLoadImage
                    src={tour.img}
                    loading="lazy"
                    effect="blur"
                    alt={tour.nameEn}
                  />
                </div>
                <div className="tour__info slider__info">
                  <div className="info__head slider__head">
                    <h3 className="info__title slider__title">{getTourName(tour)}</h3>
                    <span>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  </div>
                  <p className="tour__desc slider__desc">{getTourDesc(tour)}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="tour__more more">
          <Link to="/tours">
            <span>{more}</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Toures;
