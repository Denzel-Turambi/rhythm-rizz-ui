import { useParams } from "react-router-dom";
import SinglePoemCard from "./PoemCard";
import { useState, useEffect } from "react";
import { getPoemById } from "../ApiCalls";
import PropTypes from 'prop-types'

function SinglePoem({ poems }) {
  const [selectedPoem, setSelectedPoem] = useState({})
  const { id } = useParams()
 console.log(poems)
//  console.log(typeof selectedPoem.poem, "poem")
  useEffect(() => {
    getPoemById(id).then(data => setSelectedPoem(data.poem))
    }, [id])

      
  const poemCard = selectedPoem ? (
    <SinglePoemCard
      id={selectedPoem.id}
      key={selectedPoem.id}
      title={selectedPoem.title}
      author={selectedPoem.author}
      poem={selectedPoem.poem}
    />
  ) : null

  return <div>{poemCard}</div>;
  }

export default SinglePoem;

SinglePoem.propTypes = {
  poems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    poem: PropTypes.string
  }))
}