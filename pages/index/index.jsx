import React, { useState, useEffect } from "react";
import { Hero } from "../../components/Hero/Hero";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { CarouselContainer } from "../../components/CarouselContainer/CarouselContainer";
import axios from "axios";
const Index = () => {
  const API_KEY = "f05af5b27b7abc61f3bac2ab406a2412";

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

  // useEffect(() => {
  //   if (moviePreview.title === "") {
  //     const getTrendingMovies = async () => {
  //       const { data } = await api("trending/movie/day");
  //       console.log(data.results);
  //       setMoviePreview(data.results);
  //     };

  //     getTrendingMovies();
  //   }
  // }),
  //   [];

  useEffect(() => {
    const getTrendingMovies = async () => {
      const { data } = await api("trending/movie/day");

      setMoviePreview(data.results);
    };
    getTrendingMovies();
  }, []);

  console.log(moviePreview);

  // const getTrendingMoviesPreview = async () => {
  //   const { data } = await api("trending/movie/day");

  //   setMoviePreview(data.results);
  // };
  // getTrendingMoviesPreview();
  return (
    <div>
      <Hero />
      <CarouselContainer sectionName="Comedy">
        {moviePreview.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={movie.poster_path}
          />
        ))}
      </CarouselContainer>

      <CarouselContainer sectionName="Anime">
        {/* <MovieCard />
        <MovieCard />
        <MovieCard /> */}
      </CarouselContainer>

      <CarouselContainer sectionName="Action">
        {/* <MovieCard />
        <MovieCard />
        <MovieCard /> */}
      </CarouselContainer>
    </div>
  );
};
export default Index;
