import { useState } from "react";
import s from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";
// import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // if (value.trim() === "") {
    //   toast.error("Please enter a search term!");
    //   return;
    // }
    onSubmit(value);
    setValue("");
  };
  return (
    <header className={s.header}>
      <form className={s.searchBar} onSubmit={handleSubmit}>
        <button className={s.searchButton}>
          <FaSearch className={s.searchIcon} />
        </button>
        <input
          className={s.searchInput}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
          type="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos..."
        />
      </form>
    </header>
  );
};

export default SearchBar;
