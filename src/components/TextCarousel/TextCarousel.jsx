import { useEffect, useRef, useState } from "react";
import styles from "./TextCarousel.module.css";

const TextCarousel = ({ paragraphs }) => {
  const firstNode = useRef(null);
  const paragraphNodes = paragraphs.map((paragraph, index) => (
    <p {...(index === 0 ? {ref: firstNode} : {})} key={index} dangerouslySetInnerHTML={{__html: paragraph}} className={styles.paragraph}></p>
  ));
  const [paragraphWidth, setParagraphWidth] = useState(0);
  const carouselCount = paragraphs.length;
  const [activeId, setActiveId] = useState(0);
  const carouselOffset = -paragraphWidth * activeId;
  const transformStyle = {
    transform: `translateX(${carouselOffset}px)`,
  };
  useEffect(() => {
    if (firstNode.current) {
      setParagraphWidth(firstNode.current.offsetWidth);
    }
  }, [firstNode.current.offsetWidth]);
  useEffect(() => {
    const interval = setTimeout(() => {
      if (activeId !== carouselCount - 1) {
        setActiveId(activeId + 1);
      } else {
        setActiveId(0);
      }
    }, 4000);
    return () => clearTimeout(interval);
  }, [activeId]);
  return (
    <div className={styles["carousel-frame"]}>
      <div style={transformStyle} className={styles.carousel}>
        {paragraphNodes}
      </div>
      <div className={styles["carousel-controls"]}>
        {paragraphs.map((paragraph, index) => (
          <div className={styles["carousel-control"] + (activeId === index ? ` ${styles["active-control"]}` : "")} onClick={() => setActiveId(index)}>
            <div className={styles["control-inner-ring"]}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextCarousel;
