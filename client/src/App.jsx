import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ Import Footer
import Teaclub from "./pages/Teaclub";
import Teaware from './pages/Teaware'
const App = () => {
  return (
    <Router>
      {/* Navbar appears on all pages */}
      <Navbar />

      {/* Page content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tea-club" element={<Teaclub/> } />
        <Route path="/teaware" element={<Teaware/> } />
      </Routes>

      {/* ✅ Footer appears on all pages */}
      <Footer />
    </Router>
  );
};

export default App;
