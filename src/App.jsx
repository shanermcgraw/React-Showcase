import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DogFeed from "./pages/DogFeed";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<DogFeed />} />
            <Route path="/messages" />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
