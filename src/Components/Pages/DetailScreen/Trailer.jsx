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
    <div ref={scrollToRef} className="trailer-container pt-5">
      <div className="trailer">
        <h1 className="mb-5 ">Official Trailer</h1>
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
