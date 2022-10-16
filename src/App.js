import React from "react";

import { Routes, Route } from "react-router-dom";
import { GreatStep, Error, Events, About } from "./Pages";
import { Footer, Navbar } from "./Components";
import "./App.scss";
// Git Problems Solved
// again
import {
  Enviro_CS,
  Geobotics,
  Indu_Design,
  Mine_CS,
  Mineac,
  Nmic,
  Petro_CS,
  Safety_DA,
  Safety_Hunt,
  T_Shirt_Design,
  Quiz_Spiel,
  Mine_Shot,
} from "./Pages/Events";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          {/* GreatStep Page */}
          <Route exact path="/" element={<GreatStep />} />
          <Route exact path="/GreatStep" element={<GreatStep />} />

          {/* Offline Event Page */}
          <Route path="/great-step/events" element={<Events />} />
          <Route path="/great-step/events/Enviro_CS" element={<Enviro_CS />} />
          <Route path="/great-step/events/Geobotics" element={<Geobotics />} />
          <Route
            path="/great-step/events/Indu_Design"
            element={<Indu_Design />}
          />
          <Route path="/great-step/events/Mine_CS" element={<Mine_CS />} />
          <Route path="/great-step/events/Mineac" element={<Mineac />} />
          <Route path="/great-step/events/Nmic" element={<Nmic />} />
          <Route path="/great-step/events/Petro_CS" element={<Petro_CS />} />
          <Route path="/great-step/events/Safety_DA" element={<Safety_DA />} />
          <Route
            path="/great-step/events/Safety_Hunt"
            element={<Safety_Hunt />}
          />

          {/* Online Event Page */}
          <Route
            path="/great-step/events/T_Shirt_Design"
            element={<T_Shirt_Design />}
          />
          <Route
            path="/great-step/events/Quiz_Spiel"
            element={<Quiz_Spiel />}
          />
          <Route path="/great-step/events/Mine_Shot" element={<Mine_Shot />} />

          {/* About Page */}
          <Route path="/aboutus" element={<About />} />

          {/* Error Page */}
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
