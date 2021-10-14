import { observer } from "mobx-react-lite";
import React from "react";
import Data from "../../store/todo";

import "./ToDoAddForm.scss"

const ToDoAddForm = observer(() => {

  let onValueChange = (e) => {
    Data.text = e.target.value;
    console.log(Data.text);
  };

  let addItem = (e) => {
    e.preventDefault();
    Data.addItem();
    Data.text = "";
  };

  return (
    <form className="bottomPanel" onSubmit={addItem}>
      <input
        type="text"
        placeholder="Какое задание хотите добавить?"
        className="inputAdd"
        onChange={onValueChange}
        value={Data.text}
      />
      <button type="submit" className="btn">
        Добавить
      </button>
    </form>
  );
});

export default ToDoAddForm;
