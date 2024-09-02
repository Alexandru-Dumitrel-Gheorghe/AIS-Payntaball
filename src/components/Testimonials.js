import React from "react";
import styles from "../styles/Testimonials.module.css";
import { FaUser, FaStar, FaClock } from "react-icons/fa"; // Import icons

const testimonials = [
  {
    name: "Panos",
    source: "Recenzie din Google",
    rating: "5/5",
    time: "acum 3 săptămâni",
    text: "Un loc foarte bine amenajat cu un echipament și un personal excepțional. Băieții de acolo sunt foarte de treabă și te ajută în orice. A fost o experiență de neuitat și recomand oricui cu mare încredere. Respect pentru tot!",
  },
  {
    name: "Tascu Ionut",
    source: "Recenzie din Google",
    rating: "5/5",
    time: "acum 3 săptămâni",
    text: "Recomand un joc super",
  },
  {
    name: "Adrian Penisoara",
    source: "Recenzie din Google",
    rating: "5/5",
    time: "acum un an",
    text: "Recomand cu încredere ❤️",
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <h2 className={styles.sectionTitle}>Testimoniale</h2>
      <div className={styles.testimonialsContainer}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <div className={styles.cardHeader}>
              <div className={styles.user}>
                <FaUser className={styles.icon} />
                <h3>{testimonial.name}</h3>
              </div>
              <div className={styles.rating}>
                <FaStar className={styles.icon} />
                <span>{testimonial.rating}</span>
              </div>
            </div>
            <p className={styles.source}>
              <FaClock className={styles.icon} />
              {testimonial.source} · {testimonial.time}
            </p>
            <p className={styles.text}>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
