import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import Title from './Title'
import { Link } from 'react-router-dom'

function RatedBooks() {
    const [rated,setRated] = useState([])

    const getRated = async () => {
        try {
            const resp = await fetch(`https://api.bigbookapi.com/search-books?api-key=${process.env.REACT_APP_API_KEY}&max-rating=0.9&number=8`)
            const data = await resp.json()
            setRated(data.books)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getRated()
    },[])
  return (
    <div className='rate-section'>   
        <Title title={"rated books"}/>
        <div>
            <Splide
            options={{
                perPage: 4,
                rewind: true,
                arrows:false,
                pagination: false,
                drag: "free",
                gap: "2rem",
                autoplay: true,
                responsvie:true,
                breakpoints:{
                    768:{
                        perPage:2,
                    },
                    480:{
                        perPage:1,
                        gap: "1.5rem",
                        autoplay: true,
                        autoplayInterval: 2000,
                    }
                }
            }} className="slide" >
                {
                rated.map((outerItem) => {
                    return outerItem.map((innerItem) => {
                        const {id,title,subtitle,image,rating} = innerItem
                        return (
                          <SplideSlide key={id} className='rating'>
                            <div data-aos='fade-up' className='image-container'>
                              <Link to={`/singlebook/${id}`}>
                                <img data-aos='fade-up' src={image} alt='' />
                              </Link>
                            </div>
                            <h6 data-aos='fade-up'>{subtitle}</h6>
                            <p data-aos='fade-up'>{title}</p>
                            <h6 data-aos='fade-up'>
                              <span data-aos='fade-up' className='rate'>
                                rating
                              </span>
                              <span data-aos='fade-up' className='rate-value'>
                                : {rating.average.toFixed(3)}
                              </span>
                            </h6>
                          </SplideSlide>
                        )
                    })
                })
            }
            </Splide>
        </div>   
    </div>
  )
}

export default RatedBooks
