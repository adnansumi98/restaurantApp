import {useContext} from 'react'
import CartContext from '../../utils/CartContext'
import EmptyCartView from '../EmptyCartView'
import CartListView from '../CartListView'
import CartSummary from '../CartSummary'
import Header from '../Header'
import './index.css'

const Cart = () => {
  const {cartList, removeAllCartItems} = useContext(CartContext)

  return (
    <>
      <Header />
      <div className="cart-container">
        {cartList.length > 0 ? (
          <div className="cart-content-container">
            <h1 className="cart-heading" data-testid="cart">
              My Cart
            </h1>
            <button
              className="remove-all-btn "
              data-testid="cart"
              type="button"
              onClick={() => {
                removeAllCartItems()
              }}
            >
              Remove All
            </button>
            <CartListView />
            <CartSummary />
          </div>
        ) : (
          <EmptyCartView data-testid="cart" />
        )}
      </div>
    </>
  )
}

export default Cart
