import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";


const reducer = {
  user: userReducer,
};

const appStore =  configureStore({
  reducer: reducer,
});

export default appStore;