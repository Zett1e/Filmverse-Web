import React, { useEffect, useState } from "react";
import Api from "../../../Api";
import "./trailer.scss";

function Trailer({ id, type, scrollToRef }) {
  const [trailer, setTrailer] = useState([]);

  let trailerKey;

  const api = () => {
    Api.get(`/${type}/${id}/videos`)
      .then((res) => {
        setTrailer(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api();
  }, [id, type]);

  trailer.forEach((data) => {
    if (data.type === "Trailer") {
      trailerKey = data.key;
    }
  });

  return (
    <div ref={scrollToRef} className="trailer-container pt-5 md:px-52">
      <div className="trailer md:mx-auto mx-4 md:w-[60%]">
        <h1 className="mb-5 text-3xl font-bold ">Official Trailer</h1>
        {trailerKey ? (
          <iframe
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        ) : (
          <p style={{ margin: "0 auto", fontSize: '16px' }}>No Trailer Available</p>
        )}
      </div>
    </div>
  );
}

export default Trailer;
