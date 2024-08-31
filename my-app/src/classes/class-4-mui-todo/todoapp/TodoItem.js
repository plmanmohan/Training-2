import { Delete } from "@mui/icons-material";
import { ListItem, Checkbox, ListItemText, IconButton } from "@mui/material";

const TodoItem = ({ task, toggleComple, removeTodo }) => {
  return (
    <ListItem>
      <Checkbox checked={task.completed} 
       onClick={() => toggleComple(task.id)}/>
      <ListItemText primary={task.task} />
      <IconButton onClick={() => removeTodo(task.id)}>
        <Delete />
      </IconButton>
    </ListItem>
  );
};
export default TodoItem;
