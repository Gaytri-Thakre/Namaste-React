import React from "react";
import ReactDOM from "react-dom/client";

//**
 /* Header
//  -Logo 
// -Nav Items
 /* Body
//  Search 
/* RestaurantContainer
/*RestaurantCard
// Img
// Name,Star Rating,Cuisine,Delivery Time
 /* Footer
//  Copyright
// Links
// Address
// Contact
 /* 
 */
const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" class src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ychB0gzKUiciTunIPeII_aIoptW3k81YQpa0wryEFA&s"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const styleCard={
    backgroundColor: "#f0f0f0",
}
const ResCard=()=>{
    return(
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src="https://b.zmtcdn.com/data/pictures/chains/2/16505332/ce9dc1719a09c806a0a76896988866e5_featured_v2.jpg?output-format=webp"></img>
            <h3 className="res-name">Madras Cafe</h3>
            <h4>Meghana Foods</h4>
            <p>Biryani,North Indian,Asian</p>
            <div className="res-card-des">
                <p>4.4 stars</p>
                <p>38 minutes</p>
            </div>
            
        </div>
    )
}
const Body=()=>{
    return(
        <div>
            <div className="search">Search</div>
            <div className="Restaurant-Container">
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
                <ResCard/>
            </div>

        </div>
    )
}
const AppLayout =() =>{
    return(
        <div className="app">
            {/* Header */}
            <Header/>
            <Body/>
        </div>
    )
}

const root =ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);