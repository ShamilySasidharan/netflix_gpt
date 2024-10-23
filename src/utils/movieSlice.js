import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies : null,
        trailerOFTheMovie : null
    },
    reducers:{
        addNowPlayingMovies :(state,action)=>{
         state.nowPlayingMovies = action.payload
        },
        addTrailerOfTheMovie :(state,action)=>{
            state.trailerOFTheMovie = action.payload
        }
    }
});
export const {addNowPlayingMovies,addTrailerOfTheMovie} = movieSlice.actions;
export default movieSlice.reducer;