import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
const MainContainer = () => {
  const movies = useSelector((store) => store.movie?.nowPlayingMovies);

  // before the store is executed the nowPlayingMovies is defined as null in movieSlice
  // if(movies === null) return called early return
  if (!movies) return null;

  // WILL HAVE MANY MOVIES BUT INDEX[0] WILL BE USED TO DISPLAY IN  MAINCONTAINER
  const mainMovie = movies[0];
//   console.log("MainMovie:", mainMovie);
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieID={id} />
    </div>
  );
};

export default MainContainer;
