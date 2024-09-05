import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import taskReducer from "./taskReducer";

export default combineReducers({
    taskList: taskReducer,
    filter: filterReducer,
})