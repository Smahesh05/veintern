import React, { useState } from "react";
import homeImg from "../assets/internshipimg.webp";

import "./HomePage.css";
import NavList from "./NavList";

const HomePage = () => {
  const [show, setShow] = useState(false);

  const onClickHandler = () => {
    setShow(true);
  };

  return (
    <section className="section ">
      <div className="left_section">
        <img src={homeImg} alt="" />
      </div>
      <div className="right_section">
        {!show ? (
          <div className="right_section_content">
            <h2>Fusce sem magna pharetra cursus</h2>
            <p>
              Morbi tincidunt nisi id vulputate consequat. Morbi arcu libero,
              pellentesque eu bibendum non, eleifend ut nisi. Phasellus mattis
              nibh ullamcorper euismod sodales. Donec metus eros, euismod
              dapibus fermentum non, gravida id ex. Duis vitae dui sit amet
              lectus ultrices lacinia eget in tellus. Vivamus lacinia lectus id
              justo fermentum tincidunt. Duis consectetur porttitor tincidunt.
              Sed dapibus nulla vitae risus elementum dictum. Enter
            </p>
          </div>
        ) : (
          <NavList />
        )}

        <button onClick={onClickHandler}>
          {!show ? "Enter" : "Select Module"}
          <i className="ri-arrow-right-line"></i>
        </button>
        <div className="svg-section"></div>
      </div>
    </section>
  );
};

export default HomePage;
