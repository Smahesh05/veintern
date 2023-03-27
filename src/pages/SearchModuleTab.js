import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DummyData from "../DummyData.json";

const SearchModuleTab = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const newQuery = event.target.value;

    setQuery(newQuery);
  };

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="search-module">
      <i className="ri-home-2-fill" onClick={goToHomePage}></i>
      <div className="container">
        <div className="form-group">
          <label className="form-label" htmlFor="label">
            Type here to search ...
          </label>
          <input
            className="form-control"
            type="text"
            id="label"
            value={query}
            onChange={handleInputChange}
          />
          <p>showing 3 results.. </p>
        </div>
        <div className="search-module-content">
          <ul>
            {DummyData.map((item, index) => (
              <li key={index}>
                <img src={item.image} width={100} alt="search model" />
                <div className="search-list-item">
                  <p className="title">{item.title}</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde sunt corporis iure minus voluptate, porro expedita nisi
                    fugiat sint ratione! ipsum dolor si
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="next-page-arr">
            <i className="ri-arrow-left-s-line"></i>
            <i className="ri-arrow-right-s-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModuleTab;
