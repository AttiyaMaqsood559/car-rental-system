import React from "react";
import "./CarCard.css";

import car1 from "../../assets/images/askaricar.jpg";
import car2 from "../../assets/images/Audi.png";
import car3 from "../../assets/images/Corolla.png";
import car4 from "../../assets/images/Honda.png";
import car5 from "../../assets/images/Prado.png";
import car6 from "../../assets/images/Yaris.png";
import car7 from "../../assets/images/Toyato-rivo.png";
import car8 from "../../assets/images/waggon.jpg";
import car9 from "../../assets/images/wagon.jpg";

const images = {
  "askaricar.jpg": car1,
  "Audi.png": car2,
  "Corolla.png": car3,
  "Honda.png": car4,
  "Prado.png": car5,
  "Yaris.png": car6,
  "Toyato-rivo.png": car7,
  "waggon.jpg": car8,
  "wagon.jpg": car9,
};

function CarCard({ car, onDetailsClick }) {
  return (
    <div className="car-card">
      <span className="car-id-badge">ID: {car.id}</span>

      <img src={images[car.image]} alt={car.name} />
      <h3>{car.name}</h3>
      <p>{car.type}</p>
      <p>
        <strong>Rs {car.price.toLocaleString()}</strong> /day
      </p>

      <button onClick={() => onDetailsClick(car)}>Details</button>
    </div>
  );
}

export default CarCard;
