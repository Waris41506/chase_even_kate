import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Approve from "./Pages/Approve";
import Home from "./Component/Home";
import { Route, Routes } from "react-router-dom";
import Pending from "./Pages/Pending";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/approve" element={<Approve />} />
        <Route path="/pending" element={<Pending />} />
      </Routes>
    </>
  );
}

export default App;
