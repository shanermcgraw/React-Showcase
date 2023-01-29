import { FilterList } from "@mui/icons-material";
import { Fab, IconButton, Modal, useMediaQuery, useTheme } from "@mui/material";
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

  function FilterFab() {
    return (
      <button onClick={() => setOpenFilters(true)} className="Filter-fab">
        <FilterList fontSize="medium" />
      </button>
    );
  }

  return (
    <FilterContext.Provider value={{ filters, addFilter, removeFilter }}>
      <div className="App-content-container">
        {!aboveSm && <FilterFab />}
        <DogFeed />
        {aboveSm && <Filter />}
        {!aboveSm && (
          <Modal
            open={openFilters}
            onBackdropClick={() => setOpenFilters(false)}
          >
            <div className="Modal-filter-container">
              <Filter />
            </div>
          </Modal>
        )}
      </div>
    </FilterContext.Provider>
  );
}
