import Popular from '../components/Popular'
import RatedBooks from '../components/RatedBooks'
import Genres from '../components/Genres'
import Kids from '../components/Children'
import Fashion from '../components/Fashion'
import Education from '../components/Education'

function Home() {
  return (
    <section className='section'>
      <Genres />
      <RatedBooks />
      <Popular />
      <Education />
      <Kids />
      <Fashion />
    </section>
  )
}

export default Home
