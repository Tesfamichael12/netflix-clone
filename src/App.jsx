import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="header-spacer" />
      <Home />
      <Footer />
    </>
  );
}

export default App;
