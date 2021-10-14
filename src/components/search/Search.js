import React from "react";
import Data from "../../store/todo"
import "./Search.scss";

let changeInput=(e)=>{
    Data.term = e.target.value;
    console.log(Data.term)
  }

const Search = () => {
  return (
    <input
      className="searchInput"
      type="text"
      placeholder="Поиск по заданиям"
      onChange={changeInput}
    />
  );
};

export default Search;
