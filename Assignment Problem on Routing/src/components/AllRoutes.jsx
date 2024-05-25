import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Users from "../pages/Users";
import Login from "../pages/Login";
import Courses from "../pages/Courses"; // Add this import
import Learn from "../pages/Learn"; // Add this import
import Fees from "../pages/Fees"; // Add this import
import UserDetails from "../pages/UserDetails";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/users" element={<Users />} />
      <Route path="/login" element={<Login />} />
      <Route path="/courses" element={<Courses />} /> {/* Add this route */}
      <Route path="/learn" element={<Learn />} /> {/* Add this route */}
      <Route path="/fees" element={<Fees />} /> {/* Add this route */}
      <Route path="/users/:user_id" element={<UserDetails />} />
    </Routes>
  );
}
