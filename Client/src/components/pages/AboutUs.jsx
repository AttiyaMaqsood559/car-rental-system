import React from "react";
import "./style.css";
function Services() {
  return (
    <section className="services-section">
      <h2>Our Rental Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <div className="icon-circle">
            <i className="fas fa-car"></i>
          </div>
          <div className="service-title">Economical Car rental service</div>
          <div className="service-text">
            We designed the perfect Economical rent a car deal for you which are
            not available anywhere else. The most secure way is to rent a car
            through us and save your hard earned money. we promise to make your
            car rental period as simple and hassle free. our economical car
            rental services not only provides you rent a car at low price but
            also provide highly fuel efficient and well maintained cars that
            reduces your travelling cost
          </div>
        </div>

        <div className="service-card">
          <div className="icon-circle">
            <i className="fas fa-sailboat"></i>
          </div>
          <div className="service-title">Luxury rent a car service</div>
          <div className="service-text">
            Get your desired luxury car. Askari rent a car offers its large
            fleet of latest and new model vehicles. if you want to hire a luxury
            rent a car in lahore for a wedding or looking for a luxury car for
            your corporate meeting askari rent a car is here to provide you with
            quality of cars for your different needs and requirements. Make your
            plan today for your trip to any city in Pakistan we will provide you
            best car rental experience
          </div>
        </div>

        <div className="service-card">
          <div className="icon-circle">
            <i className="fas fa-car"></i>
          </div>
          <div className="service-title">Corporate Fleet Service</div>
          <div className="service-text">
            As corporation required fleet of vehicles for their staff travelling
            for different areas of country Pakistan, Askari rent a car provides
            fleet outsource service to corporations that increase the efficiency
            of their business process. Corporate fleet outsourcing helps the
            organization to focus on their main goal. Askari rent a car Lahore
            provides the different variety of vehicles for corporate fleet as
            per the requirement.
          </div>
        </div>

        <div className="service-card">
          <div className="icon-circle">
            <i className="fas fa-bus"></i>
          </div>
          <div className="service-title">Vans/Coaster rental services</div>
          <div className="service-text">
            For leisure Travel to northern areas of Pakistan, for company staff
            pick and drop, for a wedding function, for organization event
            transport management, for a day trip with your friends and family
            13/22/45 Seating capacity vehicles are in our fleet. Askari car
            rental has a fleet of the latest and luxury Van coasters for your
            corporate or individual traveling solution at an economical price.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
