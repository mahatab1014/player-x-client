// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

// import slider images
import slider_image_one from "/images/slider/slider-01.jpg";
import slider_image_two from "/images/slider/slider-02.jpg";
import slider_image_five from "/images/slider/slider-05.jpg";
import slider_image_six from "/images/slider/slider-06.jpg";

const Slider = () => {
  return (
    <>
      <>
        <Swiper
          pagination={true}
          // loop={true}
          // autoplay={{
          //   delay: 3500,
          //   disableOnInteraction: false,
          // }}
          modules={[Pagination, Autoplay]}
        >
          <SwiperSlide>
            <div className="relative">
              <div className="absolute top-2/4 text-left px-5 md:px-10">
                <p className="text-black text-2xl md:text-4xl">
                  Play Games with
                </p>
                <h2 className="text-3xl md:text-8xl font-semibold text-primary z-50 flex">
                  Player
                  <figure className="w-1/4 md:w-auto">
                    <img className="" src="/images/logo-header.png" alt="" />
                  </figure>
                </h2>
              </div>
              <figure>
                <img src={slider_image_one} alt="" />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <div className="backdrop-blur-sm absolute top-2/4 text-left px-5 md:px-10 py-3 rounded-r-xl">
                <p className="text-white text-2xl md:text-4xl">
                  Play with your squads
                </p>
                <h2 className="text-3xl md:text-8xl font-semibold text-primary z-50 flex">
                  Player
                  <figure className="w-12 md:w-auto">
                    <img src="/images/logo-header.png" alt="" />
                  </figure>
                </h2>
              </div>
              <figure>
                <img src={slider_image_two} alt="" />
              </figure>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative">
              <div className="backdrop-blur-sm absolute top-2/4 text-left px-5 md:px-10 py-3 rounded-r-xl">
                <p className="text-white text-2xl md:text-4xl">
                  PUBG MOBILE with
                </p>
                <h2 className="text-3xl md:text-8xl font-semibold text-primary z-50 flex">
                  Player
                  <figure className="w-12 md:w-auto">
                    <img className="" src="/images/logo-header.png" alt="" />
                  </figure>
                </h2>
              </div>
              <figure>
                <img src={slider_image_five} alt="" />
              </figure>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <div className="backdrop-blur-sm absolute top-2/4 text-left px-5 md:px-10 py-3 rounded-r-xl">
                <p className="text-white text-2xl md:text-4xl">
                  Play Games with
                </p>
                <h2 className="text-3xl md:text-8xl font-semibold text-primary z-50 flex">
                  Player
                  <figure className="w-12 md:w-auto">
                    <img className="" src="/images/logo-header.png" alt="" />
                  </figure>
                </h2>
              </div>
              <figure>
                <img src={slider_image_six} alt="" />
              </figure>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </>
  );
};

export default Slider;
