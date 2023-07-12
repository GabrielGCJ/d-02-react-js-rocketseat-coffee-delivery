import styled from 'styled-components'

export const SelectedCoffeeContainer = styled.div`
  background-color: red;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 23rem;
  height: 5rem;

  img {
    width: 4.5rem;
  }
`

export const ImgTitleButonsContainer = styled.div`
  display: flex;
`

// export const ImgContainer = styled.div``

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
`

export const TitleAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TitleContainer = styled.div`
  display: flex;
  padding: 0.3rem;

  font-size: 1.2rem;
`

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  /* padding-right: 20px; */

  width: 72px;
  height: 32px;
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
  width: 91px;
  height: 32px;
  border-radius: 8px;
  background-color: ${(props) => props.theme['gray-500']};
  text-align: center;
  align-items: center;
  justify-content: center;
`

export const PriceContainer = styled.div`
  /* display: flex; */
  /* flex-direction: row; */
  padding-bottom: 2.5rem;
`
