import "./App.css";
import Navbar from "../src/Components/Navbar/Navbar";
import Hero from "../src/Components/Hero/Hero";
import Intro from "../src/Components/Intro/Intro";
//import Skills from "../src/Components/Skills/Skills";
import Project from "../src/Components/Projects/Project";
import Connect from "../src/Components/Connect/Connect";
import { BrowserRouter } from "react-router-dom";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useState } from "react";

function App() {

  //preloader
  const[loading,setLoading] = useState(true)
  const spinner = document.getElementById("spinner")
  if(spinner){
    setTimeout(()=>{
      spinner.style.display = "none"
      setLoading(false)
    },5500);
  }

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
      <SpeedInsights />
    </div>
  );
}

export default App;
