import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const url = `https://api.bigbookapi.com/search-books?api-key=b60f24e29fc14431bec4ab137bd4da0d&number=10`
function Popular() {
    const [popular, setPopular] = useState([])
    const [loading,setLoading] = useState(true)

    const getPopular = async() => {
        setLoading(true)
        try {
            const response = await fetch(url)
            const data = await response.json()
            setPopular(data.books)
            setLoading(false)
        } catch (error) {
            console.log(error) 
        }
    }

    useEffect(() => {
        getPopular()
    },[])

    if (loading){
        return <div className='loading'>
            <h3>Loading...</h3>
        </div>
    }
  return (
    <div className='wrapper'>
    <h2>Popular Books</h2>
    <div className='article article-center'>
        {
            popular.map((outerBook) => {
                return outerBook.map((innerBook) => {
                    return <div key={innerBook.id} className='book-item'>
                        <div className="img-container">
                            <Link to={`/singlebook/${innerBook.id}`}><img src={innerBook.image} alt="" /></Link>
                        </div>
                        <h6>{innerBook.subtitle}</h6>
                        <h5>{innerBook.title}</h5>
                    </div>
                })
            })
        }
    </div>
    </div>
  )
}

export default Popular