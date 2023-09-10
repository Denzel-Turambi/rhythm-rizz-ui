import { useParams } from "react-router-dom";
import SinglePoemCard from "./PoemCard";
import { useState, useEffect } from "react";
import { getPoemById } from "../ApiCalls";

function SinglePoem({poems}) {
  const [selectedPoem, setSelectedPoem] = useState({})
  const {id} = useParams()

  useEffect(() => {
    getPoemById(id).then(data => setSelectedPoem(data.poem))
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