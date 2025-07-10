import React, { useState } from "react";
import axios from "axios";
import "./Form.css";
function SignupForm({ isVisible, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:6161/register", {
        name,
        email,
        password,
      })
      .then((res) => {
        setMessage(res.data.message || "Signup successful!");
        setTimeout(() => {
          onClose();
        }, 2000);
      })
      .catch((err) => {
        setMessage(err.response?.data?.message || "Signup failed! Try again.");
        console.error(err);
      });
  };

  if (!isVisible) return null;

  return (
    <div className="form-popup">
      <span className="close-btn" onClick={onClose}>
        &times;
      </span>

      <form onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      {message && (
        <p
          className={
            message.toLowerCase().includes("success") ||
            message.toLowerCase().includes("registered")
              ? "success"
              : "error"
          }
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default SignupForm;
