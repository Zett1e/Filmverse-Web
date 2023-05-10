import React, { useEffect, useState } from "react";
import "./feature.scss";
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
      <div className="backdrop-container">
        <img
          src={poster + trending[movie]?.backdrop_path}
          alt="Movie Backdrop"
          className="object-cover"
        />
        <div className="content-container">
          <div className="description ml-6 md:ml-20">
            <div
              onClick={() => {
                navigate("/detail", {
                  state: {
                    id: trending[movie].id,
                    type: trending[movie].media_type,
                  },
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
