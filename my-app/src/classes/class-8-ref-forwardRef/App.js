import { Container } from "@mui/material";
// import Focusmanager from "./components/refrence/functionalComponents/Focusmanager";
import FancyButton from "./components/refrence/forwardRef/FancyButton";
import { useRef } from "react";

function App() {
  const buttonRef = useRef(null);

  const handleClick = () => {
    buttonRef.current.focus();
  }
  return (
    <Container maxWidth="sm">
      {/* <Focusmanager/> */}
      <FancyButton ref={buttonRef} name="Ram"> Click Me</FancyButton>
      <button onClick={handleClick}>Focus Fancy Button</button>
    </Container>
  );
}

export default App;
