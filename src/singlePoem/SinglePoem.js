import { useParams } from "react-router-dom";
import SinglePoemCard from "./PoemCard";
import { useState, useEffect } from "react";

function SinglePoem({poems}) {
  const [selectedPoem, setSelectedPoem] = useState({})
  const {id} = useParams()

  function findPoem(id) {
    const selectedPoemObject = poems.find(poem => poem.id.toString() === id)
    return selectedPoemObject
  }
  useEffect(() => {
    setSelectedPoem(findPoem(id))
    }, [])

      
  const poemCard = selectedPoem && (
    <SinglePoemCard
      id={selectedPoem.id}
      key={selectedPoem.id}
      title={selectedPoem.title}
      author={selectedPoem.author}
      poem={selectedPoem.poem}
    />
  )

  return <div>{poemCard}</div>;
  }

export default SinglePoem;