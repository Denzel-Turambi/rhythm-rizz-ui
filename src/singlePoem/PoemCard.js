import './Poem.css'
import '../PoemCard.css'

function SinglePoemCard({ title, author, poem }) {
  return (
    <section className='single-poem-container'>
      <div className='single-poem-card'>
        <h1 className="poem-title">{title}</h1>
        <h2 className="poem-author">Written by {author}</h2>
        <p className="poem-text">{poem}</p>
      </div>
    </section>
  )
}

export default SinglePoemCard