import React from "react";
import { Routes, Route } from "react-router-dom";
import Detail from "../Components/Pages/DetailScreen/Detail";
import Home from "../Components/Pages/HomeScreen/Home";
import SearchScreen from "../Components/Pages/SearchScreen/SearchScreen";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="detail" element={<Detail />} />
      <Route path="/:search" element={<SearchScreen />} />
    </Routes>
  );
}

export default Routers;
