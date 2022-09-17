// @flow
import * as React from "react";
import styles from "./MovieCard.module.scss";
import Image from "next/image";
const MovieCard = ({ image, title }) => {
  return (
    <div className={styles.card}>
      <Image src={image} layout="fill" />
      <div className={styles.cardTitle}>
        <p>{title}</p>
      </div>
    </div>
  );
};

export { MovieCard };
