import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies : null,
        trailerOFTheMovie : null,
        popularMovies: null,
        topRatedMovies:null,
        upComingMovies:null
    },
    reducers:{
        addNowPlayingMovies :(state,action)=>{
         state.nowPlayingMovies = action.payload
        },
        addTrailerOfTheMovie :(state,action)=>{
            state.trailerOFTheMovie = action.payload
        },
        addPopularMovies : (state,action)=>{
         state.popularMovies = action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload
        },
        addUpComingMovies:(state,action)=>{
            state.upComingMovies = action.payload
        }
    }
});
export const {addNowPlayingMovies,addTrailerOfTheMovie,addPopularMovies,addTopRatedMovies,addUpComingMovies} = movieSlice.actions;
export default movieSlice.reducer;