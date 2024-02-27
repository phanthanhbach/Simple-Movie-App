import React from "react";
import { baseImagePath } from "./API/APIcalls";
import star from './star.png';

const MovieCard = ({ movie }) => {
    return (
        <div className='moviebox'>
            <div>
                <p>{movie.release_date.slice(0,4)}</p>
            </div>
            <div>
                <img src={movie.poster_path !== null ? baseImagePath('w342', movie.poster_path) : 'https://via.placeholder.com/400'} alt={movie.title} />
            </div>
            <div>
                <img src={star} alt="star"/> <span>{movie.vote_average}</span>
                <h3>{movie.original_title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;