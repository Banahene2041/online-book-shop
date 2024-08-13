import React, { useState, useEffect, useRef } from "react"
import { Link, useParams } from "react-router-dom"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Online from "../components/Online"
import Triller from "../components/Triller"

gsap.registerPlugin(ScrollTrigger)

function GenreBook() {
  const { name } = useParams()
  const [genreBook, setGenreBook] = useState([])
  const [loading, setLoading] = useState(true)
  const bookRefs = useRef([])

  useEffect(() => {
    const getGenre = async () => {
      setLoading(true)
      try {
        const resp = await fetch(
          `https://api.bigbookapi.com/search-books?api-key=${process.env.REACT_APP_API_KEY}&genres=${name}&number=20`
        )
        const data = await resp.json()
        setGenreBook(data.books)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    getGenre()
  }, [name])

  useEffect(() => {
    if (!loading) {
      bookRefs.current.forEach((book, index) => {
        if (book) {
          const direction =
            index % 2 === 0 ? { x: -400, opacity: 0 } : { y: 300, opacity: 0 }
          gsap.fromTo(book, direction, {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: book,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          })
        }
      })
    }
  }, [loading])

  if (loading) {
    return (
      <div className='loading'>
        <h3>Loading...</h3>
      </div>
    )
  }

  return (
    <article className='genre-section'>
      <h2>
        Welcome to{" "}
        <span className='logo'>
          C-wan<span className='welcome'>Book</span>DB
        </span>{" "}
        Library
      </h2>
      <Online />
      <Triller />
      <div className='genre-books'>
        {genreBook.map((outerItem, outerIndex) => {
          return outerItem.map((innerItem, innerIndex) => {
            const { id, image } = innerItem
            return (
              <div
                key={id}
                className='genre-wrapper'
                ref={(el) =>
                  (bookRefs.current[
                    outerIndex * genreBook.length + innerIndex
                  ] = el)
                }
              >
                <div className='main-img-container'>
                  <Link to={`/singlebook/${id}`}>
                    <img src={image} alt='' />
                  </Link>
                </div>
                <button className='main-btn'>Borrow</button>
              </div>
            )
          })
        })}
      </div>
    </article>
  )
}

export default GenreBook
