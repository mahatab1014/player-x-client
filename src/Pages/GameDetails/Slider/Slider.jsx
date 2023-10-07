/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import YouTube from "react-youtube";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";

const Slider = ({ game_thumbnails, gameplay_video }) => {
  console.log(game_thumbnails, gameplay_video);

  
  const extractVideoId = (url)=> {
      const match = url.match(/(?:\?v=|\/embed\/|\/v\/|youtu\.be\/|\/watch\?v=|\/watch\?feature=player_embedded&v=)([^&\n?#]+)/);
      if (match && match[1]) {
          return match[1];
        } else {
            return null;
        }
    }
    const gamePlayVideoID = extractVideoId(gameplay_video);

   const youtubeOpts = {
     height: "420px",
     width: "980px",
     playerVars: {
       autoplay: 1,
     },
   };

  return (
    <div>
      <>
        <Swiper
          className="mySwiper swiper-h"
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          style={{ height: "80vh" }}
          autoplay={{
            delay: 5000,
          }}
        >
          <SwiperSlide>
            <Swiper
              className="mySwiper2 swiper-v"
              direction={"vertical"}
              spaceBetween={200}
              pagination={{
                clickable: true,
              }}
              mousewheel={true}
              modules={[Pagination, Mousewheel, Autoplay]}
              style={{ height: "80vh" }}
              autoplay={{
                delay: 2500,
              }}
            >
              <SwiperSlide>
                <figure>
                  <img src={game_thumbnails[0]} alt="" />
                </figure>
              </SwiperSlide>
              <SwiperSlide>
                <figure>
                  <img src={game_thumbnails[1]} alt="" />
                </figure>
              </SwiperSlide>
            </Swiper>
          </SwiperSlide>
          <SwiperSlide>
            <div className="[&>div>iframe]:shadow-xl shadow-black [&>div>iframe]:rounded-2xl">
              <YouTube videoId={gamePlayVideoID} opts={youtubeOpts} />
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Slider;
