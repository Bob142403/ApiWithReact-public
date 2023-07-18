import { createSlice } from "@reduxjs/toolkit";
import { searchparams } from "../../pages/utils/urls";

interface FilterState {
  find: string;
}

const initialState: FilterState = {
  find: searchparams,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFind(state, action) {
      state.find = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFind } = filterSlice.actions;

export default filterSlice.reducer;
