import { createSlice } from "@reduxjs/toolkit";

const gptSlice= createSlice({
  name: "gpt",
  initialState:{
    viewStatus: false,
  },
  reducers:{
    toggleviewStatus: (state)=>{
       state.viewStatus= !state.viewStatus;
    },
  },
});

export const {toggleviewStatus} = gptSlice.actions;
export default gptSlice.reducer;