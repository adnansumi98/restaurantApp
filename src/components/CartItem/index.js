import {useContext} from 'react'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import CartContext from '../../utils/CartContext'
import './index.css'

const CartItem = props => {
  const {
    removeCartItem,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
  } = useContext(CartContext)
  const {cartItemDetails} = props
  const {
    dishId,
    dishName,
    dishType,
    quantity,
    dishPrice,
    dishCurrency,
    dishImage,
  } = cartItemDetails
  return (
    <li className="cart-item">
      <img src={dishImage} alt={dishName} className="cart-product-image" />
      <div className="cart-item-details-container">
        <div className="cart-product-title-brand-container">
          <p className="cart-product-title">{dishName}</p>
          <p className="cart-product-brand">
            {dishType === 1 ? 'Non-Veg' : 'Veg'}
          </p>
        </div>
        <div className="cart-quantity-container">
          <button
            type="button"
            className="quantity-controller-button"
            onClick={() => {
              decrementCartItemQuantity(dishId)
            }}
          >
            <BsDashSquare color="gray" size={12} />
          </button>
          <p className="cart-quantity">{quantity}</p>
          <button
            type="button"
            className="quantity-controller-button"
            onClick={() => {
              incrementCartItemQuantity(dishId)
            }}
          >
            <BsPlusSquare color="gray" size={12} />
          </button>
        </div>
        <div className="total-price-remove-container">
          <p className="cart-total-price">
            {dishCurrency} {dishPrice * quantity}/-
          </p>
          <button
            className="remove-button"
            type="button"
            onClick={() => {
              removeCartItem(dishId)
            }}
          >
            Remove
          </button>
        </div>
      </div>
      <button
        className="delete-button "
        type="button"
        onClick={() => {
          removeCartItem(dishId)
        }}
      >
        <AiFillCloseCircle color="#616E7C" size={20} />
      </button>
    </li>
  )
}

export default CartItem
