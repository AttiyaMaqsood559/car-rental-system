import React, { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import CarList from "./components/cars/CarList";
import SignupForm from "./components/forms/SignupForm";
import SigninForm from "./components/forms/SigninForm";
import AddCarForm from "./components/forms/AddCarForm";
import BookCarForm from "./components/forms/BookCarForm";
import ReturnCarForm from "./components/forms/ReturnCarForm";
import ReviewForm from "./components/forms/ReviewForm";
import ManageBookingForm from "./components/forms/ManageBookingForm";
import RentDriver from "./components/cars/RentDriver";
import FAQ from "./components/pages/FAQ";
import AboutUs from "./components/pages/AboutUs";
import Footer from "./components/layout/Footer";

import caranimation from "./assets/images/caranimation.png";
import backgroundimage from "./assets/images/backgroundimage.jpg";

function App() {
  const [showCarAnimation, setShowCarAnimation] = useState(true);
  const [activeForm, setActiveForm] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCarAnimation(false);
      document.body.classList.add("loaded");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showCarAnimation && (
        <div className="car-animation">
          <p className="bookme-logo" style={{ color: "white" }}>
            CAR<span style={{ color: "rgb(102, 236, 85)" }}>Book</span>
          </p>
          <img src={caranimation} alt="Car" className="car" />
        </div>
      )}

      <div className="main-content">
        <Navbar onFormSelect={setActiveForm} />

        <div className="body-section">
          <img src={backgroundimage} alt="Background" />
          <div className="center-text">
            <h1>Fast & Easy Way To Rent A Car</h1>
            <h5 style={{ color: "white" }}>
              Welcome to Mare Car Rental System, where we offer a wide selection
              of vehicles for your travel needs
            </h5>
            <button
              onClick={() =>
                document
                  .getElementById("carlist")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Cars
            </button>
          </div>
        </div>

        <div id="carlist">
          <CarList />
        </div>

        <SignupForm
          isVisible={activeForm === "signup"}
          onClose={() => setActiveForm(null)}
        />
        <SigninForm
          isVisible={activeForm === "signin"}
          onClose={() => setActiveForm(null)}
        />
        <AddCarForm
          isVisible={activeForm === "addcar"}
          onClose={() => setActiveForm(null)}
        />
        <BookCarForm
          isVisible={activeForm === "bookcar"}
          onClose={() => setActiveForm(null)}
        />
        <ReturnCarForm
          isVisible={activeForm === "returncar"}
          onClose={() => setActiveForm(null)}
        />
        <ReviewForm
          isVisible={activeForm === "review"}
          onClose={() => setActiveForm(null)}
        />
        <ManageBookingForm
          isVisible={activeForm === "manage"}
          onClose={() => setActiveForm(null)}
        />

        <RentDriver />
        <AboutUs />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default App;
