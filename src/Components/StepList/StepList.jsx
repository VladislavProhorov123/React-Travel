import React from "react";
import "./StepList.css";

export default function StepList({ img, text, subtext }) {
  return (
    <div className="">
      <div className="list-wrapper">
        <img src={img} alt="" />
        <div className="list-info">
          <h4>{text}</h4>
          <p>{subtext}</p>
        </div>
      </div>
    </div>
  );
}
