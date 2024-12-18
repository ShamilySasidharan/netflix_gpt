import { useEffect } from "react"
import { API_OPTION } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../utils/movieSlice"

const usePopularMovies = ()=>{
    const dispatch = useDispatch()
    const popularMovies= useSelector((store)=>store.movie.popularMovies)
    const getPopularMovies = async()=>{
        const promise = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_OPTION)
        const data = await promise.json()
        // console.log("The popular:",data)
        dispatch(addPopularMovies(data?.results))
    }
    useEffect(()=>{
    //ADDED MEMOIZATION
     !popularMovies && getPopularMovies()
    },[])
    return (
        <div>popular movies </div>
    )
}
export default usePopularMovies