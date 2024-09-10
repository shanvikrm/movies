import React from 'react';

function MovieItem({ movie }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
      {/* Add favorite button and other details */}
    </div>
  );
}

export default MovieItem;
