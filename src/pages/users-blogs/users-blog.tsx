import { useEffect } from "react";
import UserPost from "./user-post/user-post";
import { useDispatch, useSelector } from "react-redux";
import { addPosts } from "../../store/posts/posts-reducer";
import { getFilteredPosts } from "../../store/posts/posts-selector";
import Modal from "./components/modal/modal";
import { postsApi } from "../../services/posts-api";
import FindPost from "./components/find-post/find-post";
import { usersApi } from "../../services/users-api";
import { addUsers } from "../../store/users/users-reducer";
import LoadingIndicator from "./components/loading-indicator/loading-indicator";

function UserBlogs() {
  const postsList = useSelector(getFilteredPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    postsApi.getPosts().then((posts) => {
      dispatch(addPosts(posts));
    });
    usersApi.getUsers().then((users) => {
      dispatch(addUsers(users));
    });
  }, []);

  return (
    <>
      <FindPost />
      <Modal />
      {postsList.length ? (
        postsList.map((post) => {
          return (
            <UserPost
              key={post.id}
              user={post.user}
              title={post.title}
              body={post.body}
            />
          );
        })
      ) : (
        <LoadingIndicator />
      )}
    </>
  );
}
export default UserBlogs;
