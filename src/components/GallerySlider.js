import React, { useState } from "react";
import styles from "../styles/GallerySlider.module.css";
import p1 from "../img/p1.jpg";
import p2 from "../img/p2.jpg";
import p3 from "../img/p3.jpg";
import p4 from "../img/p4.jpg";
import p5 from "../img/p5.jpg";
import p6 from "../img/p6.jpg";
import p13 from "../img/p13.jpg";
import p17 from "../img/p17.jpg";
import paintball5 from "../img/paintball5.jpg";

const images = [p1, p2, p3, p4, p5, p6, p13, p17, paintball5];

const GallerySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const index = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.galleryTitle}>Galerie</h2>
      <div className={styles.sliderContainer}>
        <button className={styles.prevButton} onClick={prevSlide}>
          &#10094;
        </button>
        <div className={styles.slide}>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className={styles.image}
          />
        </div>
        <button className={styles.nextButton} onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default GallerySlider;
