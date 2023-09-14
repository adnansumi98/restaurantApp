import {Link} from 'react-router-dom'
import './index.css'

function NotFound() {
  return (
    <div className="not-found-container">
      <Link to="/" className="link-home">
        Go Home
      </Link>
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
        alt="not found"
        className="not-found-img"
      />
    </div>
  )
}

export default NotFound
