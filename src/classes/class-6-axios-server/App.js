import { Container } from "@mui/material";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import Logout from "./components/login/Logout";
function App() {
  
  return (
    <Container maxWidth="sm">
      <Login />
      <Signup />
      <Logout />
    </Container>
  );
}

export default App;
