import './SinglePoemCard.css'
import '../AllPoems/PoemCard'

function SinglePoemCard({ title, author, poem }) {

  return (
    <section className='single-poem-container'>
      <div className='single-poem-card'>
        <h1 className="single-poem-title">{title}</h1>
        <h2 className="single-poem-author">Written by: {author}</h2>
        <p className="single-poem-text">{poem}</p>
      </div>
    </section>
  )
}

export default SinglePoemCard