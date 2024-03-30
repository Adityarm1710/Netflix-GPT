import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import langReducer from "./langSlice";

const reducer = {
  user: userReducer,
  movie: moviesReducer,
  gpt: gptReducer,
  lang: langReducer,
};

const appStore =  configureStore({
  reducer: reducer,
});

export default appStore;