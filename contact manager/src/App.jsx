import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import AddContact from "./Component/AddContact";
import UpdateContact from "./Component/UpdateContact";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/update/:id" element={<UpdateContact />} />
      </Routes>
    </>
  );
};

export default App;
