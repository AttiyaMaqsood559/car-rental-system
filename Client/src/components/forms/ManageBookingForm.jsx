import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

function ManageBookingForm({ isVisible, onClose }) {
  const [userName, setUserName] = useState("");
  const [carId, setCarId] = useState("");
  const [status, setStatus] = useState("Pending");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:6161/managebooking", { userName, carId, status })
      .then((res) => {
        setMessage(res.data.message || "Booking updated successfully!");
        if (res.data.success) {
          setUserName("");
          setCarId("");
          setStatus("Pending");
          setMessage(res.data.message || "Booking added successfully!");

          setTimeout(() => {
            setMessage("");
            onClose();
          }, 1500);
        }
      })
      .catch((err) => {
        setMessage(
          err.response?.data?.message || "Failed to update booking. Try again!"
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
        <h2>Manage Booking</h2>

        <input
          type="text"
          name="userName"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />

        <input
          type="number"
          name="carId"
          placeholder="Car ID"
          value={carId}
          onChange={(e) => setCarId(Number(e.target.value))}
          required
        />

        <select
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>

        <button type="submit">Manage Booking</button>

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

export default ManageBookingForm;
