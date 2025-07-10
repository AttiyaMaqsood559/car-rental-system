import React, { useState } from "react";
import CarCard from "./CarCard";
import carsData from "../data/Cars.json";

import "./CarList.css";

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

function CarList() {
  const [showDetails, setShowDetails] = useState(false);
  const [detailsCar, setDetailsCar] = useState(null);
  const [paused, setPaused] = useState(false);

  const handleDetailsClick = (car) => {
    setDetailsCar(car);
    setShowDetails(true);
    setPaused(true);
    document.body.classList.add("paused");
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setDetailsCar(null);
    setPaused(false);
    document.body.classList.remove("paused");
  };

  return (
    <section className="car-carousel">
      <h2 className="car-carousel-title">Available Cars</h2>
      <div className="car-container">
        <div className={`car-track ${paused ? "paused" : ""}`}>
          {carsData.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onDetailsClick={handleDetailsClick}
            />
          ))}
        </div>
      </div>

      {showDetails && detailsCar && (
        <div className="details-modal">
          <button onClick={handleCloseDetails} className="close-button">
            X
          </button>

          <img
            src={images[detailsCar.image]}
            alt={detailsCar.name}
            className="modal-image"
          />
          <h3>{detailsCar.name}</h3>
          <p>Type: {detailsCar.type}</p>
          <p>
            <strong>Rs {detailsCar.price.toLocaleString()}</strong> / day
          </p>
          <p>{detailsCar.description}</p>
        </div>
      )}
    </section>
  );
}

export default CarList;
