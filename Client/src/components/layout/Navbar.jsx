import React from "react";
import "./style.css";
function Navbar({ onFormSelect }) {
  return (
    <nav>
      <h4 style={{ color: "white" }}>
        CAR<span style={{ color: "rgb(102, 236, 85)" }}>Book</span>
      </h4>
      <div>
        <a href="#!" onClick={() => onFormSelect("signup")}>
          Sign Up
        </a>
        <a href="#!" onClick={() => onFormSelect("signin")}>
          Sign In
        </a>
        <a href="#!" onClick={() => onFormSelect("addcar")}>
          Add Car
        </a>
        <a href="#!" onClick={() => onFormSelect("bookcar")}>
          Book Car
        </a>
        <a href="#!" onClick={() => onFormSelect("manage")}>
          Manage Bookings
        </a>
        <a href="#!" onClick={() => onFormSelect("returncar")}>
          Return Car
        </a>
        <a href="#!" onClick={() => onFormSelect("review")}>
          Feedback
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
