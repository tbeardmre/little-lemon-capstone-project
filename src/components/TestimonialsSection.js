import React from "react";
import "../styles/TestimonialsSection.css";
import TestimonialsCards from "./TestimonialsCards";


function TestimonialsSection() {
  return (
    <section className="testimonialsSection">
      <h2>Testimonials</h2>
      <TestimonialsCards />
    </section>
  );
}

export default TestimonialsSection;