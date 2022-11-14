import React from "react";
import List from "./List";

function AllList() {
  return (
    <div style={{marginTop: '-10rem', position: 'relative', zIndex: '10'}}>
      <List title="Action" id="28" type='movie'></List>
      <List title="Adventure" id="12" type='movie'></List>
      <List title="Animation" id="16" type='movie'></List>
      <List title="Comedy" id="35" type='movie'></List>
      <List title="Crime" id="80" type='movie'></List>
      <List title="Documentary" id="99" type='movie'></List>
      <List title="Drama" id="18" type='movie'></List>
      <List title="Family" id="10751" type='movie'></List>
      <List title="Fantasy" id="14" type='movie'></List>
      <List title="History" id="36" type='movie'></List>
      <List title="Horror" id="27" type='movie'></List>
      <List title="Music" id="10402" type='movie'></List>
      <List title="Mystery" id="9648" type='movie'></List>
      <List title="Romance" id="10749" type='movie'></List>
      <List title="Science Fiction" id="878" type='movie'></List>
      <List title="Tv Series" id={null} type='tv'></List>
      <List title="Thriller" id="53" type='movie'></List>
      <List title="War" id="10752" type='movie'></List>
      <List title="Wastern" id="37" type='movie'></List>
    </div>
  );
}

export default AllList;
