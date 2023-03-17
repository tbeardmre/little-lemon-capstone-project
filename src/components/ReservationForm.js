import React, { useState } from "react";
import "../styles/ReservationForm.css";

function ReservationForm() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        occasion: "",
        guests: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => {
            return {...prev, [name]: value}
        });
    };

    const handleSubmit = () => {
        console.log(formData)
    };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className="form-title">
          <h2>Book your table</h2>
        </div>
        <div className="form-container">
          <div className="field">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="firstName" onChange={handleChange}/>
          </div>

          <div className="field date">
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" name="date" onChange={handleChange}/>
          </div>

          <div className="field">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="lastName" onChange={handleChange}/>
          </div>

          <div className="field">
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time " name="time" onChange={handleChange}>
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" onChange={handleChange}/>
          </div>

          <div className="field">
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion" onChange={handleChange}>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Engagement</option>
              <option>None</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" onChange={handleChange}/>
          </div>

          <div className="field guests">
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" onChange={handleChange}/>
          </div>

          <div>{/*Space submit button over 1 column*/}</div>

          <div className="submit-button">
            <input type="submit" value="Submit" />
          </div>
        </div>
      </fieldset>
    </form>
  );
}

export default ReservationForm;
