import React, { useEffect, useState } from "react";
import "./header.scss";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../images/logo.png";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const [isFocus, setIsfocus] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const onEnterHandler = (event) => {
    if (event.key === "Enter") {
      navigate(`/${input}`);
      setInput("");
      setIsActive(false)
    }
  };

  const searchHandler = () => {
    if (isActive) {
      navigate(`/${input}`);
      setInput("");
      setIsActive(false)
    } else {
      setIsActive(true);
    }
  };

  useEffect(()=>{
    setIsActive(false)
  },[])

  return (
    <div className="header">
      <div className="left pl-5 md:pl-12">
        <Link to="/">
          <img className="h-16 md:h-20" src={logo} alt="Logo" />
        </Link>
      </div>

      <div className="right">
        <div
          className="overflow-hidden items-center mr-10 rounded py-2 px-4 hidden md:flex bg-white"
          style={isFocus ? { opacity: 1 } : { opacity: 0.5 }}
        >
          <input
            className="text-black"
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

        <div
          className={`overflow-hidden w-full items-center mr-0 rounded py-2 px-4 md:hidden flex ${isActive ? "bg-white" : ""} `}
          style={isFocus ? { opacity: 1 } : { opacity: 0.5 }}
        >
          <input
            className={`text-black transition-all duration-100 ${
              isActive ? "w-full" : "w-0"
            }`}
            type="text"
            placeholder="Search..."
            onFocus={() => setIsfocus(true)}
            onBlur={() => setIsfocus(false)}
            onKeyDown={onEnterHandler}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <SearchIcon
            onClick={searchHandler}
            className="cursor-pointer text-gray-300 md:!hidden"
            sx={{ fontSize: 30 }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
