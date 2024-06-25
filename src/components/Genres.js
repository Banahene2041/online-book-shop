import React from 'react'
import { buttons } from '../data'
import { Link } from 'react-router-dom'

function Genres() {
  return (
    <article className='genre-btn-section'>
        <div>
            <h3>get our book genres</h3>
        </div>
        <div className='genre-primary'>
            {
            buttons.map((item,index) => {
                const {id,name} = item
                return <div key={id} className='genre-btn-container'>
                    <Link to={`/genre/${name}`} className='genre-btn'>{name}</Link>
                </div>
            })
        }
        </div>
    </article>
  )
}

export default Genres