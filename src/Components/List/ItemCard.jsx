import React from 'react'
import { useNavigate } from "react-router-dom";

const ItemCard = ({data,type}) => {
    const navigate = useNavigate();
    const poster = "https://image.tmdb.org/t/p/original";
  return (
    
                  <div
                    className="list-item "
                    onClick={() => {
                      navigate("/detail", {
                        state: { id: data.id, type: type },
                      });
                    }}
                  >
                    <div className="list-item-img">
                      {data.poster_path ? <img
                        className='card-img'
                        src={poster + data.poster_path}
                        alt="Movie poster"
                      /> : <img
                        className='card-img'
                        src='../../images/NoImage.png'
                        alt="Movie poster"
                      />}
                    </div>

                    <p className="text-center pt-3 title" >
                      {data?.title ? data?.title : data?.name}
                    </p>
                  </div>
              
  )
}

export default ItemCard