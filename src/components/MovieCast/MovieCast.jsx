import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";
import s from "./MovieCast.module.css";
import Loader from "../Loader/Loader";
import toast from "react-hot-toast";

const MovieCast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovieCast({ movieId });
        console.log(data);
        setCast(data);
      } catch (error) {
        toast.error(`Error fetching movie: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [movieId]);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : cast.length > 0 ? (
        <ul className={s.list}>
          {cast.map((actor) => (
            <li className={s.item} key={actor.id}>
              <img
                className={s.img}
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                    : "https://via.placeholder.com/w185?text=No+Image"
                }
                alt={actor.name}
              />
              <p className={s.name}>{actor.name}</p>
              <p className={s.character}>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={s.character}>
          We don't have any actors information for this movie.
        </p>
      )}
    </div>
  );
};

export default MovieCast;
