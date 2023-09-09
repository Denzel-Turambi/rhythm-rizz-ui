import './Poem.css'

function SinglePoemCard({ title, author, poem }) {
  return (
    <div className='single-poem-container'>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{poem}</p>
    </div>
  )
}

export default SinglePoemCard