import React from "react";
import styles from "../styles/AboutUs.module.css";
import aboutImage from "../img/about.jpg"; // Importă imaginea

const AboutUs = () => {
  return (
    <section className={styles.aboutUsSection}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h2>Despre Noi</h2>
          <p>
            La Compact A.Y.S. Paintball, suntem dedicați să oferim cea mai bună
            experiență de paintball pentru toate vârstele și nivelurile de
            experiență. Echipa noastră este formată din profesioniști pasionați,
            pregătiți să te ghideze printr-o aventură plină de adrenalină.
          </p>
          <p>
            Cu facilități de top și echipament de înaltă calitate, ne asigurăm
            că fiecare sesiune de paintball este sigură, distractivă și
            memorabilă. Fie că ești începător sau un jucător experimentat, te
            așteptăm să te alături nouă pentru o experiență de neuitat.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={aboutImage} alt="Paintball action" />{" "}
          {/* Folosește imaginea importată */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
