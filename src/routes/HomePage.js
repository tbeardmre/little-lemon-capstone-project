import React from "react";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import HighlightsSection from "../components/HighlightsSection";
import TestimonialsSection from "../components/TestimonialsSection";


function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <HighlightsSection />
      <TestimonialsSection />
      <AboutSection />
      <Footer />
    </>
  );
}

export default HomePage;
