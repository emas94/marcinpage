

import Navigation from '../Navigation'
import styles from './TopBar.module.scss'

const TopBar = () =>{

  return(   <div className={styles.bar}>
    <div className={styles.logo}/>
    <Navigation />
     </div>)
  
}

export default TopBar