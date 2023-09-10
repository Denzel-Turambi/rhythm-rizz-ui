import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { getPoems } from './ApiCalls';
import Poems from './Poems';
import Form from './Form/Form';
import SinglePoem from './singlePoem/Poem';

function App() {
  const [poems, setPoems] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getPoems()
    .then(data => {
      setPoems(data.poems)
    })
    .catch(err => setError(err.message))
  }, [])
  
  function addPoem(newPoem) {
    setPoems([...poems, newPoem])
  }

  return (
    <div className="App">
    <Poems poems={poems}/>
    <SinglePoem poems={poems} />
    <Form addPoem={addPoem} />
    </div>
  );
}

export default App;
