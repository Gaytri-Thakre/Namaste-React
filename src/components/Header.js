import React from "react";
import { useState ,useEffect,useContext} from "react";
import {CDN_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";
const Header = () =>{

    const [LoginBtn,setLoginBtn]=useState("Login");
    useEffect(()=>{
        console.log("Header UseEffect Called")
    },[LoginBtn]);
    console.log("header is rendered");
    const onlinestatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);

    // Subscribing to the store using Selector
    const cartItems = useSelector((Appstore)=>Appstore.cart.items)
    return (
        <div className="relative w-[1200px] mx-auto flex items-center justify-between">
            <img  src={CDN_URL} width="125px" height="30px"></img>
            
            
                <ul className="flex gap-x-6">
                    {/* <li>Online Status: {onlinestatus? "online":"offline"}</li> */}
                    <li className="font-mullish py-7  hover: cursor-pointer transition-all duration-200 relative group">
                    <Link to="/">Home</Link>
                    </li>
                    <li className="font-mullish py-7  hover: cursor-pointer transition-all duration-200 relative group">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="font-mullish py-7  hover: cursor-pointer transition-all duration-200 relative group">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="font-mullish py-7  hover: cursor-pointer transition-all duration-200 relative group">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    
                    <li className="font-mullish py-7  hover: cursor-pointer transition-all duration-200 relative group">
                        <Link to="/cart">Cart ({cartItems.length})</Link>
                        
                    </li>
                    <button className="px-6  font-mullish border rounded-sm text-sm font-medium bg-white text-lightBlue300 transition all duration-200
                hover:text-lightBlue500 flex justify-evenly" onClick={
                        ()=>{
                            LoginBtn==="Login"? setLoginBtn("Logout"):setLoginBtn("Login");
                        }}>{LoginBtn}</button>
                    <li className="font-mullish py-7  hover: cursor-pointer transition-all duration-200 relative group">
                        {loggedInUser}
                    </li>
                </ul>
            
        </div>
    )
}
export default Header;