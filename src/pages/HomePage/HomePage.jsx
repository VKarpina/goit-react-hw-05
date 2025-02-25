import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovies } from "../../services/api";
import Loader from "../../components/Loader/Loader";
import css from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h2 className={css.title}>Trending today</h2>
      {isLoading && <Loader />}
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
