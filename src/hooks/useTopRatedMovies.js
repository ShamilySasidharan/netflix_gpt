import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const promise = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTION
    );
    const data = await promise.json();
    // console.log("the top rated:",data)
    dispatch(addTopRatedMovies(data?.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);

  return <div>Top rated</div>;
};

export default useTopRatedMovies;
