import React, { useState, useEffect } from "react";
import { Hero } from "../../components/Hero/Hero";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { CarouselContainer } from "../../components/CarouselContainer/CarouselContainer";
import { CategoriesContainer } from "../../components/CategoriesContainer/CategoriesContainer";
import { Categories } from "../../components/Cateogories/Categories";

import axios from "axios";
const Index = () => {
  const API_KEY = "f05af5b27b7abc61f3bac2ab406a2412";
  const imageRoute = "https://image.tmdb.org/t/p/w300/";

  const [moviePreview, setMoviePreview] = useState([]);
  const [categoriesPreview, setCategoriesPreview] = useState([]);
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

    const getCategoriesPreview = async () => {
      const { data } = await api("genre/movie/list");

      setCategoriesPreview(data.genres);
    };

    const getMovie = async () => {
      const { data } = await api("movie/" + 550);
      setMovie(data);
    };

    getTrendingMovies();
    getCategoriesPreview();
    getMovie();
    console.log(movie);
    console.log(movie.original_title);
  }, []);

  return (
    <div>
      <Hero
        title={movie.original_title}
        image={imageRoute + movie.backdrop_path}
        text={movie.overview}
      />
      <CarouselContainer sectionName="Tendencias">
        {moviePreview.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={imageRoute + movie.poster_path}
          />
        ))}
      </CarouselContainer>
      <CarouselContainer sectionName="Anime">
        {moviePreview.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={imageRoute + movie.poster_path}
          />
        ))}
      </CarouselContainer>
      <CarouselContainer sectionName="Action">
        {moviePreview.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={imageRoute + movie.poster_path}
          />
        ))}
      </CarouselContainer>
      <CategoriesContainer title="Categories">
        {categoriesPreview.map((categorie) => (
          <Categories
            key={categorie.id}
            section="Categories"
            categorie={categorie.name}
          />
        ))}
      </CategoriesContainer>
    </div>
  );
};
export default Index;
