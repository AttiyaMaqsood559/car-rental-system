import React from "react";
import "./style.css";
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>
          <strong>Lahore Office:</strong> Office #2, Second Floor, Building #
          CCA-08, DD Block, DHA Phase 04
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:+923009430719">+92-300-9430719</a>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@askaricars.com">info@askaricars.com</a>
        </p>
        <p style={{ marginTop: "20px" }}>
          &copy; 2025 Rent a car Lahore | Car Rent | Car Hire Ask
        </p>
      </div>

      <p>&copy; 2025 Car Rental Co. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
