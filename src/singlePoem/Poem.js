import { getPoemById } from "../ApiCalls";
import SinglePoemCard from "./PoemCard";
import { useState, useEffect } from "react";

function SinglePoem({poems}) {
  const [selectedPoem, setSelectedPoem] = useState({})

  useEffect(() => {
    setSelectedPoem(findPoem('1'))
    console.log(selectedPoem)
       }, [])

  function findPoem(id) {
    const selectedPoemObject = poems.find(poem => poem.id === id)
    return selectedPoemObject
  }
      
  const poemCard = selectedPoem && (
    <SinglePoemCard
      id={selectedPoem.id}
      title={selectedPoem.title}
      author={selectedPoem.author}
      poem={selectedPoem.poem}
    />
  )

  return <div>{poemCard}</div>;
  }

export default SinglePoem;