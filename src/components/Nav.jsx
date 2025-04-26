import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [logginuser,setlogginuser] = useState(null);
  // setlogginuser(JSON.parse(localStorage.getItem("user")));
  
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setlogginuser(JSON.parse(user));
    }
    console.log(logginuser);
  },[logginuser]);
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/productlist">Product</Link>
      {logginuser ? (
        <>
          <Link to="/orders">Orders</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/dashboard">Dashboard</Link>
        </>
      ) : (<>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </>)}
      
    </nav>
  );
};

export default Nav;
