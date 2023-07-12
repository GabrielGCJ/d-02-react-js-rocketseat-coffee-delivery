import styled from 'styled-components'

export const SelectedCoffeeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.3rem;

  width: 23rem;
  height: 5rem;

  border-bottom: 2px solid ${(props) => props.theme['gray-500']};

  img {
    width: 4.5rem;
  }
`

export const ImgTitleButonsContainer = styled.div`
  display: flex;
  justify-content: start;

  width: 15.9375rem;
  height: 4rem;
`

export const ImgContainer = styled.div`
  display: flex;
  justify-content: start;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 0.4rem;
`

export const TitleAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  padding-left: 15px;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  justify-content: start;
  padding: 0.3rem;

  font-size: 1rem;
`

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 4.5rem;
  height: 2rem;
  border-radius: 8px;

  background-color: ${(props) => props.theme['gray-500']};

  span {
    padding: 0 0.7rem;
  }

  button {
    border: transparent;
    background-color: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme['purple-600']};
    font-size: 1.5rem;
  }
`

export const RemoveButtonContainer = styled.div`
  display: flex;
  width: 5.6875rem;
  height: 2rem;
  border-radius: 8px;
  background-color: ${(props) => props.theme['gray-500']};
  text-align: center;
  align-items: center;
  justify-content: center;

  font-size: 0.8rem;

  svg {
    color: ${(props) => props.theme['purple-600']};
    padding-left: 0.1rem;
  }
`

export const TrashContainer = styled.div`
  display: flex;
  padding-right: 0.25rem;
`

export const PriceContainer = styled.div`
  display: flex;
  font-size: 0.7rem;
  padding-bottom: 2.5rem;
  padding-left: 2.8rem;
`
