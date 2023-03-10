import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper";
const Slider = ({ children }) => {
  return (
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
      {children}
    </Swiper>
  );
};

export default Slider;
