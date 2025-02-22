import { NavLink, Outlet, useParams } from "react-router-dom";
import { fetchMovieById } from "../../services/api";
import { useEffect, useState } from "react";

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieById({ movieId });
      setMovie(data);
    };
    getData();
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <>
        <img src={movie.image} alt="" />
        <h2>
          {movie.original_title} ({movie.release_date?.slice(0, 4)})
        </h2>
        <p>Movie rating on IMDb: {movie.vote_average}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>Genres</h3>
        <p>
          {movie.genres?.length
            ? movie.genres.map((genre) => genre.name).join(", ")
            : "No information is available in search results."}
        </p>
      </>
      <p>Additional information</p>
      <nav>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
