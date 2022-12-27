import React, { useState } from "react";
import "./header.scss";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../images/logo.png";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const [isFocus, setIsfocus] = useState(false);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const onEnterHandler = (event) => {
    if (event.key === "Enter") {
      navigate(`/${input}`);
      setInput("");
    }
  };

  return (
    <div className="header">
      <div className="left">
        <Link to="/">
          <img className="img" src={logo} alt="Logo" />
        </Link>
      </div>

      <div className="right">
        <div
          className="search-container"
          style={isFocus ? { opacity: 1 } : { opacity: 0.5 }}
        >
          <input
            type="text"
            placeholder="Search..."
            onFocus={() => setIsfocus(true)}
            onBlur={() => setIsfocus(false)}
            onKeyDown={onEnterHandler}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <SearchIcon
            onClick={() => {
              navigate(`/${input}`);
              setInput("");
            }}
            className="search"
            sx={{ fontSize: 30 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
