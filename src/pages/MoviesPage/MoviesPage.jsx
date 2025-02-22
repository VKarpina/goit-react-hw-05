// import MovieList from "../../components/MovieList/MovieList";
import { FaSearch } from "react-icons/fa";
import css from "./MoviesPage.module.css";

const MoviesPage = () => {
  return (
    <div className={css.container}>
      <form className={css.searchBar}>
        <button className={css.searchButton}>
          <FaSearch className={css.searchIcon} />
        </button>
        <input
          className={css.searchInput}
          // onChange={(e) => {
          //   setValue(e.target.value);
          // }}
          // value={value}
          type="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
          // <MovieList />;
        />{" "}
      </form>
    </div>
  );
};

export default MoviesPage;
