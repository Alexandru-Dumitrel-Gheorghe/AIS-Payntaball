import React from "react";
import Header from "../components/Header";
import WelcomeSection from "../components/WelcomeSection";
import AboutUs from "../components/AboutUs";
import Packages from "../components/Packages";
import GallerySlider from "../components/GallerySlider";
import Testimonials from "../components/Testimonials"; // Importing Testimonials
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const HomePage = () => {
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
      <section id="testimoniale">
        <Testimonials /> {/* Add Testimonials section here */}
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
