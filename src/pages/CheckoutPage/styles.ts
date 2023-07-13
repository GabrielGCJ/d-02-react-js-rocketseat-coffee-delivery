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
`

export const TextDeliveryForm = styled.div`
  font-family: 'Baloo 2';
`

export const DeliveryForm = styled.div`
  display: flex;
`

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
