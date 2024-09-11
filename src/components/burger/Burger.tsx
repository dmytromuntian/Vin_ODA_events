import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./burger.scss";

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="burger-menu">
      <input id="menu__toggle" type="checkbox" checked={isOpen} onChange={handleToggle} />
      <label className={`menu__btn ${isOpen ? "open" : ""}`} htmlFor="menu__toggle">
        <span></span>
      </label>
      <ul className={`menu__box ${isOpen ? "open" : ""}`}>
        <li>
          <Link className="menu__item" to="/" onClick={handleToggle}>
            Головна
          </Link>
        </li>
        <li>
          <Link className="menu__item" to="/citygov" onClick={handleToggle}>
            Місто та влада
          </Link>
        </li>
        <li>
          <Link className="menu__item" to="/news" onClick={handleToggle}>
            Новини
          </Link>
        </li>
        <li>
          <Link className="menu__item" to="/events" onClick={handleToggle}>
            Події
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Burger;