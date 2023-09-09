import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import getPoems from './ApiCalls';
import Poems from './Poems';

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
    <main className="App">
      <nav>
        <h1 className="logo-title">~ Rhythm & Rizz ~</h1>
      </nav>
      <Poems poems={poems}/>
    </main>
  );
}

export default App;
