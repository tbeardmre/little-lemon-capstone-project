import React from "react";
import "../styles/HeroSection.css";
import ReservationButton from "./ReservatonButton";

function HeroSection() {
  return (
    <section className="heroSection">
      <div>
        <h1>Little Lemon</h1>
        <h2>Victoria</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern modern twist. It's the perfect spot for a
          romantic date night, family dinner, or a relaxing lunch with friends.
        </p>
        <ReservationButton />
      </div>
      <div className="heroImage">
        <img src="images/restaurant-chef-B.jpg" />
      </div>
    </section>
  );
};

export default HeroSection;