import React from 'react';
import './Movies.css';
import { useState, useEffect } from 'react';
import MovieList from './MovieList';


const Movies = () => {

    const [movies, setMovies] = useState([]);
    const[title, setTitle] = useState("");
    //const[filterData , setFilterData] =useState();
    const[query , setQuery] =useState();

    useEffect(() => {
        async function fetchData() {
            await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=617bc6d7`)
            .then((data) => {data.json().then(info => {
                        setMovies(info.items);
                        //setFilterData(info.items)
                    })
                })
                .catch((e) => {
                    console.log(e);
                })
        }
        fetchData();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
      
        const getsearch = e.target.value;
        if(getsearch !=="")
        {
            const searchData = movies.filter((item)=>item.title.toLowerCase().includes(getsearch))
            setMovies(searchData)
        }
        // else{
        //     setMovies(filterData);
        // }
        setQuery(getsearch)
    }

    return (
        <div className='container'>
            <header className='header'>
                <h1 className='movies-header'>Movies</h1>
                <input type="text" value={query} onChange={handleSearch} className="search" placeholder='Search with title...' />
                    
            </header>
            <div className="image-section">
                        {(movies !== undefined && movies.length !== 0) && movies.map((movie ,index) => {
                            return (
                                <MovieList movie={movie.poster} key={index} />
                            )
                        })}
            </div>
        </div>

    )
}

export default Movies;