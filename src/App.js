import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { getPoems } from './ApiCalls';
import Poems from './Poems';
import Form from './Form/Form';
import SinglePoem from './singlePoem/Poem';
import {Routes, Route} from "react-router-dom"

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
    <Routes>
      <Route path="/" element={<Poems poems={poems} />}/>
      <Route path="/:id" element={<SinglePoem poems={poems} />}/>
      <Route path="/form" element={<Form addPoem={addPoem} />}/>
    </Routes>
    </div>
  );
}

export default App;
