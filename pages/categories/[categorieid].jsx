import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CarouselContainer } from "../../components/CarouselContainer/CarouselContainer";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { Hrefbutton } from "../../components/BackButton/Hrefbutton";
import styles from "./Categorie.module.scss";
import back from "../../components/Assets/Icons/back.svg";
import axios from "axios";

function Categorie() {
  const {
    query: { categorieid },
  } = useRouter();
  const API_KEY = "f05af5b27b7abc61f3bac2ab406a2412";
  const imageRoute = "https://image.tmdb.org/t/p/w300/";

  const [moviePreview, setMoviePreview] = useState([]);
  const [categoriesName, setCategoriesName] = useState([]);

  const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
      "Content-type": "application/json;charset=utf-8",
    },
    params: {
      api_key: API_KEY,
    },
  });

  useEffect(() => {
    const getCategoryMovies = async () => {
      const { data } = await api("discover/movie/", {
        params: {
          with_genres: categorieid,
        },
      });

      setMoviePreview(data.results);
    };

    const getCategoriesName = async () => {
      const { data } = await api("genre/movie/list");

      for (let i = 0; i < data.genres.length; i++) {
        if (data.genres[i].id == categorieid) {
          return setCategoriesName(data.genres[i].name);
        }
      }
    };

    getCategoryMovies();
    getCategoriesName();
  }, []);

  return (
    <div>
      <div className={styles.CategorieContainer}>
        <Hrefbutton className={"relative"} icon={back} url={"../index"} />
        <h1 className={styles.categoryTitle}>{categoriesName}</h1>
      </div>

      <section className={styles.moviesResult}>
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
}

export default Categorie;
