// @flow
import * as React from "react";
import styles from "./MovieCard.module.scss";
import Image from "next/image";
const MovieCard = () => {
  return (
    <div className={styles.card}>
      <Image
        src="https://play-lh.googleusercontent.com/E_ESQA8N_YsXmUNvKUnF_TeRs-Sqh-k8lJmvSUtrDHyQPgdLXxr06k6nU6Zb_foQFGo"
        layout="fill"
      />
      <div className={styles.cardTitle}>
        <p>Predator</p>
      </div>
    </div>
  );
};

export { MovieCard };
