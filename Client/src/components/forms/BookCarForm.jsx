import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

function BookCarForm({ isVisible, onClose }) {
  const [carId, setCarId] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:6161/bookcar", {
        carId,
        pickupDate,
        returnDate,
        paymentMode,
      })
      .then((res) => {
        setMessage(res.data.message || "Car Book Successfully");

        if (res.data.success) {
          setCarId("");
          setPickupDate("");
          setReturnDate("");
          setPaymentMode("");
          setTimeout(() => {
            setMessage("");
            onClose();
          }, 1500);
        }
      })
      .catch((err) => {
        setMessage(
          err.response?.data?.message || "Failed to book car! Try Again"
        );
        console.error(err);
      });
  };

  if (!isVisible) return null;

  return (
    <div className="form-popup">
      <span className="close-btn" onClick={onClose}>
        &times;
      </span>

      <form onSubmit={handleSubmit}>
        <h2>Book Car</h2>

        <input
          type="number"
          name="carId"
          placeholder="Car ID"
          value={carId}
          onChange={(e) => setCarId(Number(e.target.value))}
          required
        />

        <input
          type="date"
          name="pickupDate"
          placeholder="Pickup Date"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
          required
        />

        <input
          type="date"
          name="returnDate"
          placeholder="Return Date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          required
        />

        <select
          value={paymentMode}
          onChange={(e) => setPaymentMode(e.target.value)}
          required
        >
          <option value="" disabled>
            Payment Mode
          </option>
          <option value="Credit Card">Credit Card</option>
          <option value="Cash">Cash</option>
          <option value="Online">Online</option>
        </select>

        <button type="submit">Book Car</button>

        {message && (
          <p
            className={
              message.toLowerCase().includes("success") ? "success" : "error"
            }
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}

export default BookCarForm;
