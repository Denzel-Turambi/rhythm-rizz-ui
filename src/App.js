import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import {getPoems} from './ApiCalls';
import Poems from './Poems';
import SinglePoemCard from './singlePoem/PoemCard';

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
  
  console.log('Hello')
  console.log(poems)
  return (
    <div className="App">
    {/* <Poems poems={poems}/> */}
    <SinglePoemCard />
    </div>
  );
}

export default App;
