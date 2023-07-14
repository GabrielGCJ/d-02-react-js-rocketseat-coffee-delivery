import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 0rem 10rem 0rem;

  width: 100%;

  @media screen and (max-width: 780px) {
    padding: 0% 7.22% 0%;
    flex-direction: column;

    font-size: 0.7rem;
  }

  @media screen and (max-width: 460px) {
    padding: 0% 5% 0%;
    flex-direction: column;
    font-size: 0.6rem;
  }

  @media screen and (max-width: 286px) {
    padding: 0% 2% 0%;
    flex-direction: column;
    font-size: 0.5rem;
  }
`

export const DeliveryFormContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const TextDeliveryForm = styled.div`
  font-family: 'Baloo 2';

  padding-bottom: 2rem;
`

export const DeliveryForm = styled.div`
  display: flex;
  flex-direction: column;

  padding: 40px;

  width: 40rem;

  background-color: ${(props) => props.theme['gray-300']};
`
export const InstructionsContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const IconContainer = styled.div`
  svg {
    color: ${(props) => props.theme['yellow-600']};
    height: 25px;
    width: 25px;
  }
`
export const TextInformations = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  gap: 0.5rem;
`

export const Text1 = styled.div`
  font-size: 17px;
  font-weight: 500;
`
export const Text2 = styled.div`
  font-size: 15px;
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const CepInput = styled.input``

export const RoadInput = styled.input``

export const NumberInput = styled.input``

export const ComplementInput = styled.input``

export const DistrictInput = styled.input``

export const CityInput = styled.input``

export const UFInput = styled.input``

// ---

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SelectedCoffees = styled.div`
  display: flex;

  width: 28rem;

  background: ${(props) => props.theme['gray-300']};

  padding: 40px;

  border-radius: 0 40px 0 40px;
`

export const CoffeeAndBalance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 28rem;
`

export const TextSelectedCoffees = styled.div`
  font-family: 'Baloo 2';

  padding-bottom: 2rem;
`

export const CoffeeBalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 23rem;
`

export const TotalItems = styled.div`
  display: flex;
  justify-content: space-between;
`

export const DeliveryValue = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TotalValue = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ConfirmationButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 368px;
  height: 46px;

  border-radius: 8px;

  font-size: 0.8rem;

  background-color: ${(props) => props.theme['yellow-600']};
  color: ${(props) => props.theme['gray-100']};
`
