import React, { useState } from "react";
import "./Navigation.css";
import logo from "/src/assets/Logo.svg";

export default function Navigation() {
  const [language, setLanguage] = useState("en");

  function handleChange(e) {
    setLanguage(e.target.value);
  }
  return (
    <nav className="nav container">
      <a href="">
        <img src={logo} alt="" className="logo" />
      </a>
      <ul className="list">
        <li>
          <a href="">Desitnations</a>
        </li>
        <li>
          <a href="">Hotels</a>
        </li>
        <li>
          <a href="">Flights</a>
        </li>
        <li>
          <a href="">Bookings</a>
        </li>
      </ul>
      <div className="buttons">
        <button className="login">Login</button>
        <button className="sign-up">Sign up</button>
        <select name="" id="language" value={language} onChange={handleChange}>
          <option value="en">EN</option>
          <option value="ru">RU</option>
          <option value="ua">UA</option>
        </select>
      </div>
    </nav>
    
  );
}
