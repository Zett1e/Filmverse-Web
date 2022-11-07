import React, { useEffect, useState } from "react";
import "./feature.scss";
import noimage from "../../images/NoImage.png";
import Api from "../../Api";
import Genres from "../Genre";
import { useNavigate } from "react-router-dom";

function Feature() {
  const movie = Math.floor(Math.random() * 20);

  const [trending, setTrending] = useState([]);
  const poster = "https://image.tmdb.org/t/p/original";
  const navigate = useNavigate();

  const api = () => {
    Api.get("/trending/all/day")
      .then((res) => {
        setTrending(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api();
  }, []);

  return (
    <div className="hero ">
      <div className="row">
        <div className="col-6">
          <div className="description">
            <div
              onClick={() => {
                navigate("detail", {
                  state: { id: trending[movie].id, type: "movie" },
                });
              }}
              className="title p-2"
            >
              {trending[movie]?.title
                ? trending[movie].title
                : trending[movie]?.name}
            </div>

            {trending[movie]?.genre_ids.map((id, i) => {
              return (
                <span key={i} className="genre p-2">
                  {Genres[id]}
                </span>
              );
            })}
            <div className="synopsis p-2">{trending[movie]?.overview}</div>
          </div>
        </div>

        <div className="col-6">
          <div
            onClick={() => {
              navigate("detail", { state: { id: trending[movie.id] } });
            }}
            style={{ cursor: "pointer" }}
          >
            {trending[movie]?.poster_path ? (
              <img
                className="poster"
                src={poster + trending[movie].poster_path}
                alt="Anime Poster"
              />
            ) : (
              <img className="poster" src={noimage} alt="No Poster Found" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
