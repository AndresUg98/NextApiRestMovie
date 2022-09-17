import * as React from "react";
import styles from "./Categories.module.scss";

const Categories = ({ section, categorie }) => {
  return (
    <section className={styles.categoriesContainer}>
      <h2>Categories</h2>
      <div className={styles.categories} id="categoriesPreview">
        <p>{categorie}</p>
      </div>
    </section>
  );
};

export { Categories };
