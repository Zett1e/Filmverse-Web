import React, { useEffect, useState } from "react";
import "./list.scss";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useRef } from "react";
import axios from "axios";
import noimage from "../../images/NoImage.png";
import "./listItem.scss";
import Api from "../../Api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function List({ title, id }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [movie, setMovie] = useState([]);
  const poster = "https://image.tmdb.org/t/p/original";

  const api = () => {
    Api.get(`/genre/${id}/movies`)
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

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", top: "40%" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", top: "40%" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="list">
      <div className="genre-title">{title}</div>
      <div className="list_wrapper">
        <div className="list_container">
          <Slider {...settings}>
            {movie.map((data) => {
              return (
                <div className="list-item-container">
                  <div className="list-item" key={data.id}>
                    <div className="list-item-img">
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
    </div>
  );
}

export default List;
