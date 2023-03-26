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
  const [formError, setFormError] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const validateForm = () => {
    let err = {};
    if (formData.firstName === "") {
      err.firstName = "* First name required!";
    }
    if (formData.lastName === "") {
      err.lastName = "* First name required!";
    }
    if (formData.email === "") {
      err.email = "* Email required!";
    } else {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(formData.email)) {
        err.email = "Email not valid!";
      }
    }

    if (formData.phone === "") {
      err.phone = "* Phone number required!";
    } else {
      let phoneRegex =
        /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d+)\)?)[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?)+)(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
      if (!phoneRegex.test(formData.phone)) {
        err.phone = "Telephone number not valid!";
      }
    }

    if (formData.guests === "") {
      err.guests = "* Please specify number of guests!";
    }
    if (formData.date === "") {
      err.date = "* Please specify date and time!";
    }

    setFormError({ ...err });
    return Object.keys(err).length < 1;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.table(formData);

    let isValid = validateForm();
    if (isValid) {
      alert("Submitted");
    }
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
            <input
              type="text"
              id="first-name"
              name="firstName"
              onChange={handleChange}
            />
            <span className="non-valid">{formError.firstName}</span>
          </div>

          <div className="field date">
            <label htmlFor="res-date">Choose date</label>
            <input
              type="date"
              id="res-date"
              name="date"
              onChange={handleChange}
            />
            <span className="non-valid">{formError.date}</span>
          </div>

          <div className="field">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              onChange={handleChange}
            />
            <span className="non-valid">{formError.lastName}</span>
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
            <span className="non-valid">{formError.time}</span>
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
            />
            <span className="non-valid">{formError.email}</span>
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
            <input type="tel" id="phone" name="phone" onChange={handleChange} />
            <span className="non-valid">{formError.phone}</span>
          </div>

          <div className="field guests">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="1"
              min="1"
              max="10"
              id="guests"
              name="guests"
              onChange={handleChange}
            />
            <span className="non-valid">{formError.guests}</span>
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
