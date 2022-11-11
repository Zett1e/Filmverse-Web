import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import Api from "../../../Api";
import { settings } from "../../SliderSetting";
import "./similarMovies.scss";

function SimilarMovies({ id, type }) {
  const [similar, setSimilar] = useState([]);
  const poster = "https://image.tmdb.org/t/p/original";
  const navigate = useNavigate();
  const scrollRef = useRef();

  const api = () => {
    Api.get(`/${type}/${id}/similar`)
      .then((res) => {
        setSimilar(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api();
  }, [id, type]);

  return (
    <div className="similar-container pt-5 mt-5 pb-5 ">
      <div className="similar">
        <h1 className="mb-5">
          {type === "movie" ? "Similar Movies" : "Similar Tv Series"}
        </h1>
        <Slider ref={scrollRef} {...settings}>
          {similar.map((data, index) => {
            return (
              <div className="similar-item-container" key={index}>
                <div
                  className="similar-item"
                  onClick={() => {
                    navigate("/detail", {
                      replace: true,
                      state: { id: data.id, type: type },
                    });
                    scrollRef.current.slickGoTo(0);
                  }}
                >
                  <div className="similar-item-img">
                    <img
                      className="w-100 h-100"
                      src={poster + data.poster_path}
                      alt="Movie poster"
                    />
                  </div>

                  <p className="text-center pt-3 title">
                    {data?.title ? data?.title : data?.name}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default SimilarMovies;
