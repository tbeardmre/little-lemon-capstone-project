import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReservationForm from "../components/ReservationForm";
import ReservationsBanner from "../components/ReservationsBanner";

function ReservationsPage() {
  return (
    <>
      <Header />
      <ReservationsBanner />
      <ReservationForm />
      <Footer />
    </>
  );
};

export default ReservationsPage;
