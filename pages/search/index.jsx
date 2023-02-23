// @flow
import React, { useState, useEffect } from "react";
import axios from "axios";
import stylesCard from "../categories/Categorie.module.scss";
import styles from "./search.module.scss";
import { Input } from "../../components/Input/Input";
import { Hrefbutton } from "../../components/BackButton/Hrefbutton";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import back from "../../components/Assets/Icons/back.svg";
export const search = () => {
  const [searchMovie, setsearchMovie] = React.useState("");
  const [updated, setUpdated] = useState(searchMovie);

  const API_KEY = "f05af5b27b7abc61f3bac2ab406a2412";
  const imageRoute = "https://image.tmdb.org/t/p/w300/";

  const [moviePreview, setMoviePreview] = useState([]);

  const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
    params: {
      api_key: API_KEY,
    },
  });

  //console.log(searchedMovies);
  useEffect(() => {
    const getMovies = async () => {
      const { data } = await api("search/movie", {
        params: {
          query: updated,
        },
      });

      setMoviePreview(data.results);
    };

    getMovies();
  }, [updated]);

  return (
    <div>
      <section className={styles.searchBarContainer}>
        <Hrefbutton
          className={"relative"}
          icon={back}
          url={"../index"}
          value={"back"}
        />
        <Input
          type="search"
          placeholder="Search"
          searchMovie={searchMovie}
          setsearchMovie={setsearchMovie}
          setUpdated={setUpdated}
        />
      </section>

      <section className={stylesCard.moviesResult}>
        {moviePreview.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={imageRoute + movie.poster_path}
            className={"cardCategories"}
          />
        ))}
      </section>
    </div>
  );
};
export default search;
