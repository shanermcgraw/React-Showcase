import React, { useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DogFeed from "./pages/DogFeed";
import Filter from "./components/Filter";
import { FilterContext } from "./context";
import { QueryClientProvider, QueryClient } from "react-query";

function App() {
  const [filters, setFilters] = useState([]);

  const queryClient = new QueryClient();

  function addFilter(filter) {
    setFilters(filter);
  }

  function removeFilter(filter) {
    setFilters((prevFilters) => prevFilters.filter((f) => f != filter));
  }

  return (
    <QueryClientProvider client={queryClient}>

    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route
              path="/"
              element={
                <FilterContext.Provider
                  value={{ filters, addFilter, removeFilter }}
                >
                  <div className="App-content-container">
                    <DogFeed />
                    <Filter />
                  </div>
                </FilterContext.Provider>
              }
            />
            <Route path="/messages" />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
    </QueryClientProvider>
  );
}

export default App;
