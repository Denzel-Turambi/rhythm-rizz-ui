import logo from './logo.svg';
import './App.css';
import './ErrorHandling/ErrorHandling.css';
import { useState, useEffect } from 'react';
import { getPoems, postPoem } from './ApiCalls';
import Poems from './Poems';
import Form from './Form/Form';
import SinglePoem from './singlePoem/SinglePoem';
import {Routes, Route, Link, NavLink, useLocation} from "react-router-dom"
import ErrorCard from './ErrorHandling/ErrorCard';


function App() {
  const [poems, setPoems] = useState([])
  const [error, setError] = useState('')
  const location = useLocation().pathname
  // const params = useParams()

  useEffect(() => {
    setError('')
  }, [location])

  useEffect(() => {
    getPoems()
    .then(data => {
      setPoems(data.poems)
    })
    .catch(err => setError(err.message))
  }, [])


  function handleFormClick(data) {
    const updatedPoems = poems && [...poems, data];
      setPoems(updatedPoems);
  }

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
      {error && <ErrorCard error={error}/>}
    <Routes>
      <Route path="/" element={<Poems poems={poems} />}/>
      <Route path="/:id" element={!error && <SinglePoem poems={poems} setError={setError}/>}/>
      <Route path="/form" element={<Form handleFormClick={handleFormClick} />}/>
      <Route path="*" element={<ErrorCard error={error}/>}/>
    </Routes>
    </div>
  );
}

export default App;
