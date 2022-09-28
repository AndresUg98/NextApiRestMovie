import React from "react";
import Image from "next/image";
import styles from "./banner.module.scss";

const Banner = ({ img }) => {
  return (
    <section className={styles.movieImg}>
      <Image src={img} layout="fill" />
      {/* <img src={img} alt="" /> */}
    </section>
  );
};

export { Banner };
