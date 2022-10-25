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

  const [movie, setMovie] = useState([]);

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
    const getTrendingMovies = async () => {
      const { data } = await api("trending/movie/day");

      setMoviePreview(data.results);
    };

    const getMovie = async () => {
      const { data } = await api("movie/" + 642885);
      setMovie(data);
    };

    getTrendingMovies();

    getMovie();
    console.log(movie);
    // console.log(movie.genres.map((genre) => genre.name));
  }, []);
  return (
    <div>
      <div className={styles.CategorieContainer}>
        <Back className={"relative"} />
        <h1 className={styles.categoryTitle}>Anime</h1>
      </div>

      <section className={styles.moviesResult}>
        {/* <div className={styles.card}>
          <img
            src="https://es.web.img3.acsta.net/pictures/21/03/05/14/08/2811747.jpg"
            alt=""
          />
          <div className={styles.cardTitle}>
            <p>Digimon last evolution</p>
          </div>
        </div> */}

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
