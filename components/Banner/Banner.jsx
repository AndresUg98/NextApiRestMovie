import React from "react";
import Image from "next/image";
import styles from "./banner.module.scss";
import score from "../Assets/Icons/score.svg";

const Banner = ({ img }) => {
  return (
    <section>
      <div className={styles.movieImg}>
        <Image src={img} layout="fill" />
      </div>
      <div className={styles.movieInfo}>
        <h3 className={styles.movieTitle}>Promare</h3>
        <div className={styles.genere}>
          <p>Animation</p>
          <p>Action</p>
        </div>
        <div className={styles.rate}>
          <Image src={score} />
          {/* <img src="./assets/score.svg" alt=""> */}
          <p>9.5</p>
        </div>
        <p className={styles.movieSinopsis}>
          Han pasado treinta años desde la aparición de Burnish, una raza de
          seres mutantes que empuñan llamas. Cuando aparece un nuevo grupo de
          mutantes agresivos, comienza una batalla.
        </p>
      </div>
    </section>
  );
};

export { Banner };
