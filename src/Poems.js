import './Poems.css'
import PoemCard from './PoemCard'
import { Link } from 'react-router-dom'

 function Poems({poems}){
  const poemCards = poems.map(poem => {
    return (
      <Link to={`/${poem.id}`} key={poem.id} >
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
    <div className="poems-container">
      {poemCards}
    </div>
  )
}

export default Poems