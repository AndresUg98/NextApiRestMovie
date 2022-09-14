// @flow
import * as React from "react";
import styles from "./CarouselContainer.module.scss";
const CarouselContainer = (props) => {
  return (
    <section className={styles.carouselContainer}>
      <h2 className={styles.sectionTitle}>{props.sectionName}</h2>
      <div className={styles.carousel}>{props.children}</div>
    </section>
  );
};

export { CarouselContainer };
