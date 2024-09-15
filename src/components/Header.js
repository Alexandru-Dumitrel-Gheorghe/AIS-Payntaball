import React, { useState } from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <a href="tel:0743861562" className={styles.phoneNumber}>
          📞 0743 861 562
        </a>
      </div>
      <div className={styles.mainHeader}>
        <div className={styles.logo}>Compact A.Y.S.</div>
        <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a
                href="#despre-noi"
                className={styles.navLink}
                onClick={closeMenu}
              >
                Despre Noi
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#preturi" className={styles.navLink} onClick={closeMenu}>
                Prețuri
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#galerie" className={styles.navLink} onClick={closeMenu}>
                Galerie
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="#contact" className={styles.navLink} onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div
          className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
