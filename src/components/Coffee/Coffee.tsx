import coffeTradicional from '../../assents/coffee-types/expresso-tradicional.svg'
import traditionalTag from '../../assents/coffee-tags/tag1-tradicional.svg'
import geladoTag from '../../assents/coffee-tags/tag2-gelado.svg'

import {
  CoffeeExternalContainer,
  CoffeeInternalContainer,
  DescriptionContainer,
  PriceAndQuantityContainer,
  TagsContainer,
  TitleContainer,
} from './styles'

export const Coffee = () => {
  return (
    <CoffeeExternalContainer>
      <CoffeeInternalContainer>
        <img src={coffeTradicional} alt="" />
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
          
        </PriceAndQuantityContainer>
      </CoffeeInternalContainer>
    </CoffeeExternalContainer>
  )
}
