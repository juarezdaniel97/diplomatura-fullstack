import React from 'react'
import Button from './Button'

//importamos el contexto
import { useWatchlistContext } from "../contexts/watchlistContext";

const MovieCard = ({movie}) => {
    
    const { addToWatchlist } = useWatchlistContext()

    return (
        <div className="bg-gray-700 p-4 rounded-lg shadow-lg text-center">

            <img 
                src={movie.image} 
                alt={movie.title} 
                className="w-62 h-52 rounded-md" />
            
            <h2 className="text-lg font-bold my-2">{movie.title}</h2>
            
            <Button
                style={'bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer'}
                action={addToWatchlist}
                name={'Agregar a mi lista'}
                param={movie}
            />
        </div>
    )
}

export default MovieCard