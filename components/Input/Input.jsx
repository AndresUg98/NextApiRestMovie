import React from "react";
import styles from "./Input.module.scss";
const Input = ({ type, placeholder, value }) => {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <div className={styles.searchBar}>
        <input
          type={type}
          placeholder={placeholder}
          onChange={onSearchValueChange}
        />
      </div>
    </div>
  );
};

export { Input };
