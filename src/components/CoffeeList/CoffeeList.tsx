import { CoffeeData } from '../../data/CoffeeData'
import { Coffee } from '../Coffee/Coffee'
import {
  CoffeeListExternalContainer,
  CoffeeListInternalContainer,
} from './styled'

export const CoffeeList = () => {
  return (
    <CoffeeListExternalContainer>
      <CoffeeListInternalContainer>
        {CoffeeData.map((coffee) => {
          return <Coffee key={coffee.id} />
        })}
      </CoffeeListInternalContainer>
    </CoffeeListExternalContainer>
  )
}
