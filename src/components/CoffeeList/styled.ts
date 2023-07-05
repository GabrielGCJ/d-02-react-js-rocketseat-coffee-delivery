import styled from 'styled-components'

export const CoffeeListExternalContainer = styled.div`
  display: flex;
  align-items: center;

  background-color: red;

  padding: 1rem 10rem 0rem;

  width: 100%;

  @media screen and (max-width: 780px) {
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
export const CoffeeListInternalContainer = styled.div``

export const CoffeeText = styled.div`
  text-align: start;
  font-family: 'Baloo 2';
  font-size: 1rem;
  padding: 10px 0 30px 0;
`

export const AllCoffees = styled.div`
  background-color: blue;
  align-items: center;
  justify-content: center;

  display: grid;
  grid-template-columns: auto auto auto auto;
  row-gap: 32px;
  column-gap: 1rem;
  width: 100%;
`
