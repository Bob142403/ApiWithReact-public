import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFind } from "../../../../store/filters/filter-reducer";
import { debounce } from "lodash";
import { useState } from "react";
import { searchparams } from "../../../utils/urls";

function FindPost() {
  const [searchFilterValue, setSearchFilterValue] = useState(searchparams);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const debounceOnChange = debounce((e) => {
    const options = {
      pathname: "/",
      search: `?search=${e.target.value}`,
    };
    navigate(options, { replace: true });
    dispatch(setFind(e.target.value));
  }, 5000);

  return (
    <div className="form-outline container mb-2">
      <input
        type="search"
        className="form-control"
        placeholder="Type query"
        aria-label="Search"
        value={searchFilterValue}
        onChange={debounceOnChange}
        onInput={(e) => setSearchFilterValue(e.currentTarget.value)}
      />
    </div>
  );
}

export default FindPost;
