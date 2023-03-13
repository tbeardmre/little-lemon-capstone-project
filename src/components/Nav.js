import React from "react";
import "../styles/Nav.css"
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navBar">
            <img className="logo" src="Logo.svg" alt="Little Lemon Logo"></img>
            <ul className="navLinks">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/menu">Menu</Link>
                </li>
                <li>
                    <Link to="/reservations">Reservations</Link>
                </li>
                <li>
                    <Link to="/order-online">Order Online</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;