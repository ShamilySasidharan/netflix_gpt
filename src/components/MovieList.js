import MovieCards from "./MovieCard"

const MovieList = ({title,moviesforcards})=>{
    // console.log("moviesforcard:",moviesforcards)
    return (

        <div className="px-10 text-white">
              <h1 className="text-xl py-4 md:text-3xl text-[24px]">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hidden">
          
             <div className="flex mb-5 md:mb-0 ">
                {moviesforcards?.map((movie)=> <MovieCards key={movie.id} posterPath = {movie.poster_path}/>)}
            
             </div>
            </div>
           
        </div>
       
    )
}

export default MovieList