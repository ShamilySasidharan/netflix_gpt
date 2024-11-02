import { useSelector, useDispatch } from "react-redux";
import languageConstants from "../utils/languageContants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTION } from "../utils/constants";
import { addGptAndTmdbMovies } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const languageSelector = useSelector((store) => store.languageConfig?.lang);
  const searchText = useRef(null);

  //  SEARCH IN TMDB FOR THE MOVIES FROM GPT RESULTS ===> WILL RETURN A  'promise' NOT A 'result' VERY IMPORTANT!!!!
  const tmdbSearchResults = async (movie) => {
    const promise = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const data = await promise.json();
    // console.log("the result here :",data)
    return data.results;
  };

  //   API CALLS FROM THE OPENAI
  const handleGptSearchResults = async () => {
    // console.log(searchText.current.value);

    // GPT QUERY
    const gptQuery =
      "Act as a movie recommendation system suggest some movies for the query : " +
      searchText.current.value +
      ". only give names of  five movies and should be comma separated like the example given ahead eg: Level Cross, Pani, Bougainvillea, Porattu Nadakam,Thrayam";

    //  GPT RESULTS
    const gptSearchResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    // DISPLAY ERROR 
    if (!gptSearchResults.choices) {
      return "Movie is not found!!!";
    }
    // console.log(gptSearchResults.choices?.[0]?.message?.content)

    // SPLIT FUNC TO GENERATE ARRAY OF MOVIES FROM THE RESULTS SO WE CAN DO ARRAY METHOD(MAP)
    // the movie ressult:  Kuruthi, Hridayam, Aaraattu, Vartika, Bhramam ===> CONVERT TO ARRAY ==>
    const gptMoviesList =
      gptSearchResults.choices?.[0]?.message?.content.split(", ");

    // console.log("the gpt movie result: ", gptMoviesList);

    const promiseArray = gptMoviesList.map((movie) => tmdbSearchResults(movie));

    // 'tmdbSearchResults' IS AN ASYNC FUNCTION AND WILL RETURN ARRAY OF PROMISE NOT THE RESULT, WE WILL GET 5 PROMISE [promise,promise,promise,promise]
    // GET THE RESULT USING promise.all() WILL RESOLVE THE PROMISE AND GIVE THE RESULTS
    const finalTmdbSearchResults = await Promise.all(promiseArray);
    // console.log("the final tmdb result: ", finalTmdbSearchResults);

    // DISPATCHING TWO ACTIONS FROM ONE DISPATCH FUNCTION IN WHICH THE RESULT IS PASSING IN AS OBJECTS ********
    dispatch(
      addGptAndTmdbMovies({
        gptMovieNames: gptMoviesList,
        tmdbMovieResults:finalTmdbSearchResults,
      
      })
    );
  };
  return (
    <div className="pt-[67%]  md:pt-40  flex justify-center  md:pb-48">
      <form
        className="grid grid-cols-12 w-full md:w-1/2 justify-center"
        onSubmit={(e) => e.preventDefault()}
      >
        
        <input
          type="text"
          placeholder={languageConstants[languageSelector].gptSearchPlaceHolder}
          ref={searchText}
          className=" h-10 md:p-4 md:m-4 m-2 px-2 md:h-auto bg-white border border-red-700 text-black col-span-9 rounded-md"
        />
        <button
          className="bg-netflix_red text-white col-span-3 md:m-4 p-1 m-2 hover:bg-red-600 rounded-md"
          onClick={handleGptSearchResults}
        >
          {languageConstants[languageSelector].search}
        </button>
      </form>
    </div>
  ); 
};
export default GPTSearchBar;
