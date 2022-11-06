import React, { useEffect, useState } from "react";
import "./feature.scss";
import noimage from "../../images/NoImage.png";
import Api from "../../Api";
import Genres from "../Genre";
import axios from "axios";

function Feature() {
  const movie = Math.floor(Math.random() * 20);
  // const index = Math.floor(Math.random() * 26);
  // const api = `https://api.jikan.moe/v4/anime?sfw=false&page=${page}`;

  // const [anime, setAnime] = useState({
  //   images: {
  //     jpg: {
  //       large_image_url: ""
  //     }
  //   },
  //   genres: [],
  //   synopsis: ""
  // });

  // const [title, setTitle] = useState("");

  const [trending, setTrending] = useState([]);
  const poster = "https://image.tmdb.org/t/p/original";

  const api = () => {
    Api.get("/trending/all/day")
      .then((res) => {
        setTrending(res.data.results);
        // console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api();
  }, []);

  // console.log(trending[0]);

  // return(
  //   <div>
  //     {trending[0]?.title}
  //   </div>
  // )
  return (
    <div className="hero ">
      <div className="row">
        <div className="col-6">
          <div className="description">
            <div className="title p-2">
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
            <div className="synopsis p-2">
              {trending[movie]?.overview}
              {/* {isSeemore
                ? synopsis && synopsis.slice(0, 200)
                : synopsis && synopsis}
                {isSeemore ? <span onClick={seeMoreHandler} className="seemore"> See More</span> : "See Less" } */}
            </div>
          </div>
        </div>

        <div className="col-6">
          {/* <img className="poster" src={ poster + trending.poster_path } alt="Movie Poster" /> */}
          <div>
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
