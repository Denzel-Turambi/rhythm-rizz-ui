import { useParams } from "react-router-dom";
import SinglePoemCard from "./SinglePoemCard";
import { useState, useEffect } from "react";
import { getPoemById } from "../ApiCalls";
import PropTypes from 'prop-types'

function SinglePoem({ poems, setError }) {
  const [selectedPoem, setSelectedPoem] = useState({})
  const { id } = useParams()

  useEffect(() => { 
      getPoemById(id)
      .then(data => setSelectedPoem(data.poem))
      .catch(error => {setError(error.message)
      console.log(error.message)})
  }, [id]);
  
  const poemCard = selectedPoem ? (
    <SinglePoemCard
      id={selectedPoem.id}
      key={selectedPoem.id}
      title={selectedPoem.title}
      author={selectedPoem.author}
      poem={selectedPoem.poem}
    />
  ) : null

  if (selectedPoem) {
    return <div>{poemCard}</div>;
  }
  }

export default SinglePoem;

SinglePoem.propTypes = {
  poems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.string,
    author: PropTypes.string,
    poem: PropTypes.string
  }))
}