import React, { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function Popular() {
  const [popular, setPopular] = useState([])
  const [loading, setLoading] = useState(true)

  const getPopular = async () => {
    setLoading(true)
    try {
      const response = await fetch(
        `https://api.bigbookapi.com/search-books?api-key=${process.env.REACT_APP_API_KEY}&number=10`
      )
      const data = await response.json()
      setPopular(data.books)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPopular()
  }, [])

  if (loading) {
    return (
      <div className='loading'>
        <h3>Loading...</h3>
      </div>
    )
  }
  return (
    <div className='wrapper'>
      <div className='direct-container'>
        <Link to={`/genre/novel`} className='link-direct'>
          popular
        </Link>
      </div>
      <Splide
        options={{
          perPage: 4,
          arrows: true,
          arrowColor: {
            next: "#0376b8",
            prev: "#0376b8",
          },
          pagination: true,
          drag: "free",
          gap: "0rem",
          responsvie: true,
          breakpoints: {
            768: {
              perPage: 2,
            },
            480: {
              perPage: 2,
              gap: "0rem",
              pagination: false,
            },
          },
        }}
        className='popular-main'
      >
        {popular.map((outerBook) => {
          return outerBook.map((innerBook) => {
            return (
              <SplideSlide key={innerBook.id} className='book-item'>
                <div data-aos='fade-up' className='img-container'>
                  <Link to={`/singlebook/${innerBook.id}`}>
                    <img data-aos='fade-up' src={innerBook.image} alt='' />
                  </Link>
                </div>
                <button data-aos='fade-up' className='borrow-btns'>
                  Borrow
                </button>
              </SplideSlide>
            )
          })
        })}
      </Splide>
    </div>
  )
}

export default Popular
