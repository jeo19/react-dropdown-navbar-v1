import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Consulting from "./components/Pages/Consulting";
import ContactUs from "./components/Pages/ContactUs";
import Home from "./components/Pages/Home";
import Marketing from "./components/Pages/Marketing";
import Products from "./components/Pages/Products";
import Services from "./components/Pages/Services";
import SignUp from "./components/Pages/SignUp";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
