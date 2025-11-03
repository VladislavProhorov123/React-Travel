import React from "react";
import "./ReviewCard.css";

export default function ReviewCard({ img, text, name, city }) {
  return (
    <div className="review-card">
      <img src={img} className="review-img" alt="" />
      <div className="info">
        <p className="quote">{text}</p>
        <h4>{name}</h4>
        <p>{city}</p>
      </div>
    </div>
  );
}
