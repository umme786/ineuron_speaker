import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import About from "./components/About";
import Fixed from "./components/Fixed";
import Contact from "./components/Contact"
function App() {
  return (

    <div>
      <Nav />
      <Banner />
      <About />
      <Fixed />
      <Contact />
    </div>
  );
}

export default App;
