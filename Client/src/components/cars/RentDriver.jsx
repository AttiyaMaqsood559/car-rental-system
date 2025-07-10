import React from "react";
import askaricarImg from "../../assets/images/askaricar.jpg";
import "./RentDriver.css";
function RentDriver() {
  return (
    <section className="reviews-section">
      <div className="review-card-container">
        <div className="review-card1">
          <h3>Rent a car with driver</h3>
          <p>
            Askari rent a car lahore is attempting to provide car rental service
            with expert drivers, we not only provide excellent conditioned cars
            but also provide professional drivers who know all the routes of
            Pakistan and knows where the outclass place to stay and outclass
            food to eat, that lead to achieving our goal to provide best car
            rental experience to our clients. to ensure punctual car rent
            service to our client within 20 minute we are operating two offices
            in lahore and one office in islamabad, in Lahore Pakistan one office
            is at DHA Phase 04 and second office for rent a car at Lahore
            airport we have office near Allama iqbal international airport
            Lahore
          </p>
        </div>
        <div className="review-card2">
          <img src={askaricarImg} alt="Askari Car" />
        </div>
      </div>
    </section>
  );
}

export default RentDriver;
