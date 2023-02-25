import React from "react";
import Home from "../routes/Home";
import Reservation from "..g/routes/Reservation";

import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/reservation" element = {<Reservation />}/>
      </Routes>
    </>
  );
}

export default App;


