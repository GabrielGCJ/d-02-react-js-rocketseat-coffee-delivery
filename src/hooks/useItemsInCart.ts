import { useContext } from 'react'
import { CoffeeContext } from '../contexts/CoffeeContext'

export const useItensInCart = () => {
  const { coffeeCart } = useContext(CoffeeContext)

  let numberCoffes = 0

  for (let i = 0; i < coffeeCart.length; i++) {
    if (coffeeCart[i]) {
      numberCoffes += coffeeCart[i].quantity
    }
  }

  return numberCoffes
}
