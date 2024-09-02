import React from "react";
import styles from "../styles/Footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"; // Import social media icons

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h2>Compact A.Y.S. Paintball</h2>
        </div>
        <div className={styles.quickLinks}>
          <h3>Link-uri rapide</h3>
          <ul>
            <li>
              <a href="#despre-noi">Despre Noi</a>
            </li>
            <li>
              <a href="#preturi">Prețuri</a>
            </li>
            <li>
              <a href="#galerie">Galerie</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className={styles.socialMedia}>
          <h3>Urmărește-ne</h3>
          <div className={styles.icons}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>
          &copy; {new Date().getFullYear()} Compact A.Y.S. Paintball. Toate
          drepturile rezervate.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
