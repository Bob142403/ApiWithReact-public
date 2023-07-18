import { createSelector } from "@reduxjs/toolkit";
import { getFind } from "../filters/filter-selector";
import { getState } from "../store";
import { Post } from "../../types/Posts";
import { getUsers } from "../users/users-selector";

export const getPosts = (state: getState) => state.posts.posts;
export const getInfo = (state: getState) => state.posts.info;
export const getFilteredPosts = createSelector(
  getPosts,
  getFind,
  getUsers,
  (posts, search, users): Post[] => {
    return posts
      .filter((post) => post.title.includes(search.trim()))
      .map((post) => ({
        ...post,
        user: users.find((user) => user.id === post.userId),
      }));
  }
);
