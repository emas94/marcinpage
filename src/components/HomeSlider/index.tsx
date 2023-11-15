import styles from "./HomeSlider.module.scss";
import Slider from "react-slick";
import SliderItem from "../SliderItem";
import Item1 from "./item1.jpg";
import Item2 from "./item2.jpg";
const HomeSlider = () => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };
  return (
    <div className={styles.wrapper}>
      <Slider {...settings}>
        <SliderItem image={Item1} />
        <SliderItem image={Item2} />
      </Slider>
    </div>
  );
};

export default HomeSlider;
