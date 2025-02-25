import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchMovieById } from "../../services/api";
import { useEffect, useRef, useState } from "react";
import Loader from "../../components/Loader/Loader";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import css from "./MovieDetailsPage.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const goBackUrl = useRef(location?.state ?? "/movies");

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovieById({ movieId });
        setMovie(data);
      } catch (error) {
        toast.error(`Error fetching movie: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [movieId]);

  if (!movie) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  const userScore = Math.round(movie.vote_average * 10);
  const imgUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
    : "https://via.placeholder.com/w342?text=No+Image";

  return (
    <div className={css.container}>
      <div className={css.btnWrapper}>
        <Link to={goBackUrl.current} className={css.backBtn}>
          <FaArrowLeft className={css.arrow} />
          Go back
        </Link>
      </div>
      <div className={css.posterContainer}>
        {isLoading && <Loader />}
        <img src={imgUrl} alt={movie.title} className={css.img} />
        <div className={css.posterText}>
          <h2>
            {movie.title} ({movie.release_date?.slice(0, 4)})
          </h2>
          <p>User Score: {userScore}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <p>
            {movie.genres?.length
              ? movie.genres.map((genre) => genre.name).join(", ")
              : "No information is available in search results."}
          </p>
        </div>
      </div>
      <p className={css.titleAdditional}>Additional information</p>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink to="cast" state={location} className={buildLinkClass}>
            Cast
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="reviews" state={location} className={buildLinkClass}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
