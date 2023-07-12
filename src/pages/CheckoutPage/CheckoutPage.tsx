import { useContext } from 'react'
import {
  CheckoutContainer,
  DeliveryForm,
  DeliveryFormContainer,
  SelectedCoffees,
  SelectedCoffeesContainer,
  TextDeliveryForm,
  TextSelectedCoffees,
} from './styles'
import { CoffeeContext } from '../../contexts/CoffeeContext'

import { Coffee } from 'phosphor-react'

import { SelectedCoffee } from '../../components/SelectedCoffee/SelectedCoffee'

export const CheckoutPage = () => {
  const { activeCoffeeInfo } = useContext(CoffeeContext)

  return (
    <CheckoutContainer>
      <DeliveryFormContainer>
        <TextDeliveryForm>
          <h1>DeliveryForm</h1>
        </TextDeliveryForm>
        <DeliveryForm></DeliveryForm>
      </DeliveryFormContainer>

      <SelectedCoffeesContainer>
        <TextSelectedCoffees>
          <h1>SelectedCoffees</h1>
        </TextSelectedCoffees>
        <SelectedCoffees>
          <SelectedCoffee />
        </SelectedCoffees>
      </SelectedCoffeesContainer>
    </CheckoutContainer>
  )
}
