import { useContext } from 'react'
import {
  CheckoutContainer,
  CoffeeAndBalance,
  CoffeeBalanceContainer,
  DeliveryForm,
  DeliveryFormContainer,
  DeliveryValue,
  SelectedCoffees,
  SelectedCoffeesContainer,
  TextDeliveryForm,
  TextSelectedCoffees,
  TotalItems,
  TotalValue,
} from './styles'
import { CoffeeContext } from '../../contexts/CoffeeContext'

import { SelectedCoffee } from '../../components/SelectedCoffee/SelectedCoffee'

export const CheckoutPage = () => {
  const { activeCoffeeInfo } = useContext(CoffeeContext)

  return (
    <CheckoutContainer>
      <DeliveryFormContainer>
        <TextDeliveryForm>
          <h3>DeliveryForm</h3>
        </TextDeliveryForm>
        <DeliveryForm></DeliveryForm>
      </DeliveryFormContainer>

      <SelectedCoffeesContainer>
        <TextSelectedCoffees>
          <h3>Cafés Selecionados</h3>
        </TextSelectedCoffees>
        <SelectedCoffees>
          <CoffeeAndBalance>
            {activeCoffeeInfo.map((coffee) => {
              return (
                <SelectedCoffee
                  key={coffee.id}
                  id={coffee.id}
                  img={coffee.img}
                  name={coffee.name}
                  price={coffee.price}
                  quantity={coffee.quantity}
                />
              )
            })}
            <CoffeeBalanceContainer>
              <TotalItems>
                <p>Total de itens</p>
                <p>R$ 29,80</p>
              </TotalItems>
              <DeliveryValue>
                <p>Entrega</p>
                <p>R$ 3,50</p>
              </DeliveryValue>
              <TotalValue>
                <h2>Total</h2>
                <h2>R$ 21,50</h2>
              </TotalValue>
            </CoffeeBalanceContainer>
          </CoffeeAndBalance>
        </SelectedCoffees>
      </SelectedCoffeesContainer>
    </CheckoutContainer>
  )
}
