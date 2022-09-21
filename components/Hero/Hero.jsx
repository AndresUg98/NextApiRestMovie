import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";

const Hero = ({ title, image, text }) => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroImg}>
        <Image src={image} layout="fill" />
      </div>
      <div className={styles.heroText}>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </section>
  );
};

export { Hero };
