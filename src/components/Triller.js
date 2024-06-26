import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import Title from './Title'
import { Link } from 'react-router-dom'

function Triller() {
    const [rated,setRated] = useState([])

    const getRated = async () => {
        try {
            const resp = await fetch(`https://api.bigbookapi.com/search-books?api-key=${process.env.REACT_APP_API_KEY}&genres=sports&number=10`)
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
        <Title title={"Sports"}/>
        <div>
            <Splide
            options={{
                perPage: 4,
                arrows: false,
                pagination: false,
                rewind: true,
                drag: "free",
                gap: "2rem",
                responsvie:true,
                breakpoints:{
                    768:{
                        perPage:2,
                    },
                    480:{
                        perPage:1,
                        gap: "1.5rem",
                        autoplay: true,
                        pagination:true,
                        autoplayInterval: 2000,
                    }
                }
            }} className="slide" >
                {
                rated.map((outerItem) => {
                    return outerItem.map((innerItem) => {
                        const {id,title,subtitle,image} = innerItem
                        return <SplideSlide key={id} className='rating'>
                            <div className="image-container">
                                <Link to={`/singlebook/${id}`}><img src={image} alt="" /></Link>
                            </div>
                            <h6>{subtitle}</h6>
                            <p>{title}</p>
                        </SplideSlide>
                    })
                })
            }
            </Splide>
        </div>   
    </div>
  )
}

export default Triller
