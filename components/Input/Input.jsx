import react from "react";

import styles from "./Input.module.scss";
const Input = ({ type, placeholder, searchMovie, setsearchMovie }) => {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setsearchMovie(event.target.value);
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
    </div>
  );
};

export { Input };
