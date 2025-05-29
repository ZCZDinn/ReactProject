import React from 'react';

function Movie({ name, year, rating }) {
  return (
    <div className="movie">
      <span>{name} ({year})</span>
      <p>Rating: {rating}</p>
    </div>
  );
}

export default Movie;