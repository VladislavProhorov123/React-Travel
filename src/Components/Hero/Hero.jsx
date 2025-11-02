import React from "react";
import "./Hero.css";
import Navigation from "../Navigation/Navigation";
import hero from "/src/assets/hero.png";
import bg_img from "/src/assets/Decore.png";
import line from '/src/assets/line.svg'

export default function Hero() {
  return (
    <div>
      <Navigation />
      <div className="hero container">
        <div className="left-box">
          <h3>Best Destinations around the world</h3>
          <h1>Travel, enjoy and live a new and full life <img src={line} alt="" className="line-text" /></h1>
          <p>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="left-box_btn">
            <button>Find out more</button>
            <div className="playlist-btn">
              <div className="circle">
                <i className="ri-play-large-fill"></i>
              </div>
              <p>Play Demo</p>
            </div>
          </div>
        </div>
        <div className="right-box">
          <img src={hero} alt="" className="hero-img_girl" />
          <img src={bg_img} alt="" className="bg-img" />
        </div>
      </div>
    </div>
  );
}
