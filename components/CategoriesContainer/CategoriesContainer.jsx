// @flow
import * as React from "react";
import styles from "./CategoriesContainer.module.scss";
const CategoriesContainer = (props) => {
  return (
    <section className={styles.categoriesContainer}>
      <h2>{props.title}</h2>
      <div className={styles.categories}>{props.children}</div>
    </section>
  );
};

export { CategoriesContainer };
