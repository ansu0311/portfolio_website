import "./App.css";
import Navbar from "../src/Components/Navbar/Navbar";
import Hero from "../src/Components/Hero/Hero";
import Intro from "../src/Components/Intro/Intro";
//import Skills from "../src/Components/Skills/Skills";
import Project from "../src/Components/Projects/Project";
import Connect from "../src/Components/Connect/Connect";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="gradiant_map">
          <Navbar />
          <Hero />
          <Intro />
          <Project />
          <Connect />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
