import React from "react";
import FilmCard from "../app/FilmCard";

const FilmCards = ({ films }) => {
  return films?.map((film) => (
    <div className="cards__container">
      <FilmCard key={film.id} film={film} />
    </div>
  ));
};

export default FilmCards;
