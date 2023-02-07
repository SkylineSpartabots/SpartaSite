import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FontDemo from "./components/FontDemo";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fontDemo" element={<FontDemo />} />
      </Routes>
    </Router>
  );
}

export default App;
