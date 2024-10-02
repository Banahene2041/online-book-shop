import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"

function Education() {
    const [education, setEducation] = useState([])
    
    const getEducation = async() => {
        try {
            const response = await fetch(`https://api.bigbookapi.com/search-books?api-key=${process.env.REACT_APP_API_KEY}&genres=education&number=15`)
            const data = await response.json()
            setEducation(data.books)
        } catch (error) {
            console.log(error) 
        }
    }

    useEffect(() => {
        getEducation()
    },[])
  return (
    <div className='wrapper'>
        <div className='direct-container'>
            <Link to={`/genre/education`} className='link-direct'>education</Link>
        </div>
    <Splide
    options={{
                perPage: 4,
                arrows: true,
                arrowClassName: 'custom-arrow',
                pagination: true,
                drag: "free",
                gap: "0rem",
                responsvie:true,
                breakpoints:{
                    768:{
                        perPage:2,
                    },
                    480:{
                        perPage:2,
                        gap: "0rem",
                        pagination: false,
                    }
                },
            }}
     className='popular-main'>
        {
            education.map((outerBook) => {
                return outerBook.map((innerBook) => {
                    return (
                      <SplideSlide key={innerBook.id} className='book-item'>
                        <div data-aos='fade-up' className='img-container'>
                          <Link to={`/singlebook/${innerBook.id}`}>
                            <img
                              data-aos='fade-up'
                              src={innerBook.image}
                              alt=''
                            />
                          </Link>
                        </div>
                        <button data-aos='fade-up' className='borrow-btns'>
                          Borrow
                        </button>
                      </SplideSlide>
                    )
                })
            })
        }
    </Splide>
    </div>
  )
}

export default Education