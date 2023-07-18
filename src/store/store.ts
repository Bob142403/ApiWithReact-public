import * as toolkit from "@reduxjs/toolkit";
import postReducer from "./posts/posts-reducer";
import filterReduser from "./filters/filter-reducer";
import usersReducer from "./users/users-reducer";

export const configureStore = () =>
  toolkit.configureStore({
    reducer: {
      posts: postReducer,
      filters: filterReduser,
      users: usersReducer,
    },
  });

export type myStore = ReturnType<typeof configureStore>;
export type getState = ReturnType<myStore["getState"]>;
