import styled from 'styled-components'

export const FormOfPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  width: 100%;
  margin-top: 15px;
  padding: 40px;
  border-radius: 5px;

  background-color: ${(props) => props.theme['gray-300']};

  @media screen and (max-width: 1410px) and (min-width: 1333px) {
    width: 95%;
  }
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

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding-top: 25px;

  @media screen and (max-width: 550px) {
    flex-direction: column;
    align-items: center;
  }
`

interface StyledButtonProps {
  isClicked: boolean
  // onClick: () => void
}

const BaseButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 230px;
  width: 100%;
  font-size: 0.7rem;
  border-radius: 5px;
  height: 51px;
  gap: 0.5rem;

  background: ${(props) =>
    props.isClicked ? props.theme['yellow-600'] : props.theme['gray-500']};

  color: ${(props) =>
    props.isClicked ? props.theme['purple-900'] : props.theme['gray-800']};

  border: 2px solid
    ${(props) =>
      props.isClicked ? props.theme['purple-600'] : props.theme['gray-500']};

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${(props) => props.theme['purple-600']};
  }

  :hover {
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['yellow-600']};
    transition: color 0.3s, background-color 0.5s;
  }

  :active {
    color: ${(props) => props.theme['purple-600']};
    background: ${(props) => props.theme['yellow-900']};
  }
`

export const CreditCardButton = styled(BaseButton)``

export const DebitCardButton = styled(BaseButton)``

export const MoneyButton = styled(BaseButton)``
