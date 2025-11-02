import React from "react";
import "./Card.css";

export default function Card({ img, header, text }) {
  return (
    <div className="card">
        <img className="card-img" src={img} alt="" />

      <h3 className="card-title">{header}</h3>
      <p className="card-subtitle">{text}</p>
    </div>
  );
}
