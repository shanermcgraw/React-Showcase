import { useState } from "react";
import DogFeed from "../../components/DogFeed";
import Filter from "../../components/Filter";
import { FilterContext } from "../../context";
import "./home.css";

export default function Home() {
  const [filters, setFilters] = useState([]);

  function addFilter(filter) {
    setFilters(filter);
  }

  function removeFilter(filter) {
    setFilters((prevFilters) => prevFilters.filter((f) => f != filter));
  }
  return (
    <FilterContext.Provider value={{ filters, addFilter, removeFilter }}>
      <div className="App-content-container">
        <DogFeed />
        <Filter />
      </div>
    </FilterContext.Provider>
  );
}
