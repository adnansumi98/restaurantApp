import {useState, useMemo} from 'react'
import CartContext from './utils/CartContext'
import Home from './components/Home'
import './App.css'

function App() {
  const [restaurantName, setRestaurantName] = useState('')
  const [cartQuantity, setCartQuantity] = useState(0)

  const incrementCartItemQuantity = () => {
    setCartQuantity(prev => prev + 1)
  }

  const decrementCartItemQuantity = () => {
    if (cartQuantity > 0) {
      setCartQuantity(prev => prev - 1)
    }
  }

  const updateRestaurantName = resName => {
    setRestaurantName(resName)
  }

  const providerValue = useMemo(
    () => ({
      cartQuantity,
      restaurantName,
      updateRestaurantName,
      incrementCartItemQuantity,
      decrementCartItemQuantity,
    }),
    [restaurantName, cartQuantity],
  )

  return (
    <CartContext.Provider value={providerValue}>
      <Home />
    </CartContext.Provider>
  )
}

export default App
