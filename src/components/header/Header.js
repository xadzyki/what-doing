import { observer } from "mobx-react-lite";
import React from "react";
import Data from "../../store/todo"

import "./Header.scss";

const Header = observer(() => {

    let allDo = Data.todos.length;
    let completed = Data.todos.filter(item => item.completed).length;

    return(
        <header>
            <h1>ToDoList:</h1>
            <h2>{completed} заданий из {allDo} выполнено</h2>
        </header>
    )
})
export default Header;