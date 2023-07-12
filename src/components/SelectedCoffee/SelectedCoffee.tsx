import { Trash } from 'phosphor-react'
import { expressoTradicionalImg } from '../../assents'

import {
  ImgContainer,
  QuantityContainer,
  RemoveButtonContainer,
  SelectedCoffeeContainer,
  ButtonsContainer,
  TitleContainer,
  TitleAndButtonsContainer,
  PriceContainer,
  ImgTitleButonsContainer,
  TrashContainer,
} from './styles'

export const SelectedCoffee = () => {
  return (
    <SelectedCoffeeContainer>
      <ImgTitleButonsContainer>
        <ImgContainer>
          <img src={expressoTradicionalImg} alt="" />
        </ImgContainer>

        <TitleAndButtonsContainer>
          <TitleContainer>
            <p>Expresso Tradicional</p>
          </TitleContainer>

          <ButtonsContainer>
            <QuantityContainer>
              <button>-</button>
              <span id="valorContador">2</span>
              <button>+</button>
            </QuantityContainer>

            <RemoveButtonContainer>
              <TrashContainer>
                <Trash />
              </TrashContainer>
              <p>REMOVER</p>
            </RemoveButtonContainer>
          </ButtonsContainer>
        </TitleAndButtonsContainer>
      </ImgTitleButonsContainer>
      <PriceContainer>
        {/* <p>R$ 9,90</p> */}
        {/* <h2>{price.toFixed(2).replace('.', ',')}</h2> */}
        <h2>R$ 9,90</h2>
      </PriceContainer>
    </SelectedCoffeeContainer>
  )
}
