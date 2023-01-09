import React from 'react'

function MovieList(props) {
    const { poster, title} = props.movie
    return (
        <>
            <div className="movie-image">
                    <img src={poster} alt={title} />
            </div>
        </>
    )
}

export default MovieList;