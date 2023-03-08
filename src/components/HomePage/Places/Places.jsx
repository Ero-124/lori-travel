import React, { memo } from "react";
import { Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useLanguage from "../../../hooks/useLanguageContext";
import AosEffect from "../../../shared/AosEffect/AosEffect";

import imgAygehat from "./img/aygehat.jpg";
import imgGargar from "./img/gyargyar.jpg";
import imgDendropark from "./img/dendropark.jpg";
import imgDsegh from "./img/dsegh.jpg";
import imgLorvaAmazon from "./img/lorvaAmazon.jpg";
import imgMargahovit from "./img/margahovit.jpg";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
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

  const getTitle = () => {
    switch (language) {
      case "en":
        return "Popular places";
      case "am":
        return "Հայտնի վայրեր";
      case "ru":
        return "Популярные места";
      default:
        return "Popular places";
    }
  };

  const places = [
    {
      id: 1,
      nameEn: "Aygehat",
      nameAm: "Այգեհատ",
      nameRu: "Аигехат",
      img: imgAygehat,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit earum dolor deserunt, autem sit ad. Placeat,laboriosam? Quaerat, cum ipsum.",
    },
    {
      id: 2,
      nameEn: "Gargar",
      nameAm: "Գարգառ",
      nameRu: "Гаргар",
      img: imgGargar,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit earum dolor deserunt, autem sit ad. Placeat,laboriosam? Quaerat, cum ipsum.",
    },
    {
      id: 3,
      nameEn: "Dendropark",
      nameAm: "Դենդրոպարկ",
      nameRu: "Дендропарк",
      img: imgDendropark,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit earum dolor deserunt, autem sit ad. Placeat,laboriosam? Quaerat, cum ipsum.",
    },
    {
      id: 4,
      nameEn: "Dsegh",
      nameAm: "Դսեղ",
      nameRu: "Дсех",
      img: imgDsegh,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit earum dolor deserunt, autem sit ad. Placeat,laboriosam? Quaerat, cum ipsum.",
    },
    {
      id: 5,
      nameEn: "Amazon of Lori",
      nameAm: "Լոռվա ամազոն",
      nameRu: "Амазон у Лори",
      img: imgLorvaAmazon,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit earum dolor deserunt, autem sit ad. Placeat,laboriosam? Quaerat, cum ipsum.",
    },
    {
      id: 6,
      nameEn: "Margahovit",
      nameAm: "Մարգահովիտ",
      nameRu: "Маргаовит",
      img: imgMargahovit,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit earum dolor deserunt, autem sit ad. Placeat,laboriosam? Quaerat, cum ipsum.",
    },
  ];

  return (
    <section className="popular-places">
      <div className="container">
        <h2 className="popular-places__title">{getTitle()}</h2>
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="swiper_container"
        >
          {places.map((place) => {
            return (
              <SwiperSlide key={place.id}>
                <div className="place__img">
                  <img src={place.img} alt="" />
                </div>
                <div className="place__info">
                  <h3 className="place__title">{getPlaceName(place)}</h3>
                  <p className="place__desc">{place.desc}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
});

export default Places;
