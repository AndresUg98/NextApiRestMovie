import * as React from "react";
import styles from "./Categories.module.scss";

const Categories = ({ section, categorie }) => {
  return (
    <div className={styles.categories} id="categoriesPreview">
      <p>{categorie}</p>
    </div>
  );
};

export { Categories };
