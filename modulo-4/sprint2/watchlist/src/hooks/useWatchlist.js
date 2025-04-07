import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export const useWatchlist = () => {

    const [watchlist, setWatchlist] = useState(()=>{
        return JSON.parse(localStorage.getItem('watchlist')) || []; 
    });

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(watchlist));

    }, [watchlist])

    const addToWatchlist = (movie) => {
        const updatedList = [...watchlist, movie];
        setWatchlist(updatedList);
        toast.success(`"${movie.title}" agregada a la Watchlist 🎬`);
    };

    const removeFromWatchlist = (id) => {
        const updatedList = watchlist.filter((movie) => movie.id !== id);
        setWatchlist(updatedList);
        toast.error("Pelicula Eliminada")
    };

    

    const clearList = () => {
        setWatchlist([]);
        toast.error('Lista Eliminada')
    };
    

    return { watchlist, addToWatchlist, removeFromWatchlist, clearList };
};
