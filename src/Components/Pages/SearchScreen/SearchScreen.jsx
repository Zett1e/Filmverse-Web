import React, { useEffect, useState } from "react";
import "./SearchScreen.scss";
import { useParams } from "react-router-dom";
import Api from "../../../Api";
import ItemCard from "../../List/ItemCard";

const SearchScreen = () => {
  const { search } = useParams();
  const [results, setResults] = useState([]);

  const api = () => {
    Api.get(`/search/multi?query=${search}`)
      .then((res) => {
        setResults(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    api();
  }, [search]);

  console.log(results);

  return (
    <div className="search-screen">
      <h1 className="text-3xl font-bold"> Search For &nbsp; "{search}" </h1>
      <div className="search-container">
        {results?.map((result, index) => (
            <div className="itemcard-container md:w-64 ">

          <ItemCard key={index} data={result} type={result.media_type} />
            </div>
        ))}
      </div>
    </div>
  );
};

export default SearchScreen;
