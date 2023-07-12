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

export const DeliveryFormContainer = styled.div``

export const DeliveryForm = styled.div``

export const TextDeliveryForm = styled.div``

export const SelectedCoffeesContainer = styled.div``

export const SelectedCoffees = styled.div``

export const TextSelectedCoffees = styled.div``
