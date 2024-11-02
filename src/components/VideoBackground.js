import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
const VideoBackground = ({ movieID }) => {
 
  const trailerVideo = useSelector((store) => store.movie?.trailerOFTheMovie);
  useMovieTrailer(movieID)
  return (
    <div className="bg-black pt-52 md:mt-0 md:pt-0 ">
      {/* USE CAMELCASE FOR THE PROPERY IFRAME COPIED FROM YOUTUBE>SHARE>EMBED*/}
      <div className="w-full aspect-video  bg-gradient-to-r from-background_T001 to-background_T002 ">
      <iframe
      className="w-full h-full"
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      </div>
      
    </div>
  );
};

export default VideoBackground;

// src={"https://www.youtube.com/embed/" + trailer.key} => can be solved by state variables and redux

// const [trailerID,setTrailerID] = useState(null);
// const trailer = filteredTrailers.length
// ? filteredTrailers[0]
// : movieVideoData[0];
// console.log("trailer:", trailer);
// setTrailerID(trailer.key);
// src={"https://www.youtube.com/embed/" + trailerID}
