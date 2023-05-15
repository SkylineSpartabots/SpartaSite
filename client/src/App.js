import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sponsors from "./pages/Sponsors";
import FontDemo from "./pages/FontDemo";
import About from "./pages/About";
import Footer from "./components/Footer";
import Join from "./pages/Join";
import EISponsors from "./pages/ElliotIggy_Sponsors"

function App() {
  return (
    // routing for the entire site
    <Router>
      {/* navbar and footer appear on every page, so they're outside the router */}
      <Navbar />
      <Routes>
        {/* Each route has its own tag */}
        <Route path="/" element={<Home />} />
        <Route path="/fontDemo" element={<FontDemo />} />
        <Route path="/about" element={<About />} />
        <Route path="/sponsors" element={<EISponsors />} /> {/* Change to see sponsors page you imported above */}
        <Route path="/join" element={<Join />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
