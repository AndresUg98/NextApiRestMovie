import React from "react";
import styles from "./Input.module.scss";
const Input = ({ type, placeholder }) => {
  return (
    <div>
      <div className={styles.searchBar}>
        <input type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export { Input };
