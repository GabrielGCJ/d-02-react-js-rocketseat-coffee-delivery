import styled from 'styled-components'

export const CoffeeListExternalContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 10rem 0rem;
  width: 100%;

  @media screen and (max-width: 999px) {
    padding: 0% 7.22% 0%;
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
export const CoffeeListInternalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`

export const CoffeeText = styled.div`
  text-align: start;
  font-family: 'Baloo 2';
  font-size: 1rem;
  padding: 10px 0 30px 0;
`

export const AllCoffeesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 10px;
`

export const AllCoffees = styled.div`
  justify-content: start;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`
