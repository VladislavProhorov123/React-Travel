import React from "react";
import "./Navigation.css";

export default function Navigation() {
    const [language, setLanguage] = useState('ru')
  return (
    <nav className="nav">
      <ul>
        <li><a href="">Desitnations</a></li>
        <li><a href="">Hotels</a></li>
        <li><a href="">Flights</a></li>
        <li><a href="">Bookings</a></li>
      </ul>
      <div className="buttons">
        <button>Login</button>
        <button>Sign up</button>

      </div>
    </nav>
  );
}
