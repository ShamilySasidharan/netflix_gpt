import { useSelector } from "react-redux";
import MovieList from "./MovieList";


const GPTMovieSuggestion =()=>{
    const {gptMovieNames,tmdbMovieResults} = useSelector((store)=>store.gpt)
    if(!gptMovieNames) return null

    return (
   
            <div className="p-2 bg-gradient-to-b from-transparent via-black to-background_T002 mb-10 md:mb-0 ">
                {gptMovieNames.map((gptMovieName,index)=><MovieList key={index} title={gptMovieName} moviesforcards={tmdbMovieResults[index]} />)}
                {/* <MovieList/> */}
            </div>
      
      
        
    )
}

export default GPTMovieSuggestion