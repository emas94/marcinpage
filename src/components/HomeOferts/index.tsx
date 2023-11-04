
import styles from './HomeOffers.module.scss'
import item1 from '../../assets/items/1.jpg';
import item2 from '../../assets/items/2.jpg';
import item3 from '../../assets/items/3.jpg';
import item4 from '../../assets/items/4.jpg';
import item5 from '../../assets/items/5.jpg';
import item6 from '../../assets/items/6.jpg';
import item7 from '../../assets/items/7.jpg';
import item8 from '../../assets/items/8.jpg';
import item9 from '../../assets/items/9.jpg';
import item10 from '../../assets/items/10.jpg';
import item11 from '../../assets/items/11.jpg';
import item12 from '../../assets/items/12.jpg';
import item13 from '../../assets/items/13.jpg';
import item14 from '../../assets/items/14.jpg';
import item15 from '../../assets/items/15.jpg';
import item16 from '../../assets/items/16.jpg';
import item17 from '../../assets/items/17.jpg';
import item18 from '../../assets/items/18.jpg';
import item19 from '../../assets/items/19.jpg';
import item20 from '../../assets/items/20.jpg';
import item21 from '../../assets/items/21.jpg';
import item22 from '../../assets/items/22.jpg';
import item23 from '../../assets/items/23.jpg';
import item24 from '../../assets/items/24.jpg';
import item25 from '../../assets/items/25.jpg';
import item26 from '../../assets/items/26.jpg';
import item27 from '../../assets/items/27.jpg';
import item28 from '../../assets/items/28.jpg';
import item29 from '../../assets/items/29.jpg';
import item30 from '../../assets/items/30.jpg';
import item31 from '../../assets/items/31.jpg';
import item32 from '../../assets/items/32.jpg';
import item33 from '../../assets/items/33.jpg';
import item34 from '../../assets/items/34.jpg';
import item35 from '../../assets/items/35.jpg';
import item36 from '../../assets/items/36.jpg';
import item37 from '../../assets/items/37.jpeg';
import item38 from '../../assets/items/38.jpg';
import { useEffect, useRef, useState } from 'react';
import HeaderTitle from '../HeaderTitle';
import Image from 'next/image';
import DisplayContainer from '../DisplayContainer';
const HomeOffers = () =>{
  const fenceArray = [
    {
      img: item1,
      name: 'item1',
      description: 'Mamy tylko chwilę, by kochać się',
    },
    {
      img: item2,
      name: 'item2',
      description: 'Mówiłeś, że jestem dla Ciebie wszystkim',
    },
    {
      img: item3,
      name: 'item3',
      description: 'Całuj mnie, dotykaj mnie, kochaj mnie',
    },
    {
      img: item4,
      name: 'item4',
      description: 'Więc pocałuj mnie i zaśpiewaj',
    },
    {
      img: item5,
      name: 'item5',
      description: 'Czy mógłbym Cię prosić o taniec?',
    },
    {
      img: item6,
      name: 'item6',
      description: 'Wracam, gdzieś w tle budzę się',
    },
    {
      img: item7,
      name: 'item7',
      description: 'Gdzie jesteś, gdzie Twój dom?',
    },
    {
      img: item8,
      name: 'item8',
      description: 'Znów spadają z nieba deszcze',
    },
    {
      img: item9,
      name: 'item9',
      description: 'Zbliż się, przytul mnie mocno',
    },
    {
      img: item10,
      name: 'item10',
      description: 'Nie chcę już więcej łez',
    },
    {
      img: item11,
      name: 'item11',
      description: 'Wszystko się może zdarzyć',
    },
    {
      img: item12,
      name: 'item12',
      description: 'Wiem, że jesteś tam gdzieś',
    },
  ];
  const nonFenceArray = [
    {
      img: item13,
      name: 'item13',
      description: 'description'
    },
    {
      img: item14,
      name: 'item14',
      description: 'description'
    },
    {
      img: item15,
      name: 'item15',
      description: 'description'
    },
    {
      img: item16,
      name: 'item16',
      description: 'description'
    },
    {
      img: item17,
      name: 'item17',
      description: 'description'
    },
    {
      img: item18,
      name: 'item18',
      description: 'description'
    },
    {
      img: item19,
      name: 'item19',
      description: 'description'
    },
    {
      img: item20,
      name: 'item20',
      description: 'description'
    },
    {
      img: item21,
      name: 'item21',
      description: 'description'
    },
    {
      img: item22,
      name: 'item22',
      description: 'description'
    },
    {
      img: item23,
      name: 'item23',
      description: 'description'
    },
    {
      img: item24,
      name: 'item24',
      description: 'description'
    },
  ];
  
  const others = [
    {
      img: item25,
      name: 'item25',
      description: 'description'
    },
    {
      img: item26,
      name: 'item26',
      description: 'description'
    },
    {
      img: item27,
      name: 'item27',
      description: 'description'
    },
    {
      img: item28,
      name: 'item28',
      description: 'description'
    },
    {
      img: item29,
      name: 'item29',
      description: 'description'
    },
    {
      img: item30,
      name: 'item30',
      description: 'description'
    },
    {
      img: item31,
      name: 'item31',
      description: 'description'
    },
    {
      img: item32,
      name: 'item32',
      description: 'description'
    },
    {
      img: item33,
      name: 'item33',
      description: 'description'
    },
    {
      img: item34,
      name: 'item34',
      description: 'description'
    },
    {
      img: item35,
      name: 'item35',
      description: 'description'
    },
    {
      img: item36,
      name: 'item36',
      description: 'description'
    },
    {
      img: item37,
      name: 'item37',
      description: 'description'
    },
    {
      img: item38,
      name: 'item38',
      description: 'description'
    },
  ];
  const elementRef = useRef<HTMLDivElement>(null);
  const secondElementRef = useRef<HTMLDivElement>(null);
  const thirdElementRef = useRef<HTMLDivElement>(null);
  const fenceArrayRef = useRef<HTMLDivElement>(null);
  const noFenceArrayRef = useRef<HTMLDivElement>(null);
  const othersArrayRef = useRef<HTMLDivElement>(null);

  return(  
    <div className={styles.wrapper}>
            <HeaderTitle elementRef={elementRef} delay={300} title='Płoty' subTitle='Mamy bardzo fajne płoty'/>
            <DisplayContainer elementRef={fenceArrayRef} timeDelay={1} spaceBefore={400} >

            <div className={styles.offersWrapper} >
              {fenceArray.map((item, index)=>
              <>
         <div className={styles.wrapperItem} >
              <div 
                   className={styles.item}
              
              key={index}>
                <div  className={styles.img} style={{backgroundImage: `url(${item.img.src})`}}/>
                <p> {item.name} </p>
              <div className={styles.description}>{item.description}</div>
              </div>
              </div>
              </>
              )}
            </div>
              </DisplayContainer>
            <HeaderTitle elementRef={secondElementRef} delay={300} title='Na pewno nie Płoty' subTitle='Mamy bardzo fajne Na pewno nie Płoty'/>
            <DisplayContainer elementRef={noFenceArrayRef} timeDelay={1} spaceBefore={400} >

            <div className={styles.offersWrapper}>
              {nonFenceArray.map((item, index)=>
              <>
                     <div className={styles.wrapperItem} >
           <div 
                   className={styles.item}
              
              key={index}>

              <div  className={styles.img}  style={{backgroundImage: `url(${item.img.src})`}}/>   
                           <p>[item.name] </p>
              <div className={styles.description}>{item.description}</div>
              </div>
              </div>
              
              </>)}
            </div>
            </DisplayContainer>
            <HeaderTitle elementRef={thirdElementRef} delay={300} title='Wszystko inne' subTitle='Mamy bardzo fajne Wszystko inne'/>
            <DisplayContainer elementRef={othersArrayRef} timeDelay={1} spaceBefore={400} >
            <div className={styles.offersWrapper}>
              {others.map((item, index)=>
              <>
                     <div className={styles.wrapperItem} >
           <div 
                   className={styles.item}
              
              key={index}>

              <div  className={styles.img} style={{backgroundImage: `url(${item.img.src})`}}/>      
                        <p>{item.name} </p>
              <div className={styles.description}>{item.description}</div>
              </div>
              </div>
              
              </>)}
            </div>
                </DisplayContainer>
     </div>)
  
}

export default HomeOffers