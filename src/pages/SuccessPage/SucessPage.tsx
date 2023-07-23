import { useContext } from 'react'
import location from '../../assents/IconLocationSucessPage.svg'
import timer from '../../assents/IconTimerSucessPage.svg'
import cash from '../../assents/IconCashSucessPage.svg'

import {
  DeliveryInformations,
  FormOfPaymentInformationContainer,
  InformationsAndImg,
  LocationInformationContainer,
  SucessPageContainer,
  TextContainer,
  TextInformation,
  TimerInformationContainer,
} from './styles'
import ilustration from '../../assents/Illustration.svg'
import { CoffeeContext } from '../../contexts/CoffeeContext'

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
            <img src={location} alt="" />
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
            <img src={timer} alt="" />
            <TextInformation>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </TextInformation>
          </TimerInformationContainer>
          <FormOfPaymentInformationContainer>
            <img src={cash} alt="" />
            <TextInformation>
              <p>Pagamento na entrega</p>
              <p>
                <strong>{formOfPayment}</strong>
              </p>
            </TextInformation>
          </FormOfPaymentInformationContainer>
        </DeliveryInformations>

        <img src={ilustration} alt="" />
      </InformationsAndImg>
    </SucessPageContainer>
  )
}
