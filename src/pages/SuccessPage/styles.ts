import styled from 'styled-components'

export const SucessPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-between;
  height: 6.5rem;
  padding: 0rem 10rem 0rem;

  width: 100%;

  @media screen and (max-width: 780px) {
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
`

export const InformationsAndImg = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
`

export const DeliveryInformations = styled.div`
  display: flex;
  width: 526px;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  border: 1px solid red;

  /* border: 1px solid;
  border-image: linear-gradient(
    to right,
    ${(props) => props.theme['yellow-600']},
    ${(props) => props.theme['purple-600']}
  );
  border-image-slice: 1; */

  border-radius: 6px 36px;
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
