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

  background: ${(props) => props.theme['gray-300']};
`

export const CoffeeTypeContaner = styled.div`
  margin-top: calc(0px - 16px - 6px);
  img {
    width: 120px;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    padding: 0 3.2px;
  }
`

export const TitleContainer = styled.div`
  text-align: center;
  font-family: 'Baloo 2';
  font-size: 15px;
  line-height: 1.2;
  padding: 14px 0;
`

export const DescriptionContainer = styled.div`
  font-size: 14px;
  text-align: center;
  padding-bottom: 40px;
  width: 216px;
  color: ${(props) => props.theme['gray-700']};
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

  padding-right: 10px;
`

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  /* padding: 20px; */

  width: 72px;
  height: 38px;
  border-radius: 8px;

  background-color: ${(props) => props.theme['gray-500']};

  span {
    padding: 0 8px;
  }

  button {
    border: transparent;
    background-color: ${(props) => props.theme['gray-500']};
  }
`

export const ShoppingCarContainer = styled.div`
  display: flex;
  align-items: center;

  padding-left: 10px;
`
