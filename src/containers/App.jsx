import React, { useState, useEffect } from "react";
import Header from "../componets/Header";
import "../assets/styles/App.scss";
import Search from "../componets/Search";
import Categories from "../componets/Categories";
import Carousel from "../componets/Carousel";
import CarouselItem from "../componets/Carouselitem";
import Footer from "../componets/Footer";
import initialState from "../hooks/useInitialState";
import useInitialState from "../hooks/useInitialState";
const API = "http://localhost:3000/initialState";

const App = () => {
  const initialState = useInitialState(API);
  return initialState.length === 0 ? (
    <h1>Loading...</h1>
  ) : (
    <div className="App">
      <Header></Header>
      <Search></Search>
      {initialState.mylist?.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title="tendencia">
        <Carousel>
          {initialState.trends?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originales de Platfix">
        <Carousel>
          {initialState.originals?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Footer></Footer>
    </div>
  );
};
export default App;
