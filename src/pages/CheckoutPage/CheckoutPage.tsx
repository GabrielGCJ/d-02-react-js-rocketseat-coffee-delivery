import { useContext } from 'react'
import {
  CheckoutContainer,
  CoffeeAndBalance,
  CoffeeBalanceContainer,
  ConfirmationButton,
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
import { DeliveryValuePay } from '../../data/coffeeData'

export const CheckoutPage = () => {
  const { activeCoffeeInfo, totalPay } = useContext(CoffeeContext)

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
                <p>{`R$ ${totalPay.toFixed(2).replace('.', ',')}`}</p>
              </TotalItems>
              <DeliveryValue>
                <p>Entrega</p>
                {activeCoffeeInfo.length > 0 ? <p>R$ 3,50</p> : <p>R$ 0,00</p>}
              </DeliveryValue>
              <TotalValue>
                <h2>Total</h2>
                {activeCoffeeInfo.length > 0 ? (
                  <h2>{`R$ ${(DeliveryValuePay + totalPay)
                    .toFixed(2)
                    .replace('.', ',')}`}</h2>
                ) : (
                  <h2>R$ 0,00</h2>
                )}
              </TotalValue>
              <ConfirmationButton>
                <h3>CONFIRMAR PEDIDO</h3>
              </ConfirmationButton>
            </CoffeeBalanceContainer>
          </CoffeeAndBalance>
        </SelectedCoffees>
      </SelectedCoffeesContainer>
    </CheckoutContainer>
  )
}
