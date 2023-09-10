import './Poem.css'

function SinglePoemCard({ title, author, poem }) {
  return (
    <div className='single-poem-container'>
      <h2>Title: {title} heyyyyy</h2>
      <p>Author: {author}</p>
      <p>{poem}</p>
    </div>
  )
}

export default SinglePoemCard