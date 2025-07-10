import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

function ReturnCarForm({ isVisible, onClose }) {
  const [carId, setCarId] = useState("");
  const [condition, setCondition] = useState("");
  const [extraCharges, setExtraCharges] = useState(0);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:6161/return", { carId, condition, extraCharges })
      .then((res) => {
        setMessage(res.data.message || "Car returned successfully!");

        if (res.data.success) {
          setCarId("");
          setCondition("");
          setExtraCharges(0);
          setMessage(res.data.message || "Car returned successfully!");

          setTimeout(() => {
            setMessage("");
            onClose();
          }, 1500);
        }
      })
      .catch((err) => {
        setMessage(
          err.response?.data?.message || "Failed to return car. Try again!"
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
        <h2>Return Car</h2>

        <input
          type="number"
          name="carId"
          placeholder="Car ID"
          value={carId}
          onChange={(e) => setCarId(Number(e.target.value))}
          required
        />

        <input
          type="text"
          name="condition"
          placeholder="Condition"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          required
        />

        <input
          type="number"
          name="extraCharges"
          placeholder="Extra Charges (if any)"
          value={extraCharges}
          onChange={(e) => setExtraCharges(Number(e.target.value))}
        />

        <button type="submit">Return Car</button>

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

export default ReturnCarForm;
