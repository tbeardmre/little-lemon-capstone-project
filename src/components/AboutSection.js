import React from "react";
import "../styles/AboutSection.css"

function AboutSection() {
    return (
        <section className="aboutSection">
            <div className="about-us-text">
                <h2>About Us</h2>
                <p>Little Lemon is a charming Mediterranean restaurant that offers a warm and inviting dining experience. With a menu that features a range of delicious and authentic Mediterranean dishes, Little Lemon is sure to satisfy any craving. From the classic Greek salad to the flavorful shawarma wrap, each dish is made using fresh and seasonal ingredients that are locally sourced whenever possible. The restaurant's cozy atmosphere, with its colorful decor and comfortable seating, creates the perfect setting for a relaxed meal with friends and family. Whether you're a fan of Mediterranean cuisine or just looking for a new and exciting dining experience, Little Lemon is the perfect spot to enjoy flavorful and delicious food in a vibrant and welcoming environment.</p>
                <p>Little Lemon is conveniently located in the heart of Victoria's downtown area, making it easily accessible to top attractions and surrounded by many shops and other dining options. The restaurant is a must-visit for anyone in Victoria looking for delicious Mediterranean cuisine in a cozy atmosphere.</p>
            </div>
            <div className="images-container">
                <div className="image-top">
                    <img src="images/Mario-and-Adrian-A.jpg" alt=""/>
                </div>
                <div className="image-bottom">
                    <img src="images/Mario-and-Adrian-B.jpg" alt=""/>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;