import React, { useEffect, useState } from "react";
import "./list.scss";
import "./listItem.scss";
import Api from "../../Api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemCard from "./ItemCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper";
import { useMediaQuery } from "@mui/material";

function List({ title, id, type }) {
  const [movie, setMovie] = useState([]);
  const smallMQuery = useMediaQuery("(max-width: 767px)");
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
    <div className="list md:ml-6">
      <div className="genre-title md:ml-12 ml-6">{title}</div>
      <div className="list_wrapper">
        <div className="mx-6 md:mx-8">
          <Swiper
            slidesPerView={smallMQuery ? 3 : 7}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode]}
            className="mySwiper"
          >
           
            {movie.map((data, index) => {
              return (
                <SwiperSlide>
                  <ItemCard key={index} data={data} type={type} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default List;
