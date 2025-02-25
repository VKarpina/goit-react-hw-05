import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";
import toast from "react-hot-toast";
import Loader from "../Loader/Loader";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchMovieReviews({ movieId });
        setReviews(data);
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
      ) : reviews.length > 0 ? (
        <ul>
          {reviews.map((item) => (
            <li key={item.id}>
              <h3 className={css.author}>Author: {item.author}</h3>
              <p className={css.content}>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.content}>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default MovieReviews;
