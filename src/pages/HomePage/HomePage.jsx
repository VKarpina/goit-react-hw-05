import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovies } from "../../services/api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovies();
      setMovies(data);
    };
    getData();
  }, []);

  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
