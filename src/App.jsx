import { useState,useEffect } from 'react'
import MovieDisplay from './components/MovieDisplay'
import Form from './components/Form'
import './App.css'
console.log(import.meta.env.VITE_OMDB_API_KEY)
function App() {
  //API Key variable

 // const apiKey="9056b6a8";
  // State to hold movie data
  const [movie, setMovie] = useState(null);
  const randomMovies=["Clueless","GodFather","InterStellar","Lagaan","Inception","3 Idiots","Kuch Kuch Hota Hai"]
  const getrandom=randomMovies[Math.floor(Math.random() * randomMovies.length)]

  //FUnction to get movies
  const getMovie=async(searchTerm)=>{
    try{
      const response=await fetch(`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&t=${searchTerm}`);
      // Parse JSON response into a JavaScript object
      const data = await response.json();
      // Set the Movie state to the received data
      setMovie(data);
    }
    catch(e)
    {
      console.log(e);
    }
    
  };

    // This will run on the first render but not on subsquent renders
    useEffect(() => {
      getMovie(getrandom);
    }, []);

    // We pass the getMovie function as a prop called moviesearch
  // We pass movie as props to movie display
  return (
    <div className="App">
    <Form movieSearch={getMovie}/>

    <MovieDisplay movie={movie}/>
    </div>
  )
}

export default App
