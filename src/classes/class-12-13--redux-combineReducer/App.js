import { Container } from "@mui/material";
import AddTask from "./components/redux2/AddTask";
import Filter from "./components/redux2/Filter";
import TaskList from "./components/redux2/TaskList";
import TaskListClassComp from "./components/redux2/TaskListClassComp";
import FilterClassComp from "./components/redux2/FilterClassComp";

function App() {

  return (
    <Container maxWidth="sm">
      <AddTask/>
      {/* <Filter/> */}
      {/* <TaskList/> */}
      <FilterClassComp />
      <TaskListClassComp/>
    </Container>
  );
}

export default App;
