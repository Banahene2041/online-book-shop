import React from "react";
import { Routes, Route } from "react-router-dom";
// pages
import Home from "./pages/Home"
import About from "./pages/About"
import Error from "./pages/Error"
import GenreBook from "./pages/GenreBook"
import SearchedBook from "./pages/SearchedBook"
import SingleBook from "./pages/SingleBook"
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/genre/:name" element={<GenreBook />} />
      <Route path="/book/:search" element={<SearchedBook />} />
      <Route path="/singlebook/:id" element={<SingleBook />} />
      <Route path="*" element={<Error />} />
    </Routes>
    </>
  )
}

export default App;
