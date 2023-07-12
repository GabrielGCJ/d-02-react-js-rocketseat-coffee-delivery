import styled from 'styled-components'

export const SelectedCoffeeContainer = styled.div`
  background-color: red;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: center; */
  padding: 0.3rem;

  width: 368px;
  height: 80px;

  img {
    width: 4.5rem;
  }
`

export const ImgTitleButonsContainer = styled.div`
  background-color: blue;

  display: flex;
  justify-content: start;

  width: 255px;
  height: 64px;
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

  font-size: 0.8rem ;

  svg {
    color: ${(props) => props.theme['purple-600']};
    /* padding-right: 10px; */
  }
`

export const PriceContainer = styled.div`
  display: flex;
  font-size: 0.7rem;
  padding-bottom: 2.8rem;
  padding-left: 2rem;
  justify-content: end;
  align-items: end;
  /* position: absolute;
  top: 20px;
  left: 20px; */
`
