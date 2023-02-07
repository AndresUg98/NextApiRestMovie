import react, { useState } from "react";

import styles from "./Input.module.scss";
const Input = ({
  type,
  placeholder,
  searchMovie,
  setsearchMovie,
  setUpdated,
}) => {
  const onSearchValueChange = (event) => {
    // console.log(event.target.value);
    setsearchMovie(event.target.value);
  };

  const handleClick = () => {
    // console.log(event);
    setUpdated(searchMovie);
  };

  return (
    <div>
      <div className={styles.searchBar}>
        <input
          type={type}
          placeholder={placeholder}
          value={searchMovie}
          onChange={onSearchValueChange}
        />
      </div>
      <button onClick={handleClick} className={styles.searchButton}>
        Buscar
      </button>
    </div>
  );
};

export { Input };
