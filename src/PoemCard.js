export default function poemCard({title, author, poem}){
  return (
    <div className="poemCard">
      <h1>title: {title}</h1>
      <h2>author: {author}</h2>
      <p>{poem}</p>
    </div>
  )
}