import React, {useEffect, useState} from 'react'
import './Movie.css'

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const shortTitle = (element) => {
    return element?.length > 18 ? element.slice(0, 18) + '...' : element;
}

const isBackgroundRed = (element) => {
    if (element < 8) {
        return true
    } else {
        return false
    }
}

const Movie = ({title, poster_path, overview, vote_average}) => (
        <div className='movie'>
            <div className="movie-header">
                <img src={IMG_API + poster_path} alt={title} />
                <div className="movie-info">
                    <h3>{shortTitle(title)}</h3>
                    <span className={isBackgroundRed(vote_average) ? 'orange' : 'green'} >{vote_average}</span>
                </div>
                <div className="movie-overview">
                    <h3>Overview:</h3>
                    <span>{overview}</span>
                </div>
            </div>

        </div>
);

export default Movie;
