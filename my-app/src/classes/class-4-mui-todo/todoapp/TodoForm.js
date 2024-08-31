import { Button, TextField } from "@mui/material";
import { useState } from "react";

const TodoForm = ({addTodo}) => {
    const [task, settask] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.trim()) {
            addTodo(task);
            settask('');
        }
    }
    const handleChnage = (e) => {
        settask(e.target.value);
    }
    return (
        <form onSubmit={handleSubmit}
        style={{display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>
            <TextField
                label="New Task"
                variant="outlined"
                style={{marginRight: '10px'}}
                onChange={handleChnage}
                value={task}
            />
            <Button type="submit" variant="contained" color="primary">Add</Button>
        </form>
    );
}
export default TodoForm;