import React from "react";
import "./Footer.css";
import FooterColum from "../FooterColum/FooterColum";

export default function Footer() {
  return (
    <div className="footer container">
      <div className="footer-inner">
        <div className="footer-info">
          <h2>Jadoo.</h2>
          <p>Book your trip in minute, get full Control for much longer.</p>
        </div>
        <FooterColum title="Company" links={["About", "Careers", "Mobile"]} />
        <FooterColum
          title="Contact"
          links={["Help/FAQ", "Press", "Affilates"]}
        />
        <FooterColum
          title="More"
          links={["Airlinefees", "Airline", "MoLow fare tipsbile"]}
        />
        <div className="social-icon-box">
          <div className="social-icon-circle">
            <div className="social-icon">
              <i class="ri-facebook-fill"></i>
            </div>
            <div className="social-icon">
              <i class="ri-instagram-line"></i>
            </div>
            <div className="social-icon">
              <i class="ri-twitter-fill"></i>
            </div>
          </div>
          <p className="social-app-text">Discover our app</p>
          <div className="social-button-box">
            <button>
              <i class="ri-google-play-fill"></i>
              <div className="button-info">
                <p className="button-main-text">GET IT ON</p>
                <p className="button-last-text">GOOGLE PLAY</p>
              </div>
            </button>
            <button>
              <i class="ri-apple-fill"></i>
              <div className="button-info">
                <p className="button-main-text">Avalible on the</p>
                <p className="button-last-text">Apple Store</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <p className="police">All rights reserved@jadoo.co</p>
    </div>
  );
}
