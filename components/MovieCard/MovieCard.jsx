// @flow
import * as React from "react";
import Link from "next/link";
import styles from "./MovieCard.module.scss";
import Image from "next/image";
const MovieCard = ({ image, title, id, className }) => {
  return (
    <Link href="/movie/[movieId]" as={`/movie/${id}`}>
      <div className={styles[className]}>
        <Image src={image} layout="fill" />
        <div className={styles.cardTitle}>
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
};

export { MovieCard };
