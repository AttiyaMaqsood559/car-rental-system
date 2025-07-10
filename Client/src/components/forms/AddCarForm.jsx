import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

function AddCarForm({ isVisible, onClose }) {
  const [carName, setCarName] = useState("");
  const [model, setModel] = useState("");
  const [rentPrice, setRentPrice] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:6161/addcar", { carName, model, rentPrice })
      .then((res) => {
        setMessage(res.data.message || "Car added successfully!");

        if (res.data.success) {
          setCarName("");
          setModel("");
          setRentPrice("");
          setMessage(res.data.message || "Car added successfully!");

          setTimeout(() => {
            setMessage("");
            onClose();
          }, 1500);
        }
      })
      .catch((err) => {
        setMessage(
          err.response?.data?.message || "Failed to add car. Try again!"
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
        <h2>Add New Car</h2>

        <input
          type="text"
          name="carName"
          placeholder="Car Name"
          value={carName}
          onChange={(e) => setCarName(e.target.value)}
          required
        />

        <input
          type="text"
          name="model"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
        />

        <input
          type="number"
          name="rentPrice"
          placeholder="Rent Price per day"
          value={rentPrice}
          onChange={(e) => setRentPrice(e.target.value)}
          required
        />

        <button type="submit">Add Car</button>

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

export default AddCarForm;
