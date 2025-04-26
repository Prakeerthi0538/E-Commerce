import React from "react";
const Cart = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        return <Navigate to="/login" />;
    }
    
    return (
        <div>
            <h1>Shopping Cart</h1>
            <p>Your Cart is empty</p>
        </div>
    )
}

export default Cart;