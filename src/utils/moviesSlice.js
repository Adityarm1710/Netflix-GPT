import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    moviesList: null,
    topratedmoviesList: null,
    nowplayingmoviesList: null,
    trailorVideoData: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.moviesList = action.payload;
    },
    addtopratedmovies: (state, action) => {
      state.topratedmoviesList = action.payload;
    },
    addnowplayingmovies: (state, action) => {
      state.nowplayingmoviesList = action.payload;
    },
    addTrailorVideo: (state, action) => {
      state.trailorVideoData = action.payload;
    },
  },
});

export const {
  addMovies,
  addtopratedmovies,
  addnowplayingmovies,
  addTrailorVideo,
} = moviesSlice.actions;
export default moviesSlice.reducer;
