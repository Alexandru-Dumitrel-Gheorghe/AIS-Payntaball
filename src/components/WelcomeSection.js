import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importă stilurile AOS
import styles from "../styles/WelcomeSection.module.css";
import { FaPhone } from "react-icons/fa"; // Importă iconița de telefon

const WelcomeSection = () => {
  // Inițializează AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Durata animațiilor de 1000ms
  }, []);

  return (
    <section className={styles.welcomeSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 data-aos="fade-down">Compact A.Y.S. Paintball</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Experiență de paintball de neuitat pentru tine și prietenii tăi!
        </p>
        <a
          href="tel:+40743861562"
          className={styles.callButton}
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <FaPhone className={styles.phoneIcon} /> 0743 861 562
        </a>
        <div className={styles.info} data-aos="fade-up" data-aos-delay="600">
          <p>70 LEI/Participant - Include 200 bile</p>
          <p>Echipament inclus: Marker, Mască, Combinezon</p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
