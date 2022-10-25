
import { MantineProvider } from "@mantine/core";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Checkout from "./pages/Checkout";
import Work from "./pages/Work";
import { HeaderResponsive } from "./components/HeaderResponsive";

function App() {
  return (
    <MantineProvider 
    theme={{
    colors: {
    brand: ['#3E7D45', '#3E7D45', '#3E7D45', '#3E7D45', '#3E7D45', '#3E7D45', '#3E7D45', '#3E7D45', '#3E7D45','#3E7D45' ], },
    primaryColor: 'brand',
    }}>
      <div className="App">
    <Router>
        <Routes>
        <Route path="/" element={<Home />}>
          </Route>
          <Route path="/work" element={<Work/>}>
          </Route>
          <Route path="/checkout" element={<Checkout />}>
          </Route>
        </Routes>
    </Router>
    </div>
    </MantineProvider>

  );
}

export default App;
