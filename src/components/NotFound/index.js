import {Link} from 'react-router-dom'
import {notFoundImgUrl} from '../../utils/constants'
import './index.css'

function NotFound() {
  return (
    <div className="not-found-container">
      <Link to="/" className="link-home">
        Go Home
      </Link>
      <img src={notFoundImgUrl} alt="not found" className="not-found-img" />
    </div>
  )
}

export default NotFound
