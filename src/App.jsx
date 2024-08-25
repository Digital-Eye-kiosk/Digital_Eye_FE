import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SelectR from "./pages/SelectR";
import Select from "./pages/Select";
import SelectR2 from "./pages/SelectR2";
import Select2 from "./pages/Select2";
import Calenderpick from "./pages/Calenderpick";
import Ticket from "./pages/Ticket";
import Price from "./pages/Price";
import Rail from "./pages/Rail";
import Recommendselect from "./pages/Recommendselect";
import Seat from "./pages/Seat";
import Finalselect from "./pages/Finalselect";
import Final from "./pages/Final";

import { MyProvider } from "./components/MyContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/selectR" element={<SelectR />} />
            <Route path="/select" element={<Select />} />
            <Route path="/selectR2" element={<SelectR2 />} />
            <Route path="/select2" element={<Select2 />} />
            <Route path="/calenderpick" element={<Calenderpick />} />
            <Route path="/ticket" element={<Ticket />} />

            <Route path="/rail" element={<Rail />} />
            <Route path="/price" element={<Price />} />
            <Route path="/recommendselect" element={<Recommendselect />} />
            <Route path="/seat" element={<Seat />} />
            <Route path="/finalselect" element={<Finalselect />} />
            <Route path="/final" element={<Final />} />
          </Routes>
        </div>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
