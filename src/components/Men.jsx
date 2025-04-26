import React from "react";
import { Link } from "react-router-dom";
import { menData } from "../data/men";

const Men = () => {
    return (
        <>
            <div className="proTitle">
                <h2>Men</h2>
            </div>
            <div className="proSection">
                {menData.map((item) => {
                return (
                    <div className="imgBox" key={item.id}>
                        <Link to="/men">
                            <img className="proImage" src={item.image} alt="" />
                        </Link>
                    </div>
                );
                })}
            </div>
        </>
    );
};
export default Men;
