import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../types/Posts";

interface PostState {
  posts: Post[];
  info: {
    userName: string;
    email: string;
    website: string;
  };
}

const initialState: PostState = {
  posts: [],
  info: { userName: "", email: "", website: "" },
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost(state, action) {
      state.posts.push({
        id: action.payload.id,
        title: action.payload.title,
        userId: action.payload.userId,
        body: action.payload.body,
      });
    },
    addPosts(state, action) {
      state.posts = action.payload;
    },
    setModal(state, action) {
      state.info = {
        userName: action.payload.name,
        email: action.payload.email,
        website: action.payload.website,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { addPost, setModal, addPosts } = postSlice.actions;

export default postSlice.reducer;
