import React from "react";
import "./Book.css";
import { MINI_CARD, STEP_LIST } from "../../Data/data";
import StepList from "../StepList/StepList";
import StepCard from "../StepCard/StepCard";
import { STEP_CARD } from "../../Data/data";
import MiniCard from "../MiniCard/MiniCard";

export default function Book() {
  return (
    <div className="book-step container">
      <div className="step-left">
        <h3 className="step-subtext">Easy and Fast</h3>
        <h2 className="step-text">Book Your Next Trip In 3 Easy Steps</h2>
        <ul className="list-step">
          {STEP_LIST.map((item) => (
            <StepList img={item.img} text={item.text} subtext={item.subtext} />
          ))}
        </ul>
      </div>
      <div className="step-right">
        {STEP_CARD.map((item) => (
          <StepCard
            img={item.img}
            text={item.text}
            data={item.data}
            info={item.info}
            people={item.people}
            className="big-card"
          />
        ))}
        {MINI_CARD.map((item) => (
          <MiniCard
            img={item.img}
            subtext={item.subtext}
            text={item.text}
            completed={item.completed}
            className="mini-card"
          />
        ))}
      </div>
    </div>
  );
}
