import { useContext } from 'react'
import cifrao from '../../assents/dollar-sign.svg'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import {
  CepInput,
  CheckoutContainer,
  InstructionsContainer,
  TextInformations,
  CityInput,
  CoffeeAndBalance,
  CoffeeBalanceContainer,
  ComplementInput,
  DeliveryForm,
  DeliveryFormContainer,
  DeliveryValue,
  DistrictCityUfContainer,
  DistrictInput,
  IconContainer,
  InputsContainer,
  NumberAndComplementContainer,
  NumberInput,
  RoadInput,
  SelectedCoffees,
  SelectedCoffeesContainer,
  Text1,
  Text2,
  TextDeliveryForm,
  TextSelectedCoffees,
  TotalItems,
  TotalValue,
  UFInput,
} from './styles'

import { CoffeeContext } from '../../contexts/CoffeeContext'

import { SelectedCoffee } from '../../components/SelectedCoffee/SelectedCoffee'
import { DeliveryValuePay } from '../../data/coffeeData'
import { Bank, CreditCard, MapPinLine, Money } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { FormOfPayment } from '../../components/FormOfPayment/FormOfPayment'

export const CheckoutPage = () => {
  const { activeCoffeeInfo, totalPay, setAddressUser, addressUser } =
    useContext(CoffeeContext)

  const addressForm = zod.object({
    cep: zod.string().min(8, 'Informe o Cpf'),
    road: zod.string().min(1, 'Informe o Cpf'),
    numberHouse: zod.string().min(1, 'Informe o Cpf'),
    complement: zod.string().min(1, 'Informe o Cpf'),
    district: zod.string().min(1, 'Informe o Cpf'),
    city: zod.string().min(1, 'Informe o Cpf'),
    uf: zod.string().min(1, 'Informe o Cpf'),
  })

  const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(addressForm),
  })

  const handleCreateNewBuy = async (data: any) => {
    setAddressUser(data)
  }

  console.log(addressUser)

  const consoleNow = () => {
    console.log(addressUser)
  }

  // const cep = watch('cep')
  // const road = watch('road')
  // const numberHouse = watch('numberHouse')
  // const complement = watch('complement')
  // const district = watch('district')
  // const city = watch('city')
  // const uf = watch('uf')

  return (
    <form onSubmit={handleSubmit(handleCreateNewBuy)}>
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
              <CepInput
                id="cep"
                // name="cep"
                placeholder="CEP"
                list="address"
                // onChange={(e) => setCep(e.target.value)}
                // value={cep}
                {...register('cep')}
              />
              <RoadInput
                id="road"
                // name="road"
                placeholder="Rua"
                list="address"
                // onChange={(e) => setRoad(e.target.value)}
                // value={road}
                {...register('road')}
              />
              <NumberAndComplementContainer>
                <NumberInput
                  id="numberHouse"
                  // name="numberHouse"
                  placeholder="Numero"
                  list="address"
                  // onChange={(e) => setNumberHouse(e.target.value)}
                  // value={numberHouse}
                  {...register('numberHouse')}
                />
                <ComplementInput
                  id="complement"
                  // name="complement"
                  placeholder="Complemento"
                  list="address"
                  // onChange={(e) => setComplement(e.target.value)}
                  // value={complement}
                  {...register('complement')}
                />
              </NumberAndComplementContainer>
              <DistrictCityUfContainer>
                <DistrictInput
                  id="district"
                  // name="district"
                  placeholder="Bairro"
                  list="address"
                  // onChange={(e) => setDistrict(e.target.value)}
                  // value={district}
                  {...register('district')}
                />
                <CityInput
                  id="city"
                  // name="city"
                  placeholder="Cidade"
                  list="address"
                  // onChange={(e) => setCity(e.target.value)}
                  // value={city}
                  {...register('city')}
                />
                <UFInput
                  id="uf"
                  // name="uf"
                  placeholder="UF"
                  list="address"
                  // onChange={(e) => setUf(e.target.value)}
                  // value={uf}
                  {...register('uf')}
                />
              </DistrictCityUfContainer>
            </InputsContainer>
          </DeliveryForm>
          {/* <FormOfPaymentContainer>
            <InstructionsContainer>
              <IconContainer>
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
            <ButtonsContainer>
              <CreditCardButton type="button">
                <CreditCard />
                CARTÃO DE CREDITO
              </CreditCardButton>
              <DebitCardButton type="button">
                <Bank />
                CARTÃO DE DEBITO
              </DebitCardButton>
              <MoneyButton type="button" onClick={consoleNow}>
                <Money />
                DINHEIRO
              </MoneyButton>
            </ButtonsContainer>
          </FormOfPaymentContainer> */}
          <FormOfPayment />
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
                  {activeCoffeeInfo.length > 0 ? (
                    <p>R$ 3,50</p>
                  ) : (
                    <p>R$ 0,00</p>
                  )}
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
                {/* {addressUser.road !== '' ? (
                  <NavLink to="/success">
                    <ConfirmationButton type="submit">
                      <h3>CONFIRMAR PEDIDO</h3>
                    </ConfirmationButton>
                  </NavLink>
                ) : (
                  <ConfirmationButton
                    type="submit"
                    // disabled={
                    //   !cep ||
                    //   !road ||
                    //   !numberHouse ||
                    //   !complement ||
                    //   !district ||
                    //   !city ||
                    //   !uf
                    // }
                  >
                    <h3>CONFIRMAR PEDIDO</h3>
                  </ConfirmationButton>
                )} */}
              </CoffeeBalanceContainer>
            </CoffeeAndBalance>
          </SelectedCoffees>
        </SelectedCoffeesContainer>
      </CheckoutContainer>
    </form>
  )
}
