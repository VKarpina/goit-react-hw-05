import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieReviews({ movieId });
      console.log(data);

      setReviews(data);
    };
    getData();
  }, [movieId]);
  return (
    <ul>
      {reviews.map((item) => (
        <li key={item.id}>
          <h3>Author: {item.author}</h3>
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
