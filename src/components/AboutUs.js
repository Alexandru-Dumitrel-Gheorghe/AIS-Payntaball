import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importă stilurile AOS
import styles from "../styles/AboutUs.module.css";
import aboutImage from "../img/about.jpg"; // Importă imaginea

const AboutUs = () => {
  // Inițializează AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Animații cu o durată de 1000ms
  }, []);

  return (
    <section className={styles.aboutUsSection}>
      <div className={styles.content}>
        <div className={styles.textContainer} data-aos="fade-right">
          <h2>Despre Noi</h2>
          <p>
            La <strong>Compact A.Y.S. Paintball</strong>, suntem dedicați să
            oferim cea mai bună experiență de paintball pentru toate vârstele și
            nivelurile de experiență. Echipa noastră este formată din
            profesioniști pasionați, pregătiți să te ghideze printr-o aventură
            plină de adrenalină.
          </p>
          <p>
            Cu facilități de top și echipament de înaltă calitate, ne asigurăm
            că fiecare sesiune de paintball este sigură, distractivă și
            memorabilă. Fie că ești începător sau un jucător experimentat, te
            așteptăm să te alături nouă pentru o experiență de neuitat.
          </p>
        </div>
        <div className={styles.imageContainer} data-aos="fade-left">
          <img src={aboutImage} alt="Paintball action" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
