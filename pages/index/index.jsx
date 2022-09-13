import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { MovieCard } from "../../components/MovieCard/MovieCard";
import { CarouselContainer } from "../../components/CarouselContainer/CarouselContainer";
const Index = () => {
  return (
    <div>
      <Hero />
      <CarouselContainer>
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </CarouselContainer>
    </div>
  );
};
export default Index;
