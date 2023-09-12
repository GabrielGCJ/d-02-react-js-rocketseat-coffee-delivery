/* eslint-disable react-hooks/exhaustive-deps */
import { ReactNode, createContext, useState, useEffect } from 'react'
import { CoffeeData, coffeeDataType } from '../data/coffeeData'

export interface address {
  cep: string
  road: string
  numberHouse: string
  complement: string
  district: string
  city: string
  uf: string
}
interface CreateContextType {
  coffeeInfo: coffeeDataType[]
  addCoffee: (id: string) => void
  decreaseCoffee: (id: string) => void
  deleteCoffee: (id: string) => void
  allActiveCoffee: () => void
  activeCoffeeInfo: coffeeDataType[]
  totalPay: number
  setAddressUser: (address: address) => void
  addressUser: address
  setFormOfPayment: (form: string) => void
  formOfPayment: string
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
  const [totalPay, setTotalPay] = useState(0)
  const [formOfPayment, setFormOfPayment] = useState('')
  const [addressUser, setAddressUser] = useState<address>({
    cep: '',
    road: '',
    numberHouse: '',
    complement: '',
    district: '',
    city: '',
    uf: '',
  })

  const addCoffee = (id: string) => {
    const newCoffeeInfo = [...coffeeInfo]

    for (let i = 0; i < newCoffeeInfo.length; i++) {
      if (newCoffeeInfo[i].id === id) {
        newCoffeeInfo[i].quantity++
      }
    }

    setCoffeeInfo(newCoffeeInfo)
  }

  const decreaseCoffee = (id: string) => {
    const newCoffeeInfo = [...coffeeInfo]

    for (let i = 0; i < newCoffeeInfo.length; i++) {
      if (newCoffeeInfo[i].id === id) {
        newCoffeeInfo[i].quantity--
      }
    }

    setCoffeeInfo(newCoffeeInfo)
  }

  const deleteCoffee = (id: string) => {
    const coffee = [...coffeeInfo]
    let coffeeName = ''

    for (let i = 0; i < coffee.length; i++) {
      if (coffee[i].id === id) {
        coffee[i].quantity = 0
        coffeeName = coffee[i].name
      }
    }

    setCoffeeInfo(coffee)
    console.log(`Cafe ${coffeeName} removido!`)
  }

  useEffect(() => {
    allActiveCoffee()
    checkTotalPayment()
  }, [coffeeInfo])

  const allActiveCoffee = () => {
    const activeCoffee: coffeeDataType[] = []

    for (let i = 0; i < coffeeInfo.length; i++) {
      if (coffeeInfo[i].quantity > 0) {
        activeCoffee.push(coffeeInfo[i])
      }
    }
    setActiveCoffeeInfo(activeCoffee)
    console.log(activeCoffee)
  }

  const checkTotalPayment = () => {
    let totalPayment = 0

    for (let i = 0; i < coffeeInfo.length; i++) {
      if (coffeeInfo[i].quantity > 0) {
        totalPayment += coffeeInfo[i].price * coffeeInfo[i].quantity
      }
    }
    setTotalPay(totalPayment)
    console.log(`Total a pagar ${totalPayment.toFixed(2).replace('.', ',')}`)
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffeeInfo,
        addCoffee,
        decreaseCoffee,
        allActiveCoffee,
        activeCoffeeInfo,
        deleteCoffee,
        totalPay,
        addressUser,
        setAddressUser,
        formOfPayment,
        setFormOfPayment,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
