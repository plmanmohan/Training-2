import { useSelector } from "react-redux";
import Task from "./Task";

const TaskList = () => {
  const taskList = useSelector((state) => state.taskList);
  const filter = useSelector((state) => state.filter);
  const generateTasks = () => {
    if (filter === "COMPLETED") {
      const newList = taskList.filter((item) => item.complete);
      return newList.map((item, i) => <Task key={i} data={item} />);
    } else if (filter === "INCOMPLETED") {
      const newList = taskList.filter((item) => !item.complete);
      return newList.map((item, i) => <Task key={i} data={item} />);
    } else {
      return taskList.map((item, i) => <Task key={i} data={item} />);
    }
  };
  return (
    <div>
      <h1>TaskList</h1>
      <ul>{generateTasks()}</ul>
    </div>
  );
};

export default TaskList;
