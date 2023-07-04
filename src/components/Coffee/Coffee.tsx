import coffeTradicional from '../../assents/coffee-types/expresso-tradicional.svg'
import traditionalTag from '../../assents/coffee-tags/tag1-tradicional.svg'
import geladoTag from '../../assents/coffee-tags/tag2-gelado.svg'
import shopImg from '../../assents/shoppingCartSimplePurple.svg'

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

export const Coffee = () => {
  return (
    <CoffeeExternalContainer>
      <CoffeeInternalContainer>
        <CoffeeTypeContaner>
          <img src={coffeTradicional} alt="" />
        </CoffeeTypeContaner>
        <TagsContainer>
          <img src={traditionalTag} alt="" />
          <img src={geladoTag} alt="" />
          <img src={geladoTag} alt="" />
        </TagsContainer>
        <TitleContainer>
          <h2>Expresso Tradicional</h2>
        </TitleContainer>
        <DescriptionContainer>
          <p>O tradicional café feito com água quente e grãos moídos</p>
        </DescriptionContainer>
        <PriceAndQuantityContainer>
          <PriceContainer>
            <p>R$</p>
            <h2>9,90</h2>
          </PriceContainer>
          <QuantityContainer>
            <button>-</button>
            <span id="valorContador">0</span>
            <button>+</button>
          </QuantityContainer>
          <ShoppingCarContainer>
            <img src={shopImg} alt="" />
          </ShoppingCarContainer>
        </PriceAndQuantityContainer>
      </CoffeeInternalContainer>
    </CoffeeExternalContainer>
  )
}
