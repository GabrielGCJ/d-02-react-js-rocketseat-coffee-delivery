import shopImg from '../../assents/shoppingCartSimplePurple.svg'
import { coffeeDataType } from '../../data/coffeeData'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/CoffeeContext'

import {
  tag1tradicional,
  tag2especial,
  tag3comLeite,
  tag4alcoolico,
  tag5gelado,
} from '../../assents'

import {
  CoffeeExternalContainer,
  CoffeeInternalContainer,
  CoffeeTypeContaner,
  DescriptionContainer,
  PriceAndQuantityContainer,
  PriceContainer,
  QuantityContainer,
  ShoppingCarContainer,
  TagsContainer,
  TitleContainer,
} from './styles'

export const Coffee = ({
  id,
  img,
  name,
  tag1,
  tag2,
  tag3,
  tag4,
  tag5,
  text,
  price,
  quantity,
}: coffeeDataType) => {
  const { addCoffee, decreaseCoffee } = useContext(CoffeeContext)

  const handleDecreaseCoffee = () => {
    decreaseCoffee(id)
  }

  const handleAddCoffee = () => {
    addCoffee(id)
  }

  return (
    <CoffeeExternalContainer>
      <CoffeeInternalContainer>
        <CoffeeTypeContaner>
          <img src={img} alt="" />
        </CoffeeTypeContaner>
        <TagsContainer>
          {tag1 === true ? <img src={tag1tradicional} alt="" /> : null}
          {tag2 === true ? <img src={tag2especial} alt="" /> : null}
          {tag3 === true ? <img src={tag3comLeite} alt="" /> : null}
          {tag4 === true ? <img src={tag4alcoolico} alt="" /> : null}
          {tag5 === true ? <img src={tag5gelado} alt="" /> : null}
        </TagsContainer>
        <TitleContainer>
          <h2>{name}</h2>
        </TitleContainer>
        <DescriptionContainer>
          <p>{text}</p>
        </DescriptionContainer>
        <PriceAndQuantityContainer>
          <PriceContainer>
            <p>R$</p>
            <h2>{price.toFixed(2).replace('.', ',')}</h2>
          </PriceContainer>
          <QuantityContainer>
            <button onClick={handleDecreaseCoffee}>-</button>
            <span id="valorContador">{quantity}</span>
            <button onClick={handleAddCoffee}>+</button>
          </QuantityContainer>
          <ShoppingCarContainer>
            <img src={shopImg} alt="" />
          </ShoppingCarContainer>
        </PriceAndQuantityContainer>
      </CoffeeInternalContainer>
    </CoffeeExternalContainer>
  )
}
