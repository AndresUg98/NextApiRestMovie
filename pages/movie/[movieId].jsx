import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Banner } from "../../components/Banner/Banner";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { CarouselContainer } from "../../components/CarouselContainer/CarouselContainer";

const movieItem = () => {
  const {
    query: { movieId },
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
    const getTrendingMovies = async () => {
      const { data } = await api("trending/movie/day");

      setMoviePreview(data.results);
    };

    getTrendingMovies();
  }, []);

  return (
    <div>
      <Banner img="https://cuevadelobo.com/wp-content/uploads/2020/08/Promare-Portada.jpg" />
      {/* Esta es la pelicula: {movieId} */}
      <CarouselContainer sectionName="Tendencias">
        {moviePreview.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            image={imageRoute + movie.poster_path}
          />
        ))}
      </CarouselContainer>
    </div>
  );
};

export default movieItem;
