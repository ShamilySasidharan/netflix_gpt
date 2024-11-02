import { BACKGROUND_IMAGE } from "../utils/constants";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import GPTSearchBar from "./GPTSearchBar";

const GptSearchPage = () => {
  return (
    <div>
        <img src={BACKGROUND_IMAGE} alt="backgroundImage" className=" -z-10 h-screen object-cover md:w-full fixed " style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),`,
            }}/>
      <div className=" text-white  flex flex-col justify-between  ">

        <GPTSearchBar />
        <GPTMovieSuggestion/>
      </div>

    </div>
    
    
    
  );
};

export default GptSearchPage;
