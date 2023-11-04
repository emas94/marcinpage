
import classNames from 'classnames'
import styles from './HomeBottomBar.module.scss'
const HomeBottomBar = () =>{

  return(   <div className={styles.wrapper}>
               <div>
                    <p className={classNames(styles.topText, styles.firstAnimation)}>100+</p>
                    <span className={styles.bottomText}>Zadowolonych klientów</span>
               </div>
               <div>
               <p className={classNames(styles.topText, styles.secondAnimation)}>10 TON</p>
                    <span className={styles.bottomText}>Stali miesięcznie</span>
               </div>
               <div>
               <p className={classNames(styles.topText, styles.thirdAnimation)}>10</p>
                    <span className={styles.bottomText}>Małpek przed pracą</span>
               </div>

     </div>)
  
}

export default HomeBottomBar