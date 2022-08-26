import React from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <figure className={styles.heroImg}>
        <img
          src="https://i0.wp.com/revistacontrapunto.com/wp-content/uploads/2021/01/promare.jpg?fit=1620%2C800&ssl=1"
          alt=""
        />
      </figure>
      <div className={styles.heroText}>
        <h2>Promare</h2>
        <p>
          Han pasado treinta años desde la aparición de Burnish, una raza de
          seres mutantes que empuñan llamas. Cuando aparece un nuevo grupo de
          mutantes agresivos, comienza una batalla.
        </p>
      </div>
    </section>
  );
};

export { Hero };
