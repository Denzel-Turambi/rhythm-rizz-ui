import './ErrorHandling.css'
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

function ErrorCard({ error }) {
  return (
    <div className="error-container">
      <div className="error-box">
        <h1 className="error-text">Oops! Page not found!</h1>
        <h3 className="error-text">Error {error}, a digital twist, </h3>
        <h3 className="error-text">The page you seek does not exist.</h3>
        <h3 className="error-text">This link's journey ends right here,</h3>
        <h3 className="error-text">Try again and have no fear!</h3>
      </div>
      <Link to={"/"} className="error-button">Try Again</Link>
    </div>
  )
}

export default ErrorCard;

ErrorCard.propTypes = {
  error: PropTypes.string
}