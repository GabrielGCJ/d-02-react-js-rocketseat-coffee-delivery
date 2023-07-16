import styled from 'styled-components'

export const CoffeeExternalContainer = styled.div``

export const CoffeeInternalContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;

  border-radius: 0px 30px 0px 30px;

  width: 16rem;
  height: 19.375rem;

  background: ${(props) => props.theme['gray-300']};
`

export const CoffeeTypeContaner = styled.div`
  margin-top: calc(0px - 16px - 6px);
  img {
    width: 7.5rem;
  }
`

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    padding: 0 0.2rem;
  }
`

export const TitleContainer = styled.div`
  text-align: center;
  font-family: 'Baloo 2';
  font-size: 0.9375rem;
  line-height: 1.2;
  padding: 0.875rem 0;
`

export const DescriptionContainer = styled.div`
  font-size: 0.875rem;
  text-align: center;
  padding-bottom: 2.5rem;
  width: 13.5rem;
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

  padding-right: 0.625rem;
`

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  cursor: default;
  width: 4.5rem;
  height: 2.375rem;
  border-radius: 8px;

  background-color: ${(props) => props.theme['gray-500']};

  span {
    padding: 0 0.5rem;
    user-select: none;
  }

  button {
    border: transparent;
    background-color: ${(props) => props.theme['gray-500']};
  }
`

export const ShoppingCarContainer = styled.div`
  display: flex;
  align-items: center;

  padding-left: 0.625rem;
`
