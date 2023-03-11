import React from "react";
import "../styles/HighlightsSection.css";
import SpecialsCards from "./SpecialsCards";
import ReservationButton from "./ReservatonButton";

function HighlightsSection() {
  return (
    <section className="highlightsSection">
      <div className="specialsTitle">
        <h2>This Weeks Specials</h2>
        <ReservationButton />
      </div>
      <div>
        <SpecialsCards />
      </div>
    </section>
  );
};

export default HighlightsSection;
