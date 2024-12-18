
import MovieList from "./MovieList";
import {useSelector} from "react-redux"

const SecondaryContainer = ()=>{
    const movies = useSelector((store)=>store.movie)
    return (
        movies.nowPlayingMovies && (
        <div className=" bg-gradient-to-b from-background_T001 to-background_T002  md:mb-0  pt-10 md:mt-0 md:pt-0">
        <div className="  md:-mt-60 md:relative md:z-20">
        <MovieList title={"Now Playing"} moviesforcards={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} moviesforcards={movies.popularMovies}/>
        <MovieList title={"Top Rated"} moviesforcards={movies.topRatedMovies}/>
        <MovieList title={"Up Coming"} moviesforcards={movies.upComingMovies}/>
        {/* <MovieList title={"Today's Top Picks for You"} moviesforcards={movies.nowPlayingMovies}/>
        <MovieList title={"Crime Stories with a Romance Twist"} moviesforcards={movies.nowPlayingMovies}/> */}
       
        </div>
       
       
        </div>
        )
        
    )
}

export default SecondaryContainer;