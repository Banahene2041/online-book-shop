import React from 'react'
import Popular from '../components/Popular'
import RatedBooks from '../components/RatedBooks'
import Genres from '../components/Genres'

function Home() {
  return (
    <section className='section'>
      <Genres />
      <RatedBooks />
      <Popular />
    </section>
  )
}

export default Home
