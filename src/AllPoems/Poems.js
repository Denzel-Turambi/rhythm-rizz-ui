import './Poems.css'
import PoemCard from './PoemCard'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

 function Poems({poems}){
  const poemCards = poems.sort((a,b) => b.id - a.id).map(poem => {
    return (
      <Link to={`/${poem.id}`} key={poem.id}  id={poem.id} className='poems-link'>
        <PoemCard
          key={poem.id}
          title={poem.title}
          author={poem.author}
          poem={poem.poem}
          id={poem.id}
          />
      </Link>
    )
  })
  return (
    <div className="poems-container" >
      {poemCards}
    </div>
  )
}

export default Poems

Poems.propTypes = {
  poems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.string,
    author: PropTypes.string,
    poem: PropTypes.string
  }))
}