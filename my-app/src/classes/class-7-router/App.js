import { Container } from "@mui/material";
import NavBar from "./components/pages/NavBar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Container maxWidth="sm">
      <NavBar/>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Container>
  );
}

export default App;
