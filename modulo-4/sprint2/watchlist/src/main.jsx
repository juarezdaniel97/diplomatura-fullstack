import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { WatchlistProvider } from './contexts/watchlistContext.jsx'
import { MoviesProvider } from './contexts/moviesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WatchlistProvider>
      <MoviesProvider>
        <App />
      </MoviesProvider>
    </WatchlistProvider>
  </StrictMode>,
)
