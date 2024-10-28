import { BACKGROUND_IMAGE } from "../utils/constants";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import GPTSearchBar from "./GPTSearchBar";

const GptSearchPage = ()=>{
    return (
        <div className=" text-white flex flex-col justify-between">
           <div>
            <img src={BACKGROUND_IMAGE} alt="backgroundImage" className="absolute text-opacity-100 inset-0 w-full h-full object-cover"/>
           </div>
           <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative">
          <GPTSearchBar />
          <GPTMovieSuggestion />
          </div>
                 
        </div>
    )
}

export default GptSearchPage;