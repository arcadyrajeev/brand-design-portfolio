// routes.jsx
import { Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Process from "./pages/Process";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/process" element={<Process />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default AppRoutes;
