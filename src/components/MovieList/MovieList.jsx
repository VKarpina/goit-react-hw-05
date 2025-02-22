import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map((item) => (
        <li className={css.item} key={item.id}>
          <Link to={`/movies/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
