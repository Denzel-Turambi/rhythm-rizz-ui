import { useParams, Link } from "react-router-dom";
import SinglePoemCard from "./SinglePoemCard";
import { useState, useEffect } from "react";
import { getPoemById, getPoems } from "../ApiCalls";
import PropTypes from 'prop-types'
import './SinglePoem.css'

function SinglePoem({ setError, setLoading }) {
  const [selectedPoem, setSelectedPoem] = useState({})
  const [randomPoemID, setRandomPoemID] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    getPoemById(id)
      .then(data => {
        setSelectedPoem(data.poem)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })

    getPoems().then(data => {
      const randomIndex = Math.floor(Math.random() * data.poems.length)
      const randomPoemID = data.poems[randomIndex].id
      setRandomPoemID(randomPoemID)
    }).catch(err => setError(err.message))
  }, [id])

  const poemCard = selectedPoem && (
    <>
      <SinglePoemCard
        id={selectedPoem.id}
        key={selectedPoem.id}
        title={selectedPoem.title}
        author={selectedPoem.author}
        poem={selectedPoem.poem}
      />
      <Link className="random-poem" to={`/${randomPoemID}`}>Next Poem</Link>
    </>
  )

  return <div className="single-poem">{poemCard}</div>;
}

export default SinglePoem;

SinglePoem.propTypes = {
  poems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.string,
    author: PropTypes.string,
    poem: PropTypes.string
  })),
  setError: PropTypes.func,
  setLoading: PropTypes.func
}