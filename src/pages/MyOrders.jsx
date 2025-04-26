import React from "react";

const Orders = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        return <Navigate to="/login" />;
    }
    
    return (
        <div>
            <h1>My Orders</h1>
            <p>List of your previous orders will appear here.</p>
        </div>
    );
};

export default Orders;
