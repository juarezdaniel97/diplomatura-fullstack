import React, { createContext, useContext } from 'react';
import { getMoviesAPI } from '../hooks/useMovies';


//1. Creamos el contexto
const MoviesContext = createContext();


//2. Creamos el Proveedor
export function MoviesProvider({children}) {
    const moviesValue = getMoviesAPI();
    
    return (
        <MoviesContext.Provider value={moviesValue} >
            {children}
        </MoviesContext.Provider>
    )
}

// 3. Crear y consumir el custum hook
export function useMoviesContext() {
    const context = useContext(MoviesContext);
    if (context === undefined) {
        throw new Error("useMoviesContext, debe ser usado dentro de un MoviesProvider");
    }
    return context;
}