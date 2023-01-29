import React from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { useMediaQuery, useTheme } from "@mui/material";
import NavigationFooter from "./components/NavigationFooter";
import Home from "./pages/Home";
import Messages from "./pages/Messages";

function App() {
  const theme = useTheme();
  const aboveMd = useMediaQuery(theme.breakpoints.up("md"));
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            {aboveMd && <NavigationBar />}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/messages" element={<Messages />} />
            </Routes>
            {!aboveMd && <NavigationFooter />}
          </BrowserRouter>
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
