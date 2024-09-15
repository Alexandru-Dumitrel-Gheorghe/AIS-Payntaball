import React, { useState, useEffect, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import styles from "../styles/GallerySlider.module.css";

// Importurile imaginilor
import p1 from "../img/p1.jpg";
import p2 from "../img/p2.jpg";
import p3 from "../img/p3.jpg";
import p4 from "../img/p4.jpg";
import p5 from "../img/p5.jpg";
import p6 from "../img/p6.jpg";
import p13 from "../img/p13.jpg";
import p17 from "../img/p17.jpg";
import paintball5 from "../img/paintball5.jpg";
import d1 from "../img/d1.jpg";
import d2 from "../img/d2.jpg";
import d3 from "../img/d3.jpg";
import d4 from "../img/d4.jpg";
import d5 from "../img/d5.jpg";
import d6 from "../img/d6.jpg";
import d7 from "../img/d7.jpg";
import d8 from "../img/d8.jpg";
import d9 from "../img/d9.jpg";
import d10 from "../img/d10.jpg";
import d11 from "../img/d11.jpg";
import d12 from "../img/d12.jpg";
import d13 from "../img/d13.jpg";

const images = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p13,
  p17,
  paintball5,
  d1,
  d2,
  d3,
  d4,
  d5,
  d6,
  d7,
  d8,
  d9,
  d10,
  d11,
  d12,
  d13,
];

const GallerySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  // Funcția pentru slide-ul anterior, memoizată cu useCallback
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, []);

  // Funcția pentru slide-ul următor, memoizată cu useCallback
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  // Funcția pentru a merge la un slide specific
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Handlers pentru swipe în slider
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // Handlers pentru swipe în modal
  const modalHandlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: false,
  });

  // Efect pentru autoplay
  useEffect(() => {
    let interval = null;
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000); // Schimbă slide-ul la fiecare 5 secunde
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoplay, nextSlide]);

  // Funcția pentru a comuta autoplay-ul
  const toggleAutoplay = () => {
    setAutoplay(!autoplay);
  };

  // Funcția pentru a deschide modalul
  const openModal = () => {
    setModalOpen(true);
  };

  // Funcția pentru a închide modalul
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setModalOpen(false);
    }
  };

  return (
    <section className={styles.gallerySection}>
      <h2 className={styles.galleryTitle}>Galerie</h2>
      <div className={styles.sliderContainer} {...handlers}>
        <button className={styles.prevButton} onClick={prevSlide}>
          &#10094;
        </button>
        <div className={styles.slide}>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className={styles.image}
            onClick={openModal}
          />
        </div>
        <button className={styles.nextButton} onClick={nextSlide}>
          &#10095;
        </button>
        <div className={styles.dotsContainer}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                currentIndex === index ? styles.active : ""
              }`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
        <button className={styles.autoplayButton} onClick={toggleAutoplay}>
          {autoplay ? "⏸" : "▶️"}
        </button>
      </div>
      {modalOpen && (
        <div className={styles.modal} onClick={closeModal} {...modalHandlers}>
          <button
            className={styles.modalPrevButton}
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
          >
            &#10094;
          </button>
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className={styles.modalImage}
          />
          <button
            className={styles.modalNextButton}
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
          >
            &#10095;
          </button>
          <button
            className={styles.closeModal}
            onClick={() => setModalOpen(false)}
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySlider;
