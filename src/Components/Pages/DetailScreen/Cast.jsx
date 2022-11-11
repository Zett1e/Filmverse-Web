import React, { useEffect, useState } from "react";
import Api from "../../../Api";
import "./cast.scss";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Cast({ id, type }) {
  const [credit, setCredit] = useState([]);
  const poster = "https://image.tmdb.org/t/p/original";
  const api = () => {
    // console.log(id);
    Api.get(`/${type}/${id}/credits`)
      .then((res) => {
        setCredit(res.data.cast);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api();
  }, [id, type]);
  return (
    <div className="cast-container">
      <div style={{ height: "100%" }}>
        <h2 style={{ fontFamily: "sans-serif", fontWeight: "200" }}>
          Top Cast
        </h2>
        <div className="container">
          {credit.map((data, index) => (
            <div className="cast" key={index}>
              {data?.profile_path ? (
                <img
                  className="cast-profile"
                  src={poster + data?.profile_path}
                  alt="Cast Profile"
                />
              ) : (
                <AccountCircleIcon
                  style={{
                    color: "#ccc",
                    height: "50px",
                    width: "50px",
                    marginRight: "10px",
                  }}
                />
              )}
              <span className="cast-name"> {data.name} </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cast;
