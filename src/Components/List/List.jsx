import React, { useEffect, useState } from "react";
import "./list.scss";
import "./listItem.scss";
import Api from "../../Api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { settings } from "../SliderSetting";

function List({ title, id, type }) {
  const [movie, setMovie] = useState([]);
  const poster = "https://image.tmdb.org/t/p/original";
  const navigate = useNavigate();
  let url;

  if (type === "movie") {
    url = `/genre/${id}/movies`;
  } else {
    url = "/tv/popular";
  }

  const api = () => {
    Api.get(url)
      .then((res) => {
        setMovie(res.data.results);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    api();
  }, [id]);

 

  return (
    <div className="list">
      <div className="genre-title">{title}</div>
      <div className="list_wrapper">
        <div className="list_container">
          <Slider {...settings}>
            {movie.map((data,index) => {
              return (
                <div className="list-item-container" key={index}>
                  <div
                    className="list-item"
                    onClick={() => {
                      navigate("/detail", {
                        state: { id: data.id, type: type },
                      });
                    }}
                  >
                    <div className="list-item-img">
                      <img
                        className="w-100 h-100"
                        src={poster + data.poster_path}
                        alt="Movie poster"
                      />
                    </div>

                    <p className="text-center pt-3 title" >
                      {data?.title ? data?.title : data?.name}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default List;
