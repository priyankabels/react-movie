function MovieDisplay({movie})
{
    const loaded=()=>{
    return(
        <div className="movieDiv">
            
        <img src={movie.Poster} alt={movie.Title} />
        <div className="infoDiv">
        <h1>{movie.Title}</h1>
            <h2>{movie.Genre}</h2>
            <h2>{movie.Year}</h2>
            <h2>{movie.Runtime || "Runtime not available"}</h2>
            <h3>{movie.Actors || "Actors not available"}</h3>
         </div>
        </div>
    )
 }
 const loading=()=>{
    return(
   <h1>No movie to display</h1>
)}
// Ternary operator will determine which functions JSX we will return
return movie ? loaded() : loading();
}

export default MovieDisplay