import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Mousewheel } from "swiper";
import "./swiper.css";

const BannerRight = () => {
  return (
    <div className="w-full md:w-5/12 h-[400px] p-4 bg-orange-200 rounded-lg">
      <h2>Popular Shops</h2>
      <Swiper
        direction={"vertical"}
        slidesPerView={"auto"}
        freeMode={false}
        scrollbar={false}
        mousewheel={true}
        modules={[FreeMode, Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          <p className="px-4 py-8 bg-white/50 rounded-md my-3">shop1</p>
          <p className="px-4 py-8 bg-white/50 rounded-md my-3">shop2</p>
          <p className="px-4 py-8 bg-white/50 rounded-md my-3">shop3</p>
          <p className="px-4 py-8 bg-white/50 rounded-md my-3">shop4</p>
          <p className="px-4 py-8 bg-white/50 rounded-md my-3">shop5</p>
          <p className="px-4 py-8 bg-white/50 rounded-md my-3">shop6</p>
          <p className="px-4 py-8 bg-white/50 rounded-md my-3">shop7</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerRight;
