import React from "react";
import { useNavigate } from "react-router-dom";
const Dashboard = (user) => {
    const navigate = useNavigate();
    if (user && user.token) {
        localStorage.setItem("token", user.token);
        navigate("/dashboard");
    }
    return (
        <div>
            <h1>Welcome {user ? user.name : "Guest"}</h1>
            {user && (
                <div>
                    <p>Access your Cart and Orders from the Navbar above!</p>
                </div>
            )}
        </div>
    );
};

export default Dashboard;