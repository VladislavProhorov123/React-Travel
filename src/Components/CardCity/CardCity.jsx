import React from "react";
import "./CardCity.css";

export default function CardCity({ img, price, name, trip }) {
  return (
    <div className="card-city">
      <div className="card-img_box">
        <img className="city-img" src={img} alt="" />
      </div>
      <div className="info">
        <h4 className="city-name">{name}</h4>
        <p className="city-price">{price}</p>
      </div>
      <p className="trip">
        <i className="ri-map-2-line"></i>
        {trip}
      </p>
    </div>
  );
}
