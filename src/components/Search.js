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
      <div className='search-container'>
        <input
          type='text'
          autoComplete='off'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type='submit' className='search-btn'>
          <FaSearch />
        </button>
      </div>
    </form>
  )
}
export default Search
