import { getInfo } from "../../../../store/posts/posts-selector";
import { useSelector } from "react-redux";

function Modal() {
  let info = useSelector(getInfo);
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              About: {info.userName}
            </h1>
          </div>
          <div className="modal-body">
            <div className="d-flex">
              <p>User: </p>
              <p id="userInfo" className="text-primary">
                {info.userName}
              </p>
            </div>
            <div className="d-flex">
              <p>Email: </p>
              <p id="emailInfo" className="text-primary">
                {info.email}
              </p>
            </div>
            <div className="d-flex">
              <p>Website: </p>
              <p id="website" className="text-primary">
                {info.website}
              </p>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
