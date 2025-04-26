import React from "react";
import { Link } from "react-router-dom";
import { mobileData } from "../data/mobiles";

const Mobile = () => { 
    return (
        <>
        <div className="proTitle">
            <h2>Mobile</h2>
        </div>
        <div className="proSection">
            {mobileData.map((item) => {
            return (
                <div className="imgBox" key={item.id}>
                <Link to="/mobile">
                    <img className="proImage" src={item.image} alt="" />
                </Link>
                </div>
            );
            })}
        </div>
        </>
    );
    };
    export default Mobile;