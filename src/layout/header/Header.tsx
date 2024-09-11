import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logos/DSMP_ova_full.svg";
import "./header.scss";
import Burger from "../../components/burger/Burger";

const Header: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`main-header ${isFixed ? "fixed" : ""}`}>
      <div className="container">
        <div className="header">
          <div className="header-logo">
            <Link className="main-nav__logo_link" to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <nav className="main-nav">
            <ul className="nav-main__list">
              <li className="main-nav__item">
                <Link className="main-nav__link" to="/">
                  Головна
                </Link>
              </li>
              <li className="main-nav__item">
                <Link className="main-nav__link" to="/citygov">
                  Місто та влада
                </Link>
              </li>
              <li className="main-nav__item">
                <Link className="main-nav__link" to="/news">
                  Новини
                </Link>
              </li>
              <li className="main-nav__item">
                <Link className="main-nav__link" to="/events">
                  Події
                </Link>
              </li>
            </ul>
          </nav>
          <Burger />
        </div>
      </div>
    </header>
  );
};

export default Header;
          