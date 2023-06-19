import { Swiper, SwiperSlide } from "swiper/react";
import img from "../../../assets/banner/chicken-red-curry-black-cup (1).jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Popular = () => {
  return (
    <div className="shadow-[2px_3px_3px_3px_rgba(0,199,100,0.05)] rounded-md bg-white px-4 py-8">
      <h2 className="mb-4 text-xl">popular products</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div className="card card-compact w-full bg-base-100 border-[1px] border-gray-100 rounded-md">
            <figure className="p-4 rounded-md">
              <img src={img} alt="" />
            </figure>
            <div className="p-4">
              <h2 className="card-title">mobile 350</h2>
              <p>$20000</p>
              <p>33pc left</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="card card-compact w-full bg-base-100 border-[1px] border-gray-100 rounded-md">
            <figure className="p-4 rounded-md">
              <img src={img} alt="" />
            </figure>
            <div className="p-4">
              <h2 className="card-title">mobile 350</h2>
              <p>$20000</p>
              <p>33pc left</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="card card-compact w-full bg-base-100 border-[1px] border-gray-100 rounded-md">
            <figure className="p-4 rounded-md">
              <img src={img} alt="" />
            </figure>
            <div className="p-4">
              <h2 className="card-title">mobile 350</h2>
              <p>$20000</p>
              <p>33pc left</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="card card-compact w-full bg-base-100 border-[1px] border-gray-100 rounded-md">
            <figure className="p-4 rounded-md">
              <img src={img} alt="" />
            </figure>
            <div className="p-4">
              <h2 className="card-title">mobile 350</h2>
              <p>$20000</p>
              <p>33pc left</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="card card-compact w-full bg-base-100 border-[1px] border-gray-100 rounded-md">
            <figure className="p-4 rounded-md">
              <img src={img} alt="" />
            </figure>
            <div className="p-4">
              <h2 className="card-title">mobile 350</h2>
              <p>$20000</p>
              <p>33pc left</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="card card-compact w-full bg-base-100 border-[1px] border-gray-100 rounded-md">
            <figure className="p-4 rounded-md">
              <img src={img} alt="" />
            </figure>
            <div className="p-4">
              <h2 className="card-title">mobile 350</h2>
              <p>$20000</p>
              <p>33pc left</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="card card-compact w-full bg-base-100 border-[1px] border-gray-100 rounded-md">
            <figure className="p-4 rounded-md">
              <img src={img} alt="" />
            </figure>
            <div className="p-4">
              <h2 className="card-title">mobile 350</h2>
              <p>$20000</p>
              <p>33pc left</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Popular;
