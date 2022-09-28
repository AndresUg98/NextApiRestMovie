import * as React from "react";
import { useRouter } from "next/router";
import { Banner } from "../../components/Banner/Banner";

const movieItem = () => {
  const {
    query: { movieId },
  } = useRouter();

  return (
    <div>
      <Banner img="https://cuevadelobo.com/wp-content/uploads/2020/08/Promare-Portada.jpg" />
      {/* Esta es la pelicula: {movieId}
      <section className="movie-img">
        <img
          src="https://cuevadelobo.com/wp-content/uploads/2020/08/Promare-Portada.jpg"
          alt=""
        />
      </section> */}
    </div>
  );
};

export default movieItem;
