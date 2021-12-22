import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

function Header(){
    return (
        <nav>
            <NavLink to="/"> 
            <button type="button" className="button">Home </button> </NavLink>
            <NavLink to="/forex"> <button type="button" className="button"> Forex </button></NavLink>
            <NavLink to="/crypto" > <button type="button" className="button"> Crypto </button> </NavLink>
            <NavLink to="/currency_converter" > <button type="button" className="button">Currency Converter </button> </NavLink>
        </nav>
    )
}

export default Header;
