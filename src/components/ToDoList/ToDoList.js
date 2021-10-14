import { observer } from "mobx-react-lite";
import React from "react";
import Data from "../../store/todo";

import "./ToDoList.scss";

const ToDoList = observer(() => {
  let className = (t) => {
    if (t.completed) {
      return "todo compleate";
    } else if (t.important) {
      return "todo important";
    } else {
      return "todo";
    }
  };

  const visibleDo = Data.filterPost(Data.serchPost(Data.todos));

  return (
    <div className="todoList">
      {visibleDo.map((t) => (
        <div className={className(t)} key={t.id}>
          <div className="btnGroup">
            <button className="compl" onClick={() => Data.compleatedItem(t)}>
              <i class="fas fa-check"></i>
            </button>
            <button className="import" onClick={() => Data.importantItem(t)}>
              <i class="fas fa-fire"></i>
            </button>
          </div>
          <p>{t.title}</p>
          <button class="trash" onClick={() => Data.deleteItem(t.id)}>
            <i class="fas fa-trash"></i>
          </button>
        </div>
      ))}
    </div>
  );
});

export default ToDoList;
