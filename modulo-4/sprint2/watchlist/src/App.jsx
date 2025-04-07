import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'


function App() {
  /*Use Context: es un hook que nos permite acceder a un contexto en React
    Un contexto nos permite compartir datos entre componentes sin necesidad de compartir props 
    a traves de todo el árbol de componentes

    Pasos:
      1.- Crear el contexto --> createContext
      2.- Proveer el contexto a traves de  la propiedad --> provider 
      3.- Consumir el contexto --> useContext
  */

      // const { watchlist } = useWatchlistContext()

      // console.log('watchlist-->', watchlist);
      return (
        <>
          <Home/>
          <Toaster/>    
        </>
  );
}

export default App;
