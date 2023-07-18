import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/users";

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUsers(state, action) {
      state.users = action.payload;
    },
  },
});

export const { addUsers } = userSlice.actions;

export default userSlice.reducer;
