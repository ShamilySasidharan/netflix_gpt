import { MOVIE_CARD_CDN_URL } from "../utils/constants";

const MovieCards = ({ posterPath }) => {
  if(!posterPath) return null
  return (
    <div className="w-48 pr-5 mb-12">
      <img
        alt="movieCards"
        src={MOVIE_CARD_CDN_URL + posterPath}
        className="rounded-md flex whitespace-nowrap overflow-auto scrollbar-hide"
      />
    </div>
  );
};

export default MovieCards;
