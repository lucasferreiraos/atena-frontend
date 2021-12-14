import React from "react";
import { Data } from "./Data";

function Sidebar() {
  return(
    <div className="sidebar">
      <ul className="sidebar-list">
        {Data.map((value, key) => {
          return(
            <li
              className="row"
              key={key}
              id={window.location.pathname === value.link ? "active" : ""}
              onClick={() => {window.location.pathname = value.link}}
            >
              <div id="icon">{value.icon}</div> <div id="title">{value.title}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default Sidebar;