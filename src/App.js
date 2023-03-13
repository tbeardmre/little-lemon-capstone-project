import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage"
import AboutPage from "./routes/AboutPage"
import MenuPage from "./routes/MenuPage"
import ReservationsPage from "./routes/ReservationsPage"
import OrderOnlinePage from "./routes/OrderOnlinePage"
import LoginPage from "./routes/LoginPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservations" element={<ReservationsPage />} />
        <Route path="/order-online" element={<OrderOnlinePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
