import { createSlice } from "@reduxjs/toolkit";

const moviesSlice= createSlice({
  name: "movies",
  initialState: {
    moviesList: null,
    trailorVideoData: null,
  },
  reducers:{
    addMovies: (state,action)=>{
        state.moviesList=action.payload;
    },
    addTrailorVideo: (state,action) =>{
       state.trailorVideoData = action.payload;
    },
  },
});

export const {addMovies, addTrailorVideo} = moviesSlice.actions;
export default moviesSlice.reducer;