import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import Api from "../../../Api";
import { settings } from "../../SliderSetting";
import "./similarMovies.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useMediaQuery } from "@mui/material";
import { FreeMode } from "swiper";

function SimilarMovies({ id, type }) {
  const [similar, setSimilar] = useState([]);
  const poster = "https://image.tmdb.org/t/p/original";
  const navigate = useNavigate();
  const scrollRef = useRef();
  const smallMQuery = useMediaQuery("(max-width: 767px)");

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
    <div className="similar-container md:px-52 pt-5 mt-5 pb-5 ">
      <div className="similar md:mx-auto mx-4 md:w-[60%]">
        <h1 className="mb-5 text-3xl font-bold">
          {type === "movie" ? "Similar Movies" : "Similar Tv Series"}
        </h1>
        <Swiper
          slidesPerView={smallMQuery ? 4 : 7}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {similar.map((data, index) => {
            return (
              <SwiperSlide>
                <div className="similar-item-container" key={index}>
                  <div
                    className="similar-item"
                    onClick={() => {
                      navigate("/detail", {
                        replace: true,
                        state: { id: data.id, type: type },
                      });
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
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
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default SimilarMovies;
