import React from "react";
import "./carousel.scss";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image1 from "../../assets/images/сarouselImage1.png";
import Image2 from "../../assets/images/сarouselImage2.png";
import Image3 from "../../assets/images/сarouselImage3.png";

const MyCarousel: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div
          className="d-block w-70"
          style={{
            height: "80vh",
            backgroundImage: `linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ), url(${Image1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Carousel.Caption>
          <h2 className="animated fadeInLeft">18:00 - 20:00, Вівторок</h2>
          <p className="animated fadeInUp">
            Аукціон! Продаж права оренди земельної ділянки
          </p>
          <p className="animated fadeInUp">
            <a href="#" className="btn-more">
              Дізнатись більше
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block w-70"
          style={{
            height: "80vh",
            backgroundImage: `linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ), url(${Image2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Carousel.Caption>
          <h2 className="animated fadeInLeft"  >18:00 - 20:00, Вівторок</h2>
          <p className="animated fadeInUp">
            Аукціон! Продаж права оренди земельної ділянки
          </p>
          <p className="animated fadeInUp">
            <a href="#" className="btn-more">
              Дізнатись більше
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block w-70"
          style={{
            height: "80vh",
            backgroundImage: `linear-gradient(
              rgba(0, 0, 0, 0.5),
              rgba(0, 0, 0, 0.5)
            ), url(${Image3})`,
            backgroundSize: "cover",
            
            backgroundPosition: "center",
          }}
        />
        <Carousel.Caption>
          <h2 className="animated fadeInLeft">18:00 - 21:00, Вівторок</h2>
          <p className="animated fadeInUp">
            Аукціон! Продаж права оренди земельної ділянки
          </p>
          <p className="animated fadeInUp">
            <a href="#" className="btn-more">
              Дізнатись більше
            </a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
