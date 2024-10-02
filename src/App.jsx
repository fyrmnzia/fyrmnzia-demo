/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./section/Home";

function App() {
  return (
    <div className="bg-black text-white font-VT323 min-h-screen">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
      </main>
    </div>
  );
}

export default App;
