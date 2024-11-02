import { createSlice } from "@reduxjs/toolkit";

const gptSlice  =  createSlice({
    name : "gpt",
    initialState : {
      showGptSearch : false,
      gptMovieNames : null,
      tmdbMovieResults:null,
     
      
    },
    reducers:{
        toggleGptSearchView :(state,action)=>{
        state.showGptSearch = !state.showGptSearch
        },
        // ADDING TWO RESULTS INTO THE STORE THROUGH ONE ACTION
        addGptAndTmdbMovies :(state, action)=>{
          const {gptMovieNames,tmdbMovieResults}=action.payload
          state.gptMovieNames =  gptMovieNames
          state.tmdbMovieResults = tmdbMovieResults
        },
       
    }
})

export const {toggleGptSearchView,addGptAndTmdbMovies} = gptSlice.actions
export default gptSlice.reducer