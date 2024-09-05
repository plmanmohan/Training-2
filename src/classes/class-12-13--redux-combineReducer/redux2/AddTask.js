import { useState } from "react";
import {useDispatch} from 'react-redux';
import { ADD_TASK, CLEAR_TASKS } from "./actions";

const AddTask = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleOnchange = (e) => {
        setTask(e.target.value);
    }
    const handleAddition = () => {
        if(task.trim()) {
            dispatch({
                type: ADD_TASK,
                payload: {id: Date.now(), task: task, complte: false}
            })
            setTask('');
        }
    }
    const handleClearTask = () => {
        dispatch({
            type: CLEAR_TASKS,
        })
    }
  return (
    <div>
      <h1>Add Task</h1>
      <input
        type="text"
        placeholder="New Task"
        value={task}
        onChange={handleOnchange}
      />
      <button onClick={handleAddition}>Add</button>
      <button onClick={handleClearTask}>Clear Tasks</button>
    </div>
  );
};
export default AddTask;
