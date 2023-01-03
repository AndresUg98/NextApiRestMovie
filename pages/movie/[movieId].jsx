import React, { useState, useEffect } from "react";
import axios from "axios";
import { Hrefbutton } from "../../components/BackButton/Hrefbutton";
import { useRouter } from "next/router";
import { Banner } from "../../components/Banner/Banner";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { CarouselContainer } from "../../components/CarouselContainer/CarouselContainer";
import back from "../../components/Assets/Icons/back.svg";

const movieItem = () => {
  const {
    query: { movieId },
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
      const { data } = await api("movie/" + movieId);
      setMovie(data);
    };

    getTrendingMovies();
    getMovie();

    console.log(movie);
  }, []);

  return (
    <div>
      <Hrefbutton className={"imageZindex"} icon={back} url={"../index"} />

      <Banner
        img={imageRoute + movie.poster_path}
        title={movie.title}
        text={movie.overview}
        rating={movie.vote_average}
      />
      {/* Esta es la pelicula: {movieId} */}
      <CarouselContainer sectionName="Relacionadas">
        {moviePreview.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            image={imageRoute + movie.poster_path}
            className={"card"}
          />
        ))}
      </CarouselContainer>
    </div>
  );
};

export default movieItem;
