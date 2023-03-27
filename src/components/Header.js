import React from "react";
import { useNavigation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigation();

  const style = {
    fontSize: "25px",
    margin: "20px",
    cursor: "pointer",
    color: "  #c2c2c4",
  };

  return (
    <div>
      <i
        style={style}
        onClick={() => {
          navigate("/");
        }}
        className="ri-home-4-fill"
      ></i>
    </div>
  );
};

export default Header;
