import React, { useEffect, useRef } from "react";
import "./detail.scss";
import logo from "../../../images/logo.png";
import { Link, useLocation } from "react-router-dom";
import Api from "../../../Api";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import Cast from "./Cast";
import Trailer from "./Trailer";
import SimilarMovies from "./SimilarMovies";

function Detail() {
  const poster = "https://image.tmdb.org/t/p/original";
  const { id, type } = useLocation().state;
  const [movie, setMovie] = useState();
  const scrollToRef = useRef(null);

  const api = () => {
    Api.get(`/${type}/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id, type]);

  return (
    <div style={{ backgroundColor: "rgba(30,30,30)" }}>
      <div style={{ position: "relative" }}>
        
        <div className="backdrop-container">
          <img
            className="backdrop"
            src={poster + movie?.backdrop_path}
            alt="Movie Backdrop"
          />
        </div>
        <div className="content-container">
          <div className="content">
            <div className="poster-container">
              <img
                className="poster"
                src={poster + movie?.poster_path}
                alt="Movie Poster"
              />
              <div style={{ marginTop: "20px" }}>
                <StarIcon
                  sx={{ color: "yellow" }}
                  style={{ marginTop: "-5px" }}
                />
                <span style={{ color: "#fff", fontWeight: "bold" }}>
                  {" "}
                  {movie?.vote_average.toPrecision(2)} |{" "}
                </span>
                <span>{movie?.vote_count} ratings</span>
              </div>
            </div>
            <div className="detail-container">
              <h1 className="mb-4">
                {movie?.title ? movie?.title : movie?.name}
              </h1>
              {movie?.runtime && (
                <span>
                  {Math.trunc(movie?.runtime / 60)}hr
                  {movie?.runtime % 60}min &#8728;
                </span>
              )}
              {movie?.genres.map(({ id, name }) => (
                <span key={id}>{" " + name + "  "} </span>
              ))}
              &#8728;
              <span>
                {movie?.release_date
                  ? " " + movie?.release_date.slice(0, 4)
                  : " " + movie?.first_air_date.slice(0, 4)}
              </span>
              <div className="overview">
                <p> {movie?.overview} </p>
              </div>
              <button
                onClick={() => {
                  scrollToRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {" "}
                <PlayCircleIcon style={{ marginTop: "-2px" }} /> Watch Trailer
              </button>
            </div>

            <Cast id={id} type={type} />
          </div>
        </div>
      </div>
      <Trailer id={id} type={type} scrollToRef={scrollToRef} />
      <SimilarMovies id={id} type={type} />
    </div>
  );
}

export default Detail;
