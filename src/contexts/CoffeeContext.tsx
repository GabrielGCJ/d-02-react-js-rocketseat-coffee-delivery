import { ReactNode, createContext, useState } from 'react'
import { CoffeeData, coffeeDataType } from '../data/coffeeData'

interface CreateContextType {
  coffeeInfo: coffeeDataType[]
  addCoffee: (id: string) => void
  decreaseCoffee: (id: string) => void
}

export const CoffeeContext = createContext({} as CreateContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export const CoffeeProvider = ({ children }: CoffeeContextProviderProps) => {
  const [coffeeInfo, setCoffeeInfo] = useState(CoffeeData)

  const addCoffee = (id: any) => {
    const newCofeeInfo = coffeeInfo

    for (let i = 0; i < newCofeeInfo.length; i++) {
      if (newCofeeInfo[i].id === id) {
        newCofeeInfo[i].quantity = newCofeeInfo[i].quantity + 1
      }
    }

    setCoffeeInfo(newCofeeInfo)
  }

  const decreaseCoffee = (id: string) => {
    const newCofeeInfo = coffeeInfo

    for (let i = 0; i < newCofeeInfo.length; i++) {
      if (newCofeeInfo[i].id === id) {
        newCofeeInfo[i].quantity = newCofeeInfo[i].quantity - 1
      }
    }

    setCoffeeInfo(newCofeeInfo)
  }

  return (
    <CoffeeContext.Provider value={{ coffeeInfo, addCoffee, decreaseCoffee }}>
      {children}
    </CoffeeContext.Provider>
  )
}
