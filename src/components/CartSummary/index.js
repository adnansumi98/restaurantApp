import {useContext} from 'react'
import CartContext from '../../utils/CartContext'
import './index.css'

const CartSummary = () => {
  const {cartList} = useContext(CartContext)
  let total = 0
  cartList.forEach(eachCartItem => {
    total += eachCartItem.dish_price * eachCartItem.quantity
  })

  return (
    <>
      <div className="cart-summary-container" data-testid="cart">
        <h1 className="order-total-value" data-testid="cart">
          <span className="order-total-label" data-testid="cart">
            Order Total:
          </span>
          {cartList[0]?.dish_currency} {total}
          /-
        </h1>
        <p className="total-items" data-testid="cart">
          {cartList.length} Items in cart
        </p>
        <button
          type="button"
          className="checkout-button d-sm-none"
          data-testid="cart"
        >
          Checkout
        </button>
      </div>
      <button
        type="button"
        className="d-lg-none checkout-button"
        data-testid="cart"
      >
        Checkout
      </button>
    </>
  )
}

export default CartSummary
