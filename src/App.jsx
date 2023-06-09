import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Homepage from "./Homepage";

import Projects from "./Projects"
import Contact from "./Contact";
import "./App.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route  exact path="projects" element={<Projects />} />
         <Route  exact path="contact" element={<Contact/>} />
        <Route exact ="home" element={<Homepage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}