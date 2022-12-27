import React, { useEffect, useState } from "react";
import "./list.scss";
import "./listItem.scss";
import Api from "../../Api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings } from "../SliderSetting";
import ItemCard from "./ItemCard";

function List({ title, id, type }) {
  const [movie, setMovie] = useState([]);
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
                <div className="list-item-container">
                <ItemCard key={index} data={data} type={type} />
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
