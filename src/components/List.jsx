import React from "react";
import listSvg from "../assets/img/list.svg";

const List = ({}) => {
  return (
    <ul className="todo__list">
      <li className="active">
        <i>
          <img src={listSvg} alt="icon" />
        </i>
        <span></span>
      </li>
    </ul>
  );
};

export default List;
