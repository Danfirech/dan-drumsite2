import { Navbar } from "./components /Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./components /AboutMe";
import Home from "./components /Home";
import Contact from "./components /Contact";
import Videos from "./components /Videos";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Videos" element={<Videos />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="/About" element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
