import React from "react";
import styles from "../styles/WelcomeSection.module.css";

const WelcomeSection = () => {
  return (
    <section className={styles.welcomeSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1>Compact A.Y.S. Paintball</h1>
        <p>Experiență de paintball de neuitat pentru tine și prietenii tăi!</p>
        <button className={styles.ctaButton}>Rezervă acum</button>
        <div className={styles.info}>
          <p>70 LEI/Participant - Include 200 bile</p>
          <p>Echipament inclus: Marker, Mască, Combinezon</p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
