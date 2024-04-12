import React from "react";
import { useState ,useEffect} from "react";
import {CDN_URL} from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () =>{

    const [LoginBtn,setLoginBtn]=useState("Login");
    useEffect(()=>{
        console.log("Header UseEffect Called")
    },[LoginBtn]);
    console.log("header is rendered");
    const onlinestatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" class src={CDN_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status: {onlinestatus? "online":"offline"}</li>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={
                        ()=>{
                            LoginBtn==="Login"? setLoginBtn("Logout"):setLoginBtn("Login");
                        }}>{LoginBtn}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;