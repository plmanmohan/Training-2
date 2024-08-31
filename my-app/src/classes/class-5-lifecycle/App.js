import { Container } from "@mui/material";
import SampleUpdatePhase from "./components/lifecycle/SampleUpdatePhase";
import SimpleFunctionalComponent from "./components/lifecycle/SimpleFunctionalComponent";
function App() {
  
  return (
    <Container maxWidth="sm">
      {/* <SampleUpdatePhase color={"green"}/> */}
      <SimpleFunctionalComponent />
    </Container>
  );
}

export default App;
