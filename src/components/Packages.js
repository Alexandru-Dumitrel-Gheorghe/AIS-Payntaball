import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Importă stilurile AOS
import styles from "../styles/Packages.module.css";
import { FaClock, FaChild, FaTools, FaPhone } from "react-icons/fa";

const Packages = () => {
  // Inițializează AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Durata animațiilor de 1000ms
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle} data-aos="fade-up">
        Pachete Oferite
      </h2>
      <div className={styles.packageContainer}>
        <div className={styles.nft} data-aos="zoom-in">
          <div className={styles.main}>
            <h3 className={styles.packageTitle}>Pachet 100 bile</h3>
            <p className={styles.description}>
              Include 100 bile, echipament complet.
            </p>
            <hr />
            <div className={styles.tokenInfo}>
              <div className={styles.price}>
                <ins>40</ins> LEI
              </div>
              <div className={styles.duration}>per participant</div>
            </div>
          </div>
        </div>

        <div className={styles.nft} data-aos="zoom-in" data-aos-delay="200">
          <div className={styles.main}>
            <h3 className={styles.packageTitle}>Pachet 200 bile</h3>
            <p className={styles.description}>
              Include 200 bile, echipament complet.
            </p>
            <hr />
            <div className={styles.tokenInfo}>
              <div className={styles.price}>
                <ins>70</ins> LEI
              </div>
              <div className={styles.duration}>per participant</div>
            </div>
          </div>
        </div>

        <div className={styles.nft} data-aos="zoom-in" data-aos-delay="400">
          <div className={styles.main}>
            <h3 className={styles.packageTitle}>Pachet 300 bile</h3>
            <p className={styles.description}>
              Include 300 bile, echipament complet.
            </p>
            <hr />
            <div className={styles.tokenInfo}>
              <div className={styles.price}>
                <ins>100</ins> LEI
              </div>
              <div className={styles.duration}>per participant</div>
            </div>
          </div>
        </div>
      </div>

      <h2 className={styles.sectionTitle} data-aos="fade-up">
        Program
      </h2>
      <div className={styles.infoContainer}>
        <div className={styles.infoBlock} data-aos="fade-right">
          <FaClock className={styles.icon} />
          <p className={styles.infoText}>
            Luni - Vineri: 9:00 - 17:00 <br />
            Sâmbătă - Duminică: 9:00 - 19:00
          </p>
        </div>
        <div
          className={styles.infoBlock}
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <FaChild className={styles.icon} />
          <p className={styles.infoText}>Avem arme și pentru copii 7-12 ani</p>
        </div>
        <div
          className={styles.infoBlock}
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <FaTools className={styles.icon} />
          <p className={styles.infoText}>
            Echipamentul tactic include: Marker, Mască, Combinezon
          </p>
        </div>
        <div
          className={styles.infoBlock}
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <FaPhone className={styles.icon} />
          <p className={styles.infoText}>
            TEL: <a href="tel:0743861562">0743 861 562</a> /{" "}
            <a href="tel:0741941514">0741 941 514</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Packages;
