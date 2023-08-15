import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

import {
  DeliveryInformations,
  FormOfPaymentInformationContainer,
  IlustrationContainer,
  InformationsAndImg,
  LocationInformationContainer,
  SucessPageContainer,
  TextContainer,
  TextInformation,
  TimerInformationContainer,
} from './styles'

import {
  iconCash,
  iconLocationSucessPage,
  iconTimer,
  ilustration,
} from '../../assents'

export const SuccessPage = () => {
  const { addressUser, formOfPayment } = useContext(CoffeeContext)
  return (
    <SucessPageContainer>
      <TextContainer>
        <h1>Uhu! Pedido Confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </TextContainer>
      <InformationsAndImg>
        <DeliveryInformations>
          <LocationInformationContainer>
            <img src={iconLocationSucessPage} alt="" />
            <TextInformation>
              <p>
                Entrega em{' '}
                <strong>
                  {addressUser.road}, {addressUser.numberHouse}{' '}
                </strong>
              </p>
              <p>
                {addressUser.district} - {addressUser.city}, {addressUser.uf}
              </p>
            </TextInformation>
          </LocationInformationContainer>
          <TimerInformationContainer>
            <img src={iconTimer} alt="" />
            <TextInformation>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </TextInformation>
          </TimerInformationContainer>
          <FormOfPaymentInformationContainer>
            <img src={iconCash} alt="" />
            <TextInformation>
              <p>Pagamento na entrega</p>
              <p>
                <strong>{formOfPayment}</strong>
              </p>
            </TextInformation>
          </FormOfPaymentInformationContainer>
        </DeliveryInformations>
        <IlustrationContainer>
          <img src={ilustration} alt="" />
        </IlustrationContainer>
      </InformationsAndImg>
    </SucessPageContainer>
  )
}
