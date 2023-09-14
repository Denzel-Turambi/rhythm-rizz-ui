import './SinglePoemCard.css'
import '../PoemCard.css'

function SinglePoemCard({ title, author, poem }) {

  return (
    <section className='single-poem-container'>
      <div className='single-poem-card'>
        <h1 className="single-poem-title">{title}</h1>
        <h2 className="single-poem-author">Written by: {author}</h2>
        <p className="poem-itself" style={{ whiteSpace: 'pre-line' }}>{poem}</p>
      </div>
    </section>
  )
}

export default SinglePoemCard