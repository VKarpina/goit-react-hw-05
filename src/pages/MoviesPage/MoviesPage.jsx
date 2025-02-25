import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchMovies } from "../../services/api";
import toast from "react-hot-toast";
import Loader from "../../components/Loader/Loader";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) return;
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovies(query);
        const sortedData = data.sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        );

        setMovies(sortedData);
        if (sortedData.length === 0) {
          toast.error("No movies available! Try another query!");
        }
      } catch {
        toast.error("This is an error!");
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query]);

  const onSubmit = (value) => {
    const query = value.trim().toLowerCase();
    if (query === "") {
      toast.error("Please enter a search term!");
      return;
    }
    setMovies([]);
    searchParams.set("query", value);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit} />
      {isLoading && <Loader />}
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
