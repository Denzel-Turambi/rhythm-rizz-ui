import './PoemCard.css'

export default function poemCard({title, author, id, poem}){
  return (
    <div className="poem-card">
      <h1 className="poem-title">{title}</h1>
      <h2 className="poem-author">Written by {author}</h2>
      <p className="poem-text">{poem}</p>
    </div>
  )
}