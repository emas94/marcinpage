import HomeBottomBar from "../HomeBottomBar";
import HomeCarousel from "../HomeCarousel";
import HomeInfo from "../HomeInfo";
import HomeOffers from "../HomeOferts";
import HomeSlider from "../HomeSlider";
import styles from "./HomePage.module.scss";
const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <HomeSlider />
      <HomeInfo />
      <HomeBottomBar />
      <HomeCarousel />
      <HomeOffers />
    </div>
  );
};

export default HomePage;
