import styled from 'styled-components'

export const CoffeeExternalContainer = styled.div``

export const CoffeeInternalContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;

  border-radius: 0px 30px 0px 30px;

  width: 256px;
  height: 310px;

  /* background: ${(props) => props.theme['gray-300']}; */
  background: red;
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    padding: 0rem 0.2rem;
  }
`

export const TitleContainer = styled.div`
  text-align: center;
  font-family: 'Baloo 2';
  font-size: 1vw;
  line-height: 1.2;
`

export const DescriptionContainer = styled.div`
  font-size: 1vw;
  text-align: center;
`

export const PriceAndQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: last baseline;
`

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 72px;
  height: 38px;
  border-radius: 8px;

  background-color: ${(props) => props.theme['gray-500']};

  span {
    padding: 0rem 0.5rem;
  }

  button {
    border: transparent;
    background-color: ${(props) => props.theme['gray-500']};
  }
`

export const ShoppingCarContainer = styled.div`
  display: flex;
  align-items: center ;
`
