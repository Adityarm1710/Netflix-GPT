import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";


const reducer = {
  user: userReducer,
  movie: moviesReducer,
};

const appStore =  configureStore({
  reducer: reducer,
});

export default appStore;