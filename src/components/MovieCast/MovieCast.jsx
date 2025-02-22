import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieCast({ movieId });
      setCast(data);
    };
    getData();
  }, [movieId]);

  return (
    <ul className={s.list}>
      {cast.map((item) => (
        <li className={s.item} key={item.id}>
          {/* <img src="" alt="" /> */}
          <p>{item.name}</p>
          <p>{item.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieCast;
