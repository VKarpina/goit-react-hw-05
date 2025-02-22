// import { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
// import css from "./App.module.css";
import Navigation from "./components/Navigation/Navigation";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";

const App = () => {
  return (
    <>
      <Navigation NavLink={NavLink} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
