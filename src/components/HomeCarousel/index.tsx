import styles from "./HomeCarousel.module.scss";
import item1 from "../../assets/items/37.jpeg";
import item2 from "../../assets/items/38.jpg";
import item3 from "../../assets/items/39.jpg";
import item4 from "../../assets/items/40.jpg";
const HomeCarousel = () => {
  return (
    <div className={styles.wrapper}>
      <div style={{ backgroundImage: `url(${item1.src})` }} />
      <div style={{ backgroundImage: `url(${item2.src})` }} />
      <div style={{ backgroundImage: `url(${item3.src})` }} />
      <div style={{ backgroundImage: `url(${item4.src})` }} />
    </div>
  );
};

export default HomeCarousel;
