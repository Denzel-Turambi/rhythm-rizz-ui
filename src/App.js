import logo from './logo.svg';
import './App.css';
import './ErrorHandling/ErrorHandling.css';
import { useState, useEffect } from 'react';
import { getPoems, postPoem } from './ApiCalls';
import Poems from './Poems';
import Form from './Form/Form';
import SinglePoem from './singlePoem/SinglePoem';
import {Routes, Route, Link, NavLink, useLocation} from "react-router-dom";
import Loading from './Loading';
import ErrorCard from './ErrorHandling/ErrorCard';


function App() {
  const [poems, setPoems] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const location = useLocation().pathname


  useEffect(() => {
    setError('')
  }, [location])

  useEffect(() => {
    setLoading(true)
    getPoems()
    .then(data => {
      setPoems(data.poems)
      setLoading(false)
    })
    .catch(err => {setError(err.message)
    setLoading(false)}
    )
  }, [])


  function handleFormClick(data) {
    const updatedPoems = poems && [...poems, data];
      setPoems(updatedPoems);
  }

  return (
    <div className="App">
       <nav className="nav">
        <Link to={"/"} className="link-title">
          <h1 className="logo-title">Rhythm & Rizz</h1>
        </Link>
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
      {loading && <Loading/>} 
    <Routes>
      <Route path="/" element={<Poems poems={poems} />}/>
      <Route path="/:id" element={!error && <SinglePoem poems={poems} setError={setError} setLoading={setLoading}/>}/>
      <Route path="/form" element={<Form handleFormClick={handleFormClick} setError={setError} setLoading={setLoading} />}/>
      <Route path="*" element={<ErrorCard error={error}/>}/>
    </Routes>
    </div>
  );
}

export default App;
