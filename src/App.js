import React from "react";
import Routers from "./Routers/Routers";
import "./App.scss";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="main" >
    <Header/>
      <Routers />
    </div>
  );
}

export default App;
