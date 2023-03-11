import React from "react";
import "../styles/Nav.css"

function Nav() {
    return (
        <nav className="navBar">
            <img className="logo" src="Logo.svg" alt="Little Lemon Logo"></img>
            <ul className="navLinks">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Menu</a>
                </li>
                <li>
                    <a href="#">Reservations</a>
                </li>
                <li>
                    <a href="#">Order Online</a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;