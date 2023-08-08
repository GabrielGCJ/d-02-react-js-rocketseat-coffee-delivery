import { useContext } from 'react'
import { CoffeeContext } from '../../../../contexts/CoffeeContext'
import { Trash } from 'phosphor-react'

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
  SelectedCoffeeExternalContainer,
} from './styles'
// import { CoffeeContext } from '../../contexts/CoffeeContext'

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
  const { deleteCoffee, addCoffee, decreaseCoffee } = useContext(CoffeeContext)

  const handleAddCoffee = () => {
    addCoffee(id)
  }

  const handleDecreaseCoffee = () => {
    decreaseCoffee(id)
  }

  const handleDeleteCoffee = () => {
    deleteCoffee(id)
  }

  return (
    <SelectedCoffeeExternalContainer>
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
                <button onClick={handleDecreaseCoffee}>-</button>
                <span id="quantity">{quantity}</span>
                <button onClick={handleAddCoffee}>+</button>
              </QuantityContainer>

              <RemoveButtonContainer onClick={handleDeleteCoffee}>
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
    </SelectedCoffeeExternalContainer>
  )
}