import MovieCards from "./MovieCard"

const MovieList = ({title,moviesforcards})=>{
    // console.log("moviesforcard:",moviesforcards)
    return (

        <div className="px-10 text-white">
              <h1 className="text-3xl py-4">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hidden">
          
             <div className="flex ">
                {moviesforcards?.map((movie)=> <MovieCards key={movie.id} posterPath = {movie.poster_path}/>)}
            
             </div>
            </div>
           
        </div>
       
    )
}

export default MovieList