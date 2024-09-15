import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import WelcomeSection from "../components/WelcomeSection";
import AboutUs from "../components/AboutUs";
import Packages from "../components/Packages";
import GallerySlider from "../components/GallerySlider";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import styles from "../styles/HomePage.module.css"; // Asigurați-vă că aveți acest fișier

const HomePage = () => {
  // State pentru afișarea butonului "Înapoi la început"
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Funcție pentru a gestiona evenimentul de derulare
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  // Scroll la început la încărcarea paginii
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Atașează evenimentul de derulare
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      // Curăță evenimentul la demontare
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Funcție pentru a derula înapoi la începutul paginii
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header />
      <WelcomeSection />
      <section id="despre-noi">
        <AboutUs />
      </section>
      <section id="preturi">
        <Packages />
      </section>
      <section id="galerie">
        <GallerySlider />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
      {showScrollTop && (
        <button onClick={scrollToTop} className={styles.scrollTopButton}>
          ↑
        </button>
      )}
      <Footer />
    </>
  );
};

export default HomePage;
