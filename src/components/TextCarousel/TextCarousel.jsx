import { useEffect, useRef, useState } from "react";
import styles from "./TextCarousel.module.css";

const TextCarousel = ({ paragraphs }) => {
  const paragraphNodes = paragraphs.map((paragraph, index) => (
    <p dangerouslySetInnerHTML={{__html: paragraph}} className={styles.paragraph}></p>
  ));
  const firstNode = useRef(paragraphNodes[0]);
  const carouselCount = paragraphs.length;
  const [activeId, setActiveId] = useState(0);
  const paragraphWidth =firstNode.current.offsetWidth;
  const carouselOffset = -paragraphWidth * activeId;
  const transformStyle = {
    transform: `translateX(${carouselOffset}px)`,
  };
  useEffect(() => {
    const interval = setTimeout(() => {
      if (activeId !== carouselCount - 1) {
        setActiveId(activeId + 1);
      } else {
        setActiveId(0);
      }
    }, 40000);
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
