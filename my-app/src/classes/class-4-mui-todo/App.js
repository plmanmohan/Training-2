import { Container, Typography, Paper } from "@mui/material";
import TodoForm from "./components/todoapp/TodoForm";
import { useState } from "react";
import TodoList from "./components/todoapp/TodoList";
function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (task) => {
    setTodos([...todos, { id: Date.now(), task: task, completed: false }]);
    console.log("todos: ", todos);
  };
  const toggleComple = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <Container maxWidth="sm">
      <Typography variant="hd" align="center" gutterBottom>
        My Todo List
      </Typography>
      <Paper style={{ padding: "20px" }}>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          toggleComple={toggleComple}
          removeTodo={removeTodo}
        />
      </Paper>
    </Container>
  );
}

export default App;
