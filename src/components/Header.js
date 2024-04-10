import { useState ,useEffect} from "react";
import {CDN_URL} from "../utils/constants";

const Header = () =>{

    const [LoginBtn,setLoginBtn]=useState("Login");
    useEffect(()=>{
        console.log("Header UseEffect Called")
    },[LoginBtn]);
    console.log("header is rendered");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" class src={CDN_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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