import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { nameSearch } from "../../redux/actions";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [searchBreed, setSearchBreed] = useState("");
  const dispatch = useDispatch();

  const hanldeChangeSearch = (e) => {
    setSearchBreed(e.target.value);
  };

  const onSeachClick = async () => {
    if (!searchBreed) return alert("Breed is require");
    const nameDogs = searchBreed;

    dispatch(nameSearch(nameDogs));
  };

  const handleRemoveName = async () => {
    setSearchBreed("");
    dispatch(nameSearch(null));
  };

  return (
    <div className={styles.containerGeneral}>
      <h3 className={styles.titleSearchBar}>Search breeds</h3>
      <div className={styles.containerSearchBar}>
        <input
          type="search"
          value={searchBreed}
          onChange={hanldeChangeSearch}
          placeholder="Enter the breed"
          className={styles.inputSearchBar}
        />
        <input
          type="submit"
          value="Search"
          onClick={onSeachClick}
          className={styles.buttonSearchBar}
        />
        <button onClick={handleRemoveName} className={styles.buttonRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
