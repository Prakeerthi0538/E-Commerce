import React from "react";
import { Link } from "react-router-dom";
import { tvData } from "../data/tv";

const Tv = () => {
    return (
        <>
        <div className="proTitle">
            <h2>TV</h2>
        </div>
        <div className="proSection">
            {tvData.map((item) => {
            return (
                <div className="imgBox" key={item.id}>
                <Link to="/tv">
                    <img className="proImage" src={item.image} alt="" />
                </Link>
                </div>
            );
            })}
        </div>
        </>
    );
    };
    export default Tv;