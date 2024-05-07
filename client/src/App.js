import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TopBar from "./components/TopBar";
import { useAuthContext } from "./hooks/useAuthContext";
import About from "./pages/About";
import AccountManage from "./pages/AccountManage";
import AddAccount from "./pages/AddAccount";
import ComingSoon from "./pages/ComingSoon";
import Dashboard from "./pages/Dashboard";
import FontDemo from "./pages/FontDemo";
import Home from "./pages/Home";
import Join from "./pages/Join";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import OurTeam from "./pages/OurTeam";
import History from "./pages/History";
import Purchase from "./pages/Purchase";
import Sponsors from "./pages/Sponsors";
import Onshape from "./pages/LearnOnshape";
import Software from "./pages/Software";
function App() {
  const { user } = useAuthContext();
  return (
    // routing for the entire site
    <Router>
      {/* navbar and footer appear on every page, so they're outside the router */}
      <TopBar />
      <Navbar />
      <Routes>
        {/* Each route has its own tag */}
        <Route path="/" element={<Home />} />
        <Route path="/fontDemo" element={<FontDemo />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route path="/history" element={<History />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/join" element={<Join />} />
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/onshape" element={<Onshape />} />
        <Route path="/software" element={<Software />} />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/dashboard" />}
        />

        <Route
          path="/dashboard"
          element={!user ? <Navigate to="/login" /> : <Dashboard />}
        />
        <Route
          path="/accounts"
          element={
            !user || !(user.isBoard || user.isAdvisor) ? (
              <Navigate to="/login" />
            ) : (
              <AccountManage />
            )
          }
        />
        <Route
          path="/addAccount"
          element={
            !user || !(user.isBoard || user.isAdvisor) ? (
              <Navigate to="/login" />
            ) : (
              <AddAccount />
            )
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
