import { API_OPTION } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerOfTheMovie } from "../utils/movieSlice";
import { useEffect } from "react";
const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();
  const trailerOFTheMovie = useSelector((store)=>store.movie.trailerOFTheMovie)
  const getAllMovieVideos = async () => {
    // PASS THE  movieID SO THAT IT WILL BECOME DYNAMIC
    const promise = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieID +
        "/videos?language=en-US",
      API_OPTION
    );
    const movieVideoData = await promise.json();

    const filteredTrailers = movieVideoData.results.filter(
      (video) => video.type === "Trailer"
    );

    // IF THERE IS NO TRAILER THEN SHOW THE VIDEO FROM THE movieVideoData.results
    const trailer = filteredTrailers.length
      ? filteredTrailers[0]
      : movieVideoData[0];
    dispatch(addTrailerOfTheMovie(trailer));
  };
  useEffect(() => {
    // ADDED MEMOIZATION HERE TO PREVENT THE UNNECESSARY API CALLS WHEN THE DATA IA ALREADY PRESENT IN THE STORE
    // IF IT IS NULL MAKE THE API CALL OTHERWISE NOT
    !trailerOFTheMovie && getAllMovieVideos();
  }, []);

  return <div></div>;
};
export default useMovieTrailer;
