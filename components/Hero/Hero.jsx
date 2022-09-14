import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroImg}>
        <Image
          src="https://static.filmin.es/images/media/33039/1/still_0_3_1360x765.png"
          layout="fill"
        />
      </div>
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
