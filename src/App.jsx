import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Voiceselect from "./pages/Voiceselect";
import SelectR from "./pages/SelectR";
import Select from "./pages/Select";
import Select2 from "./pages/Select2";
import Calenderpick from "./pages/Calenderpick";
import Ticket from "./pages/Ticket";
import Select3 from "./pages/Select3";
import Rail from "./pages/Rail";
import Recommendselect from "./pages/Recommendselect";
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
            <Route path="/voiceselect" element={<Voiceselect />} />
            <Route path="/selectR" element={<SelectR />} />
            <Route path="/select" element={<Select />} />
            <Route path="/select2" element={<Select2 />} />
            <Route path="/calenderpick" element={<Calenderpick />} />
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/select3" element={<Select3 />} />
            <Route path="/rail" element={<Rail />} />
            <Route path="/recommendselect" element={<Recommendselect />} />
            <Route path="/finalselect" element={<Finalselect />} />
            <Route path="/final" element={<Final />} />
          </Routes>
        </div>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
