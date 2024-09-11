import React from "react";
import "./homepage.scss";
import Carousel from "../../components/carousel/Carousel";
import SearchComponent from "../../components/search/Search";
import Filter from "../../components/filter/Filter";

const Homepage: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
  };
  return (
    <main>
      <Carousel />
      <SearchComponent onSearch={handleSearch} />
      <Filter />
    </main>
  );
};

export default Homepage;
