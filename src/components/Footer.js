import React from "react";
import "../styles/Footer.css"
import { Link } from "react-router-dom";

function Footer() {
    return(
        <footer className="footerContainer">
            <div className="footerItem footerLogo">
                <img alt="Footer Logo" src="footer-logo.png"></img>
            </div>
            <div className="footerItem doormatNav">
                <h5>Doormat Navigation</h5>
                <ul>
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
            </div>
            <div className="footerItem contactLinks">
                <h5>Contact</h5>
                <ul>
                    <li>
                        <a href="#">Address</a>
                    </li>
                    <li>
                        <a href="#">Phone</a>
                    </li>
                    <li>
                        <a href="#">Email</a>
                    </li>
                </ul>
            </div>
            <div className="footerItem socialMediaLinks">
                <h5>Social Media Links</h5>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/">Facebook</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/">Twitter</a>
                    </li>
                    <li>
                        <a href="https://www.tiktok.com/en/">TikTok</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;