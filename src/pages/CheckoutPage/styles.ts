import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 0rem 10rem 0rem;

  width: 100%;

  @media screen and (max-width: 1333px) {
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
`

export const DeliveryFormContainer = styled(PrimaryContainers)``

export const DeliveryForm = styled.div`
  display: flex;
  background: ${(props) => props.theme['gray-300']};

  flex-direction: column;

  padding: 40px;

  width: 40rem;

  border-radius: 5px;

  @media screen and (max-width: 1410px) and (min-width: 1333px) {
    width: 95%;
  }
`

const TopText = styled.div`
  font-family: 'Baloo 2';
  padding-bottom: 1rem;
`

export const TextDeliveryForm = styled(TopText)``

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
  display: inline;
  width: 200px;
`

export const RoadInput = styled(BaseInput)`
  display: block;
`

export const NumberAndComplementContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

export const NumberInput = styled(BaseInput)`
  width: 200px;
`

export const ComplementInput = styled(BaseInput)`
  width: 100%;
`

export const DistrictCityUfContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

export const DistrictInput = styled(BaseInput)`
  width: 200px;
`

export const CityInput = styled(BaseInput)`
  width: 100%;
`

export const UFInput = styled(BaseInput)`
  max-width: 60px;
`

export const FormOfPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 15px;
  padding: 40px;

  width: 40rem;

  background-color: ${(props) => props.theme['gray-300']};

  border-radius: 5px;

  @media screen and (max-width: 1410px) and (min-width: 1333px) {
    width: 95%;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  padding-top: 25px;
`

const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.7rem;

  background-color: ${(props) => props.theme['gray-500']};
  color: ${(props) => props.theme['gray-800']};
  border: transparent;
  border-radius: 5px;

  width: 100%;
  height: 51px;

  gap: 0.5rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${(props) => props.theme['purple-600']};
  }

  :hover {
    color: ${(props) => props.theme['purple-600']};
    background: ${(props) => props.theme['yellow-600']};
    transition: color 0.3s, background-color 0.5s;
  }
`

export const CreditCardButton = styled(BaseButton)``

export const DebitCardButton = styled(BaseButton)``

export const MoneyButton = styled(BaseButton)``

// ---

export const SelectedCoffeesContainer = styled(PrimaryContainers)``

export const SelectedCoffees = styled.div`
  display: flex;
  background: ${(props) => props.theme['gray-300']};

  border-radius: 6px 44px;

  width: 448px;
  padding: 40px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  @media screen and (max-width: 1410px) and (min-width: 1333px) {
    width: 90%;
  }
`

export const CoffeeAndBalance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1410px) and (min-width: 1333px) {
    width: 100%;
  }
`

export const TextSelectedCoffees = styled(TopText)``

export const CoffeeBalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 1410px) and (min-width: 1333px) {
    width: 100%;
  }
`

const BalanceProps = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TotalItems = styled(BalanceProps)``

export const DeliveryValue = styled(BalanceProps)``

export const TotalValue = styled(BalanceProps)``

export const ConfirmationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: transparent;

  width: 368px;
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

  @media screen and (max-width: 1410px) and (min-width: 1333px) {
    width: 300px;
  }
`
