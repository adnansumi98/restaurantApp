import {Link} from 'react-router-dom'
import {emptyCartImgUrl} from '../../utils/constants'
import './index.css'

const EmptyCartView = () => (
  <div className="cart-empty-view-container">
    <img
      src={emptyCartImgUrl}
      alt="cart empty"
      data-testid="cart"
      className="cart-empty-img"
    />
    <h1 className="cart-empty-heading" data-testid="cart">
      Your Cart Is Empty
    </h1>

    <Link to="/">
      <button type="button" className="shop-now-btn" data-testid="cart">
        Menu
      </button>
    </Link>
  </div>
)

export default EmptyCartView
