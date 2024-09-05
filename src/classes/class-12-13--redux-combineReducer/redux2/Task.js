import { useDispatch } from "react-redux";
import { toggleCompletion } from "./actions";

const Task = ({ data }) => {
  const dispatch = useDispatch();

  const handleOnChange = () => {
    dispatch(toggleCompletion(data.id));
  };
  console.log('data: ', data);
  return (
    <li>
      <input
        type="checkbox"
        checked={data.complete}
        onChange={handleOnChange}
      />
      <span style={{ textDecoration: data.complete ? "line-through" : "none" }}>
        {data.task}
      </span>
    </li>
  );
};
export default Task;
