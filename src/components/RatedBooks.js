import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import Title from './Title'
import { Link } from 'react-router-dom'

const url = 'https://api.bigbookapi.com/search-books?api-key=59de79a3dbe84112bf9b41cdd81c6ce0&max-rating=0.9&number=8'
function RatedBooks() {
    const [rated,setRated] = useState([])

    const getRated = async () => {
        try {
            const resp = await fetch(url)
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
                        return <SplideSlide key={id} className='rating'>
                            <div className="image-container">
                                <Link to={`/singlebook/${id}`}><img src={image} alt="" /></Link>
                            </div>
                            <h6>{subtitle}</h6>
                            <p>{title}</p>
                            <h6><span className='rate'>rating</span><span className='rate-value'>: {rating.average.toFixed(3)}</span></h6>
                        </SplideSlide>
                    })
                })
            }
            </Splide>
        </div>   
    </div>
  )
}

export default RatedBooks
