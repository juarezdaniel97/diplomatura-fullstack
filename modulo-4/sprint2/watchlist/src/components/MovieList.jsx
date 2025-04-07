import React from "react";
import MovieCard from "./MovieCard";

//importamos el contexto
import { useMoviesContext } from "../contexts/moviesContext";


const MovieList = () => {

    const  movies  = useMoviesContext();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {movies.map((movie) => (
                <MovieCard 
                    key={movie.id} 
                    movie={movie} 
                />
            ))}
        </div>
    );
};

export default MovieList;
