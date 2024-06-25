import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to={'/'} className='logo'>
      <p>c-wan<span className='db'>Book</span>DB</p>
    </Link>
  )
}

export default Logo
