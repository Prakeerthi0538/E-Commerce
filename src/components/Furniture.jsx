import React from "react";
import { Link } from "react-router-dom";
import { furnitureData } from "../data/furniture";

const Furniture = () => {
    return (
        <>
        <div className="proTitle">
            <h2>Furniture</h2>
        </div>
        <div className="proSection">
            {furnitureData.map((item) => {
            return (
                <div className="imgBox" key={item.id}>
                <Link to="/furniture">
                    <img className="proImage" src={item.image} alt="" />
                </Link>
                </div>
            );
            })}
        </div>
        </>
    );
    };
    export default Furniture;