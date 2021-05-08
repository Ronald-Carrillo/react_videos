import React, { useState, useEffect } from "react";
import Header from "../componets/Header";
import "../assets/styles/App.scss";
import Search from "../componets/Search";
import Categories from "../componets/Categories";
import Carousel from "../componets/Carousel";
import CarouselItem from "../componets/Carouselitem";
import Footer from "../componets/Footer";

const App = () => {
  const [videos, setVideos] = useState({
    // mylist: [],
    // trends: [],
    // originals: [],
  });

  useEffect(() => {
    fetch("http://localhost:3000/initialState")
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <Search></Search>
      {videos.mylist?.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title="tendencia">
        <Carousel>
          {videos.trends?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title="Originales de Platfix">
        <Carousel>
          {videos.originals?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Footer></Footer>
    </div>
  );
};
export default App;
