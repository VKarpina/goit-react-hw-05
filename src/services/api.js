import axios from "axios";

// const API_KEY = "2694dad788afe3302a70283d6b183bac";
const api_read_access_token =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNjk0ZGFkNzg4YWZlMzMwMmE3MDI4M2Q2YjE4M2JhYyIsIm5iZiI6MTczOTk3NDAyOC4wNCwic3ViIjoiNjdiNWU1OGMyMTUyNjM4ZjVlZTNkZmFlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.4NSEM0grbajnNeetnBLLZdLvtRs1rm515tTLVuFvoYw";

const axiosInitial = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization: api_read_access_token,
  },
});

export const fetchMovies = async () => {
  const { data } = await axiosInitial.get("trending/movie/day");
  return data.results;
};

export const fetchMovieById = async ({ movieId }) => {
  const { data } = await axiosInitial.get(`/movie/${movieId}?language=en-US`);
  return data;
};

export const fetchMovieCast = async ({ movieId }) => {
  const { data } = await axiosInitial.get(
    `/movie/${movieId}/credits?language=en-US`
  );
  return data.cast;
};

export const fetchMovieReviews = async ({ movieId }) => {
  const { data } = await axiosInitial.get(`/movie/${movieId}/reviews`);
  return data.results;
};
