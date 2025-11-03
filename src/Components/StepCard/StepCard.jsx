import React, { useState } from "react";
import "./StepCard.css";

export default function StepCard({ img, text, data, info, people }) {

    const [liked, setLiked] = useState(false)

  return (
    <div className="card-greece">
      <img src={img} className="step-card_img" alt="" />
      <h4 className="step-card_text">{text}</h4>
      <p className="step-card_subtext">{data}</p>
      {info && (
        <ul className="step-card_list">
          {info.map((item, index) => (
            <li className="step-card_icon" key={index}><i className={item}></i></li>
          ))}
        </ul>
      )}
      <div className="people-info">
        <p className="step-card_people">
          <i className="ri-building-4-line"></i>
          {people}
        </p>
        <button className='button-like'  onClick={() => setLiked(!liked)}>
            <i className={liked ? 'ri-heart-fill' : 'ri-heart-line'}></i>
        </button>
      </div>
    </div>
  );
}
