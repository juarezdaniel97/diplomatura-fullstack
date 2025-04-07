import React, { createContext, useContext } from 'react';
import { useWatchlist } from '../hooks/useWatchlist';

// 1. CREAR el contexto
const WatchlistContext = createContext();

// 2. Crear el PROVEEDOR del contexto
export function WatchlistProvider({ children }) {
    
    const watchlistValue = useWatchlist();

    return (
        <WatchlistContext.Provider value={watchlistValue}>
            {children}
        </WatchlistContext.Provider>
    );
}

// 3. Crear y consumir un custom hook para consumir el contexto
export function useWatchlistContext() {
    const context = useContext(WatchlistContext);
    if (context === undefined) {
        throw new Error("useWatchlistContext debe ser usado dentro de un WatchlistProvider");
    }
    return context;
}