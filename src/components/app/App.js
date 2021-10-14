import { observer } from "mobx-react-lite";
import React from "react";
import Header from "../header/Header";
import Search from "../search/Search";
import StatusFilter from "../StatusFilter/StatusFilter";
import ToDoAddForm from "../ToDoAddForm/ToDoAddForm";
import ToDoList from "../ToDoList/ToDoList";
import "./App.scss";

const App = observer(() => {
  return (
    <div className="App">
      <Header />
      <div className="searchPanel">
        <Search />
        <StatusFilter />
      </div>
      <ToDoAddForm/>
      <ToDoList />
     
    </div>
  );
});

export default App;
