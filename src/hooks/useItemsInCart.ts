import { useContext } from 'react'
import { CoffeeContext } from '../contexts/CoffeeContext'

export const useItensInCart = () => {
  const { activeCoffeeInfo } = useContext(CoffeeContext)

  let numberCoffes = 0

  for (let i = 0; i < activeCoffeeInfo.length; i++) {
    if (activeCoffeeInfo[i]) {
      numberCoffes += activeCoffeeInfo[i].quantity
    }
  }

  return numberCoffes
}
