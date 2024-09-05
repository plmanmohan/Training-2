import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.count)

  const increaseClounter = () => {
    dispatch(
      {type: "INCREASE"}
    );
  }
  const dereaseCounter = () => {
    dispatch(
      {type: "DECREASE"}
    );
  }
  return (
    <Container maxWidth="sm">
      <h1>Redux counter</h1>
      <p>{counter}</p>
      <button onClick={increaseClounter}>Increase</button>
      <button onClick={dereaseCounter}>Decrease</button>
    </Container>
  );
}

export default App;
