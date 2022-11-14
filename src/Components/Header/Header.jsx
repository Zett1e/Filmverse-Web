import React from "react";
import "./header.scss";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../images/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="left">
        <div>
          <img className="img" src={logo} alt="Logo" />
        </div>
      </div>

      <div className="right">
        <SearchIcon
          className="search"
          style={{ color: "#ccc" }}
          sx={{ fontSize: 30 }}
        />
      </div>
    </div>
  );
}

export default Header;
