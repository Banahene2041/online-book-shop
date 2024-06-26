import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"

const url = `https://api.bigbookapi.com/search-books?api-key=5cd7124dd60247ec8039747e7b085baa&genres=children&number=6`
function Children() {
    const [children, setChildren] = useState([])

    const getChildren = async() => {
        try {
            const response = await fetch(url)
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

export default Children