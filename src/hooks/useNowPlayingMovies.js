import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";

const useNowPlayingMovies = () => {

  const nowPlayingMovies = useSelector((store)=>store.movie.nowPlayingMovies)
  const dispatch = useDispatch();
  //MAKING THE API CALLS
  const getNowPlayingMovie = async () => {
    const promise = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTION
    );
    const data = await promise.json();
    // console.log(data)
    // console.log(data.results)

    dispatch(addNowPlayingMovies(data?.results));
  };
  // CALLING THE FUNCTION INSIDE THE USEEFFECT
  useEffect(() => {
// ADDING MEMEOIZATION PREVENT UNNECESSARY API CALLS
   !nowPlayingMovies && getNowPlayingMovie();
  }, []);
};

export default useNowPlayingMovies;
