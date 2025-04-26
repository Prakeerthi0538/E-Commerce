import React from "react";
import { Link } from "react-router-dom";
import { womanData } from "../data/woman";

const Women = () => {
    return ( 
        <>
        <div className="proTitle">
                    <h2>Women</h2>
                </div>
                <div className="proSection">
                    {womanData.map((item) => {
                    return (
                        <div className="imgBox" key={item.id}>
                        <Link to="/woman">
                            <img className="proImage" src={item.image} alt="" />
                        </Link>
                        </div>
                    );
                    })}
                </div>
        </>
    );
};
export default Women
