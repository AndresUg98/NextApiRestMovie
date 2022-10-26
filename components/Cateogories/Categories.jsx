import * as React from "react";
import Link from "next/link";
import styles from "./Categories.module.scss";

const Categories = ({ id, categorie }) => {
  return (
    <Link href="/categories/[categorieid]" as={`/categories/${id}`}>
      <div className={styles.categories} id="categoriesPreview">
        <p>{categorie}</p>
      </div>
    </Link>
  );
};

export { Categories };
