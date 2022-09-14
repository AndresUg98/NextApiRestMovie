import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { CarouselContainer } from "../../components/CarouselContainer/CarouselContainer";
const Index = () => {
  return (
    <div>
      <Hero />
      <CarouselContainer sectionName="Comedy">
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </CarouselContainer>

      <CarouselContainer sectionName="Anime">
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </CarouselContainer>

      <CarouselContainer sectionName="Action">
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </CarouselContainer>
    </div>
  );
};
export default Index;
