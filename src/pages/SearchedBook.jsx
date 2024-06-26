import React from 'react'
import { Link, useParams } from 'react-router-dom'

function SearchedBook() {
  const [books,setBooks] = React.useState([])
  const [loading,setLoading] = React.useState(false)
  const {search} = useParams()

  React.useEffect(() => {
    const getSearchItem = async() => {
      setLoading(true)
      try {
        const resp = await fetch(`https://api.bigbookapi.com/search-books?api-key=59de79a3dbe84112bf9b41cdd81c6ce0&query=${search}`)
        const data = await resp.json()
        setBooks(data.books)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    getSearchItem()

  },[search])

  if (loading){
    return <div className='loading'>
      <h2>Loading...</h2>
    </div>
  }

  if (books.length < 1){
    return <div className='no-search'>
      <h3>No Item Matched your searched result <span className='search-key'>"{search}"</span></h3>
    </div>
  }

  return (
    <article className='search-section'>
      <div className='key-container'>
        <h3>your search <span className='search-key'>"{search}"</span></h3>
      </div>
      <div className='search-main-div'>
        {
            books.map((outerBook) => {
                return outerBook.map((innerBook) => {
                    return <div key={innerBook.id} className='single-search'>
                        <div className="search-img-container">
                            <Link to={`/singlebook/${innerBook.id}`}><img src={innerBook.image} alt="" /></Link>
                        </div>
                          <h6>{innerBook.subtitle}</h6>
                        <h5>{innerBook.title}</h5>
                    </div>
                })
            })
        }
    </div>
    </article>
  )
}

export default SearchedBook
