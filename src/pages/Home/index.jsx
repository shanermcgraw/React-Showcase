import { Modal, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import DogFeed from "../../components/DogFeed";
import Filter from "../../components/Filter";
import { FilterContext } from "../../context";
import "./home.css";

export default function Home() {
  const [filters, setFilters] = useState([]);
  const [openFilters, setOpenFilters] = useState(false);
  const theme = useTheme();
  const aboveSm = useMediaQuery(theme.breakpoints.up("sm"));

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
        {aboveSm && <Filter />}
        {!aboveSm && (
          <Modal open={openFilters} className="Modal-filter-container">
            <Filter />
          </Modal>
        )}
      </div>
    </FilterContext.Provider>
  );
}
