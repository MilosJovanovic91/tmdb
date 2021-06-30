import React from 'react';
import './Movie.css';


const SEARCH_API = 'https://image.tmdb.org/t/p/w1280';
const Movie = ({title, poster_path, overview, vote_average}) => (
    <div className="movie">
        <img src={SEARCH_API + poster_path} alt={title} />
        <div className='movie-info'>
        <h4>{title}</h4>
            <span>{vote_average}</span>
        </div>
           
        
        <div className="movie-over">
            <p>{overview}</p>
        </div>
    </div>
    );


export default Movie
