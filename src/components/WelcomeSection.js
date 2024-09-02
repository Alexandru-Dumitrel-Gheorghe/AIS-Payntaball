import React from "react";
import styles from "../styles/WelcomeSection.module.css";
import { FaPhone } from "react-icons/fa"; // Importa iconița de telefon

const WelcomeSection = () => {
  return (
    <section className={styles.welcomeSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>Compact A.Y.S. Paintball</h1>
        <p>Experiență de paintball de neuitat pentru tine și prietenii tăi!</p>
        <a href="tel:+40743861562" className={styles.callButton}>
          <FaPhone className={styles.phoneIcon} /> 0743 861 562
        </a>
        <div className={styles.info}>
          <p>70 LEI/Participant - Include 200 bile</p>
          <p>Echipament inclus: Marker, Mască, Combinezon</p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
