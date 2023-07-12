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
import { coffeeDataType } from '../../data/coffeeData'

interface SelectedCoffeeType {
  id: string
  img: any
  name: string
  price: number
  quantity: number
}

export const SelectedCoffee = ({
  id,
  img,
  name,
  price,
  quantity,
}: SelectedCoffeeType) => {
  return (
    <SelectedCoffeeContainer>
      <ImgTitleButonsContainer>
        <ImgContainer>
          <img src={img} alt="" />
        </ImgContainer>

        <TitleAndButtonsContainer>
          <TitleContainer>
            <p>{name}</p>
          </TitleContainer>

          <ButtonsContainer>
            <QuantityContainer>
              <button>-</button>
              <span id="quantity">{quantity}</span>
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
        <h2>{`R$ ${price.toFixed(2).replace('.', ',')}`}</h2>
      </PriceContainer>
    </SelectedCoffeeContainer>
  )
}
