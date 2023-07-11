/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, createContext, useState } from 'react'
import { CoffeeData, coffeeDataType } from '../data/coffeeData'

interface CreateContextType {
  coffeeInfo: coffeeDataType[]
  addCoffee: (id: string) => void
  decreaseCoffee: (id: string) => void
  allActiveCoffee: () => coffeeDataType[]
  activeCoffeeInfo: coffeeDataType[]
}

export const CoffeeContext = createContext({} as CreateContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export const CoffeeContextProvider = ({
  children,
}: CoffeeContextProviderProps) => {
  const [coffeeInfo, setCoffeeInfo] = useState<coffeeDataType[]>(CoffeeData)
  const [activeCoffeeInfo, setActiveCoffeeInfo] = useState<coffeeDataType[]>([])

  const addCoffee = (id: string) => {
    const newCoffeeInfo = [...coffeeInfo]

    for (let i = 0; i < newCoffeeInfo.length; i++) {
      if (newCoffeeInfo[i].id === id) {
        newCoffeeInfo[i].quantity++
      }
    }

    setCoffeeInfo(newCoffeeInfo)
    console.log(allActiveCoffee())
  }

  const decreaseCoffee = (id: string) => {
    const newCoffeeInfo = [...coffeeInfo]

    for (let i = 0; i < newCoffeeInfo.length; i++) {
      if (newCoffeeInfo[i].id === id) {
        newCoffeeInfo[i].quantity--
      }
    }

    setCoffeeInfo(newCoffeeInfo)
    console.log(allActiveCoffee())
  }

  // useEffect(() => {}, [addCoffee, decreaseCoffee, setCoffeeInfo])

  const allActiveCoffee = () => {
    const activeCoffee: coffeeDataType[] = []

    for (let i = 0; i < coffeeInfo.length; i++) {
      if (coffeeInfo[i].quantity > 0) {
        activeCoffee.push(coffeeInfo[i])
      }
    }
    setActiveCoffeeInfo(activeCoffee)
    return activeCoffee
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffeeInfo,
        addCoffee,
        decreaseCoffee,
        allActiveCoffee,
        activeCoffeeInfo,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
