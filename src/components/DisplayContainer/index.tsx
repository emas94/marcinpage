import styles from "./DisplayContainer.module.scss";

import { FC, ReactNode, RefObject, useEffect, useState } from "react";
const DisplayContainer = ({
  elementRef,
  spaceBefore,
  timeDelay,
  children,
}: {
  elementRef: RefObject<HTMLHeadingElement>;
  spaceBefore: number;
  timeDelay: number;
  children: ReactNode;
}) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleScroll = () => {
    const element = elementRef.current;
    if (element) {
      const elementTopPosition = element.offsetTop;
      const scrollPosition = window.scrollY;
      if (scrollPosition >= elementTopPosition - spaceBefore || isMouseOver) {
        element.classList.add(styles.show);
      }
    }
  };

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (element) {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMouseOver]);
  return (
    <div
      ref={elementRef}
      className={styles.wrapper}
      style={{ animationDelay: `${timeDelay}s` }}
    >
      {children}
    </div>
  );
};

export default DisplayContainer;
