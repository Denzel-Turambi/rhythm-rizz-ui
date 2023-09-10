import './Poems.css'
import PoemCard from './PoemCard'

 function Poems({poems}){
  const poemCards = poems.map(poem => {
    return (
      <PoemCard
        title={poem.title}
        author={poem.author}
        poem={poem.poem}
        id={poem.id}
        key={poem.id}
      />
    )
  })
  return (
    <div className="poems-container">
      {poemCards}
    </div>
  )
}

export default Poems