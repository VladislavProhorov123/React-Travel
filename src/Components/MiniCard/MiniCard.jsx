import React from "react";
import "./MiniCard.css";

export default function MiniCard({ img, subtext, text, completed }) {
  return (
    <div>
      <div className="mini-card">
        <img src={img} alt="" className="mini-card_img" />
        <div className="mini-card-info">
          <p className="mini-card_subtext">{subtext}</p>
          <h4>{text}</h4>
          <p>
            <span className="completed">{completed}</span> completed
          </p>
          <div className="box-line">
            <div className="line">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
