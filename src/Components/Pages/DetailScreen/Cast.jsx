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
    <div className="h-full mt-10 md:mt-0">
      <h2 style={{ fontFamily: "sans-serif" }} className="text-3xl font-bold">
        Top Cast
      </h2>
      <div className="cast-list-container flex gap-x-5 md:block">
        {credit.map((data, index) => (
          <div className="cast md:flex items-center gap-x-5" key={index}>
            {data?.profile_path ? (
              <div className="w-20 h-20 md:inline-block ">
                <img
                  className="cast-profile w-full h-full object-cover"
                  src={poster + data?.profile_path}
                  alt="Cast Profile"
                />
              </div>
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
            <p className="cast-name md:inline-block text-center">
              {" "}
              {data.name}{" "}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cast;
