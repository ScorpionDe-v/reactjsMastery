import React, { useState } from 'react';
import { movies } from './data.js';

const Movies = () => {
  const [movieList, setMovieList] = useState(movies);

  const filterByCategory = (cat) => {
    if (cat === "All") {
      setMovieList(movies); // Reset to all movies
    } else {
      setMovieList(movies.filter((movie) => movie.category === cat));
    }
  };

  return (
    <>
      <div className='my-3' style={{ width: '1000px', margin: 'auto' }}>
        <div className="mx-auto text-center">
          <button onClick={() => filterByCategory("All")} type="button" className="btn btn-outline-primary mx-3">All</button>
          <button onClick={() => filterByCategory("Action")} type="button" className="btn btn-outline-primary mx-3">Action</button>
          <button onClick={() => filterByCategory("Thriller")} type="button" className="btn btn-outline-light mx-3">Thriller</button>
          <button onClick={() => filterByCategory("Animation")} type="button" className="btn btn-outline-danger mx-3">Animation</button>
          <button onClick={() => filterByCategory("Horror")} type="button" className="btn btn-outline-warning mx-3">Horror</button>
          <button onClick={() => filterByCategory("Drama")} type="button" className="btn btn-outline-info mx-3">Drama</button>
          <button onClick={() => filterByCategory("Sci-Fi")} type="button" className="btn btn-outline-light mx-3">Sci-Fi</button>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          textAlign: 'center',
          width: '1000px',
          backgroundColor: 'green',
          margin: 'auto',
          marginTop: '2.5rem'
        }}
      >
        {movieList.length > 0 ? (
          movieList.map((movie) => (
            <div key={movie.id} style={{ maxWidth: '300px', textAlign: 'center' }}>
              <div style={{ padding: '10px' }} className='hover_effect'>
                <img
                  src={movie.poster_path} alt={movie.title}
                  style={{
                    width: '200px',
                    height: '250px',
                    borderRadius: '10px',
                    border: '2px solid yellow'
                  }}
                />
              </div>
              <h3>{movie.title}</h3>
            </div>
          ))
        ) : (
          <h3 style={{ textAlign: 'center', color: 'white' }}>No movies found</h3>
        )}
      </div>
    </>
  );
};

export default Movies;
