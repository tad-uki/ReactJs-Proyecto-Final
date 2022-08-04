import React from "react";
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom"
import {FaCookieBite} from "react-icons/fa"


export default function NavBar(){

    return (
        <nav className="navBar">
            <Link className="navLogo" to={"/"}> 
               <span> <FaCookieBite/> </span>   Momo Gateu            
            </Link>

            <article className="navList">
                <Link to={"/items"} id={"storeItem"}> Tienda </Link>
                <Link to={"/category/Cookies"}> Cookies </Link>
                <Link to={"/category/Tortas"}> Tortas </Link>
                <Link to={"/category/Postres"}> Postres </Link>
            </article>

            <Link to={"/cart"} className="cartLogo"> <CartWidget/> </Link>
        </nav>
    );
}