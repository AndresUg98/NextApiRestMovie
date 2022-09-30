import React from "react";
import Image from "next/image";
import styles from "./banner.module.scss";
import score from "../Assets/Icons/score.svg";

const Banner = ({ img, title, text, rating }) => {
  return (
    <section>
      <div className={styles.movieImg}>
        <Image src={img} layout="fill" />
      </div>
      <div className={styles.movieInfo}>
        <h3 className={styles.movieTitle}>{title}</h3>
        <div className={styles.genere}>
          <p>Animation</p>
          <p>Action</p>
        </div>
        <div className={styles.rate}>
          <Image src={score} />
          {/* <img src="./assets/score.svg" alt=""> */}
          <p>{rating}</p>
        </div>
        <p className={styles.movieSinopsis}>{text}</p>
      </div>
    </section>
  );
};

export { Banner };
