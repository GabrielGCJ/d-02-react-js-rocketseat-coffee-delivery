import { expressoTradicionalImg } from '../../assents'

import {
  ImgContainer,
  QuantityContainer,
  RemoveButtonContainer,
  SelectedCoffeeContainer,
  TitleAndButtonsContainer,
  TitleContainer,
} from './styles'

export const SelectedCoffee = () => {
  return (
    <SelectedCoffeeContainer>
      <ImgContainer>
        <img src={expressoTradicionalImg} alt="" />
      </ImgContainer>

      <TitleAndButtonsContainer>
        <TitleContainer>
          <p>Expresso Tradicional</p>
        </TitleContainer>
        <QuantityContainer>
          <button>-</button>
          <span id="valorContador">2</span>
          <button>+</button>
        </QuantityContainer>
        <RemoveButtonContainer>
          <p>remove</p>
        </RemoveButtonContainer>
      </TitleAndButtonsContainer>
    </SelectedCoffeeContainer>
  )
}
