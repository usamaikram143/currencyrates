import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

function Header(){
    return (
        <nav>
            <NavLink to="/" className="links" > Home </NavLink>
            <NavLink to="/forex" className="links"> Forex</NavLink>
            <NavLink to="/crypto" className="links"> Crypto </NavLink>
            <NavLink to="/currency_converter" className="links"> Currency Converter </NavLink>
        </nav>
    )
}

export default Header;
