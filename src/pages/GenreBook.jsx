import React,{useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import Online from '../components/Online'
import Triller from '../components/Triller'

function GenreBook() {
  const {name} = useParams()
  const [genreBook, setGenreBook] = useState([])
  const [loading,setLoading] = useState(true)

  React.useEffect(() => {
  const getGenre =  async () => {
    setLoading(true)
    try {
      const resp = await fetch(`https://api.bigbookapi.com/search-books?api-key=dbdd5d03907547738ca0fe1c2377ee50&genres=${name}&number=20`)
      const data = await resp.json()
      setGenreBook(data.books)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

    getGenre()
  },[name])

  if (loading){
    return <div className='loading'>
      <h3>Loading...</h3>
    </div>
  }

  return (
    <article className='genre-section'>
      <h2>Welcome to <span className='logo'>C-wan<span className='welcome'>Book</span>DB</span> Library</h2>
      <Online />
      <Triller />
      <div className='genre-books'>
        {
          genreBook.map((outerItem) => {
            return outerItem.map((innerItem) => {
              const {id,image} = innerItem
              return <div key={id} className='genre-wrapper'>
                <div className="main-img-container">
                  <Link to={`/singlebook/${id}`}>
                  <img src={image} alt="" />
                  </Link>
                </div>
                <button className='main-btn'>Borrow</button>
              </div>
            })
          })
        }
      </div>
    </article>
  )
}

export default GenreBook
