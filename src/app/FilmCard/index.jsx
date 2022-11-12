import React from "react";

const FilmCard = ({ film }) => {
  return (
    <div
      className="film-card"
      style={{
        backgroundImage: `url(${film.movie_banner})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="film-card__title">Title:{film.title}</div>
      <div className="film-card__description">
        Description:{film.description}
      </div>
      <div className="film-card__director">Director:{film.director}</div>
      <div className="film-card__producer">Producer:{film.producer}</div>
      <div className="film-card__release-date">
        Release Date:{film.release_date}
      </div>
      <div className="film-card__rt-score">
        Rotten Tomato Score:{film.rt_score}
      </div>
    </div>
  );
};

export default FilmCard;
