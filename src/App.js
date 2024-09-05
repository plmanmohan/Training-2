import { Container } from "@mui/material";
// import TaskManager from "./usereducercomponents/taskmanager/TaskManager";
import TaskManager from "./usereducercomponents/TaskManager";
import Child from "./classes/class-2-state/Child";

function App() {

  return (
    <Container maxWidth="sm">
      <TaskManager/>
      <Child/>
    </Container>
  );
}

export default App;
