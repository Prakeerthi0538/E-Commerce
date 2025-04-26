import React from "react";
import { Link } from "react-router-dom";
import { speakerData } from "../data/speaker";

const Speakers = () => {
    return (
        <>
        <div className="proTitle">
            <h2>Speakers</h2>
        </div>
        <div className="proSection">
            {speakerData.map((item) => {
            return (
                <div className="imgBox" key={item.id}>
                <Link to="/speakers">
                    <img className="proImage" src={item.image} alt="" />
                </Link>
                </div>
            );
            })}
        </div>
        </>
    );
    };
    export default Speakers;