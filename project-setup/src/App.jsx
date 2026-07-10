import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import "./App.css";
import SignUp from "./pages/SignUp";
import Topics from "./pages/Topics";
import About from "./pages/About";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/signup" element={ <SignUp /> } />
          <Route path="/topics" element={ <Topics /> } />
          <Route path="/about" element={ <About /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
