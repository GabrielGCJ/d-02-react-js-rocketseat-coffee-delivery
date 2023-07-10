import { ReactNode, createContext, useState } from 'react'
import { CoffeeData, coffeeDataType } from '../data/coffeeData'

interface CreateContextType {
  coffeeInfo: coffeeDataType[]
  //   setcoffeeInfo: () => void
}

export const CoffeeContext = createContext({} as CreateContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export const CoffeeProvider = ({ children }: CoffeeContextProviderProps) => {
  const [coffeeInfo, setcoffeeInfo] = useState(CoffeeData)

  return (
    <CoffeeContext.Provider value={{ coffeeInfo }}>
      {children}
    </CoffeeContext.Provider>
  )
}
