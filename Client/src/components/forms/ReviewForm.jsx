import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

function ReviewForm({ isVisible, onClose }) {
  const [carId, setCarId] = useState("");
  const [userName, setUserName] = useState("");
  const [rating, setRating] = useState("");
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:6161/review", {
        carId,
        userName,
        rating,
        feedback,
      })
      .then((res) => {
        setMessage(res.data.message || "Review submitted successfully!");

        if (res.data.success) {
          setCarId("");
          setUserName("");
          setRating("");
          setFeedback("");
          setMessage(res.data.message || "Review submitted successfully!");

          setTimeout(() => {
            setMessage("");
            onClose();
          }, 1500);
        }
      })
      .catch((err) => {
        setMessage(
          err.response?.data?.message || "Failed to submit review. Try again!"
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
        <h2>Submit Review</h2>

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
          name="userName"
          placeholder="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating (1 to 5)"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          required
        />

        <textarea
          name="feedback"
          placeholder="Feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          rows="3"
        />

        <button type="submit">Submit Review</button>

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

export default ReviewForm;
