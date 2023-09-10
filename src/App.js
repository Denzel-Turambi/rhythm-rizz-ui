import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { getPoems, postPoem } from './ApiCalls';
import Poems from './Poems';
import Form from './Form/Form';
import SinglePoem from './singlePoem/SinglePoem';
import {Routes, Route, Link} from "react-router-dom"

function App() {
  const [poems, setPoems] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getPoems()
    .then(data => {
      setPoems(data.poems)
    })
    .catch(err => setError(err.message))
  }, [poems])

  return (
    <div className="App">
       <nav>
        <h1 className="logo-title">Rhythm & Rizz</h1>
      </nav>
      <Link to={"/form"}>
        <button>Form</button>
      </Link>
      <Link to={"/"}>
        <button>Poems</button>
      </Link>
    <Routes>
      <Route path="/" element={<Poems poems={poems} />}/>
      <Route path="/:id" element={<SinglePoem poems={poems} />}/>
      <Route path="/form" element={<Form />}/>
    </Routes>
    </div>
  );
}

export default App;
