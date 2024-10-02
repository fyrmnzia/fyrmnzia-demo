/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./section/Home";
import About from "./section/About";

function App() {
  return (
    <div className="bg-black text-white font-VT323 min-h-screen">
      <Navbar />
      <main className="mx-10 md:mx-20">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
      </main>
    </div>
  );
}

export default App;
