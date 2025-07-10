import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

function SigninForm({ isVisible, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:6161/signin", { email, password })
      .then((res) => {
        const msg = res.data.message || "Signin successful";
        setMessage(msg);

        // ✅ Use `status` from backend response
        if (res.data.status === "success") {
          setTimeout(() => {
            onClose();
          }, 1000);
        }
      })
      .catch((err) => {
        const errMsg =
          err.response?.data?.message || "Signin failed! Try again.";
        setMessage(errMsg);
        console.error(err);
      });
  };

  if (!isVisible) return null;

  return (
    <div className="form-popup">
      <span className="close-btn" onClick={onClose}>
        &times;
      </span>

      <form onSubmit={handleSignin}>
        <h2>Sign In</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>

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

export default SigninForm;
