import React from "react";
import { Link } from "react-router-dom";
import { acData } from "../data/ac";

const AC = () => {
  return (
    <>
      <div className="proTitle">
        <h2>Air Condition</h2>
      </div>
      <div className="proSection">
        {acData.map((item) => {
          return (
            <div className="imgBox">
              <Link to='/ac'>
              <img className="proImage" src={item.image} alt="" />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AC;
