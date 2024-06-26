import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"

const url = `https://api.bigbookapi.com/search-books?api-key=5cd7124dd60247ec8039747e7b085baa&genres=fashion&number=20`
function Fashion() {
    const [fashion, setFashion] = useState([])
    
    const getFashion = async() => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setFashion(data.books)
        } catch (error) {
            console.log(error) 
        }
    }

    useEffect(() => {
        getFashion()
    },[])
  return (
    <div className='wrapper'>
        <div className='direct-container'>
            <Link to={`/genre/fashion`} className='link-direct'>fashion</Link>
        </div>
    <Splide
    options={{
                perPage: 4,
                arrows: true,
                arrowColor: {
                    next: "#0376b8",
                    prev: "#0376b8"
                },
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
            fashion.map((outerBook) => {
                return outerBook.map((innerBook) => {
                    return <SplideSlide key={innerBook.id} className='book-item'>
                        <div className="img-container">
                            <Link to={`/singlebook/${innerBook.id}`}><img src={innerBook.image} alt="" /></Link>
                        </div>
                        <button className='borrow-btns'>Borrow</button>
                    </SplideSlide>
                })
            })
        }
    </Splide>
    </div>
  )
}

export default Fashion