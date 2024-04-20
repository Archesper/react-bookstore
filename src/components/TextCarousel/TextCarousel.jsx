import { useEffect, useState } from "react";
import styles from "./TextCarousel.module.css";

const TextCarousel = ({ paragraphs }) => {
  const carouselCount = paragraphs.length;
  const [activeId, setActiveId] = useState(0);
  const paragraphWidth = 40;
  const carouselOffset = -paragraphWidth*activeId;
  const transformStyle = {
    transform: `translateX(${carouselOffset}vw)`
  };
  console.log(transformStyle);
  const paragraphNodes = paragraphs.map((paragraph, index) => 
    <p className={styles.paragraph}>{paragraph}</p>
  );
  useEffect(() => {
    const interval = setTimeout((() => {
      if (activeId !== carouselCount - 1) {
        setActiveId(activeId + 1);
      } else {
        setActiveId(0);
      }
    }), 4000);
    return () => clearTimeout(interval);
  }, [activeId])
  return <div className={styles["carousel-frame"]}>
    <div style={transformStyle} className={styles.carousel}>{paragraphNodes}</div>
  </div>;
};

export default TextCarousel;
