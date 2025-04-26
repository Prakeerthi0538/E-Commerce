import React from "react";
import { Link } from "react-router-dom";
import { kitchenData } from "../data/kitchen";

const Kitchen = () => {
    return (
        <>
        <div className="proTitle">
            <h2>Kitchen</h2>
        </div>
        <div className="proSection">
            {kitchenData.map((item) => {
            return (
                <div className="imgBox" key={item.id}>
                <Link to="/kitchen">
                    <img className="proImage" src={item.image} alt="" />
                </Link>
                </div>
            );
            })}
        </div>
        </>
    );
    };
    export default Kitchen;