import { List } from "@mui/material";
import TodoItem from "./TodoItem";

const TodoList = ({todos, toggleComple, removeTodo}) => {
    const generateTasks = () => {
        return todos.map(((task, index) => (
            <TodoItem key={index} task={task} toggleComple={toggleComple} removeTodo={removeTodo}/>
        )))
    }
    return (
        <List>
            {generateTasks()}
        </List>
    );

}
export default TodoList;