import React from "react";
import { LOGO } from "../../Data/data";
LOGO;
import "./Logo.css";

export default function Logo() {
  return (
    <div className="logo-list container">
        <ul className="logo-list_info">
          {LOGO.map((item, index) => (
            <li className="list-item" key={index}>
              <img className="logo-img" src={item} alt="" />
            </li>
          ))}
        </ul>
    </div>
  );
}
