import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CarouselContainer } from "../../components/CarouselContainer/CarouselContainer";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { Back } from "../../components/BackButton/Back";
import styles from "./Categorie.module.scss";
import axios from "axios";

function Categorie() {
  const {
    query: { categorieid },
  } = useRouter();
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

  useEffect(() => {
    const getCategoryMovies = async () => {
      const { data } = await api("discover/movie/", {
        params: {
          with_genres: categorieid,
        },
      });

      setMoviePreview(data.results);
    };

    getCategoryMovies();

    //console.log(movie.genres.map((genre) => genre.name));
  }, []);
  return (
    <div>
      <div className={styles.CategorieContainer}>
        <Back className={"relative"} />
        <h1 className={styles.categoryTitle}>Anime</h1>
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
