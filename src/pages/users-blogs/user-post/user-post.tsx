import { useDispatch } from "react-redux";
import { setModal } from "../../../store/posts/posts-reducer";
import "./user-post.css";
import { User } from "../../../types/users";

interface Props {
  user?: User;
  title: string;
  body: string;
}

function UserPost({ title, body, user }: Props) {
  const name = user?.name;
  const dispatch = useDispatch();
  return (
    <div className="card container mb-2">
      <div className="card-body">
        <h3 className="card-title text-primary">{title}</h3>
        <div className="fs-5 d-flex">
          UserName:
          <p
            className="user-post text-primary"
            onClick={() => {
              dispatch(setModal(user));
            }}
            data-bs-target="#staticBackdrop"
            data-bs-toggle="modal"
          >
            {name}
          </p>
        </div>
        <p className="card-text">{body}</p>
      </div>
    </div>
  );
}
export default UserPost;
