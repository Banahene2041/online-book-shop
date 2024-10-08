import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"

function Children() {
    const [children, setChildren] = useState([])

    const getChildren = async() => {
        try {
            const response = await fetch(`https://api.bigbookapi.com/search-books?api-key=${process.env.REACT_APP_API_KEY}&genres=children&number=6`)
            const data = await response.json()
            setChildren(data.books)
        } catch (error) {
            console.log(error) 
        }
    }

    useEffect(() => {
        getChildren()
    },[])
  return (
    <div className='wrapper'>
        <div className='direct-container'>
            <Link to={`/genre/children`} className='link-direct'>children</Link>
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
            children.map((outerBook) => {
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

export default Children