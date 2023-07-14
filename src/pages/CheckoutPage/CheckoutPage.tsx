import { useContext } from 'react'
import cifrao from '../../assents/dollar-sign.svg'

import {
  CepInput,
  CheckoutContainer,
  CityInput,
  CoffeeAndBalance,
  CoffeeBalanceContainer,
  ComplementInput,
  ConfirmationButton,
  DeliveryForm,
  DeliveryFormContainer,
  DeliveryValue,
  DistrictCityUfContainer,
  DistrictInput,
  FormOfPaymentContainer,
  IconContainer,
  InputsContainer,
  InstructionsContainer,
  NumberAndComplementContainer,
  NumberInput,
  RoadInput,
  SelectedCoffees,
  SelectedCoffeesContainer,
  Text1,
  Text2,
  TextDeliveryForm,
  TextInformations,
  TextSelectedCoffees,
  TotalItems,
  TotalValue,
  UFInput,
} from './styles'
import { CoffeeContext } from '../../contexts/CoffeeContext'

import { SelectedCoffee } from '../../components/SelectedCoffee/SelectedCoffee'
import { DeliveryValuePay } from '../../data/coffeeData'
import { MapPinLine } from 'phosphor-react'
// import { useFormContext } from 'react-hook-form'

export const CheckoutPage = () => {
  const { activeCoffeeInfo, totalPay } = useContext(CoffeeContext)

  // const { register } = useFormContext()
  return (
    <CheckoutContainer>
      <DeliveryFormContainer>
        <TextDeliveryForm>
          <h3>Complete seu pedido</h3>
        </TextDeliveryForm>
        <DeliveryForm>
          <InstructionsContainer>
            <IconContainer>
              <MapPinLine />
            </IconContainer>
            <TextInformations>
              <Text1>
                <p>Endereço de entrega</p>
              </Text1>
              <Text2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </Text2>
            </TextInformations>
          </InstructionsContainer>

          <InputsContainer>
            <CepInput placeholder="CEP" />
            <RoadInput placeholder="Rua" />
            <NumberAndComplementContainer>
              <NumberInput placeholder="Numero" />
              <ComplementInput placeholder="Complemento" />
            </NumberAndComplementContainer>
            <DistrictCityUfContainer>
              <DistrictInput placeholder="Bairro" />
              <CityInput placeholder="Cidade" />
              <UFInput placeholder="UF" />
            </DistrictCityUfContainer>
          </InputsContainer>
        </DeliveryForm>
        <FormOfPaymentContainer>
          <InstructionsContainer>
            <IconContainer>
              {/* <MapPinLine /> */}
              <img src={cifrao} alt="" />
            </IconContainer>
            <TextInformations>
              <Text1>
                <p>Pagamento</p>
              </Text1>
              <Text2>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </Text2>
            </TextInformations>
          </InstructionsContainer>
        </FormOfPaymentContainer>
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
