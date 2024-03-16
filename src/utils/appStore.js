import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";


// const reducer = {
//   user: userReducer,
//   movie: movieReducer,
// };

const appStore =  configureStore({
  // reducer: reducer,
  reducer:{
    user: userReducer,
    movies: moviesReducer,
  }
});

export default appStore;