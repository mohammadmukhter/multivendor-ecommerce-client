import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import bannerImg1 from "../../../assets/banner/chicken-red-curry-black-cup (1).jpg";
import bannerImg2 from "../../../assets/banner/kimchi-ready-eat-bowl (1).jpg";
import bannerImg3 from "../../../assets/banner/plate-sweeties-two-cakes-biscuits-with-cinnamon (1).jpg";
import "./style.css";

const Banner = () => {
  return (
    <div>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        interval={4000}
        infiniteLoop={true}
      >
        <div>
          <img className="w-auto h-auto" src={bannerImg1} />
        </div>
        <div>
          <img src={bannerImg2} />
        </div>
        <div>
          <img src={bannerImg3} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
