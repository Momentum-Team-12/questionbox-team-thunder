import { Navigate } from "react-router-dom";
import axios from "axios";
import classes from "./Search.module.css";

const SearchBar = ({ searchQuery }) => {
  const onSubmit = (event) => {
    Navigate.push(`?s=${searchQuery}`);
    event.preventDefault();
    // axios
    //   .get(
    //     `https://questionbox-team-thunder-api.herokuapp.com/api//all_questions?search=${searchQuery}`,
    //     {
    //       headers: {
    //         Authorization: `Token ${token}`,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     setSearchQuery(res.data);
    //     console.log(res.data);
    //   });
  };
  return (
    <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
      <label htmlFor="header-search"></label>
      <input
        type="text"
        id="header-search"
        placeholder="Search Questions"
        name="search"
      />
      <div className={classes.actions}>
        <button type="submit">Search</button>
      </div>
    </form>
  );
};
export default SearchBar;
