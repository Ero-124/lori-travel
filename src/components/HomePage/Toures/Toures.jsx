import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faLocationDot,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import traduction from "./content.json";
import useLanguage from "../../../hooks/useLanguageContext";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { toures } from "./tourList";
import "./Toures.scss";

const Toures = () => {
  const { language } = useLanguage();
  const { title, more, price, departure } = traduction[language];

  return (
    <section className="toures">
      <div className="container">
        <h2 className="toures__title title">{title}</h2>
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          grabCursor={true}
            autoplay={{
            delay: 4000,
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
          className="swiper__container"
        >
          {toures.map((tour) => {
            return (
              <SwiperSlide key={tour.id}>
                <div className="tour__img">
                  <NavLink>
                    <LazyLoadImage
                      src={tour.img}
                      loading="lazy"
                      effect="blur"
                      alt={tour.nameEn}
                    />
                  </NavLink>
                  <div className="tour__category">
                    <span>Attractions</span>
                  </div>
                </div>
                <div className="tour__info">
                  <div className="info__content">
                    <div className="info__title">
                      <NavLink>
                        <h3>{tour.tourName[language]}</h3>
                      </NavLink>
                    </div>
                    <div className="tour__desc">
                      <p>{tour.description[language]}</p>
                    </div>
                  </div>
                  <div className="info__about">
                    <div className="info__location">
                      <FontAwesomeIcon icon={faLocationDot} />
                      <span>{tour.location[language]}</span>
                    </div>
                    <span>
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  </div>
                  <div className="info__price_and__departure">
                    <div className="info__pricing">
                      <span className="pricing__text">{price}</span>
                      <span className="pricing__payment">
                        {tour.price[language]}
                      </span>
                    </div>
                    <div className="info__departure">
                      <span className="departure__text">{departure}</span>
                      <span className="departure__date">
                        {tour.departureDate}
                      </span>
                    </div>
                  </div>
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
