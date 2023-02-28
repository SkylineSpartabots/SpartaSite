import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FontDemo from "./pages/FontDemo";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fontDemo" element={<FontDemo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
