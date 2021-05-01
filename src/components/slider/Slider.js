import React, { useState, useEffect } from "react";
import styles from "./Slider.module.css";
import { images } from "../../utils/images";
import Slide from "../slide/Slide";
import Arrow from "../arrows/Arrow";

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    if (activeIndex < 0) {
      setActiveIndex(images.length - 1);
    } else if (activeIndex > images.length - 1) {
      setActiveIndex(0);
    }
  }, [activeIndex]);

  const showSlide = () => {
    return images.map((item, index) => (
      <Slide path={item} key={index} activeIndex={activeIndex} index={index} />
    ));
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slideContainer}>{showSlide()}</div>
      <Arrow
        setActiveIndex={setActiveIndex}
        type={"Prev"}
        activeIndex={activeIndex}
      />
      <Arrow
        setActiveIndex={setActiveIndex}
        type={"Next"}
        activeIndex={activeIndex}
      />
    </div>
  );
}

export default Slider;
