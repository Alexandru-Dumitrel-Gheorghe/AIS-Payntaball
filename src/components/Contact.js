import React from "react";
import styles from "../styles/Contact.module.css";
import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa"; // Importă iconițele

const Contact = () => {
  return (
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.sectionTitle}>Contact</h2>
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h3>COMPACT AYS PAINTBALL S.R.L</h3>
          <p>
            <FaMapMarkerAlt className={styles.icon} />
            Drumul forestier Pădurea Niculițel, Teliţa 827078, România
          </p>
          <p>
            <FaClock className={styles.icon} />
            Program: Deschis ⋅ Se închide la 17:00
          </p>
          <p>
            <FaPhone className={styles.icon} />
            Telefon:{" "}
            <a href="tel:+40743861562" className={styles.phoneLink}>
              +40 743 861 562
            </a>
          </p>
        </div>
        <div className={styles.message}>
          <p>
            Pentru rezervări, vă rugăm să ne sunați la numărul de telefon afișat
            mai sus. Suntem aici pentru a vă oferi o experiență de paintball de
            neuitat! Vă așteptăm cu drag!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
