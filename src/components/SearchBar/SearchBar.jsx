import { FaSearch } from "react-icons/fa";
import css from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };
  return (
    <div className={css.container}>
      <form className={css.searchBar} onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
        />
        <button className={css.searchButton}>
          <FaSearch className={css.searchIcon} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
