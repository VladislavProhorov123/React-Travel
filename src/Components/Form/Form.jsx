import React from "react";
import "./Form.css";
import decorate1 from "/src/assets/Decore3.svg";
import decorate2 from "/src/assets/Decore4.svg";

export default function Form() {
  return (
    <div className="form container">
      <div className="form-inner">
        <h2>
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h2>
        <div className="input-box">
          <i className="ri-mail-send-line"></i>
          <input type="email" placeholder="Your email" />
          <button className="input-btn">Subscribe</button>
        </div>
        <img src={decorate1} alt="" className="decorate-1" />
        <img src={decorate2} alt="" className="decorate-2" />
      </div>
      <div className="telegram">
        <i className="ri-telegram-2-fill"></i>
      </div>
    </div>
  );
}
