import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
import {BrowserRouter} from "react-router-dom";
import Routers from "./Routers/Routers";
import "./App.scss"

function App() {
  return (
    <BrowserRouter>
    <div className="main">

        
        <Routers/>
        {/* <Footer/> */}
    </div>
    </BrowserRouter>
  );
}

export default App;
