import React from "react";
import "./StatusFilter.scss";
import Data from "../../store/todo";
import { observer } from "mobx-react-lite";

const StatusFilter = observer(() => {
  const buttons = Data.buttons.map(({ name, label }) => {
    const active = Data.filter === name;
    const clazz = active ? "active" : "";
    return (
      <button
        key={name}
        type="button"
        className={`btn ${clazz}`}
        onClick={() => Data.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="butnGroup">{buttons}</div>;
});

export default StatusFilter;
