import React, { useEffect } from "react";
import "./detail.scss";
import logo from "../../../images/logo.png";
import { Link, useLocation } from "react-router-dom";
import Api from "../../../Api";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";

function Detail() {
  const poster = "https://image.tmdb.org/t/p/original";
  const { id, type } = useLocation().state;
  const [movie, setMovie] = useState();

  const api = () => {
    Api.get(`/${type}/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(type, id);

  useEffect(() => {
    api();
  }, [id, type]);

  return (
    <div style={{ position: "relative" }}>
      <Link to="/">
        <img className="logo" src={logo} alt="Logo" />
      </Link>
      <div className="backdrop-container">
        <img
          className="backdrop"
          src={poster + movie?.backdrop_path}
          alt="Movie Backdrop"
        />
      </div>
      <div className="content-container">
        <div className="content">
          <h1 className="mb-4">{movie?.title ? movie?.title : movie?.name}</h1>
          <div>
            <StarIcon sx={{ color: "yellow" }} style={{ marginTop: "-5px" }} />
            <span style={{ fontSize: "13px", fontWeight: "bold" }}>
              {" "}
              {movie?.vote_average.toPrecision(2)}{" "}
            </span>
            &emsp; &emsp;
            <span style={{ fontSize: "13px", color: "#ccc" }}>
              {Math.trunc(movie?.runtime / 60)}hr
              {movie?.runtime % 60}min &#8728;
              {movie?.genres.map(({ id, name }) => (
                <span key={id}>{" " + name + "  "} </span>
              ))}
              &#8728;
              {movie?.release_date
                ? " " + movie?.release_date.slice(0, 4)
                : " " + movie?.first_air_date.slice(0, 4)}
            </span>
          </div>
          <div className="overview">
            <p> {movie?.overview} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
