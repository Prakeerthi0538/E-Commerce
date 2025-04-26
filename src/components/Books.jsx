import React from "react";
import { Link } from "react-router-dom";
import { booksData } from "../data/books";

const Books = () => {
    return (
        <>
        <div className="proTitle">
            <h2>Books</h2>
        </div>
        <div className="proSection">
            {booksData.map((item) => {
            return (
                <div className="imgBox" key={item.id}>
                <Link to="/books">
                    <img className="proImage" src={item.image} alt="" />
                </Link>
                </div>
            );
            })}
        </div>
        </>
    );
    }

export default Books;