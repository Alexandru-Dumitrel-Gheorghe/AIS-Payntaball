import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importă stilurile AOS
import styles from "../styles/HeroSection.module.css";

const HeroSection = () => {
  // Inițializează AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Durata animațiilor de 1000ms
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content} data-aos="fade-up">
        <h1 data-aos="fade-down">Compact A.Y.S. Paintball</h1>
        <p data-aos="fade-right">
          Experiență de paintball de neuitat pentru tine și prietenii tăi!
        </p>
        <button className={styles.ctaButton} data-aos="zoom-in">
          Rezervă acum
        </button>
        <div className={styles.info} data-aos="fade-up">
          <p>70 LEI/Participant - Include 200 bile</p>
          <p>Timp de joc: 1 Oră jumătate</p>
          <p>Echipament inclus: Marker, Mască, Combinezon</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
