import {createContext} from 'react'

const CartContext = createContext({
  restaurantName: '',
  updateRestaurantName: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
  cartQuantity: 0,
})

CartContext.displayName = 'CartContext'

export default CartContext
