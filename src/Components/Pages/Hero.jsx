import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../../App.scss"

const Hero = () => {
  const [anime, setAnime] = useState([]);
    const url = "https://api.jikan.moe/v4/top/anime";  
  
    useEffect(()=>{
        axios.get(url)
        .then(res=>{
          setAnime(res.data.data)
          console.log(res.status); 
        })
        .catch(err=>{
          console.log(err)
        })
      
    },[url])
  

  return (
    <div className="hero">
      <div className="row">

      { anime.map((data)=> { 
        return <div className="col-sm-4 " key={data.mal_id}>
          <div className="container p-5" >
          <div className="mx-auto" style={{width: 225}}>
            <img src={data?.images.jpg.image_url} alt="Anime poster" /> 
             <h1 className="text-center pt-3">{data?.title_english ? data?.title_english : data?.title}</h1> 
             </div>
          </div>
        </div> 
        } ) }
        
      </div>
    </div>
  );
};

export default Hero;
