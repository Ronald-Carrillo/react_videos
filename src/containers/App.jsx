import React from "react";
import Header from "../componets/Header";
import "../assets/styles/App.scss";
import Search from "../componets/Search";
import Categories from "../componets/Categories";
import Carousel from "../componets/Carousel";
import CarouselItem from "../componets/Carouselitem";
import Footer from "../componets/Footer";

const App = () => (
  <div className="App">
    <Header></Header>
    <Search></Search>
    <Categories title="Mi lista">
      <Carousel>
        <CarouselItem></CarouselItem>
        <CarouselItem></CarouselItem>
        <CarouselItem></CarouselItem>
      </Carousel>
    </Categories>

    <Categories title="Tendencia">
      <Carousel>
        <CarouselItem></CarouselItem>
        <CarouselItem></CarouselItem>
        <CarouselItem></CarouselItem>
      </Carousel>
    </Categories>

    <Categories title="Recomendadas">
      <Carousel>
        <CarouselItem></CarouselItem>
        <CarouselItem></CarouselItem>
        <CarouselItem></CarouselItem>
      </Carousel>
    </Categories>

    <Footer></Footer>
  </div>
);

export default App;
