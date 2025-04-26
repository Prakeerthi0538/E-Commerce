import React from "react";
import { Link } from "react-router-dom";
import { computerData } from "../data/computers";

const Computers = () => {
    return (
        <>
        <div className="proTitle">
            <h2>Computers</h2>
        </div>
        <div className="proSection">
            {computerData.map((item) => {
            return (
                <div className="imgBox" key={item.id}>
                <Link to="/computers">
                    <img className="proImage" src={item.image} alt="" />
                </Link>
                </div>
            );
            })}
        </div>
        </>
    );
    };

export default Computers;