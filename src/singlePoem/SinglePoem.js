import { useParams } from "react-router-dom";
import SinglePoemCard from "./SinglePoemCard";
import { useState, useEffect } from "react";
import { getPoemById } from "../ApiCalls";
import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom";

function SinglePoem({ poems, setError }) {
  const [selectedPoem, setSelectedPoem] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()

  function checkPoemID(){
    if(poems.find(poem => poem.id === id) === undefined){
      return false;
    }
    else{
      return true;
    }
  }

  // useEffect(() => {
  //     getPoemById(id)
  //     .then(data => setSelectedPoem(data.poem))
  //     .catch(error => {setError(error.message)
  //     console.log(error.message)})
  //   }, [])

  useEffect(() => { 
    if (checkPoemID()) {
      getPoemById(id)
      .then(data => setSelectedPoem(data.poem))
      .catch(error => {setError(error.message)
      console.log(error.message)})
    } else {
      setError("Whoops! This page is not found. Please return home :)");
      navigate('*');
    }
  }, []);

      
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