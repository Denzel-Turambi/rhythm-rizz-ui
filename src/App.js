import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { getPoems, postPoem } from './ApiCalls';
import Poems from './Poems';
import Form from './Form/Form';
import SinglePoem from './singlePoem/SinglePoem';
import {Routes, Route, Link, useParams} from "react-router-dom"

function App() {
  const [poems, setPoems] = useState([])
  const [error, setError] = useState('')
  const params = useParams()

  useEffect(() => {
    getPoems()
    .then(data => {
      setPoems(data.poems)
    })
    .catch(err => setError(err.message))
  }, [params])

  return (
    <div className="App">
       <nav className="nav">
        <h1 className="logo-title">Rhythm & Rizz</h1>
        <div className="nav-buttons">
          <Link to={"/"} className="nav-button">
          All Poems
          </Link>
          <Link to={"/form"} className="nav-button">
          Add New Poem
          </Link>
        </div>
      </nav>
    <Routes>
      <Route path="/" element={<Poems poems={poems} />}/>
      <Route path="/:id" element={<SinglePoem poems={poems} />}/>
      <Route path="/form" element={<Form poems={poems} setPoems={setPoems} />}/>
    </Routes>
    </div>
  );
}

export default App;
