import React from "react";
import "../assets/styles/componets/CarouselItem.scss";
import playIcon from "../assets/static/icons8-play-64.png";
import plusIcon from "../assets/static/icons8-agregar-enlace-16.png";
import Pelicula1 from "../assets/static/image peliculas/cb2176b3-9415-43cd-a725-0c5d00920c3c.jpg";

const CarouselItem = () => (
  <div className="carousel-item">
    <img className="carousel-item__img" src={Pelicula1} alt="" />
    <div className="carousel-item__details">
      <div>
        <img
          className="carousel-item__details--img"
          src={playIcon}
          alt="Play Icon"
        />
        <img
          className="carousel-item__details--img"
          src={plusIcon}
          alt="Plus Icon"
        />
      </div>
      <p className="carousel-item__details--title">Título descriptivo</p>
      <p className="carousel-item__details--subtitle">2019 16+ 114 minutos</p>
    </div>
  </div>
);

export default CarouselItem;
