import style from "./SearchMovie.module.css";
import { useNavigate } from "react-router";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export function SearchMovie() {
    const [searchText, setSearchText] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        navigate("/?search=" + searchText);
    };
  return (
    <form className={style.searchMovie} onSubmit={handleSubmit}>
      <div className={style.searchBox}>
        <input placeholder="Pokemon" className={style.searchInput} type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
        <button className={style.searchButton} type="submit"></button>
        <FaSearch size={20} />
      </div>
    </form>
  );
}
