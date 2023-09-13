import './ErrorHandling.css'
import { NavLink } from 'react-router-dom';

function Error404() {
  return (
    <div className="error-container">
      <div className="error-box">
        <h1 className="error-text">Oops! Page not found!</h1>
        <h3 className="error-text">Error 404, a digital twist, </h3>
        <h3 className="error-text">The page you seek does not exist.</h3>
        <h3 className="error-text">This link's journey ends right here,</h3>
        <h3 className="error-text">Return to home and have no fear!</h3>
      </div>
      <NavLink to="/" className="error-button">Go Back Home</NavLink>
    </div>
  )
}

export default Error404;