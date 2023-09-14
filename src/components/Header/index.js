import {useContext} from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import CartContext from '../../utils/CartContext'
import './index.css'

function Header() {
  const {cartQuantity, restaurantName} = useContext(CartContext)

  return (
    <nav className="he-con">
      <h1 className="res-name">{restaurantName}</h1>
      <div className="he-con1">
        <p className="he-para">My Orders</p>
        <AiOutlineShoppingCart className="cart-icon" />
        <p className="c-badge">{cartQuantity} </p>
      </div>
    </nav>
  )
}

export default Header
