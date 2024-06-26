import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Search() {
  const navigate = useNavigate()
  const [searchTerm,setSearchTerm] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchTerm){
      navigate(`/book/${searchTerm}`)
      setSearchTerm("")
    }
      setSearchTerm("")
  }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <input type="text" autoComplete='off' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <button type="submit" className='search-btn'>
        <FaSearch />     
        </button>
    </form>
  )
}
export default Search
