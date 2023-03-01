import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sponsors from "./pages/Sponsors";
import FontDemo from "./pages/FontDemo";
import About from "./pages/About";
import Footer from "./components/Footer";
import Join from "./pages/Join";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fontDemo" element={<FontDemo />} />
        <Route path="/about" element={<About />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/join" element={<Join />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
