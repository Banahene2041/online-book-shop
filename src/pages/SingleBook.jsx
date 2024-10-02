import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function SingleBook() {
  const [singlebook,setSinglebook] = useState({})
  const [loading,setLoading] = useState(false)
  const {id} = useParams()

  useEffect(() => {

    const getSinglebook = async ()=> {
      setLoading(true)
      try {
        const resp = await fetch(`https://api.bigbookapi.com/${id}?api-key=${process.env.REACT_APP_API_KEY}`)
        const data = await resp.json()
        setSinglebook(data)
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    }

    getSinglebook()

  },[id])

  
  if (loading){
    return <div className='loading-single'>
      <h2>Loading...</h2>
    </div>
  }
  
  const {title,image,publish_date,number_of_pages,authors=[{"name": "Banahene Owusu"}],identifiers={"isbn_10": "043957597"},subtitle="Pour All ingredients into a Cocktail Shaker, Mix and Serve Over ice"} = singlebook
  const name = authors.map((item) => item.name)
  return (
    <article className='single-section'>
      <div className='error-container'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
      </div>
      <div className='name'>
        <h2>{name}</h2>
      </div>
      <div className='single-container'>
        <div className='single-img'>
          <img data-aos='zoom-in' src={image} alt='' />
        </div>
        <div data-aos='fade-up' className='singlebook-info'>
          <p>
            <span>Author :</span>
            {name}
          </p>
          <p>
            <span>Title</span>
            {title}
          </p>
          <p>
            <span>Isbn_10 :</span>
            {identifiers.isbn_10}
          </p>
          <p>
            <span>Public_date :</span>
            {publish_date}
          </p>
          <p>
            <span>Number_pages :</span>
            {number_of_pages}..
          </p>
          <p>
            <span>Subtitle :</span>
            {subtitle}
          </p>
        </div>
      </div>
    </article>
  )
}

export default SingleBook
