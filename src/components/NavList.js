import React from "react";
import { Link } from "react-router-dom";

import "./NavList.css";

const NavList = () => {
  return (
    <ul className="module_list">
      <li className="module_list_item">
        <Link to="/moduleOne"> Module One</Link>
      </li>
      <li className="module_list_item">
        <Link to="/moduleTwo"> Module Two</Link>
      </li>{" "}
      <li className="module_list_item">
        <Link to="/moduleThree"> Module Three</Link>
      </li>{" "}
      <li className="module_list_item">
        <Link to="/moduleFour"> Module Four</Link>
      </li>{" "}
      <li className="module_list_item">
        <Link to="/moduleFive"> Module Five</Link>
      </li>
    </ul>
  );
};

export default NavList;
