import React from "react";
import { Link } from "react-router-dom";
import location from "../../assets/images/location.png";
import phone from "../../assets/images/phone.png";
import email from "../../assets/images/email.png";
import calendar from "../../assets/images/calendar.svg";
import instWhite from "../../assets/images/inst-white.svg";
import ytWhite from "../../assets/images/youtb-white.svg";
import tgWhite from "../../assets/images/tg-white.svg";
import fbWhite from "../../assets/images/fb-white.svg";
import "./footer.scss";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="top_header">
        <section>
          <span>
            <img src={location} alt="Адреса" />
          </span>
          <span>21050 м. Вінниця вул. Соборна 70</span>
        </section>
        <section>
          <span>
            <Link to="tel:++380800216433" className="contacts-icon">
              <img src={phone} alt="Гаряча лінія" className="inline-icon" />
              <span className="contacts-text inline-text">0 800 216 433</span>
            </Link>
          </span>
        </section>
        <section>
          <span>
            <Link to="mailto:oda@vin.gov.ua" className="contacts-icon">
              <img src={email} alt="Email" className="inline-icon" />
              <span className="contacts-text inline-text">oda@vin.gov.ua</span>
            </Link>
          </span>
        </section>
        <section>
          <span>
            <img src={calendar} alt="Час роботи" />
          </span>
          <span>
            Пн-Пт: 9:00-18:00 <p>Обід: 13:00-14:00</p>
          </span>
        </section>
      </div>
      <div className="border-shape">
        <span className="line"></span>
      </div>
      <div className="bottom_content">
        <section className="socials">
          <Link
            to="https://www.instagram.com/vinnytsia_oda/"
            className="social-icon"
          >
            <img src={instWhite} alt="Instagram" />
          </Link>
          <Link
            to="https://www.youtube.com/@depinformcomvinoda9030"
            className="social-icon"
          >
            <img src={ytWhite} alt="YouTube" />
          </Link>
          <Link to="https://t.me/VinnytsiaODA" className="social-icon">
            <img src={tgWhite} alt="Telegram" />
          </Link>
          <Link
            to="https://www.facebook.com/1depinformcom"
            className="social-icon"
          >
            <img src={fbWhite} alt="Facebook" />
          </Link>
        </section>
        <section className="bottom-header">
          <Link to="/">Головна</Link>
          <Link to="/citygov">Місто та влада</Link>
          <Link to="/news">Новини</Link>
          <Link to="/events">Події</Link>
        </section>
      </div>
      <div className="copyright">
        © 2024 Весь контент доступний за ліцензією Creative Commons Attribution
        4.0 International license, якщо не зазначено інше
      </div>
    </footer>
  );
};

export default Footer;
