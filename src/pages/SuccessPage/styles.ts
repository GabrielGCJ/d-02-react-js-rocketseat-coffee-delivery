import styled from 'styled-components'

export const SucessPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  height: 6.5rem;
  padding: 0rem 10rem 0rem;

  width: 100%;

  @media screen and (max-width: 999px) {
    padding: 0% 7.22% 0%;
    font-size: 0.7rem;
  }

  @media screen and (max-width: 460px) {
    padding: 0% 5% 0%;
    font-size: 0.6rem;
  }

  @media screen and (max-width: 286px) {
    padding: 0% 2% 0%;
    font-size: 0.5rem;
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 80px 0 40px 0;

  h1 {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['yellow-900']};
  }

  @media screen and (max-width: 780px) {
    padding: 1px 0 20px 0;
  }
`

export const InformationsAndImg = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  @media screen and (max-width: 650px) {
    flex-direction: column-reverse;
  }
`

export const IlustrationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 526px;
  width: 100%;

  img {
    width: 100%;
  }
`

export const DeliveryInformations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-width: 32.875rem;
  width: 100%;
  padding: 2.5rem;

  background-color: ${(props) => props.theme['gray-300']};

  gap: 2rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`

const PaymentInformations = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;

  img {
    padding-right: 10px;
  }
`

export const LocationInformationContainer = styled(PaymentInformations)``

export const TimerInformationContainer = styled(PaymentInformations)``

export const FormOfPaymentInformationContainer = styled(PaymentInformations)``

export const TextInformation = styled(PaymentInformations)`
  display: flex;
  flex-direction: column;
  align-items: start;
`
