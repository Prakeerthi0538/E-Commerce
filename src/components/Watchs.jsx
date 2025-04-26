import React from "react";
import { Link } from "react-router-dom";
import { watchData } from "../data/watch";

const Watch = () => {
    return (
        <>
        <div className="proTitle">
            <h2>Watch</h2>
        </div>
        <div className="proSection">
            {watchData.map((item) => {
            return (
                <div className="imgBox" key={item.id}>
                <Link to="/watch">
                    <img className="proImage" src={item.image} alt="" />
                </Link>
                </div>
            );
            })}
        </div>
        </>
    );
    };
    export default Watch;