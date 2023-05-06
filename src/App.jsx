import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Homepage";
import Goals from "./Goals";
import Projects from "./Projects"
import Contact from "./Contact";
import "./App.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route index element={<Homepage />} />
          <Route path="goals" element={<Goals />} />
          <Route path="projects" element={<Projects />} />
    <Route path="contact" element={<Contact/>} />
        <Route path="home" element={<Homepage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}