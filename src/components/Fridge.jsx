import React from "react";
import { Link } from "react-router-dom";
import { fridgeData } from "../data/fridge";

const Fridge = () => {
    return (
        <>
        <div className="proTitle">
            <h2>Fridge</h2>
        </div>
        <div className="proSection">
            {fridgeData.map((item) => {
            return (
                <div className="imgBox" key={item.id}>
                <Link to="/fridge">
                    <img className="proImage" src={item.image} alt="" />
                </Link>
                </div>
            );
            })}
        </div>
        </>
    );
    };
    export default Fridge;