import React from 'react'
import { genre } from '../data'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"


function Online() {
  return (
    <div className='online-section'>
        <Splide
        options={{
                perPage: 3,
                arrows: true,
                pagination: false,
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
                    }
                }
            }}
        >
            {
          genre.map((item) => {
            const {id,image,title,info} = item
            return <SplideSlide key={id} className='online-map'>
              <div className="library-img-container">
                <img src={image} alt="" />
              </div>
              <div className='online-book'>
                <h3>{title}</h3>
                <p>{info}</p>
              </div>
            </SplideSlide>
          })
        }
        </Splide>
      </div>
  )
}

export default Online
