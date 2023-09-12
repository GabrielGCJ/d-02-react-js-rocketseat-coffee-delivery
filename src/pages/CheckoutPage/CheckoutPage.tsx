import { useContext, useEffect } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { DeliveryValuePay } from '../../data/coffeeData'
import { MapPinLine } from 'phosphor-react'
// import { NavLink } from 'react-router-dom'
import { FormOfPayment } from './components/FormOfPayment/FormOfPayment'
import { SelectedCoffee } from './components/SelectedCoffee/SelectedCoffee'

import { useNavigate } from 'react-router'

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
  ConfirmationButton,
  Confirmation,
} from './styles'

export const CheckoutPage = () => {
  const {
    activeCoffeeInfo,
    totalPay,
    setAddressUser,
    addressUser,
    formOfPayment,
  } = useContext(CoffeeContext)

  const addressForm = zod.object({
    cep: zod.string().min(8, 'Informe o CPF'),
    road: zod.string().min(1, 'Informe a rua'),
    numberHouse: zod.string().min(1, 'Informe o numero da casa'),
    // complement: zod.string().min(1, 'Informe o Cpf'),
    district: zod.string().min(1, 'Informe o bairro'),
    city: zod.string().min(1, 'Informe a cidade'),
    uf: zod.string().min(1, 'Informe o estado'),
  })

  const {
    register,
    handleSubmit,
    // ,watch
  } = useForm({
    resolver: zodResolver(addressForm),
  })

  const handleCreateNewBuy = async (data: any) => {
    setAddressUser(data)

    // <NavLink to="/success" />
  }

  console.log(addressUser)

  // const consoleNow = () => {
  //   console.log(addressUser)
  // }

  // const cep = watch('cep')
  // const road = watch('road')
  // const numberHouse = watch('numberHouse')
  // const complement = watch('complement')
  // const district = watch('district')
  // const city = watch('city')
  // const uf = watch('uf')

  const navigate = useNavigate()

  const goToSuccessPage = () => {
    if (addressUser.road !== '') {
      setTimeout(() => {
        navigate('/success')
      }, 2000) // 2000 milissegundos = 2 segundos
    }
  }

  useEffect(() => {
    goToSuccessPage()
  }, [addressUser, goToSuccessPage])

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
                required
              />
              <RoadInput
                id="road"
                // name="road"
                placeholder="Rua"
                list="address"
                // onChange={(e) => setRoad(e.target.value)}
                // value={road}
                {...register('road')}
                required
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
                  required
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
                  required
                />
                <CityInput
                  id="city"
                  // name="city"
                  placeholder="Cidade"
                  list="address"
                  // onChange={(e) => setCity(e.target.value)}
                  // value={city}
                  {...register('city')}
                  required
                />
                <UFInput
                  id="uf"
                  // name="uf"
                  placeholder="UF"
                  list="address"
                  // onChange={(e) => setUf(e.target.value)}
                  // value={uf}
                  {...register('uf')}
                  required
                />
              </DistrictCityUfContainer>
            </InputsContainer>
          </DeliveryForm>
          <FormOfPayment />
          {/* <NewComponent /> */}
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
                {addressUser.road !== '' && formOfPayment !== '' ? (
                  // <NavLink to="/success">
                  <Confirmation>
                    <ConfirmationButton type="submit">
                      <h3>CONFIRMAR PEDIDO</h3>
                    </ConfirmationButton>
                  </Confirmation>
                ) : (
                  // </NavLink>;
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
                )}
              </CoffeeBalanceContainer>
            </CoffeeAndBalance>
          </SelectedCoffees>
        </SelectedCoffeesContainer>
      </CheckoutContainer>
    </form>
  )
}
