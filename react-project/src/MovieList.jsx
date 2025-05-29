import React from 'react';
import Movie from './Movie';

function MovieList({ movies }) {
  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie, idx) => (
        <Movie
          key={idx}
          name={movie.name}
          year={movie.year}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}

export default MovieList;