import React, { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"
// pages
import Home from "./pages/Home"
import About from "./pages/About"
import Error from "./pages/Error"
import GenreBook from "./pages/GenreBook"
import SearchedBook from "./pages/SearchedBook"
import SingleBook from "./pages/SingleBook"
import Navbar from "./components/Navbar"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      offset: 200,
    })
  }, [])
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/genre/:name' element={<GenreBook />} />
        <Route path='/book/:search' element={<SearchedBook />} />
        <Route path='/singlebook/:id' element={<SingleBook />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App
