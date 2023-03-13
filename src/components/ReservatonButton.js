import React from "react";
import "../styles/ReservationButton.css";
import { Link } from "react-router-dom";

function ReservationButton() {
  return (
      <Link to="/reservations"><button className="reservationButton">Reserve a Table</button></Link>
  );
}

export default ReservationButton;
