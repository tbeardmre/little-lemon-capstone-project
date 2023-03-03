import React from "react";

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
                        <a href="#">Instagram</a>
                    </li>
                    <li>
                        <a href="#">Facebook</a>
                    </li>
                    <li>
                        <a href="#">Twitter</a>
                    </li>
                    <li>
                        <a href="#">TikTok</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;