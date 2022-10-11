
import { MantineProvider } from "@mantine/core";
import { CustomersSection } from "./components/CustomersSection";
import { DatePickerThing } from "./components/DatePickerThing";
import { HeaderSimple } from "./components/HeaderSimple";
import { HeroContentLeft } from "./components/HeroContentLeft";
import { HeroTitle } from "./components/HeroTitle";
import { Roomavailability } from "./components/Roomavailability";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";


function App() {
  return (
    <MantineProvider 
    theme={{
    colors: {
    brand: ['#3E7D45', '#3E7D45', '#3E7D45', '#3E7D45', '#3E7D45', '#3E7D45', '#3E7D45', '#3E7D45', '#3E7D45','#3E7D45' ], },
    primaryColor: 'brand',
    }}>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/admin" element={<Admin />}>
          </Route>
        </Routes>
      </div>
    </Router>
    </MantineProvider>
  );
}

export default App;
