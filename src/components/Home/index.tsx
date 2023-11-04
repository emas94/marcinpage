

import Footer from '../Footer'
import HomeBottomBar from '../HomeBottomBar'
import HomeCarousel from '../HomeCarousel'
import HomeInfo from '../HomeInfo'
import HomeOffers from '../HomeOferts'
import HomeSlider from '../HomeSlider'
import TopBar from '../TopBar'
import styles from './HomePage.module.scss'
const HomePage = () =>{

  return(   <div className={styles.wrapper}>
      <TopBar />
      <HomeSlider />
      <HomeInfo />
      <HomeBottomBar />
      <HomeCarousel />
      <HomeOffers />
      <Footer />
     </div>)
  
}

export default HomePage