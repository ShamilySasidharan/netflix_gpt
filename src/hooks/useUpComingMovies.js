import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";

const useUpComingMovies = ()=>{
    const dispatch = useDispatch()
    const upComingMovies= useSelector((store)=>store.movie.upComingMovies)
    const getUpComingMovies = async()=>{
        const promise = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTION)
        const data = await promise.json()
        // console.log("the upcoming:",data)
        dispatch(addUpComingMovies(data?.results))

    }

    useEffect(()=>{
        //ADDED MEMOIZATION
        !upComingMovies && getUpComingMovies()
    },[])
    return (
        <div>

        </div>
    )
}

export default useUpComingMovies;