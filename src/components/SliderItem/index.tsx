

import { StaticImageData } from 'next/image'
import styles from './SliderItem.module.scss'
interface SliderItemInterface {
  image: StaticImageData
}
const SliderItem = ({image}:SliderItemInterface) =>  <div className={styles.wrapper} style={{backgroundImage: `url(${image.src})`}}/>
  


export default SliderItem