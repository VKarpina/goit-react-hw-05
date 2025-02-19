// import { useEffect, useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import clsx from "clsx";
import css from "./App.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const App = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/movies" className={buildLinkClass}>
            Movies
          </NavLink>
        </nav>
      </header>
      <h1>Trending today</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies:id" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
