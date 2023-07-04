import { CoffeeContainer, TagsContainer } from './styles'
import coffeTradicional from '../../assents/coffee-types/expresso-tradicional.svg'
export const Coffee = () => {
  return (
    <CoffeeContainer>
      <img src={coffeTradicional} alt="" />
      <TagsContainer></TagsContainer>
    </CoffeeContainer>
  )
}
