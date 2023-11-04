
import styles from './HeaderTitle.module.scss'

import { RefObject, useEffect } from 'react';
const HeaderTitle = ({elementRef, delay, title, subTitle}:{elementRef: RefObject<HTMLHeadingElement>,
  delay: number, title: string, subTitle?: string}) =>{
  

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (element) {
        const elementTopPosition = element.offsetTop;
        const scrollPosition = window.scrollY;
        console.log('scrollPosition', scrollPosition)
        console.log('elementTopPosition', elementTopPosition)
        if (scrollPosition >= elementTopPosition - delay ){
          element.classList.add(styles.show); // Dodaj klasę do elementu
        } else if(scrollPosition < elementTopPosition - 500 ){
          element.classList.remove(styles.show); // Usuń klasę z elementu
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return(  
    <div className={styles.wrapper}>
          <div className={styles.title} >
            <h4 ref={elementRef}>{title}</h4>
            <p className={styles.subTitle}>{subTitle}</p>
          </div>
     </div>)
  
}

export default HeaderTitle