import React from "react";
import AC from "../components/AC";
import Books from "../components/Books";
import Computers from "../components/Computers";
import Tv from "../components/Tv";
import Watch from "../components/Watchs";
import Mobile from "../components/Mobiles";
import Speakers from "../components/Speakers";
import Kitchen from "../components/Kitchen";
import Furniture from "../components/Furniture";
import Fridge from "../components/Fridge";
import Women from "../components/Women";
import Men from "../components/Men";
const Productlist = () => {
    return (
        <div>
            <h1>Product Page</h1>
            <p>This is the product page where you can find details about all products.</p>
            <AC />
            <Books />
            <Computers />
            <Tv />
            <Watch/>
            <Mobile />
            <Speakers />
            <Kitchen />
            <Furniture />
            <Fridge />
            <Women />
            <Men />
        </div>
    )
}

export default Productlist;
// This code defines a simple React component named `product` that renders a heading with the text "Product Page". 
// The component is then exported as the default export of the module. 
// This allows it to be imported and used in other parts of the application, such as in a router configuration or another component.