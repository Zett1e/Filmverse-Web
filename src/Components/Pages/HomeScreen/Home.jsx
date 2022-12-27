import React from "react";
import Feature from "../../Feature/Feature";
import Header from "../../Header/Header";
import AllList from "../../List/AllList";

function Home() {
  return (
    <div>
      <div style={{ position: "relative" }}>
        
        <Feature />
      </div>
      <AllList />
    </div>
  );
}

export default Home;
