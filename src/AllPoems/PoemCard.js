import './PoemCard.css'

function poemCard({title, author, poem}){
  return (
    <div className="poem-card">
      <h1 className="poem-title">{title}</h1>
      <h2 className="poem-author">Written by {author}</h2>
      <p className="poem-text">{poem}</p>
      <p className='click-for-more'>Click to read {'--->'} <span className='glasses'>👓</span></p>
    </div>
  )
}

export default poemCard


