import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  width: 100%;
  justify-content: space-between;
  padding: 0rem 10rem 0rem;

  @media screen and (max-width: 1222px) {
    align-items: center;
    flex-direction: column;
    padding: 0% 7.22% 0%;
    font-size: 0.7rem;
  }

  @media screen and (max-width: 460px) {
    align-items: center;
    flex-direction: column;
    padding: 0% 5% 0%;
    font-size: 0.6rem;
  }

  @media screen and (max-width: 286px) {
    align-items: center;
    flex-direction: column;
    padding: 0% 2% 0%;
    font-size: 0.5rem;
  }
`

const PrimaryContainers = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const DeliveryFormContainer = styled(PrimaryContainers)`
  max-width: 40rem;
`

export const DeliveryForm = styled.div`
  display: flex;
  background: ${(props) => props.theme['gray-300']};

  flex-direction: column;

  padding: 40px;

  border-radius: 5px;

  /* @media screen and (max-width: 1410px) and (min-width: 1333px) {
    width: 95%;
  } */
`

const TopText = styled.div`
  font-size: 1rem;
  font-family: 'Baloo 2';
  padding-bottom: 0.5rem;
`

export const TextDeliveryForm = styled(TopText)`
  width: 100%;
  max-width: 40rem;
`

export const InstructionsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const IconContainer = styled.div`
  display: flex;

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
  gap: 20px;

  padding-top: 30px;
`
const BaseInput = styled.input`
  background: ${(props) => props.theme['gray-400']};
  padding: 0 0.5rem;

  border: 1px solid ${(props) => props.theme['gray-500']};

  height: 42px;

  border-radius: 3px;
`

export const CepInput = styled(BaseInput)`
  display: flex;
  width: 35%;
`

export const RoadInput = styled(BaseInput)`
  display: flex;
  width: 100%;
`

export const NumberAndComplementContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

export const NumberInput = styled(BaseInput)`
  display: flex;
  width: 35%;
`

export const ComplementInput = styled(BaseInput)`
  display: flex;
  width: 65%;
`

export const DistrictCityUfContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

export const DistrictInput = styled(BaseInput)`
  display: flex;
  width: 35%;
`

export const CityInput = styled(BaseInput)`
  display: flex;
  width: 45%;
`

export const UFInput = styled(BaseInput)`
  display: flex;
  width: 20%;
`

// ---

export const SelectedCoffeesContainer = styled(PrimaryContainers)`
  align-items: flex-end;

  @media screen and (max-width: 1222px) {
    align-items: center;
  }
`

export const SelectedCoffees = styled.div`
  display: flex;
  background: ${(props) => props.theme['gray-300']};

  border-radius: 6px 44px;

  max-width: 28rem;
  width: 100%;
  padding: 40px;
  flex-direction: column;
`

export const CoffeeAndBalance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const TextSelectedCoffees = styled(TopText)`
  width: 100%;
  max-width: 28rem;
`

export const CoffeeBalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

const BalanceProps = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`

export const TotalItems = styled(BalanceProps)``

export const DeliveryValue = styled(BalanceProps)``

export const TotalValue = styled(BalanceProps)``

export const ConfirmationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: transparent;
  width: 100%;
  height: 46px;
  border-radius: 8px;
  font-size: 0.8rem;

  background-color: ${(props) => props.theme['yellow-600']};
  color: ${(props) => props.theme['gray-100']};

  :hover {
    color: ${(props) => props.theme['yellow-300']};
    background: ${(props) => props.theme['yellow-900']};
    transition: color 0.3s, background-color 0.5s;
  }

  /* @media screen and (max-width: 1410px) and (min-width: 1333px) {
    width: 300px;
  } */
`
export const Confirmation = styled.div`
  display: flex;
  width: 100%;
`
