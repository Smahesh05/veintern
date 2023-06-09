import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DummyData from "../DummyData.json";
const ModuleFive = () => {
  const [selectIndex, setSelectIndex] = useState(0);

  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
  };
  return (
    <section className="module-1">
      <i className="ri-home-2-fill" onClick={goToHomePage}></i>
      <div className="container mt-4">
        <div className="module-header">
          <h2 className="">Module 1</h2>
          <Link to="/search">
            <i className="ri-search-2-line "></i>
          </Link>
        </div>
        <div className="content container">
          <ul className="row text-center">
            {DummyData.map((item, index) => (
              <li
                className={
                  selectIndex === index
                    ? "col list-group-item active-item"
                    : "list-group-item col"
                }
                key={index}
                onClick={() => setSelectIndex(index)}
              >
                {item.name}
              </li>
            ))}
          </ul>
          {selectIndex !== -1 && (
            <div className=" module_content ">
              <img
                src={DummyData[selectIndex].image}
                className=" module-content-img"
                alt="module 1"
              />
              <div className="module-right-content">
                <h2>{DummyData[selectIndex].title}</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  sunt corporis iure minus voluptate, porro expedita nisi fugiat
                  sint ratione! ipsum dolor sit amet consectetur adipisicing
                  elit. Unde sunt corporis
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ModuleFive;
